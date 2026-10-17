## How an Anthropic Japan BDR runs his day with a fleet of Claude agents
- A Japan business development rep runs six single-purpose Claude agents on Claude Managed Agents (lead routing, emails, CRM updates)
- Agents run on schedules without his laptop, share a memory store learning from his edits, and keep credentials in a managed vault
- Simple jobs run on smaller models, judgment-heavy work on larger ones; hard follow-ups go to Claude Tag in Slack
- He estimates about 60 hours saved, now spent on customers, strategy, and helping teammates build agents
- Lesson: "Give Claude more room, sooner"; a non-developer built a reliable agent workflow
Category: announcement
Date: 2026-10-16
URL: https://claude.com/resources/articles/how-an-anthropic-japan-business-development-representative-runs-his-day

## How the Claude Code team does code review
- Claude writes about 90% of Claude Code's code; machines do most reading, humans handle decisions machines do poorly
- Review runs continuously from before a PR exists; parallel AI reviewers verify findings; security review can block merges
- Human approval scales by risk (none, one, or two reviewers); merge queue, feature flags, staged releases, fast rollback
- Past incidents become an eval set scoring the reviewer; review rounds capped at three, re-reviews cover only new diff
- June to September: merged PRs more than doubled, revert share fell over 40%
Category: announcement
Date: 2026-10-16
URL: https://claude.dev/blog/solving-code-review-at-anthropic/

## Code Review is now generally available
- Claude Code's automatic PR review is now GA for Team and Enterprise
- Most reviews finish in about 6-10 minutes, down from roughly 20 in research preview
- Findings are shorter and target bugs that matter
- Admins choose Quick, Standard (default), or Deep per repository; setup via Claude Code settings and GitHub App
- Matters because review is the bottleneck as coding agents speed up code production
Category: feature update
Date: 2026-10-15
URL: https://claude.com/resources/articles/code-review-is-now-generally-available

## Agent observability on the Claude Platform
- OpenTelemetry tracing for Claude Managed Agents, Messages API, and SDKs; public beta
- Add a destination in Claude Console; each agent turn, model call, and tool use is exported as an OTel trace (latency, tokens, IDs)
- Follows OTel GenAI semantic conventions; works with Grafana Cloud, Datadog, Langfuse, Splunk, any OTLP endpoint
- Lets teams review agent behavior before granting more access and track org-wide token usage
- Setup steps are in the Claude Platform OpenTelemetry docs
Category: feature update
Date: 2026-10-14
URL: https://claude.com/resources/articles/agent-observability-on-the-claude-platform

## Uber's CISO on building an insider threat program for AI
- Interview with Uber CISO Philip Martin on insider threat monitoring for AI agents
- Covers Uber's open-source AI Detection and Response (ADR) tooling and Anthropic's Enterprise Frontier Safeguards
- Uber controls its data and response; Anthropic's classifier output is one input alongside Uber telemetry
- Long-context models make threat modeling more specific; Claude pulls context from code, design docs, and tickets
- Advice: real-time detection and intervention, and turning emerging model behaviors into new safeguards
Category: announcement
Date: 2026-10-13
URL: https://claude.com/resources/articles/uber-s-ciso-on-building-an-insider-threat-program-for-ai

## Build live dashboards and animate explainers with Claude
- New betas: Claude Dashboards (paid plans) and Claude Motion (Team and Enterprise)
- Dashboards connect to Snowflake, Salesforce, etc., update live, and trace each number to its query
- Motion makes editable, code-based animated explainers, exportable as MP4, with no generated footage
- Docs, Slides, and Design leave beta and are available on every plan including Free
- Standalone Claude Design moves into Claude conversations; old URL stays until December 14
Category: feature update
Date: 2026-10-08
URL: https://claude.com/resources/articles/dashboards-and-motion

## Building effective agent automations
- Reference implementation of a scheduled "daily brief" agent on Claude Managed Agents (beta), reading Slack and GitHub PRs and posting to Slack
- Defined as config files applied with `ant apply`; credentials in a vault outside the sandbox, read-only scoped tokens
- Reliability patterns: per-source bookmarks, failed sources reported as unreadable, bookmarks updated only after Slack confirms
- Guardrails include domain allowlist and per-run spend cap (in cents; start at 3-5x normal run cost)
- Try via `claude update` then `/claude-api managed-agents-onboard <article URL>`
Category: announcement
Date: 2026-10-08
URL: https://claude.dev/blog/building-effective-agent-automations/

## How Block orchestrates Claude Fable across thousands of pull requests
- Interview with Block's Bradley Axen on using Claude Fable 5 as orchestrator
- Fable handles high-level design, directing smaller models (Opus, Sonnet) for file edits and tests
- Used for migrations spanning thousands of PRs with human steering; lowers cost without reported quality loss
- Merges and production deploys need security checks and two human approvals
- Building an auto-selector to match model and effort level to task
Category: announcement
Date: 2026-10-08
URL: https://claude.com/resources/articles/how-block-orchestrates-claude-fable-across-thousands-of-pull-requests

## Claude Haiku 5.5
- New small model `claude-haiku-5-5`, billed as Anthropic's cheapest, fastest, most capable small model
- About 75% cheaper than Haiku 4.5 on average; first Haiku-class model with adjustable effort
- Sonnet 5.5 cache-read price halved (about 20% cheaper on most agentic work); Max and Team get monthly API credits
- OSWorld 2.1 (offline subset) rose from 15.7% to 72.4%
- Suited to high-volume, latency-sensitive work and as a subagent; Sonnet 5.5 and Opus 5.5 remain better for complex coding
Category: announcement
Date: 2026-10-07
URL: https://www.anthropic.com/claude-haiku-5-5

## Automating eval design and hillclimbing with Claude
- Playbook plus two `claude-api` skill commands in Claude Code: `/claude-api build-eval` and `/claude-api hillclimb`
- `build-eval` interviews you, samples inputs, picks the cheapest fitting grader, and checks baseline for noise and headroom
- `hillclimb` splits train/test, proposes one patch per round, keeps it only if both scores improve
- Held-out split guards against overfitting and flawed evals
- Example: cost per support ticket fell 4.6c to 1c while held-out accuracy rose 78.6% to 90.5%
Category: feature update
Date: 2026-10-07
URL: https://claude.dev/blog/automating-eval-design-and-hillclimbing/
