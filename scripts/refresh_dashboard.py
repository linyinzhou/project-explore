#!/usr/bin/env python3
"""Refresh dashboard rankings and write a sourced weekly report."""

from __future__ import annotations

import json
import os
import re
import sys
from datetime import datetime, timezone
from pathlib import Path
from zoneinfo import ZoneInfo

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from github_radar import Repository, fetch_top_repositories, fetch_trending_repositories


DASHBOARD_APP = ROOT / "dashboard" / "app.js"
REPORTS_DIR = ROOT / "reports"
DATA_START = "// GENERATED DATA START"
DATA_END = "// GENERATED DATA END"

DEFAULT_RISK = "采用前需核实许可证、安全策略、维护活跃度、版本兼容性和生产环境支持情况。"

# Only publicly verifiable products, official sites, showcases, and named downstream users belong here.
# New repositories deliberately fall back to an unverified label instead of receiving an invented case.
CASE_REGISTRY: dict[str, dict[str, object]] = {
    "public-apis/public-apis": {
        "type": "官方项目",
        "url": "https://github.com/public-apis/public-apis",
        "verified": True,
        "example": "Public APIs 仓库本身是实际运行的公共 API 目录；未找到可归因到该目录的具名第三方产品。",
    },
    "harry0703/MoneyPrinterTurbo": {
        "type": "官方产品与 Gallery",
        "url": "https://github.com/harry0703/MoneyPrinterTurbo",
        "verified": True,
        "example": "官方 WebUI、API 与 CLI 已实际提供短视频生成，README Gallery 展示了多条由该工具生成的成片。",
    },
    "cathrynlavery/diagram-design": {
        "type": "官方 Live Gallery",
        "url": "https://cathrynlavery.github.io/diagram-design/",
        "verified": True,
        "example": "Diagram Design Live Gallery 实际展示架构图、流程图、时序图、ER 图和甘特图等静态 HTML/SVG 成品。",
    },
    "AprilNEA/OpenLogi": {
        "type": "官方桌面应用",
        "url": "https://github.com/AprilNEA/OpenLogi",
        "verified": True,
        "example": "OpenLogi 是可安装的跨平台桌面应用，用于配置 Logitech 设备按键、DPI、SmartShift 和应用配置文件。",
    },
    "cordiverse/cordis": {
        "type": "真实下游产品",
        "url": "https://deepseek.com/harness/en/",
        "verified": True,
        "example": "DeepSeek Harness 是公开的真实下游产品，其模型、工具、文件访问、Agent Loop 和 Web UI 能力均作为 Cordis 插件挂载。",
    },
    "volcengine/OpenViking": {
        "type": "官方产品集成",
        "url": "https://openviking.ai/integrations",
        "verified": True,
        "example": "OpenViking 已提供 Codex、Claude Code、OpenClaw、Cursor、DeepSeek Harness 等正式集成，Hermes Agent 将其作为内置记忆提供器。",
    },
    "unslothai/unsloth": {
        "type": "官方桌面应用",
        "url": "https://github.com/unslothai/unsloth",
        "verified": True,
        "example": "Unsloth Studio / Desktop 可在本机下载、运行、训练和微调模型，并提供 OpenAI 兼容接口。",
    },
    "cactus-compute/needle": {
        "type": "官方引擎集成",
        "url": "https://docs.cactuscompute.com/",
        "verified": True,
        "example": "Cactus Engine 已把 Needle 作为可直接运行的设备端模型，项目同时提供本地 Playground。",
    },
    "semantica-agi/semantica": {
        "type": "官方产品",
        "url": "https://github.com/semantica-agi/semantica",
        "verified": True,
        "example": "Semantica 提供 Python 包、Knowledge Explorer、CLI、REST API 和 MCP Server；未找到具名客户案例。",
    },
    "basecamp/omarchy": {
        "type": "官方发行版",
        "url": "https://omarchy.org/",
        "verified": True,
        "example": "Omarchy 是已发布 ISO、安装程序和用户手册的 Linux 发行版，由 37signals 孵化。",
    },
    "codecrafters-io/build-your-own-x": {
        "type": "未找到公开案例",
        "url": "https://github.com/codecrafters-io/build-your-own-x",
        "verified": False,
        "example": "未找到可公开核实的第三方网站或 App 声明由该仓库构建；它本身是教程索引。",
    },
    "sindresorhus/awesome": {
        "type": "官方网站",
        "url": "https://awesome.re",
        "verified": True,
        "example": "awesome.re 是该项目的官方入口网站，提供跨主题 Awesome Lists 导航。",
    },
    "freeCodeCamp/freeCodeCamp": {
        "type": "官方网站",
        "url": "https://www.freecodecamp.org/",
        "verified": True,
        "example": "freeCodeCamp.org 由该代码库实际运行，提供互动编码挑战、课程和认证项目。",
    },
    "EbookFoundation/free-programming-books": {
        "type": "官方搜索 App",
        "url": "https://ebookfoundation.github.io/free-programming-books-search/",
        "verified": True,
        "example": "Free Programming Books Search 是该仓库发布的搜索 Web App，可检索多语言免费编程资源。",
    },
    "openclaw/openclaw": {
        "type": "官方 Showcase",
        "url": "https://docs.openclaw.ai/start/showcase",
        "verified": True,
        "example": "官方 Showcase 收录 Vienna 公共交通查询、Oura 健康助手、Bambu 3D 打印机控制等具名社区项目。",
    },
    "donnemartin/system-design-primer": {
        "type": "未找到公开案例",
        "url": "https://github.com/donnemartin/system-design-primer",
        "verified": False,
        "example": "未找到可公开核实的网站或 App 声明以该仓库作为产品依赖；它是系统设计学习资源。",
    },
    "nilbuild/developer-roadmap": {
        "type": "官方网站",
        "url": "https://roadmap.sh/",
        "verified": True,
        "example": "roadmap.sh 是该仓库对应的真实 Web 产品，提供互动路线、项目题目、测试题和学习进度。",
    },
    "jwasham/coding-interview-university": {
        "type": "未找到公开案例",
        "url": "https://github.com/jwasham/coding-interview-university",
        "verified": False,
        "example": "未找到可公开核实的第三方工具或网站以该仓库作为产品依赖；项目本身是面试自学计划。",
    },
    "vinta/awesome-python": {
        "type": "官方网站",
        "url": "https://awesome-python.com/",
        "verified": True,
        "example": "awesome-python.com 是该仓库的真实网站，可按类别浏览 Python 框架、库和工具。",
    },
}


