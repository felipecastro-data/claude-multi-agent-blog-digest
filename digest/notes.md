## Build live dashboards and animate explainers with Claude
- Two new features: Dashboards (plain-language questions to always-current charts) and Motion (prompts to short animated explainers)
- Dashboards in beta on paid plans; connects to BigQuery, Databricks, Snowflake, Salesforce
- Motion in beta on Team and Enterprise; exports MP4
- Docs, Slides, and Design are out of beta and on all plans including Free
- Charts show underlying query; animations are editable code, so results are checkable
Category: feature update
Date: 2026-10-08
URL: https://claude.com/resources/articles/dashboards-and-motion

## Agent observability on the Claude Platform
- Public beta: Managed Agents, Messages API, and SDKs send OpenTelemetry traces to any OTel-compatible tool
- Add a destination in Claude Console; each agent turn, model call, and tool use becomes a trace (latency, tokens, IDs)
- Follows OTel GenAI semantic conventions; works with Grafana Cloud, Honeycomb, Datadog, Langfuse, any OTLP endpoint
- SDKs export traces automatically
- Helps debug failures, review agent behavior, build evals from production traces, track token usage
Category: feature update
Date: 2026-10-14
URL: https://claude.com/resources/articles/agent-observability-on-the-claude-platform

## Uber's CISO on building an insider threat program for AI
- Interview with Uber CISO Philip Martin on treating AI agents like insiders needing monitoring
- Newer models use long-horizon context (code, design docs, tickets) for more specific threat models and security reviews
- Uber uses Enterprise Frontier Safeguards and retains control over its data and safeguard responses
- Open-source AI Detection and Response (ADR) tool combines Anthropic classifier output with Uber signals, plus an LLM gateway
- Priorities: real-time intervention and detecting new model behaviors
Category: announcement
Date: 2026-10-13
URL: https://claude.com/resources/articles/uber-s-ciso-on-building-an-insider-threat-program-for-ai

## Building effective agent automations
- Reference implementation for scheduled agents that read Slack/GitHub, track changes since last run, and post a brief to Slack, on Claude Managed Agents (beta)
- Config files (agent, schedule, memory, vault, guardrails) applied via `ant apply`; `/claude-api managed-agents-onboard` sets it up in Claude Code
- Practices: per-source bookmarks not time windows, report failed reads as "unreadable", re-check before posting, count sent only after Slack confirms
- Safety/cost: scoped read-only credentials in vaults, per-run `budget` cap
- Prevents silent failures like lost access, duplicates, or drift
Category: feature update
Date: 2026-10-08
URL: https://claude.dev/blog/building-effective-agent-automations/

## How Block orchestrates Claude Fable across thousands of pull requests
- Block's Bradley Axen describes using Claude Fable 5 to orchestrate large code migrations
- Fable does high-level design; smaller models (Opus/Sonnet) do file edits and tests
- One migration spans thousands of PRs; about a thousand Fable-orchestrated PRs merged
- Frontier model for planning plus cheaper models for execution reportedly cuts cost without hurting quality
- Humans keep control of merges and deploys (security checks, two approvals); Claude refuses to bypass dual approval
Category: announcement
Date: 2026-10-08
URL: https://claude.com/resources/articles/how-block-orchestrates-claude-fable-across-thousands-of-pull-requests

## Claude Haiku 5.5
- New lowest-cost, fastest small model (`claude-haiku-5-5`) for high-volume work
- Average running costs about 75% lower than Haiku 4.5
- First Haiku-class model with adjustable effort setting
- Sonnet 5.5 cache-read prices halved; Max and Team subscribers get monthly API credits
- Suits summaries, classification, subagents, live support, browser use; on AWS, Google Cloud, Azure
Category: announcement
Date: 2026-10-07
URL: https://www.anthropic.com/claude-haiku-5-5

## Automating eval design and hillclimbing with Claude
- Lance Martin post on designing evals and hillclimbing without overfitting; adds `/claude-api build-eval` and `/claude-api hillclimb` commands
- Good evals mirror production, leave headroom, have low variance; hard cases chosen by human judgment
- build-eval interviews, samples inputs, proposes and validates a grader, runs baseline; hillclimb uses train/test split and keeps changes only if both improve
- Example: Sonnet 5 low effort with better prompt hit 98.9% accuracy at about 1 cent/ticket (down from 4.6 cents)
- claude-api skill eval pass rate rose from 66% to about 88%
Category: feature update
Date: 2026-10-07 (listing; article page itself shows Sep 28, 2026)
URL: https://claude.dev/blog/automating-eval-design-and-hillclimbing/

## How Comcast and Booz Allen use Claude Mythos to find exploit chains and secure their codebases
- Both used Claude Mythos-class models via Project Glasswing to find and fix security flaws
- Models reason across code, config, and live behavior, surfacing exploit chains that single-file scanners miss
- Comcast: assessed 258 critical systems (~170M lines of code); found critical auth flaw and fixed it before exploitation
- Booz Allen: traced unprotected boot-code key across two languages; one analyst covered 8 systems/138 repos in 12 days
- Validation of findings is the new bottleneck; humans still must triage and continuously review
Category: announcement
Date: 2026-10-06
URL: https://claude.com/resources/articles/how-comcast-booz-allen-use-claude-mythos-to-secure-their-codebases

## Claude now works with Google Docs, Sheets, and Slides
- Claude for Google Workspace: public beta add-on with sidebar in Docs, Sheets, Slides; all paid plans
- Reads open file and selection and edits directly (rewrites, formulas, pivot tables, charts, slides matching layouts)
- "Ask before edits" default; "Accept all edits" optional
- New Docs/Sheets/Slides connectors (beta) to create and edit files from chat, respecting sharing permissions
- Enterprise controls carry over (Compliance API, customer-managed keys)
Category: feature update
Date: 2026-10-06
URL: https://claude.com/resources/articles/claude-now-works-in-google-docs-sheets-and-slides

## We're expanding the Claude Startups program to help founders build
- Claude Startups program for founders expands to more founders
- Adds Claude Startup Stack: discounts and credits on tools, worth up to $45,000
- Members get up to $7,000 Claude value: free year of Claude Team (new Team companies), one-time $1,000 API credit
- Office hours with Applied AI team; approved products can list in Claude Marketplace
- Oct 13 update: current cohort full, applications paused
Category: announcement
Date: 2026-10-06
URL: https://claude.com/resources/articles/were-expanding-the-claude-startups-program-to-help-founders-build
