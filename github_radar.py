#!/usr/bin/env python3
"""Find highly starred and fast-growing GitHub repositories."""

from __future__ import annotations

import argparse
import html
import json
import os
import re
import sys
import time
from dataclasses import asdict, dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Any
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import Request, urlopen


API_ROOT = "https://api.github.com"
GITHUB_ROOT = "https://github.com"
USER_AGENT = "github-project-radar/1.0"
PERIOD_LABELS = {"daily": "today", "weekly": "this week", "monthly": "this month"}


class RadarError(RuntimeError):
    """An expected error that should be shown without a traceback."""


@dataclass
class Repository:
    full_name: str
    url: str
    description: str
    language: str | None
    stars: int
    topics: list[str]
    growth_stars: int | None = None
    growth_period: str | None = None
    purpose: str = ""
    application_example: str = ""


def request_text(url: str, token: str | None = None, accept: str = "text/html") -> str:
    headers = {"Accept": accept, "User-Agent": USER_AGENT}
    if token:
        headers["Authorization"] = f"Bearer {token}"
    last_connection_error: URLError | None = None
    for attempt in range(3):
        request = Request(url, headers=headers)
        try:
            with urlopen(request, timeout=30) as response:
                return response.read().decode("utf-8")
        except HTTPError as error:
            details = error.read().decode("utf-8", errors="replace")
            if error.code == 403:
                raise RadarError(
                    "GitHub refused the request or the API rate limit was reached. "
                    "Set GITHUB_TOKEN and try again."
                ) from error
            if 500 <= error.code < 600 and attempt < 2:
                time.sleep(0.5 * (attempt + 1))
                continue
            raise RadarError(f"GitHub returned HTTP {error.code}: {details[:240]}") from error
        except URLError as error:
            last_connection_error = error
            if attempt < 2:
                time.sleep(0.5 * (attempt + 1))
                continue
    reason = last_connection_error.reason if last_connection_error else "unknown connection error"
    raise RadarError(f"Could not reach GitHub after 3 attempts: {reason}")


def request_json(url: str, token: str | None = None) -> dict[str, Any]:
    raw = request_text(url, token, "application/vnd.github+json")
    try:
        value = json.loads(raw)
    except json.JSONDecodeError as error:
        raise RadarError("GitHub returned invalid JSON.") from error
    if not isinstance(value, dict):
        raise RadarError("GitHub returned an unexpected response.")
    return value


def strip_html(value: str) -> str:
    text = re.sub(r"<[^>]+>", " ", value)
    return " ".join(html.unescape(text).split())


def parse_number(value: str) -> int:
    return int(value.replace(",", "").strip())


def parse_trending(html_text: str, period: str) -> list[Repository]:
    """Parse repository cards from GitHub's public Trending page."""
    cards = re.findall(
        r'<article\b[^>]*class="[^"]*\bBox-row\b[^"]*"[^>]*>(.*?)</article>',
        html_text,
        re.IGNORECASE | re.DOTALL,
    )
    repositories: list[Repository] = []
    expected_label = PERIOD_LABELS[period]

    for card in cards:
        name_match = re.search(
            r'<h2\b.*?<a\b[^>]*href="/([^"?#]+/[^"/?#]+)"',
            card,
            re.IGNORECASE | re.DOTALL,
        )
        growth_match = re.search(
            rf'([\d,]+)\s+stars?\s+{re.escape(expected_label)}',
            strip_html(card),
            re.IGNORECASE,
        )
        if not name_match or not growth_match:
            continue

        full_name = html.unescape(name_match.group(1)).strip()
        description_match = re.search(
            r'<p\b[^>]*class="[^"]*\bcol-9\b[^"]*"[^>]*>(.*?)</p>',
            card,
            re.IGNORECASE | re.DOTALL,
        )
        language_match = re.search(
            r'<span\b[^>]*itemprop="programmingLanguage"[^>]*>(.*?)</span>',
            card,
            re.IGNORECASE | re.DOTALL,
        )
        stars_match = re.search(
            rf'href="/{re.escape(full_name)}/stargazers"[^>]*>(.*?)</a>',
            card,
            re.IGNORECASE | re.DOTALL,
        )

        description = strip_html(description_match.group(1)) if description_match else ""
        language = strip_html(language_match.group(1)) if language_match else None
        stars_text = strip_html(stars_match.group(1)) if stars_match else "0"
        numeric_stars = re.search(r"[\d,]+", stars_text)
        repositories.append(
            Repository(
                full_name=full_name,
                url=f"{GITHUB_ROOT}/{full_name}",
                description=description,
                language=language,
                stars=parse_number(numeric_stars.group()) if numeric_stars else 0,
                topics=[],
                growth_stars=parse_number(growth_match.group(1)),
                growth_period=period,
            )
        )

    return repositories


