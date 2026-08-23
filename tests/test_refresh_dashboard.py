import unittest

from github_radar import Repository
from scripts.refresh_dashboard import (
    DATA_END,
    DATA_START,
    case_for,
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

    def test_unknown_repository_is_marked_pending_instead_of_machine_translated(self):
        purpose = purpose_for(repository("example/new-project"))

        self.assertIn("尚未完成人工中文用途核实", purpose)
        self.assertIn("不会", purpose)

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
        self.assertIn("尚未完成人工中文用途核实", updated)
        self.assertNotIn("old data", updated)
        self.assertTrue(updated.startswith("before\n"))
        self.assertTrue(updated.endswith("after\n"))


if __name__ == "__main__":
    unittest.main()
