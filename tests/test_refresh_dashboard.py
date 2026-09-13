import unittest
import tempfile
from pathlib import Path

from github_radar import Repository
from scripts.refresh_dashboard import (
    DATA_END,
    DATA_START,
    case_for,
    load_purpose_cache,
    parse_generated_purposes,
    purpose_for,
    render_data_block,
    replace_data_block,
)


def repository(full_name: str, growth: int | None = None) -> Repository:
    return Repository(
        full_name=full_name,
        url=f"https://github.com/{full_name}",
        description="A factual repository description.",
        language="Python",
        stars=123,
        topics=[],
        growth_stars=growth,
        growth_period="weekly" if growth is not None else None,
    )


class RefreshDashboardTests(unittest.TestCase):
    def test_known_repository_uses_reviewed_chinese_purpose(self):
        purpose = purpose_for(repository("public-apis/public-apis"))

        self.assertIn("公共 API 分类目录", purpose)
        self.assertIn("配额", purpose)
        self.assertNotIn("A factual repository description", purpose)

    def test_unknown_repository_is_marked_pending_when_automatic_summary_is_unavailable(self):
        purpose = purpose_for(repository("example/new-project"), {})

        self.assertIn("自动 README 中文摘要未能完成", purpose)
        self.assertIn("不会用关键词猜测", purpose)

    def test_cached_readme_summary_is_used_for_unknown_repository(self):
        purpose = purpose_for(repository("example/new-project"), {"example/new-project": "中文用途说明"})

        self.assertEqual("中文用途说明", purpose)

    def test_reviewed_purpose_takes_priority_over_cache(self):
        purpose = purpose_for(
            repository("public-apis/public-apis"),
            {"public-apis/public-apis": "错误的缓存内容"},
        )

        self.assertIn("公共 API 分类目录", purpose)

    def test_load_purpose_cache_validates_shape(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "purpose.json"
            path.write_text('["not", "an", "object"]', encoding="utf-8")

            with self.assertRaises(RuntimeError):
                load_purpose_cache(path)

    def test_generated_purpose_parser_ignores_short_or_missing_values(self):
        raw = 'result:\n```json\n{"a/repo": "这是足够详细的中文项目用途说明，包含主要能力、适用范围、目标用户以及采用之前需要注意的重要限制和边界。", "b/repo": "太短"}\n```'

        parsed = parse_generated_purposes(raw, {"a/repo", "b/repo", "c/repo"})

        self.assertEqual({"a/repo": "这是足够详细的中文项目用途说明，包含主要能力、适用范围、目标用户以及采用之前需要注意的重要限制和边界。"}, parsed)

    def test_unknown_repository_is_not_given_an_invented_case(self):
        case = case_for(repository("example/new-project"))

        self.assertFalse(case["verified"])
        self.assertEqual(case["type"], "未找到公开案例")
        self.assertIn("未找到", case["example"])

    def test_generated_block_replaces_exact_marker_region(self):
        trending = [repository("example/trending", growth=42)]
        most_starred = [repository("example/starred")]
        block = render_data_block(trending, most_starred, "2026-08-29")
        original = f"before\n{DATA_START}\nold data\n{DATA_END}\nafter\n"

        updated = replace_data_block(original, block)

        self.assertIn('const dashboardGeneratedAt = "2026-08-29";', updated)
        self.assertIn('"weekly": 42', updated)
        self.assertIn("自动 README 中文摘要未能完成", updated)
        self.assertNotIn("old data", updated)
        self.assertTrue(updated.startswith("before\n"))
        self.assertTrue(updated.endswith("after\n"))


if __name__ == "__main__":
    unittest.main()