def fetch_top_repositories(language: str | None, limit: int, token: str | None) -> list[Repository]:
    qualifiers = ["stars:>0", "is:public", "archived:false"]
    if language:
        qualifiers.append(f'language:"{language}"')
    query = urlencode(
        {"q": " ".join(qualifiers), "sort": "stars", "order": "desc", "per_page": limit}
    )
    payload = request_json(f"{API_ROOT}/search/repositories?{query}", token)
    items = payload.get("items")
    if not isinstance(items, list):
        raise RadarError("GitHub Search did not return a repository list.")
    return [repository_from_api(item) for item in items if isinstance(item, dict)]


def repository_from_api(item: dict[str, Any]) -> Repository:
    return Repository(
        full_name=str(item.get("full_name", "unknown/unknown")),
        url=str(item.get("html_url", "")),
        description=str(item.get("description") or "No description provided."),
        language=item.get("language") if isinstance(item.get("language"), str) else None,
        stars=int(item.get("stargazers_count") or 0),
        topics=[str(topic) for topic in item.get("topics", []) if isinstance(topic, str)],
    )


CLASSIFICATION_RULES = [
    (
        ("security", "vulnerability", "scanner", "firewall", "penetration", "secret"),
        "用于安全检测、漏洞研究、防护或合规检查。",
        "可在 CI/CD 中扫描代码与依赖，或作为团队的安全检查工具。",
    ),
    (
        ("learn", "tutorial", "course", "curriculum", "awesome", "list"),
        "用于学习、教学或整理某一技术领域的参考资源。",
        "可作为专题学习路线、技术选型索引，或团队内部培训资料。",
    ),
    (
        ("llm", "ai", "machine learning", "model", "agent"),
        "用于构建、训练或集成人工智能与机器学习能力。",
        "可用于搭建智能助手、自动处理内容，或把模型能力接入现有业务流程。",
    ),
    (
        ("database", "sql", "postgres", "redis", "storage"),
        "用于数据存储、查询、同步或数据基础设施建设。",
        "可用于构建业务数据层、数据分析环境，或验证新的存储架构。",
    ),
    (
        ("framework", "web", "frontend", "react", "vue", "server"),
        "用于开发或运行 Web 应用、服务端系统与用户界面。",
        "可用于开发网站、内部管理系统，或快速验证一个 Web 产品原型。",
    ),
    (
        ("cli", "terminal", "developer tool", "devtool", "compiler", "editor"),
        "用于辅助软件开发、命令行操作、编译、编辑或调试。",
        "可集成进本地开发流程，用于减少重复操作或提升编码与调试效率。",
    ),
    (
        ("video", "audio", "image", "media", "music", "pdf"),
        "用于处理、生成、分析或管理图片、音视频与文档内容。",
        "可用于搭建媒体处理流水线，例如批量转换、生成、整理或播放内容。",
    ),
    (
        ("automation", "workflow", "bot", "scraper", "crawler"),
        "用于自动化任务、信息采集或工作流编排。",
        "可用于自动采集信息、串联重复流程，或构建定时运行的机器人。",
    ),
]


def metadata_matches(haystack: str, keyword: str) -> bool:
    if len(keyword) <= 3 and keyword.isascii():
        return re.search(rf"\b{re.escape(keyword)}\b", haystack) is not None
    return keyword in haystack


def classify(repository: Repository) -> tuple[str, str]:
    haystack = " ".join(
        [repository.full_name, repository.description, repository.language or "", *repository.topics]
    ).lower()
    for keywords, purpose, example in CLASSIFICATION_RULES:
        if any(metadata_matches(haystack, keyword) for keyword in keywords):
            return purpose, example
    language = repository.language or "未注明主要语言"
    return (
        f"这是一个以 {language} 为主要语言的开源项目，具体能力以维护者描述和 README 为准。",
        "可先用于个人原型或团队技术验证，再根据 README、许可证和维护状态判断是否适合生产环境。",
    )


