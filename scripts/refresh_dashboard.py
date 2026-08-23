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

# These are reviewed Chinese explanations, not literal machine translations of GitHub descriptions.
# A repository without an entry stays visibly pending so the weekly job never invents its purpose.
PURPOSE_ZH_REGISTRY: dict[str, str] = {
    "harry0703/MoneyPrinterTurbo": (
        "一套开源的 AI 短视频自动生产工具。输入主题或关键词后，它可调用大模型生成文案和素材检索词，"
        "从公开视频素材站或本地素材匹配画面，再生成配音、字幕和背景音乐并合成为横屏或竖屏视频。"
        "项目提供 WebUI、REST API、命令行和 Docker 等使用方式，适合搭建需要人工复核事实与素材版权的批量视频工作流。"
    ),
    "public-apis/public-apis": (
        "一个由社区维护的公共 API 分类目录，而不是代替各服务商转发请求的统一 API 网关。"
        "它按动物、图书、天气、金融等领域收录接口，并标注认证方式、HTTPS 和 CORS 支持情况，"
        "方便开发者为原型或正式产品寻找可接入的数据与功能；配额、稳定性和商用条款仍需到对应服务商核实。"
    ),
    "cathrynlavery/diagram-design": (
        "一套供 Claude Code、Codex、Pi 等编码代理调用的图表设计技能。它根据内容和视觉要求生成可编辑的独立 HTML 与 SVG，"
        "覆盖架构图、流程图、时序图、ER 图、时间线和甘特图等多种版式，也可重绘 Mermaid 或 draw.io 图。"
        "它解决的是图表的结构与视觉表达问题，不会替代人工核对图中的技术事实。"
    ),
    "AprilNEA/OpenLogi": (
        "一款本地优先、跨 Windows、macOS 和 Linux 的 Logitech 外设配置应用，目标是提供 Logitech Options+ 的开源替代方案。"
        "它可通过 HID++ 管理按键映射、鼠标 DPI、SmartShift、灯光以及按应用切换的配置文件，且不要求 Logitech 账户。"
        "不同型号和操作系统的功能覆盖并不完全相同，采用前需要核对兼容设备列表。"
    ),
    "volcengine/OpenViking": (
        "面向 AI Agent 的上下文数据库，把长期记忆、知识资料和技能组织成可导航的虚拟文件系统。"
        "它通过分层加载、检索、会话捕获与提交机制，让 Agent 在多次会话之间复用必要上下文，并提供服务端、CLI、SDK 和 MCP 接口。"
        "官方还提供 Codex、Claude Code、OpenClaw、Cursor、DeepSeek Harness 等集成，适合需要统一管理 Agent 上下文的工程。"
    ),
    "cordiverse/cordis": (
        "一个以 TypeScript 编写的插件元框架和运行时，用 Context、Service、依赖注入、类型事件及生命周期管理来组合可插拔能力。"
        "DeepSeek Harness 将模型适配器、工具、文件访问、Agent Loop、存储和界面都组织为 Cordis 插件，"
        "因此它主要服务于需要替换、扩展或动态装卸模块的框架开发者，而不是可直接使用的终端应用。"
    ),
    "basecamp/omarchy": (
        "由 37signals 孵化、基于 Arch Linux 的强观点开发者发行版与配置系统。它预装并统一配置 Hyprland、终端、编辑器、浏览器、"
        "截图、剪贴板和 AI 编程工具，通过 ISO、安装脚本和手册快速搭建一致的键盘优先开发环境。"
        "它强调预设工作流，未必适合需要保守更新策略或大量自定义桌面组件的用户。"
    ),
    "akitaonrails/ai-memory": (
        "一个为 AI 编程代理提供跨会话、跨客户端长期记忆的独立 Rust 服务。它通过 MCP 和生命周期钩子自动记录提示、工具调用与决策，"
        "在会话结束后整理成以 Git 管理的 Markdown 知识库，并在下一次 Claude Code、Codex、Cursor、OpenCode 等会话开始时注入交接摘要。"
        "SQLite 仅作为全文检索和索引层，Markdown 才是可人工编辑、可备份和可审计的事实来源。"
    ),
    "semantica-agi/semantica": (
        "一套面向可审计 AI 系统的图原生上下文基础设施。它可从文档、数据库和 API 摄取信息，完成实体抽取、消歧、合并与知识图谱构建，"
        "并支持本体、SHACL 校验、规则推理、来源追踪和决策记录。项目提供 Python 包、Knowledge Explorer、CLI、REST API 与 MCP Server，"
        "适合需要可解释、可追溯知识上下文的 Agent 或治理系统，但不等于暴露模型内部思维链。"
    ),
    "modular/modular": (
        "Modular AI 开发与部署平台的开源代码仓库，主要包含 MAX 框架和 Mojo 编程语言。MAX 用于在 CPU、NVIDIA 或 AMD GPU 上运行和部署生成式 AI 模型，"
        "提供模型管线、推理服务器、OpenAI 兼容 REST 接口和 Kubernetes 可用容器；Mojo 用于编写高性能 CPU/GPU 内核，并支持与 Python 互操作。"
        "仓库主分支跟随 nightly 构建，生产使用应选择对应的稳定发布分支并单独核对 Modular 及第三方模型许可证。"
    ),
    "unslothai/unsloth": (
        "一套用于本地训练、微调和运行大语言模型及多模态模型的开源工具，重点通过自定义内核和训练优化减少显存占用并提高速度。"
        "它提供 Python 训练接口以及 Unsloth Studio 桌面体验，可导出 GGUF 等格式或启动 OpenAI 兼容接口；实际收益取决于模型、硬件与训练配置。"
    ),
    "cactus-compute/needle": (
        "一个针对端侧设备优化的轻量 AI 模型项目，目标是在手机或边缘设备本地执行相关推理任务。"
        "它已被 Cactus Engine 收录为可运行模型并提供 Playground，适合探索低延迟、隐私敏感或离线推理；部署前需实测目标芯片的性能和精度。"
    ),
    "codecrafters-io/build-your-own-x": (
        "一个按技术类别整理的教程索引，核心学习方法是从零重建数据库、Git、Docker、Web 服务器、神经网络等常见系统。"
        "它帮助开发者通过实现简化版本理解底层原理和设计取舍，本身不是框架、软件包或可部署产品，教程质量与维护状态需逐项判断。"
    ),
    "sindresorhus/awesome": (
        "Awesome Lists 生态的总目录和质量规范入口，汇集由社区维护的技术、科学、文化与兴趣主题资源清单。"
        "它适合在陌生领域快速找到经过初步筛选的工具、资料和项目，但收录代表维护者的主观选择，不构成安全性、质量或持续维护的保证。"
    ),
    "freeCodeCamp/freeCodeCamp": (
        "非营利编程教育平台 freeCodeCamp.org 的开源代码库与课程内容。平台通过交互式练习、项目和认证路径教授数学、编程、计算机科学、"
        "Web 开发、数据分析与机器学习等主题；仓库也供贡献者修订课程、翻译内容和开发平台功能。"
    ),
    "EbookFoundation/free-programming-books": (
        "由社区维护的免费编程学习资源目录，收录多语言的书籍、课程、播客、交互式教程、习题集和备忘单。"
        "它还通过官方搜索 Web App 提供检索入口；项目只负责索引链接，不托管大部分内容，也不自动保证外部资源长期可用或版权状态不变。"
    ),
    "openclaw/openclaw": (
        "一个可由个人自行托管的 AI 助手与消息网关，可把模型、工具和自动化能力接入不同操作系统及聊天渠道。"
        "它适合构建能查询个人数据、调用外部服务或控制设备的助手，官方 Showcase 已展示公共交通查询、Oura 健康助手和 Bambu 3D 打印机控制等项目。"
        "由于会接触账户凭据和本地工具，部署时必须严格限制权限与网络暴露范围。"
    ),
    "donnemartin/system-design-primer": (
        "面向软件工程师的系统设计学习与面试准备资料库。它系统整理可扩展性、缓存、数据库、消息队列、一致性和高可用等概念，"
        "配有架构图、案例题、答案思路及 Anki 卡片，适合建立知识框架和模拟面试；内容是学习材料，不是可直接复用的生产架构模板。"
    ),
    "nilbuild/developer-roadmap": (
        "roadmap.sh 的开源内容和代码仓库，为前端、后端、DevOps、AI、数据等岗位提供可交互的技能路线图、指南、项目题和测试题。"
        "用户可用它规划学习顺序、记录进度和查漏补缺；路线图是社区建议，不代表所有岗位或公司的统一招聘标准。"
    ),
    "jwasham/coding-interview-university": (
        "一套以进入大型软件公司为目标的长期计算机科学和编码面试自学计划。它按阶段组织数据结构、算法、操作系统、网络、数据库和系统设计等资料，"
        "并附练习与复习建议；它是一份高强度课程清单，不是大学学历替代品，也不能保证面试结果。"
    ),
    "vinta/awesome-python": (
        "按用途分类整理的 Python 框架、库、工具和学习资源清单，覆盖 Web、数据、机器学习、测试、运维、安全与桌面开发等领域。"
        "开发者可通过仓库或 awesome-python.com 快速比较候选工具，但进入清单不等于通过安全审计或生产验证，仍需检查许可证和维护状态。"
    ),
}

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


def purpose_for(repository: Repository) -> str:
    return PURPOSE_ZH_REGISTRY.get(
        repository.full_name,
        "该项目本周首次进入榜单，尚未完成人工中文用途核实。请先查看项目 README；自动刷新不会用关键词猜测或伪造用途。",
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
        "purpose": purpose_for(repository),
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
        f"{purpose_for(repository)} | {case['type']}: {case['example']} "
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
            f"{purpose_for(repo)} | {case['type']}: {case['example']} "
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
