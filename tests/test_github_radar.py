import unittest
from unittest.mock import patch

from github_radar import (
    Repository,
    enrich,
    fetch_top_repositories,
    infer_example,
    parse_trending,
    render_markdown,
)


TRENDING_HTML = """
<article class="Box-row">
  <h2 class="h3 lh-condensed"><a href="/example/agent-kit">example / agent-kit</a></h2>
  <p class="col-9 color-fg-muted my-1 pr-4">An AI agent toolkit.</p>
  <span itemprop="programmingLanguage">Python</span>
  <a href="/example/agent-kit/stargazers">12,345</a>
  <span>1,234 stars this week</span>
</article>
"""


class TrendingParserTests(unittest.TestCase):
    def test_parses_repository_and_growth(self):
        repositories = parse_trending(TRENDING_HTML, "weekly")

        self.assertEqual(len(repositories), 1)
        self.assertEqual(repositories[0].full_name, "example/agent-kit")
        self.assertEqual(repositories[0].stars, 12345)
        self.assertEqual(repositories[0].growth_stars, 1234)
        self.assertEqual(repositories[0].language, "Python")

    def test_ignores_card_with_wrong_period(self):
        self.assertEqual(parse_trending(TRENDING_HTML, "daily"), [])


class ReportTests(unittest.TestCase):
    def setUp(self):
        self.repository = Repository(
            full_name="example/agent-kit",
            url="https://github.com/example/agent-kit",
            description="An AI agent toolkit.",
            language="Python",
            stars=12345,
            topics=["ai"],
            purpose="An AI agent toolkit.",
            application_example="示例。",
        )

    def test_ai_example_is_inferred(self):
        self.assertIn("智能助手", infer_example(self.repository))

    def test_short_ai_keyword_does_not_match_inside_word(self):
        self.repository.description = "A tool for maintainers."
        self.repository.topics = []
        self.repository.full_name = "example/maintainer-tool"

        self.assertNotIn("智能助手", infer_example(self.repository))

    def test_security_takes_priority_over_ai(self):
        self.repository.description = "AI vulnerability scanner for penetration testing."
        enrich([self.repository])

        self.assertIn("安全检测", self.repository.purpose)

    def test_report_discloses_ranking_limitations(self):
        report = render_markdown([self.repository], [self.repository], "weekly", None)

        self.assertIn("not every repository on GitHub", report)
        self.assertIn("not verified adoption cases", report)


class MostStarredQueryTests(unittest.TestCase):
    @patch("github_radar.request_json", return_value={"items": []})
    def test_global_ranking_uses_a_bounded_candidate_set(self, request_json):
        fetch_top_repositories(None, 10, None)

        requested_url = request_json.call_args.args[0]
        self.assertIn("stars%3A%3E100000", requested_url)
        self.assertIn("sort=stars", requested_url)


if __name__ == "__main__":
    unittest.main()
