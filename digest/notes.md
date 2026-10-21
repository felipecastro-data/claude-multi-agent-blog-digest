## Redesigning source control at Anthropic
- Anthropic built Scion, an in-house version control system replacing git for its monorepo, plus Antique, a code review tool; migration took about 5 months
- Server handles history, blame, commits, merges; clients are always online and fetch only needed data via sparse/virtualized checkouts
- Reports about 200x less CPU/memory than old git mirrors, checkouts in seconds, 25% CI CPU capacity gain
- Claude's coding speed shifted the bottleneck to human-scale developer infrastructure
- Scion is not a general git replacement; lessons may help git platforms handle agent-scale workloads
Category: announcement
Date: 2026-10-19
URL: https://www.anthropic.com/engineering/redesigning-source-control

## How an Anthropic BDR in Japan runs his day with Claude Managed Agents
- First-person case study of a Japan BDR running a fleet of six agents on Claude Managed Agents (beta)
- Agents handle lead routing, triage, email drafts, CRM updates, meeting follow-ups on schedules; he reviews output
- Estimated savings about 60 hours per week
- Shared memory store, credentials in scoped vaults, escalations via Claude Tag in Slack; Sonnet for rule-based work, Opus for judgment
- Lesson: a well-maintained shared knowledge base beats longer prompts; extend responsibility as agents prove reliable
Category: announcement
Date: 2026-10-16
URL: https://claude.com/resources/articles/how-an-anthropic-japan-business-development-representative-runs-his-day

## How the Claude Code team does code review
- Claude writes about 90% of the Claude Code codebase; review is layered: self-check, AI and security review on every PR, human approval scaled to risk
- June to September: merged PRs more than doubled, revert share fell over 40%
- Approval tiers (none/one/two humans) set by a classifier on the change; sensitive paths (billing, auto-updater, CI) always need a human
- Past incidents/reverts form a daily eval set; convergence limits (3-round cap, diff-only re-review) stop agent author/reviewer loops
- Argues the right question is which check best catches a given risk, not "did a human read it"
Category: announcement
Date: 2026-10-16
URL: https://claude.dev/blog/solving-code-review-at-anthropic/

## Code Review is now generally available
- Claude Code automated PR review leaves research preview; available to Team and Enterprise orgs
- Reviews about 3x faster, from about 20 min to 6-10 min
- Findings are concise: problem, trigger, and fix
- Admins set per-repo depth: Quick, Standard (default), or Deep
- Addresses the review bottleneck as coding agents speed up code writing
Category: feature update
Date: 2026-10-15
URL: https://claude.com/resources/articles/code-review-is-now-generally-available

## Agent observability on the Claude Platform
- Claude Managed Agents, Messages API, and Claude SDKs can export OpenTelemetry traces (public beta)
- Add a destination in Claude Console; each agent turn, model call, and tool use is traced with latency, token counts, IDs
- Follows OTel GenAI semantic conventions; works with Grafana Cloud, Honeycomb, Datadog, Langfuse, any OTLP endpoint
- SDKs export traces automatically
- Helps review agent behavior before granting access, debug, build evals from production traces, track token usage
Category: feature update
Date: 2026-10-14
URL: https://claude.com/resources/articles/agent-observability-on-the-claude-platform

## Uber's CISO on building an insider threat program for AI
- Interview with Uber CISO Philip Martin on monitoring AI agents
- Uber's open-source AI Detection and Response (ADR) tool collects real-time telemetry and acts when agents exceed bounds
- Anthropic's Enterprise Frontier Safeguards outputs can feed into ADR as a data source
- Newer models use more context (code, design docs, tickets) for better security reviews and threat models
- Argues agents need insider threat programs like those for employees
Category: announcement
Date: 2026-10-13
URL: https://claude.com/resources/articles/uber-s-ciso-on-building-an-insider-threat-program-for-ai

## Build live dashboards and animate explainers with Claude
- Dashboards (beta, paid plans): plain-language questions on connected data (Snowflake, Salesforce) become live charts; click a number to see its query
- Motion (beta, Team and Enterprise): prompt-built animated explainers as editable code, downloadable as MP4, no generated footage
- Docs, Slides, and Design are out of beta on every plan including Free
- Claude Design moved from its standalone site into Claude; old URL works until December 14
- Lets teams get answers and presentations without tickets or SQL
Category: feature update
Date: 2026-10-08
URL: https://claude.com/resources/articles/dashboards-and-motion

## Building effective agent automations
- Reference implementation "daily-brief" on Claude Managed Agents (beta): reads Slack/GitHub on a cron schedule and posts a brief to Slack
- Defined by config files and deployed with `ant apply`; a Claude Code onboarding command is included
- Reliability patterns: per-source bookmarks, report failed reads as unreadable, re-check live status, confirm Slack "ok": true before updating state
- Guardrails: credentials in vaults, read-only tokens, per-run spending cap (pauses with budget_reached)
- Makes silent background-agent failures visible and bounded
Category: feature update
Date: 2026-10-08
URL: https://claude.dev/blog/building-effective-agent-automations/

## How Block orchestrates Claude Fable across thousands of pull requests
- Interview with Block's Bradley Axen on using Claude Fable 5 for company-wide code migrations
- Fable plans (data models, API specs, algorithms) and directs Opus/Sonnet to edit files and run tests; one migration can yield about 1,000 merged PRs
- Block benchmarks models at each effort level and uses an auto-selector to match tasks to models
- Safeguards: two-person human approval for merges to main and prod deploys, security checks first; Fable refuses to bypass approval
- Engineers shift to designing migrations and reviewing agent behavior; tiered models cut cost
Category: announcement
Date: 2026-10-08
URL: https://claude.com/resources/articles/how-block-orchestrates-claude-fable-across-thousands-of-pull-requests

## Claude Haiku 5.5
- New small model, Anthropic's cheapest and fastest yet; API ID `claude-haiku-5-5`
- About 75% cheaper than Haiku 4.5; $0.10/M input, $0.50/M output tokens (prompts up to 100k)
- First Haiku-class model with adjustable effort setting
- Sonnet 5.5 cache-read price halved (about 20% cost cut on most agentic work); Max and Team get monthly API credits
- Suited to summarization, classification, subagents, live support; Sonnet/Opus 5.5 still better for complex agentic coding
Category: announcement
Date: 2026-10-07
URL: https://www.anthropic.com/claude-haiku-5-5
