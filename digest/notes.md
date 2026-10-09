## Build live dashboards and animate explainers with Claude
- Anthropic introduces Claude Dashboards and Claude Motion, both in beta
- Dashboards connect to BigQuery, Databricks, Snowflake, or Salesforce; plain-language questions, click any number to see its query (paid plans)
- Motion makes short animated explainers from a prompt as editable code, exportable to MP4 (Team and Enterprise)
- Docs, Slides, and Design leave beta and are on every plan incl. Free; standalone Claude Design folds into Claude (old URL until Dec 14)
- Matters: data answers and visuals without tickets or SQL; outputs show underlying query/code
Category: feature update
Date: 2026-10-08
URL: https://claude.com/resources/articles/dashboards-and-motion

## Building effective agent automations
- Reference implementation on Claude Managed Agents (beta): scheduled agent reads Slack/GitHub, tracks changes, posts a brief to Slack
- Configured via agent.md, deployment.md (cron, timezone, budget), memory stores; deployed with `ant apply`; code in anthropics/claude-quickstarts
- Reliability patterns: per-source bookmarks, report failed sources as unreadable, re-check live status, update state only after Slack confirms
- Safeguards: scoped read-only credentials in a vault, spend cap that pauses, preferences file agent can read but not edit
- Matters: scheduled agents fail quietly; these patterns prevent gaps, duplicates, silent failures
Category: announcement
Date: 2026-10-08
URL: https://claude.dev/blog/building-effective-agent-automations/

## How Block orchestrates Claude Fable across thousands of pull requests
- Interview with Bradley Axen (Block) on using Claude Fable to orchestrate large engineering work
- Fable coordinates migrations across thousands of PRs and repos; handles design, delegates edits/tests to Opus or Sonnet
- Cost: frontier tokens for planning, cheaper worker models for volume; building an auto-selector and benchmarking effort levels
- Humans still approve merges and deploys (two approvers); Claude refuses to bypass dual approval in testing
- Matters: shift from single-PR help to org-scale work with human control
Category: announcement
Date: 2026-10-08
URL: https://claude.com/resources/articles/how-block-orchestrates-claude-fable-across-thousands-of-pull-requests

## Claude Haiku 5.5
- Anthropic's cheapest, fastest, most capable small model yet
- About 75% cheaper to run than Haiku 4.5; first Haiku with adjustable effort setting
- Sonnet 5.5 cache-read price halved; Max/Team get monthly API credits; SDKs add beta computer use and browser use
- Suits high-volume work (summaries, classification, queries), live support, browser automation
- Sonnet 5.5 and Opus 5.5 still better for complex agentic coding
Category: announcement
Date: 2026-10-07
URL: https://www.anthropic.com/claude-haiku-5-5

## Automating eval design and hillclimbing with Claude
- Post by Lance Martin on designing evals and hillclimbing without overfitting (article page shows Sep 28, 2026; listing shows Oct 7)
- claude-api skill adds `/claude-api build-eval` (interview, sampling, grader validation, baseline) and `/claude-api hillclimb` (one patch per round, kept only if train and test improve)
- Targets common eval failures: unrepresentative tasks, miscalibrated graders, harness overfitting
- Results: support benchmark cost per ticket 4.6c to 1c, held-out accuracy 78.6% to 90.5%; skill eval pass rate 66% to ~88%
- Get started: run `claude update`
Category: feature update
Date: 2026-10-07
URL: https://claude.dev/blog/automating-eval-design-and-hillclimbing/

## How Comcast and Booz Allen use Claude Mythos to find exploit chains and secure their codebases
- Both used Mythos-class models via Project Glasswing (limited-access program for critical infrastructure defenders)
- Comcast: found a critical auth flaw across 258 systems / ~170M lines of code; fixed before exploitation
- Booz Allen: linked code, config, and identity weaknesses into exploit hypotheses; one analyst reviewed 8 systems across 138 repos in 12 days
- Comcast CISO: validation of findings volume is the new bottleneck; humans still validate and own fixes
- Matters: exploit chains evade single-issue tools; continuous review needed against AI-enabled threats
Category: announcement
Date: 2026-10-06
URL: https://claude.com/resources/articles/how-comcast-booz-allen-use-claude-mythos-to-secure-their-codebases

## Claude now works with Google Docs, Sheets, and Slides
- New Claude for Google Workspace add-on: sidebar in Docs, Sheets, Slides that reads and edits the open file (public beta, all paid plans)
- New Docs/Sheets/Slides connectors (beta) let Claude create and edit Google files from chat
- Docs: in-place edits or proposed change cards; Sheets: formulas, pivots, charts, tabs; Slides: builds slides in deck theme, flags layout issues
- "Ask before edits" default; "Accept all edits" optional; follows Google sharing permissions
- Matters: work with Claude inside files with existing connectors, skills, and enterprise controls
Category: feature update
Date: 2026-10-06
URL: https://claude.com/resources/articles/claude-now-works-in-google-docs-sheets-and-slides

## We're expanding the Claude Startups program to help founders build
- Claude Startups program expands to more founders
- Up to $7,000 in Claude products and credits, incl. free year of Claude Team for new Team companies and $1,000 API credit
- New Startup Stack of partner offers (sales, design, data engineering) worth up to $45,000
- Office hours with Applied AI team, Claude Marketplace listing help, founder events; eligible if founded in last 5 years or funded in last 2
- Matters: early access to fast-improving models as differentiator
Category: announcement
Date: 2026-10-06
URL: https://claude.com/resources/articles/were-expanding-the-claude-startups-program-to-help-founders-build

## Expanding the Cyber Verification Program
- Updated program gives qualifying security professionals access to top models with reduced cyber-blocking classifiers
- Now three tiers: Defense, Red Team, Specialized; merges earlier CVP with Project Glasswing
- Tiers include Opus 5.5, Sonnet 5.5, Mythos 5.1; higher tiers have fewer blocks but stricter verification
- Partners found at least 129,000 verified vulnerabilities Apr-Jul 2026
- Apply via CVP portal; Defense responses in a few days, Red Team may take weeks
Category: announcement
Date: 2026-10-06
URL: https://www.anthropic.com/news/cyber-verification-program

## Claude Code in the cloud: a field guide to cloud sessions
- By Addy Osmani: cloud sessions run Claude Code on its own VM with repo cloned to a fresh branch
- Start from claude.ai/code, mobile, Desktop, terminal (`claude --cloud "..."`), or Slack; included in Pro, Max, Team, Enterprise
- Keeps running if laptop sleeps; parallel tasks isolated; GitHub token stays outside VM, pushes only to own branch
- Good for parallel backlog fixes, heavy proof loops, mobile starts; limits: shared plan usage, idle VMs reclaimed, private repos need GitHub App
- Local sessions still better for local DBs, VPNs, GPUs, hardware
Category: feature update
Date: 2026-10-06
URL: https://claude.dev/blog/claude-code-in-the-cloud/
