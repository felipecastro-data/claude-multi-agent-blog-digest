## How an Anthropic BDR in Japan runs his day with Claude Managed Agents
- Japan BDR built "Nakama", a fleet of six agents on Claude Managed Agents (beta) for lead routing/triage, email drafts, CRM updates, follow-ups
- Moved from laptop prototypes to managed deployments: cloud schedules, shared memory store, versioned instructions, credential vaults
- Model tiering: Sonnet for rule-based agents, Opus for judgment, Sonnet with Opus advisor for replies
- Saves about 60 hours by his weekly log; he still reviews drafts and judgment items
- Shows non-developers can run scheduled business agents; single-purpose agents and shared memory help
Category: announcement
Date: 2026-10-16
URL: https://claude.com/resources/articles/how-an-anthropic-japan-business-development-representative-runs-his-day

## How the Claude Code team does code review
- Claude Code team's layered, mostly automated review process; Claude writes ~90% of its code
- Review runs continuously; multiple agents verify findings; security review can block merges; risk-tier classifier sets 0-2 human approvals
- June-Sept: merged PRs more than doubled, reverts down 40%+, PRs with substantive comments 16% to 54%, review rounds 2.08 to 1.32
- Incidents become daily eval cases; REVIEW.md and CLAUDE.md encode standards; rounds capped at three
- Humans focus on direction, risky code, architecture; gaps noted (no circuit breakers, long agent-vs-agent loops)
Category: announcement
Date: 2026-10-16
URL: https://claude.dev/blog/solving-code-review-at-anthropic/

## Code Review is now generally available
- Claude Code's PR review feature is GA for Team and Enterprise after research preview
- Reviews about 3x faster (about 20 min to 6-10 min)
- Concise findings: problem, trigger, fix
- Admins pick Quick, Standard (default), or Deep per repository
- Addresses review bottleneck as coding agents speed up code creation; enable via settings plus GitHub App
Category: feature update
Date: 2026-10-15
URL: https://claude.com/resources/articles/code-review-is-now-generally-available

## Agent observability on the Claude Platform
- Public beta exporting OpenTelemetry traces from Managed Agents, Messages API, and SDKs
- Add a destination in Claude Console; each agent turn, model call, and tool use exported with latency, tokens, IDs
- Follows OTel GenAI semantic conventions; works with Grafana Cloud, Datadog, Honeycomb, Langfuse, any OTLP endpoint
- SDKs export automatically; Managed Agents and Messages API need Console destination
- Lets teams inspect agent behavior before granting more access; feeds evals and usage tracking
Category: feature update
Date: 2026-10-14
URL: https://claude.com/resources/articles/agent-observability-on-the-claude-platform

## Uber's CISO on building an insider threat program for AI
- Interview with Uber CISO Philip Martin on insider threat for AI agents
- Uber pairs Anthropic's Enterprise Frontier Safeguards with its open-source AI Detection and Response (ADR) tool
- Long-context frontier models make security reviews and threat models more specific
- Uber keeps data inaccessible to Anthropic without permission and decides responses to triggers; classifier output feeds Uber's ADR and LLM gateway
- Argues models need insider-risk monitoring like employees, with real-time intervention
Category: announcement
Date: 2026-10-13
URL: https://claude.com/resources/articles/uber-s-ciso-on-building-an-insider-threat-program-for-ai

## Build live dashboards and animate explainers with Claude
- Two beta features: live dashboards and Claude Motion animated explainers
- Dashboards connect to BigQuery, Databricks, Snowflake, Salesforce; auto-update, numbers link to queries; paid plans
- Motion turns a prompt into editable code-built animation, exports MP4; Team and Enterprise; no generated footage
- Docs, Slides, Design left beta and are on all plans including Free; standalone Design site stays until Dec 14
- Lets non-technical staff get data answers and presentations without SQL or tickets
Category: feature update
Date: 2026-10-08
URL: https://claude.com/resources/articles/dashboards-and-motion

## Building effective agent automations
- Reference implementation of a scheduled daily-brief agent reading Slack and GitHub PRs, posting to Slack, on Claude Managed Agents (beta)
- Per-source bookmarks instead of fixed time windows avoid skipped or repeated items
- Failed sources reported as unreadable; posts only confirmed; state updated after Slack confirmation
- Credentials in vault, read-only GitHub, network allowlist, per-run spending cap (suggest 3-5x normal cost)
- Addresses silent failures of background agents
Category: announcement
Date: 2026-10-08
URL: https://claude.dev/blog/building-effective-agent-automations/

## How Block orchestrates Claude Fable across thousands of pull requests
- Interview with Block's Bradley Axen on using Claude Fable 5 for engineering
- Fable plans large migrations and directs Opus/Sonnet to edit and test; one migration may merge ~1,000 PRs
- Building a model auto-selector; benchmarks each model at each effort level to use cheaper models for routine work
- Merges and deploys still need human approval (two approvers); Claude refuses to bypass it
- Frontier models moving to coordinating work across many sessions with human control of risk
Category: announcement
Date: 2026-10-08
URL: https://claude.com/resources/articles/how-block-orchestrates-claude-fable-across-thousands-of-pull-requests

## Claude Haiku 5.5
- New small model (claude-haiku-5-5), released Oct 7, 2026; cheapest, fastest, most capable small model
- Prices ~90% lower than Haiku 4.5 for prompts under 100K tokens; Sonnet 5.5 cache-read price halved
- First Haiku with adjustable effort setting; higher benchmarks (OSWorld 2.1, Humanity's Last Exam)
- Suited to summaries, compaction, classification, subagents, support, browser use; Sonnet/Opus 5.5 better for complex agentic coding
- Available on AWS, Google Cloud, Azure
Category: announcement
Date: 2026-10-07
URL: https://www.anthropic.com/claude-haiku-5-5

## Automating eval design and hillclimbing with Claude
- Playbook implemented as `/claude-api build-eval` and `/claude-api hillclimb` in Claude Code's claude-api skill
- build-eval interviews you, samples inputs, picks cheapest grader, runs baseline and checks consistency/headroom
- hillclimb splits train/test, proposes one patch per round, keeps it only if both improve (guards overfitting)
- Example: Opus 4.8 at 4.6 cents/ticket to Sonnet 5 at ~1 cent, held-out score 78.6% to 90.5%
- Start with `claude update`
Category: feature update
Date: 2026-10-07
URL: https://claude.dev/blog/automating-eval-design-and-hillclimbing/
