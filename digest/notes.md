## Build live dashboards and animate explainers with Claude
- Claude Dashboards turns company data into dashboards that stay current; Claude Motion makes animated explainers
- Dashboards connect to BigQuery, Databricks, Snowflake, Salesforce; beta on paid plans
- Motion is beta on Team/Enterprise, exports MP4
- Docs, Slides, and Design leave beta and are available on every plan incl. Free
- Charts show underlying query; animations are editable code, so users review before sharing
Category: feature update
Date: 2026-10-08
URL: https://claude.com/resources/articles/dashboards-and-motion

## Building effective agent automations
- Reference implementation of a scheduled "daily brief" agent on Claude Managed Agents (beta); reads Slack/GitHub, posts summary to Slack
- Design rules: per-source bookmarks, report failed reads as "unreadable", re-check live status before posting, count as sent only after Slack confirms
- Security: credentials in vaults outside sandbox, read-only GitHub, placeholder tokens swapped only for allowlisted hosts, per-run budget cap
- Setup via `/claude-api managed-agents-onboard <URL>` in Claude Code; code in claude-quickstarts repo (managed-agents/daily-brief)
- Matters because background agents often fail silently; patterns make failures visible
Category: announcement
Date: 2026-10-08
URL: https://claude.dev/blog/building-effective-agent-automations/

## How Block orchestrates Claude Fable across thousands of pull requests
- Interview with Block's Bradley Axen on using Claude Fable 5 to orchestrate large code migrations
- Fable does high-level design and directs smaller models (Opus/Sonnet) for edits and tests, run on open-source workspace Buzz
- About 1,000 Fable-orchestrated PRs merged in a single migration; migrations span thousands of PRs across repos
- Cheaper models handle routine work, improving cost efficiency; model and effort level treated as optimization variables
- Humans still require two approvals for merges to main and prod deploys
Category: announcement
Date: 2026-10-08
URL: https://claude.com/resources/articles/how-block-orchestrates-claude-fable-across-thousands-of-pull-requests

## Claude Haiku 5.5
- New small model `claude-haiku-5-5`, billed as cheapest, fastest, most capable small model yet
- About 75% cheaper to run than Haiku 4.5 on average; first Haiku with adjustable effort setting
- Sonnet 5.5 cache-read prices halved; Max and Team subscribers get new monthly API credits
- Big benchmark gains, e.g. OSWorld 2.1 offline subset 72.4% vs 15.7% for Haiku 4.5
- Suited to high-volume, cost-sensitive tasks and subagents; Sonnet/Opus 5.5 still better for complex agentic coding
Category: announcement
Date: 2026-10-07
URL: https://www.anthropic.com/claude-haiku-5-5

## Automating eval design and hillclimbing with Claude
- Guidance on designing evals and hillclimbing without overfitting, shipped as two claude-api skill commands: `/claude-api build-eval` and `/claude-api hillclimb`
- build-eval interviews you, samples production-like inputs, proposes cheapest suitable grader, runs diagnostics
- hillclimb splits train/test, proposes one patch per round, keeps it only if both sets improve
- Examples: cost per ticket cut about 80% with better held-out accuracy; skill run rose 66% to about 88%
- Get started with `claude update` (note: article page showed Sep 28, 2026; listing showed Oct 7, 2026)
Category: feature update
Date: 2026-10-07
URL: https://claude.dev/blog/automating-eval-design-and-hillclimbing/

## How Comcast and Booz Allen use Claude Mythos to find exploit chains and secure their codebases
- Security teams used Claude Mythos-class models via Project Glasswing to find vulnerabilities scanners missed
- Comcast found a critical auth flaw across 258 systems (~170M lines of code) and fixed it before exploitation
- Booz Allen chained small weaknesses into exploit chains; reviewed 8 systems / 138 repos in under two weeks, work estimated at months
- Models reason across code, config, and identity; validation of findings is the new bottleneck
- Anthropic also expanded the Cyber Verification Program
Category: announcement
Date: 2026-10-06
URL: https://claude.com/resources/articles/how-comcast-booz-allen-use-claude-mythos-to-secure-their-codebases

## Claude now works with Google Docs, Sheets, and Slides
- Claude for Google Workspace public beta add-on on all paid plans
- Sidebar Claude reads the open file and selection and edits in place (restyle Docs, Sheets formulas/charts, Slides from deck layouts)
- "Ask before edits" vs "Accept all edits" modes control approval
- New Docs/Sheets/Slides connectors (beta) let main chat create and edit Google files within sharing permissions
- Connectors, skills, and enterprise controls carry over
Category: feature update
Date: 2026-10-06
URL: https://claude.com/resources/articles/claude-now-works-in-google-docs-sheets-and-slides

## We're expanding the Claude Startups program to help founders build
- Claude Startups program expands to more founders
- Up to $7,000 in Claude products/credits, incl. free year of Claude Team for new Team companies and $1,000 API credit
- New startup stack of partner tools (sales, design, data engineering) worth up to $45,000 in discounts/credits
- Adds virtual office hours with Applied AI team, Claude Marketplace listing help, events, newsletter
- Eligible: founded in last 5 years or funded in last 2
Category: announcement
Date: 2026-10-06
URL: https://claude.com/resources/articles/were-expanding-the-claude-startups-program-to-help-founders-build

## Expanding the Cyber Verification Program
- Vetted security professionals get access to Anthropic's most capable models with reduced cyber blocking classifiers
- Merges Project Glasswing and original CVP into three tiers: Defense, Red Team, Specialized
- Tiers include newest models (Opus 5.5, Sonnet 5.5, Mythos 5.1); Red Team takes weeks to review; Specialized limited to orgs reviewed with US government
- Participants must retain data so Anthropic can monitor misuse
- Glasswing partners found at least 129,000 verified vulnerabilities Apr-Jul 2026; expansion extends this to more teams
Category: announcement
Date: 2026-10-06
URL: https://www.anthropic.com/news/cyber-verification-program

## Claude Code in the cloud: a field guide to cloud sessions
- Cloud sessions run Claude Code on an Anthropic-managed fresh VM with repo cloned to a new branch
- Start from claude.ai/code, mobile, Desktop, `claude --cloud`, or Slack
- Isolated per task; GitHub token stays outside VM, pushes only to own branch; keeps running if laptop sleeps
- Included in Pro, Max, Team, Enterprise plans on the same usage limits; org owners may need to enable
- Best for backlog and parallel tasks; local better for work needing local DB, VPN, GPU
Category: feature update
Date: 2026-10-06
URL: https://claude.dev/blog/claude-code-in-the-cloud/
