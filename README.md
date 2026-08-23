# GitHub Project Radar

Live dashboard: [project - explore](https://linyinzhou.github.io/project-explore/)

GitHub Project Radar is a dependency-free Python CLI that creates two repository rankings:

1. repositories with the highest current Star count, using the official GitHub Search API;
2. repositories with the largest daily, weekly, or monthly Star gain among the candidates shown on GitHub Trending.

Each result includes a reviewed, detailed Chinese purpose explanation and a clearly labelled, sourced application or product case.

## Important methodology note

GitHub does not provide an official API for ranking every public repository by Star growth over a time window. The growth ranking therefore sorts the repositories selected by GitHub Trending by the gain displayed on that page. It must not be described as an exhaustive, GitHub-wide growth ranking.

Purpose explanations and application cases are curated from public project documentation. Unknown repositories are explicitly marked as pending review instead of being machine-translated or assigned an invented case.

## Requirements

- Python 3.10 or newer
- Internet access
- Optional: a GitHub personal access token in `GITHUB_TOKEN`

The token is strongly recommended because unauthenticated GitHub API requests have a low rate limit. The tool only reads public data and does not need token scopes for public repositories.

## Usage

Print a weekly report:

```powershell
python github_radar.py
```

Find Python projects and save a Markdown report:

```powershell
$env:GITHUB_TOKEN = "your-token"
python github_radar.py --language Python --period weekly --limit 10 --output report.md
```

Produce JSON for another automation:

```powershell
python github_radar.py --period monthly --format json --output report.json
```

Available periods are `daily`, `weekly`, and `monthly`. The result limit can be from 1 to 25.

## Dashboard

The zero-dependency dashboard presents two curated rankings: the Weekly Trending top ten and the ten repositories with the highest cumulative Star count. Both rankings include repository purpose, adoption risks, and a sourced real product or application case. When no public evidence is available, the dashboard says so instead of inventing a scenario.

```powershell
cd dashboard
python -m http.server 8765
```

Open `http://127.0.0.1:8765/`. The table supports text search, language filtering, and sorting by current or weekly Stars.

## Weekly automation

GitHub Actions runs `scripts/refresh_dashboard.py` every Saturday at 08:00 Asia/Shanghai time. The workflow refreshes both rankings, writes a dated report, runs the test suite, and commits changed data to `main`; that push triggers the Pages deployment workflow.

Ranking data is refreshed automatically. Detailed Chinese purpose explanations and real application cases come only from the script's curated, sourced registries. A newly ranked repository without an entry is labelled as pending Chinese review and as having no publicly verified case instead of receiving machine-generated claims.

## Tests

```powershell
python -m unittest discover -s tests -v
```

Tests use a local HTML fixture and do not call GitHub.

## Data sources and operational risks

- The highest-Star ranking uses GitHub's REST Search API.
- The growth ranking parses GitHub's public Trending HTML because there is no corresponding official API. A GitHub markup change can require a parser update.
- Transient connection failures and GitHub 5xx responses are retried up to three times; authentication and rate-limit errors fail immediately.
- GitHub descriptions are maintainer-provided and may be incomplete or promotional.
- Star count is a popularity signal, not a quality, security, maintenance, or production-readiness score.
- Before adopting a repository, review its license, release cadence, open issues, security policy, and maintainer activity.