def case_for(repository: Repository) -> dict[str, object]:
    return CASE_REGISTRY.get(
        repository.full_name,
        {
            "type": "未找到公开案例",
            "url": repository.url,
            "verified": False,
            "example": "本次自动刷新未找到可公开核实的真实网站、App、下游产品或第三方采用案例。",
        },
    )


def repository_record(repository: Repository, rank: int, include_weekly: bool) -> dict[str, object]:
    case = case_for(repository)
    record: dict[str, object] = {
        "rank": rank,
        "owner": repository.full_name.split("/", 1)[0],
        "name": repository.full_name.split("/", 1)[1],
        "url": repository.url,
        "language": repository.language or "未注明",
        "stars": repository.stars,
        "purpose": repository.description or "项目未提供公开描述，具体用途需查看 README。",
        "example": case["example"],
        "risk": DEFAULT_RISK,
    }
    if include_weekly:
        record["weekly"] = repository.growth_stars or 0
    return record


def js_value(value: object) -> str:
    return json.dumps(value, ensure_ascii=False, indent=2)


def render_data_block(
    trending: list[Repository], most_starred: list[Repository], generated_date: str
) -> str:
    trending_records = [repository_record(repo, index, True) for index, repo in enumerate(trending, 1)]
    starred_records = [repository_record(repo, index, False) for index, repo in enumerate(most_starred, 1)]
    visible_names = {repo.full_name for repo in [*trending, *most_starred]}
    cases = {
        name: {
            "type": CASE_REGISTRY[name]["type"],
            "url": CASE_REGISTRY[name]["url"],
            "verified": CASE_REGISTRY[name]["verified"],
        }
        for name in sorted(visible_names & CASE_REGISTRY.keys())
    }
    return "\n".join(
        [
            DATA_START,
            f"const dashboardGeneratedAt = {js_value(generated_date)};",
            f"const trendingRepositories = {js_value(trending_records)};",
            f"const mostStarredRepositories = {js_value(starred_records)};",
            f"const verifiedCases = {js_value(cases)};",
            DATA_END,
        ]
    )