def fetch_trending_repositories(
    period: str, language: str | None, limit: int, token: str | None
) -> list[Repository]:
    path = "/trending"
    if language:
        path += f"/{language.lower().replace(' ', '-')}"
    url = f"{GITHUB_ROOT}{path}?{urlencode({'since': period})}"
    repositories = parse_trending(request_text(url, token), period)
    repositories.sort(key=lambda repo: repo.growth_stars or 0, reverse=True)
    return repositories[:limit]


def infer_example(repository: Repository) -> str:
    """Suggest a scenario from repository metadata; this is not a verified case study."""
    return classify(repository)[1]


def enrich(repositories: list[Repository]) -> None:
    for repository in repositories:
        repository.purpose, repository.application_example = classify(repository)


def markdown_escape(value: str) -> str:
    return value.replace("|", "\\|").replace("\n", " ")


def render_section(title: str, repositories: list[Repository], growth: bool) -> list[str]:
    lines = [f"## {title}", ""]
    for index, repository in enumerate(repositories, 1):
        lines.extend(
            [
                f"### {index}. [{repository.full_name}]({repository.url})",
                "",
                f"- Stars: {repository.stars:,}",
                f"- Language: {markdown_escape(repository.language or 'Unknown')}",
            ]
        )
        if growth:
            lines.append(
                f"- Star growth: +{repository.growth_stars or 0:,} ({repository.growth_period})"
            )
        lines.extend(
            [
                f"- Purpose (inferred): {markdown_escape(repository.purpose)}",
                f"- Repository description: {markdown_escape(repository.description)}",
                f"- Suggested application (inferred): {markdown_escape(repository.application_example)}",
                "",
            ]
        )
    if not repositories:
        lines.extend(["No repositories were returned.", ""])
    return lines


def render_markdown(
    top: list[Repository], trending: list[Repository], period: str, language: str | None
) -> str:
    generated = datetime.now(timezone.utc).astimezone().isoformat(timespec="seconds")
    lines = [
        "# GitHub Project Radar",
        "",
        f"Generated: {generated}",
        f"Language filter: {language or 'All'}",
        "",
        "> Growth ranking is sorted by the Star gain displayed on GitHub Trending. "
        "It ranks GitHub's Trending candidates, not every repository on GitHub.",
        "> Suggested applications are metadata-based inferences, not verified adoption cases.",
        "",
    ]
    lines.extend(render_section("Most starred repositories", top, growth=False))
    lines.extend(
        render_section(
            f"Fastest-growing GitHub Trending candidates ({period})", trending, growth=True
        )
    )
    return "\n".join(lines).rstrip() + "\n"


def build_payload(
    top: list[Repository], trending: list[Repository], period: str, language: str | None
) -> dict[str, Any]:
    return {
        "generated_at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "language": language,
        "growth_period": period,
        "methodology": {
            "most_starred": "GitHub Search API sorted by current stars",
            "fastest_growing": "Star gain shown for repositories selected by GitHub Trending",
            "application_examples": "Inferred from repository name, description, topics, and language",
        },
        "most_starred": [asdict(repository) for repository in top],
        "fastest_growing_trending": [asdict(repository) for repository in trending],
    }


def parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Find GitHub's most-starred repositories and fast-growing Trending candidates."
    )
    parser.add_argument("--language", help="GitHub language filter, for example Python or Rust")
    parser.add_argument(
        "--period", choices=tuple(PERIOD_LABELS), default="weekly", help="Growth window"
    )
    parser.add_argument("--limit", type=int, default=10, help="Results per ranking (1-25)")
    parser.add_argument("--format", choices=("markdown", "json"), default="markdown")
    parser.add_argument("--output", type=Path, help="Write to a file instead of stdout")
    args = parser.parse_args(argv)
    if not 1 <= args.limit <= 25:
        parser.error("--limit must be between 1 and 25")
    return args


def main(argv: list[str] | None = None) -> int:
    args = parse_args(argv)
    token = os.getenv("GITHUB_TOKEN")
    try:
        top = fetch_top_repositories(args.language, args.limit, token)
        trending = fetch_trending_repositories(args.period, args.language, args.limit, token)
        enrich(top)
        enrich(trending)
        if args.format == "json":
            output = json.dumps(
                build_payload(top, trending, args.period, args.language),
                ensure_ascii=False,
                indent=2,
            ) + "\n"
        else:
            output = render_markdown(top, trending, args.period, args.language)
        if args.output:
            args.output.write_text(output, encoding="utf-8")
        else:
            sys.stdout.write(output)
        return 0
    except (RadarError, OSError) as error:
        print(f"error: {error}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
