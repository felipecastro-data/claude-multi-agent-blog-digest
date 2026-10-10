## Build live dashboards and animate explainers with Claude
- Launches Claude Dashboards and Claude Motion, built from plain-language requests.
- Dashboards connect to BigQuery, Databricks, Snowflake, Salesforce; refresh live and each number links to its query.
- Motion generates editable animation code for your own text/charts/images; exports MP4.
- Dashboards beta on paid plans; Motion beta on Team/Enterprise. Docs, Slides, Design now out of beta on all plans; standalone Claude Design stays at old URL until Dec 14.
- Lets teams answer data questions without SQL/tickets; visible queries and editable code aid verification.
Category: feature update
Date: 2026-10-08
URL: https://claude.com/resources/articles/dashboards-and-motion

## Building effective agent automations
- Reference implementation on Claude Managed Agents (beta) for a scheduled agent that reads Slack/GitHub and posts a brief to one channel.
- Configured via files (agent.md, deployment.md, environment.yaml, vault.yaml) and deployed with `ant apply`.
- Uses per-source bookmarks in memory instead of fixed time windows; credentials in vault; read-only access where possible.
- Reliability: failed source reported as unreadable, posts confirmed via Slack "ok": true before updating ledger; per-run budget cap; reader time zone.
- Gives teams a tested pattern against silent failures and duplicate posts in unattended agents.
Category: feature update
Date: 2026-10-08
URL: https://claude.dev/blog/building-effective-agent-automations/

## How Block orchestrates Claude Fable across thousands of pull requests
- Interview with Block's Bradley Axen on using Claude for large code migrations.
- Claude Fable 5 handles high-level design (data models, API specs) and directs smaller models (Opus, Sonnet) for edits and tests.
- About a thousand Fable-orchestrated PRs merged in a single migration across multiple repos.
- Auto-selector matches tasks to model and effort level, saving frontier models for hard problems.
- Humans stay in control: two approvers for production deploys plus security checks.
Category: announcement
Date: 2026-10-08
URL: https://claude.com/resources/articles/how-block-orchestrates-claude-fable-across-thousands-of-pull-requests

## Claude Haiku 5.5
- New small model `claude-haiku-5-5`, called Anthropic's cheapest, fastest, most capable small model.
- About 75% cheaper on average than Haiku 4.5; first Haiku with adjustable effort setting.
- Sonnet 5.5 cache reads halved in price; Max and Team subscribers get monthly API credits.
- Targets high-volume work: summaries, classification, subagents, live support, browser use.
- Sonnet 5.5 and Opus 5.5 remain better for complex agentic coding.
Category: announcement
Date: 2026-10-07
URL: https://www.anthropic.com/claude-haiku-5-5

## Automating eval design and hillclimbing with Claude
- Playbook plus new `/claude-api build-eval` and `/claude-api hillclimb` commands in the claude-api skill.
- build-eval interviews you, samples inputs, and awaits approval before choosing grader and baseline.
- hillclimb splits train/test sets and keeps a patch only if both improve, limiting overfitting.
- Support benchmark: cost per ticket down ~80% (4.6c to 1c), held-out accuracy 78.6% to 90.5%.
- claude-api skill eval pass rate rose 66.1% to 87.9%. (Article page showed Sep 28, 2026; listing showed Oct 7, 2026.)
Category: feature update
Date: 2026-10-07
URL: https://claude.dev/blog/automating-eval-design-and-hillclimbing/

## How Comcast and Booz Allen use Claude Mythos to find exploit chains and secure their codebases
- Customer story on using Claude Mythos-class models via Project Glasswing to find flaws scanners missed.
- Comcast: 258 systems, ~170M lines of code; found critical auth flaw in public-facing platform, fixed before exploitation.
- Booz Allen: traced unprotected key across two languages, exposing a boot-time device weakness.
- One analyst reviewed 8 systems / 138 repos in 12 days versus months for a larger team.
- Validation of findings is now the bottleneck, per Comcast.
Category: announcement
Date: 2026-10-06
URL: https://claude.com/resources/articles/how-comcast-booz-allen-use-claude-mythos-to-secure-their-codebases

## Claude now works with Google Docs, Sheets, and Slides
- Claude for Google Workspace public beta add-on adds a Claude sidebar in Docs, Sheets, Slides; all paid plans.
- Claude reads the open file and selection and edits directly (restyle, formulas, charts, slides).
- Modes: "Ask before edits" or "Accept all edits".
- New Docs/Sheets/Slides connectors (beta) to create and edit Google files from Claude, respecting sharing permissions.
- Keeps connectors, skills, and enterprise controls inside the add-on.
Category: feature update
Date: 2026-10-06
URL: https://claude.com/resources/articles/claude-now-works-in-google-docs-sheets-and-slides

## We're expanding the Claude Startups program to help founders build
- Expansion of the Claude Startups program, opened to more founders.
- Up to $7,000 in Claude products and credits, incl. free year of Claude Team and one-time $1,000 API credit.
- New Claude Startup Stack: discounts/credits up to $45,000 on partner tools (sales, design, data engineering).
- Adds Applied AI office hours and Claude Marketplace listing help.
- Eligible: founded in last 5 years or funded in last 2.
Category: announcement
Date: 2026-10-06
URL: https://claude.com/resources/articles/were-expanding-the-claude-startups-program-to-help-founders-build

## Expanding the Cyber Verification Program
- Cyber Verification Program (CVP) gives vetted security pros advanced cyber capabilities with reduced blocking classifiers.
- Three tiers: Defense Access, Red Team Access, Specialized Access (critical infrastructure); all include top models.
- Merges Project Glasswing into CVP; former Glasswing members move to Specialized Access without reapproval.
- Enrollment requires data retention for misuse monitoring until Enterprise Frontier Safeguards launches this fall.
- Partners reported 129,000+ verified vulnerabilities Apr-Jul 2026, 33,000+ critical/high.
Category: announcement
Date: 2026-10-06
URL: https://www.anthropic.com/news/cyber-verification-program

## Claude Code in the cloud: a field guide to cloud sessions
- Cloud sessions run Claude Code on a fresh VM with repo cloned to a new branch; start from web, mobile, Desktop, `claude --cloud`, or Slack.
- Tasks keep running if laptop sleeps; parallel tasks are isolated; GitHub token stays outside the VM.
- Sessions end in a branch to turn into a PR; sample runs took 60-90 seconds.
- Included in Pro, Max, Team, Enterprise using same usage limits; requires Claude GitHub App.
- Local still better for local DBs, VPN services, hardware; parallel sessions use limits faster.
Category: feature update
Date: 2026-10-06
URL: https://claude.dev/blog/claude-code-in-the-cloud/
