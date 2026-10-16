## How an Anthropic Japan BDR runs his day with a fleet of Claude agents
- Case study by BDR Shahboz Ibragimov on running his workday with six agents built on Claude Managed Agents (beta) and Claude Tag
- Agents handle lead routing, email drafts, CRM updates, prepared before his day starts
- Estimates about 60 hours saved
- Moved prototypes to Managed Agents for background scheduling, shared memory, scoped credential vaults
- Shows a non-developer can build an agent fleet in plain language; humans review judgment calls
Category: announcement
Date: 2026-10-16
URL: https://claude.com/resources/articles/how-an-anthropic-japan-business-development-representative-runs-his-day

## Code Review is now generally available
- Claude Code's PR review feature is GA for Team and Enterprise orgs
- Most reviews finish in 6-10 minutes, down from about 20 in preview
- Admins set per-repo depth: Quick, Standard (default), or Deep
- Setup via Claude Code settings plus GitHub App; auto-runs on new PRs
- Addresses review as the bottleneck as coding agents speed up code creation
Category: feature update
Date: 2026-10-15
URL: https://claude.com/resources/articles/code-review-is-now-generally-available

## Agent observability on the Claude Platform
- Public beta: Managed Agents, Messages API, and SDKs emit OpenTelemetry traces
- Managed Agents/Messages API need a destination set in Console; SDKs export automatically
- Records each turn, model call, tool use with latency, token counts, IDs
- Follows OTel GenAI conventions; works with Grafana Cloud, Datadog, Langfuse, Splunk
- Supports debugging, evals from production data, token tracking, and review before granting agents more access
Category: feature update
Date: 2026-10-14
URL: https://claude.com/resources/articles/agent-observability-on-the-claude-platform

## Uber's CISO on building an insider threat program for AI
- Interview with Uber CISO Philip Martin on insider-threat oversight for AI agents
- Uber pairs Anthropic's Enterprise Frontier Safeguards with its open-source AI Detection and Response (ADR) tool
- ADR collects real-time agent telemetry, detects out-of-bounds behavior, and can intervene
- Safeguards let Uber keep data control and decide responses to triggers
- Argues models need insider-risk monitoring like employees do
Category: announcement
Date: 2026-10-13
URL: https://claude.com/resources/articles/uber-s-ciso-on-building-an-insider-threat-program-for-ai

## Build live dashboards and animate explainers with Claude
- Dashboards (beta, paid plans): live dashboards from company data via Snowflake, BigQuery, Salesforce
- Motion (beta, Team/Enterprise): animated explainers from a prompt, editable code, MP4 export
- Docs, Slides, Design leave beta and are on all plans including Free
- Claude Design moves into Claude; standalone site stays until December 14
- Enterprise admins must enable in Organization settings > Artifacts (off by default)
Category: feature update
Date: 2026-10-08
URL: https://claude.com/resources/articles/dashboards-and-motion

## Building effective agent automations
- Reference implementation of a scheduled agent on Claude Managed Agents (beta) that posts a daily Slack brief from Slack and GitHub
- Per-source bookmarks instead of fixed 24-hour windows; ledger prevents duplicates
- Failures surfaced in the brief; post counted sent only on Slack ok:true
- Safety: credential vaults with placeholders, read-only GitHub, per-run budget cap
- Try via `claude update` then `/claude-api managed-agents-onboard <post URL>`
Category: announcement
Date: 2026-10-08
URL: https://claude.dev/blog/building-effective-agent-automations/

## How Block orchestrates Claude Fable across thousands of pull requests
- Interview with Block's Bradley Axen on using Claude Fable 5 for large-scale code migrations
- Fable plans and coordinates; cheaper models (Opus, Sonnet) do edits and tests; migrations can reach 1,000+ PRs
- Auto-selector matches tasks to models for cost efficiency
- Merges and deploys require security checks and two human approvals; Fable refuses to bypass them
- Takeaway: make model selection automatic and share context system-wide
Category: announcement
Date: 2026-10-08
URL: https://claude.com/resources/articles/how-block-orchestrates-claude-fable-across-thousands-of-pull-requests

## Claude Haiku 5.5
- New small model, claude-haiku-5-5; Anthropic's cheapest, fastest, most capable small model
- About 75% cheaper to run than Haiku 4.5; adds adjustable effort setting
- OSWorld 2.1 (offline subset) 72.4% vs 15.7% for Haiku 4.5
- Sonnet 5.5 cache reads halved to $0.10/M tokens; Max and Team get monthly API credit
- Suited to high-volume work: summaries, classification, subagents, live support
Category: announcement
Date: 2026-10-07
URL: https://www.anthropic.com/claude-haiku-5-5

## Automating eval design and hillclimbing with Claude
- Two new claude-api skill commands in Claude Code: `/claude-api build-eval` and `/claude-api hillclimb`
- build-eval interviews user, samples inputs, proposes cheapest grader, checks baseline headroom
- hillclimb patches one surface per round with train/test split; reverts overfit or regressing patches
- Support benchmark: cost 4.6c to 1c per ticket, held-out accuracy 78.6% to 90.5%
- Guardrails make eval gains more likely to hold in production
Category: feature update
Date: 2026-10-07
URL: https://claude.dev/blog/automating-eval-design-and-hillclimbing/

## How Comcast and Booz Allen use Claude Mythos to find exploit chains and secure their codebases
- Security teams used Claude Mythos-class models via Project Glasswing (limited access for critical infrastructure defenders)
- Comcast found a critical auth flaw across 258 systems, fixed before exploitation
- Booz Allen: one analyst reviewed 8 systems across 138 repos in 12 days; found a pre-boot key weakness
- Models trace exploit chains across code, config, identity, deployment that single-file scanners miss
- Validating findings is the new bottleneck; humans still confirm and route
Category: announcement
Date: 2026-10-06
URL: https://claude.com/resources/articles/how-comcast-booz-allen-use-claude-mythos-to-secure-their-codebases
