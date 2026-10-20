## Redesigning source control at Anthropic
- Describes Scion, Anthropic's in-house version control system for its monorepo, migrated from git in five months.
- Server-centric design: server handles history, blame, commits, merges; clients fetch only needed data via sparse/virtualized checkouts.
- Driver: daily merges grew from ~2,500 (May 2026) to 30,000+ (Sept); git's offline-first design became a bottleneck.
- Reported results: infrastructure ~200x smaller than the prior git mirroring setup; CI and research checkouts take seconds, not minutes.
- Suggests AI-driven development will push other orgs to similar scaling limits.
Category: announcement
Date: 2026-10-19 (listing; article page shows Oct 13, 2026)
URL: https://www.anthropic.com/engineering/redesigning-source-control

## How an Anthropic BDR in Japan runs his day with Claude Managed Agents
- First-person account from a Japan-team business development rep on running his workday with agents on Claude Managed Agents (beta).
- Five scheduled agents handle lead routing, triage, draft replies, CRM updates, meeting follow-ups; a sixth coordinator updates the others.
- Rule-based work runs on Sonnet, judgment-heavy work on Opus; agents share a memory store.
- Estimated ~60 hours saved, redirected to customer conversations and outbound strategy.
- Advice: describe each job once, let shared knowledge carry context, delegate sooner.
Category: announcement
Date: 2026-10-16
URL: https://claude.com/resources/articles/how-an-anthropic-japan-business-development-representative-runs-his-day

## How the Claude Code team does code review
- Claude Code team explains its review process when agents write ~90% of the code.
- Review is continuous: Claude self-reviews before a PR exists, and an AI reviewer checks every PR before humans.
- Human review is risk-tiered (none / one / two reviewers) via a classifier based on the change, not the author.
- Merged PRs more than doubled June to September; reverted-change share fell by over 40%.
- Incidents become eval cases for the reviewer; adoptable steps include REVIEW.md, required CI, merge queues, feature flags.
Category: announcement
Date: 2026-10-16
URL: https://claude.dev/blog/solving-code-review-at-anthropic/

## Code Review is now generally available
- Claude Code's Code Review for pull requests is GA for Team and Enterprise after research preview.
- Reviews are ~3x faster (about 20 min down to 6-10 min).
- Admins set each repo to Quick, Standard (default), or Deep; findings are clearer and more concise.
- Review is positioned as the bottleneck now that coding agents speed up writing.
- Setup: enable in Claude Code settings, install the GitHub App, select repos; runs automatically on new PRs.
Category: feature update
Date: 2026-10-15
URL: https://claude.com/resources/articles/code-review-is-now-generally-available

## Agent observability on the Claude Platform
- Claude Platform now exports OpenTelemetry traces from Managed Agents, the Messages API, and SDKs (public beta).
- Managed Agents and Messages API need a destination configured in the Claude Console; SDKs export automatically.
- Traces cover agent turns, model calls, tool use, with latency, token counts, and IDs.
- Follows OTel GenAI semantic conventions; works with Grafana Cloud, Datadog, Langfuse, Honeycomb, any OTLP endpoint.
- Enables debugging alongside existing logs, turning production traces into evals, and tracking org token usage.
Category: feature update
Date: 2026-10-14
URL: https://claude.com/resources/articles/agent-observability-on-the-claude-platform

## Uber's CISO on building an insider threat program for AI
- Interview with Uber CISO Philip Martin on treating AI agents like insiders in a threat program.
- Frontier models handle far more context, enabling more specific threat models; agents may eventually share them.
- Uber pairs Anthropic's Enterprise Frontier Safeguards with its open-source AI Detection and Response tool and an LLM gateway.
- Uber keeps control of its data and decides responses when a safeguard triggers.
- Priorities: real-time detection and intervention, and feeding emerging model-behavior findings back into safeguards.
Category: announcement
Date: 2026-10-13
URL: https://claude.com/resources/articles/uber-s-ciso-on-building-an-insider-threat-program-for-ai

## Build live dashboards and animate explainers with Claude
- Introduces Claude Dashboards and Claude Motion (beta): live data dashboards and animated explainers from plain-language requests.
- Dashboards connect to BigQuery, Databricks, Snowflake, Salesforce, and update as data changes.
- Motion is on Team and Enterprise; exports MP4, no AI-generated video footage.
- Docs, Slides, and Design are out of beta on all plans including Free.
- Claude Design moved into Claude; the standalone site closes December 14.
Category: feature update
Date: 2026-10-08
URL: https://claude.com/resources/articles/dashboards-and-motion

## Building effective agent automations
- Guide by Lance Martin and CJ Avilla on scheduled automations with Claude Managed Agents (beta); reference "daily brief" agent in anthropics/claude-quickstarts.
- Six components: sources, destination, agent, schedule, memory, guardrails; credentials in vaults, bookmarks per source.
- Safeguards: failed reads reported as unreadable, re-check before posting, record posts only on Slack "ok": true, per-run budget cap.
- Addresses silent failures of background agents (lost access, double-posting).
- Setup can be automated with /claude-api managed-agents-onboard in Claude Code.
Category: announcement
Date: 2026-10-08
URL: https://claude.dev/blog/building-effective-agent-automations/

## How Block orchestrates Claude Fable across thousands of pull requests
- Interview with Block's Head of AI Capabilities about using Claude Fable models for engineering.
- Fable orchestrates company-wide migrations spanning thousands of PRs; Opus/Sonnet handle file edits and tests.
- Frontier tokens go to upfront planning, cheaper models do bulk work, with no reported quality drop; Block is building a model/effort auto-selector.
- Safeguards: two-person human approval for merges to main and prod deploys, plus security checks.
- Frames a shift from writing code to designing migrations and managing tech debt.
Category: announcement
Date: 2026-10-08
URL: https://claude.com/resources/articles/how-block-orchestrates-claude-fable-across-thousands-of-pull-requests

## Claude Haiku 5.5
- New small model (claude-haiku-5-5), billed as Anthropic's cheapest, fastest, most capable small model.
- ~75% cheaper to run on average than Haiku 4.5; first Haiku with an adjustable effort setting.
- Sonnet 5.5 cache reads halved, cutting its cost on most agentic work by ~20%.
- Suited to summaries, classification, DB queries, and as a subagent beside Sonnet 5.5 and Opus 5.5; Box saw +11 points at about half the latency.
- Max and Team subscribers get monthly API credits.
Category: announcement
Date: 2026-10-07
URL: https://www.anthropic.com/claude-haiku-5-5
