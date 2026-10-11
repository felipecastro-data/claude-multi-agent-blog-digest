## Build live dashboards and animate explainers with Claude
- Announces two beta features: Claude Dashboards (live dashboards from company data) and Claude Motion (animated explainers).
- Dashboards connect to BigQuery, Databricks, Snowflake, Salesforce; stay current; each chart shows its underlying query.
- Motion builds editable animations downloadable as MP4.
- Docs, Slides, and Design are out of beta and on every plan including Free; Design moved into Claude (claude.ai/design stays until Dec 14).
- Enterprise admins must enable Dashboards/Motion under Organization settings > Artifacts (off by default).
Category: feature update
Date: 2026-10-08
URL: https://claude.com/resources/articles/dashboards-and-motion

## Building effective agent automations
- Guide and reference implementation for scheduled agents on Claude Managed Agents (beta); example posts a daily Slack/GitHub brief (anthropics/claude-quickstarts, managed-agents/daily-brief).
- Six parts: sources, destination, agent config, schedule, memory stores, guardrails; `ant apply` deploys to Anthropic infrastructure.
- Reliability patterns: per-source bookmarks, report failed sources as unreadable, re-check live status, record sent only after Slack ok.
- Security/cost: credentials in vaults (placeholders only in sandbox), read-only access, per-run budget cap of 3-5x normal cost.
- Point: scheduled agents fail quietly, so these patterns target silent failure modes.
Category: announcement
Date: 2026-10-08
URL: https://claude.dev/blog/building-effective-agent-automations/

## How Block orchestrates Claude Fable across thousands of pull requests
- Block's Bradley Axen describes using Claude Fable 5 to orchestrate company-wide code migrations.
- Fable does high-level design (data models, API specs), then directs cheaper models (Opus/Sonnet) to edit files and run tests.
- Migrations span hundreds to thousands of PRs; one merged a thousand Fable-orchestrated PRs.
- Frontier tokens go to planning, smaller models do more work, reportedly without quality drop.
- Humans still approve merges and production deploys via dual approval; model refuses to bypass it.
Category: announcement
Date: 2026-10-08
URL: https://claude.com/resources/articles/how-block-orchestrates-claude-fable-across-thousands-of-pull-requests

## Claude Haiku 5.5
- Anthropic releases Claude Haiku 5.5 (`claude-haiku-5-5`), its cheapest, fastest, most capable small model.
- About 75% cheaper than Haiku 4.5 on average; $0.10/M input, $0.50/M output tokens (prompts up to 100k).
- First Haiku-class model with adjustable effort setting.
- Also: Sonnet 5.5 cache-read price halved; monthly API credits for Max and Team subscribers.
- Suited to support, browser use, subagents; Sonnet/Opus 5.5 still better for complex agentic coding.
Category: announcement
Date: 2026-10-07
URL: https://www.anthropic.com/claude-haiku-5-5

## Automating eval design and hillclimbing with Claude
- Adds two commands to the `claude-api` skill in Claude Code: `/claude-api build-eval` and `/claude-api hillclimb` (run `claude update`).
- Eval principles: production-like tasks, expert-agreed graders, headroom below 100%, low variance.
- Hillclimbing uses train/test split, reverts overfit changes, checks noise, audits eval bugs when stalled.
- Results: support benchmark cost per ticket 4.6 cents to 1 cent with higher held-out accuracy (90.5% vs 78.6%); claude-api skill eval 66% to ~88%.
- Helps teams avoid evals that look like progress but overfit. (Article body shows Sep 28, 2026; listing shows Oct 7.)
Category: feature update
Date: 2026-10-07
URL: https://claude.dev/blog/automating-eval-design-and-hillclimbing/

## How Comcast and Booz Allen use Claude Mythos to find exploit chains and secure their codebases
- Comcast and Booz Allen used Mythos-class models via Project Glasswing to find, validate, and fix vulnerabilities.
- Models reasoned across code, config, identity, deployment to find exploit chains single-file scanners miss.
- Comcast: critical auth flaw found across 258 systems (~170M lines), fixed before exploitation observed.
- Booz Allen: one analyst reviewed 8 systems/138 repos in 12 days, work that would take months.
- Validation is now the bottleneck; Anthropic expanded the Cyber Verification Program.
Category: announcement
Date: 2026-10-06
URL: https://claude.com/resources/articles/how-comcast-booz-allen-use-claude-mythos-to-secure-their-codebases

## Claude now works with Google Docs, Sheets, and Slides
- Claude for Google Workspace public beta add-on, on all paid plans; opens Claude beside the open file.
- Reads document/selection and edits directly: text/styling in Docs, formulas/charts in Sheets, themed slides in Slides.
- Default "Ask before edits" mode requires approval; respects Google sharing permissions.
- New beta Docs/Sheets/Slides connectors let Claude chat create/edit Google files.
- Install via Google Workspace Marketplace; admins can deploy to domain; Team/Enterprise owners enable connectors.
Category: feature update
Date: 2026-10-06
URL: https://claude.com/resources/articles/claude-now-works-in-google-docs-sheets-and-slides

## We're expanding the Claude Startups program to help founders build
- Claude Startups program opens to more founders.
- Up to $7,000 in Claude products/credits: free year of Claude Team for new companies, one-time $1,000 API credit.
- New Claude Startup Stack: discounts/credits up to $45,000 on sales, design, data engineering tools.
- Also office hours with Applied AI team, Claude Marketplace listing help, community events, newsletter.
- Eligible: founded in last 5 years or funded in last 2.
Category: announcement
Date: 2026-10-06
URL: https://claude.com/resources/articles/were-expanding-the-claude-startups-program-to-help-founders-build

## Expanding the Cyber Verification Program
- Expanded CVP gives vetted security professionals access to top models with fewer cyber safeguards.
- Merges Project Glasswing and prior CVP into three tiers: Defense, Red Team, Specialized; each includes Opus 5.5, Sonnet 5.5, Mythos 5.1.
- Red Team adds authorized pentesting with real-time blocks on physical-harm actions; Specialized has fewest blocks, for verified orgs (power grids, telecom).
- Data retention required for misuse monitoring; zero data retention allowed until Enterprise Frontier Safeguards launches this fall.
- Glasswing partners reportedly found 129,000+ verified vulnerabilities Apr-Jul 2026.
Category: announcement
Date: 2026-10-06
URL: https://www.anthropic.com/news/cyber-verification-program

## Claude Code in the cloud: a field guide to cloud sessions
- Guide (Addy Osmani) to cloud sessions: fresh VM per task, repo cloned on new branch; start from claude.ai/code, mobile, Desktop, `claude --cloud`, or Slack.
- Sessions are isolated and parallel, survive laptop sleep, keep GitHub token outside the VM; output is a branch for a PR.
- Demo: three parallel sessions finished in ~87 seconds (flaky test fix, API doc fixes, JSON logging).
- Best for small-fix backlogs, CI auto-fix, plan-local/execute-cloud, untrusted code in disposable VMs.
- Included in Pro, Max, Team, Enterprise at no extra charge but uses same usage limits; local still better for VPN/GPU/hardware tasks.
Category: announcement
Date: 2026-10-06
URL: https://claude.dev/blog/claude-code-in-the-cloud/
