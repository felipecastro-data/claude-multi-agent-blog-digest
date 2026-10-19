## Redesigning source control at Anthropic
- Engineering post on Scion, Anthropic's in-house source control system, and Antique, its code review tool, built for its large monorepo
- Monorepo moved from git to Scion in about five months; servers handle history/commits/merges, clients fetch only needed files, and clients are assumed always online (mostly agents and CI)
- Daily merges grew from about 2,500 (May 2026) to over 30,000 (Sept), making git a bottleneck
- Reported results: infrastructure footprint down about 200x, checkouts about 100x faster
- Not a general git replacement; Claude wrote much of the code (article page shows Oct 13, listing shows Oct 19)
Category: announcement
Date: 2026-10-19
URL: https://www.anthropic.com/engineering/redesigning-source-control

## How an Anthropic BDR in Japan runs his day with Claude Managed Agents
- First-person account from a Japan BDR running six agents on Claude Managed Agents (beta)
- Agents route and qualify leads, draft JP/EN emails, update Salesforce, and summarize meetings
- Each agent has one job and a schedule; shared memory store learns from his edits; credentials in scoped vaults; Sonnet for simple rules, Opus for judgment
- Estimated savings of about 60 hours of work
- Lessons: describe a job once, invest in shared knowledge over longer prompts, give agents responsibility sooner
Category: announcement
Date: 2026-10-16
URL: https://claude.com/resources/articles/how-an-anthropic-japan-business-development-representative-runs-his-day

## How the Claude Code team does code review
- Describes review process when agents write about 90% of the Claude Code codebase
- Review runs continuously, starting before a PR exists; an AI reviewer checks every PR and security review can block merges
- Human approval scales with risk: none for low, one for medium, two for high
- June to Sept: merged PRs more than doubled, reverts share down over 40%, substantive AI comments 16% to 54%, review rounds 2.08 to 1.32
- Keep CLAUDE.md and REVIEW.md current and turn incidents into evals; gap remains: no circuit breakers on rising revert rates (article page shows Oct 15, listing Oct 16)
Category: announcement
Date: 2026-10-16
URL: https://claude.dev/blog/solving-code-review-at-anthropic/

## Code Review is now generally available
- Claude Code's automatic PR review is GA for Team and Enterprise
- Reviews about 3x faster than preview (about 6-10 min vs about 20), with more concise findings and more bugs that matter caught
- Admins can set each repo to Quick, Standard (default), or Deep review
- Setup: enable in Claude Code settings, install GitHub App, select repos
- Eligible Enterprise orgs can claim at least $10,000 in credits by Jan 15, 2027
Category: feature update
Date: 2026-10-15
URL: https://claude.com/resources/articles/code-review-is-now-generally-available

## Agent observability on the Claude Platform
- Claude Platform now exports OpenTelemetry traces from Managed Agents, Messages API, and SDKs (public beta)
- Each agent turn, model call, and tool use is a trace with latency, token usage, and IDs; Managed Agents and Messages API need a Console destination, SDKs export automatically
- Follows OTel GenAI semantic conventions; works with Grafana Cloud, Datadog, Langfuse, Honeycomb, any OTLP endpoint
- Lets teams debug agents with existing tooling, build evals from production traces, and track org token usage
- Reviewing traces before widening agent access is suggested as a trust-building step
Category: feature update
Date: 2026-10-14
URL: https://claude.com/resources/articles/agent-observability-on-the-claude-platform

## Uber's CISO on building an insider threat program for AI
- Interview with Uber CISO Philip Martin on treating AI agents like insiders in security programs
- Frontier models use long-horizon context (code, design docs, tickets) for more specific threat models; per-service agents envisioned
- Enterprise Frontier Safeguards let Uber choose responses to triggers; Anthropic cannot access Uber data without permission
- Uber's open-source AI Detection and Response (ADR) ingests agent harness telemetry and safeguard output alongside its LLM gateway
- Priorities: real-time intervention and detecting new model behaviors
Category: announcement
Date: 2026-10-13
URL: https://claude.com/resources/articles/uber-s-ciso-on-building-an-insider-threat-program-for-ai

## Building effective agent automations
- Reference implementation on Claude Managed Agents (beta) for scheduled agents; sample daily-brief agent reads Slack/GitHub and posts a brief to Slack
- Code in anthropics/claude-quickstarts under managed-agents/daily-brief; configured via files applied with the ant CLI
- Guards against gaps/repeats (per-source bookmarks), silent source failures, duplicate posts, and date/time zone errors
- Cron schedule, per-run budget cap, read-only preferences store, credentials in a vault outside the sandbox
- Start with claude update, then /claude-api managed-agents-onboard; prompt injection in source text remains a caveat
Category: feature update
Date: 2026-10-08
URL: https://claude.dev/blog/building-effective-agent-automations/

## How Block orchestrates Claude Fable across thousands of pull requests
- Block's Bradley Axen on using Claude Fable 5 for large-scale software work
- Fable orchestrates company-wide migrations across many sessions and thousands of PRs, delegating edits and tests to Opus/Sonnet
- Model choice treated as optimization: frontier for planning, cheaper models for routine tasks
- Merges to main and prod deploys still need two human approvals; Claude refuses attempts to bypass dual approval
- Shows frontier models moving to multi-agent orchestration, making cost and oversight central
Category: announcement
Date: 2026-10-08
URL: https://claude.com/resources/articles/how-block-orchestrates-claude-fable-across-thousands-of-pull-requests

## Build live dashboards and animate explainers with Claude
- Launches Claude Dashboards (beta, paid plans) and Claude Motion (beta, Team and Enterprise)
- Dashboards connect to BigQuery, Databricks, Snowflake, Salesforce; plain-language questions, auto-updating, click any number to see its query
- Motion builds editable-code animated explainers exportable as MP4, without a video generation model
- Docs, Slides, and Design are out of beta on all plans including Free; standalone claude.ai/design stays until Dec 14
- Gives teams data answers and polished visuals without tickets or SQL
Category: feature update
Date: 2026-10-08
URL: https://claude.com/resources/articles/dashboards-and-motion

## Claude Haiku 5.5
- New small model, billed as Anthropic's cheapest, fastest, most capable small model
- About 75% cheaper to run than Haiku 4.5 on average; first Haiku with adjustable effort setting
- Sonnet 5.5 cache-read prices halved; monthly API credits added for Max and Team subscribers
- Suited to high-volume narrow tasks (summaries, classification, DB queries), cheap subagents, live support, browser use
- Available on AWS, Google Cloud, Azure; model ID claude-haiku-5-5
Category: announcement
Date: 2026-10-07
URL: https://www.anthropic.com/claude-haiku-5-5