def replace_data_block(app_text: str, data_block: str) -> str:
    pattern = rf"{re.escape(DATA_START)}.*?{re.escape(DATA_END)}"
    updated, replacements = re.subn(pattern, data_block, app_text, flags=re.DOTALL)
    if replacements != 1:
        raise RuntimeError("dashboard/app.js must contain exactly one generated data block")
    return updated


def markdown_row(repository: Repository, rank: int, include_weekly: bool) -> str:
    case = case_for(repository)
    growth = f" | +{repository.growth_stars or 0:,}" if include_weekly else ""
    return (
        f"| {rank} | [{repository.full_name}]({repository.url}) | {repository.stars:,}{growth} | "
        f"{repository.description or 'No public description.'} | {case['type']}: {case['example']} "
        f"([source]({case['url']})) |"
    )


def render_report(
    trending: list[Repository], most_starred: list[Repository], generated_at: datetime
) -> str:
    date = generated_at.astimezone().date().isoformat()
    lines = [
        f"# GitHub Project Report — {date}",
        "",
        "> Weekly growth ranks GitHub Trending candidates, not every repository on GitHub.",
        "> Cases require a public source. Missing evidence is reported instead of inferred.",
        "",
        "## Weekly Trending Top 10",
        "",
        "| # | Repository | Stars | Weekly gain | Purpose | Verified application / product |",
        "|---:|---|---:|---:|---|---|",
    ]
    lines.extend(markdown_row(repo, index, True) for index, repo in enumerate(trending, 1))
    lines.extend(
        [
            "",
            "## Most Starred Top 10",
            "",
            "| # | Repository | Stars | Purpose | Verified application / product |",
            "|---:|---|---:|---|---|",
        ]
    )
    for index, repo in enumerate(most_starred, 1):
        case = case_for(repo)
        lines.append(
            f"| {index} | [{repo.full_name}]({repo.url}) | {repo.stars:,} | "
            f"{repo.description or 'No public description.'} | {case['type']}: {case['example']} "
            f"([source]({case['url']})) |"
        )
    return "\n".join(lines).rstrip() + "\n"


def main() -> int:
    token = os.getenv("GITHUB_TOKEN")
    generated_at = datetime.now(timezone.utc).astimezone(ZoneInfo("Asia/Shanghai"))
    generated_date = generated_at.date().isoformat()
    trending = fetch_trending_repositories("weekly", None, 10, token)
    most_starred = fetch_top_repositories(None, 10, token)
    if len(trending) != 10 or len(most_starred) != 10:
        raise RuntimeError(
            f"expected two complete top tens, got trending={len(trending)} starred={len(most_starred)}"
        )

    app_text = DASHBOARD_APP.read_text(encoding="utf-8")
    data_block = render_data_block(trending, most_starred, generated_date)
    DASHBOARD_APP.write_text(replace_data_block(app_text, data_block), encoding="utf-8")

    REPORTS_DIR.mkdir(parents=True, exist_ok=True)
    report_path = REPORTS_DIR / f"{generated_date}-weekly.md"
    report_path.write_text(render_report(trending, most_starred, generated_at), encoding="utf-8")
    print(f"updated {DASHBOARD_APP.relative_to(ROOT)} and {report_path.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
