## Building agents: When to fold subagents into your main agent loop
- Guidance on replacing multi-agent orchestrator/subagent setups with a single agent loop; includes a migration kit
- One model, one context window, tool loop; domain knowledge in on-demand skills, tools loaded via tool search
- Single agent with skills often beat subagent designs on quality, cost, latency; one customer saw ~2x faster runtime
- Newer models handle more in one loop, so compensating harness logic can be removed
- Adopt by building a small eval, folding in one subagent at a time; keep subagents for parallel work or context bloat
Category: announcement
Date: 2026-10-22
URL: https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop

## The full Claude Platform, available on Google Cloud
- Anthropic-managed Claude models on Google Cloud now generally available with full Claude Platform features
- Uses Google Cloud IAM, single Google Cloud invoice, counts toward existing commitments
- New features and betas ship same day as native platform; US and Global endpoints
- Includes Managed Agents (beta), code execution, computer use, skills, web search, MCP connector, caching, batch
- Fast Mode for Claude Opus 5.5 GA (up to 2.5x faster output, $8/$40 per M tokens); Google-managed option remains for data residency
Category: feature update
Date: 2026-10-22
URL: https://claude.com/resources/articles/claude-models-on-google-cloud-anthropic-managed

## HCLTech joins the Claude Partner Network as a Global Premier partner
- HCLTech (230,000+ people, 60 countries) becomes a Global Premier Partner
- Will build agentic solutions via a dedicated Anthropic Business Unit and Center of Excellence
- Embeds Claude in HCLSoftware (BigFix, AppScan, Actian AI analyst) and Claude/Claude Code in AI Force
- Guardrails and human review; clients can test in secure sandboxes
- Targets regulated sectors: banking, healthcare, telecom, manufacturing
Category: announcement
Date: 2026-10-21
URL: https://claude.com/resources/articles/hcltech-joins-claude-partner-network

## Introducing Claude Duet
- Research preview of a proactive agent app on iOS, Android, claude.ai for professionals and small business owners
- Sends morning brief, checks connected apps every few hours, messages only when attention needed
- Runs tasks on its own virtual machine, so works while you are away
- Asks approval before sending, paying, signing, deleting; some actions (trading, moving money) off-limits; classifier blocks sensitive data
- 6,000+ connectors (Gmail, Slack, QuickBooks, Stripe, etc.); waitlist for US Pro and Max users
Category: announcement
Date: 2026-10-21
URL: https://claude.com/resources/articles/claude-duet

## Claude Security now scans continuously and tracks fixes
- Vulnerability-scanning product in public beta for Claude Enterprise; thousands of orgs, 1M+ vulnerabilities found since April
- Baseline scan then automatic rescans as code changes
- Marks findings fixed when change lands and reopens if issue returns; per-project knowledge base and editable threat model
- New API, webhooks, MCP connector; role-based permissions for admins
- Enterprise trial: $25,000 monthly usage credits for two months, through Dec 31, 2026
Category: feature update
Date: 2026-10-21
URL: https://claude.com/resources/articles/claude-security-now-scans-continuously-and-tracks-fixes

## Redesigning source control at Anthropic
- Scion: Anthropic's in-house source control replacing git for its huge monorepo; server-centric, clients always online
- Migrated off git in about five months; changesets replace commits, sparse/virtual checkouts
- ~200x less CPU/memory than old git mirrors; CI checkouts from minutes to seconds
- Daily merged changes grew from ~2,500 (May 2026) to 30,000+ (Sept) due to agents
- Not a general git replacement; only suited to enormous monorepos
Category: announcement
Date: 2026-10-19
URL: https://www.anthropic.com/engineering/redesigning-source-control

## How an Anthropic BDR in Japan runs his day with Claude Managed Agents
- Case study of a Japan BDR running six agents ("Nakama") on Claude Managed Agents (beta)
- Agents handle lead routing, email drafts, CRM updates, meeting follow-ups on schedules
- Shared memory store learns from edits; scoped credential vaults; Sonnet for rule-based, Opus for judgment tasks
- Estimated ~60 hours saved; humans review pricing, sensitive accounts, ambiguous requests
- Shows non-developers can build agent workflows in plain language
Category: announcement
Date: 2026-10-16
URL: https://claude.com/resources/articles/how-an-anthropic-japan-business-development-representative-runs-his-day

## How the Claude Code team does code review
- Claude writes ~90% of the Claude Code codebase; review is layered and mostly automated
- Continuous review from pre-PR; multi-agent bug hunting with voting; security review can block merges; risk-based human approval (0-2)
- June-Sept: merged PRs more than doubled, reverts down 40%+; PRs needing 5+ rounds 8.9% to 1.5%
- Safeguards: merge queues, feature flags, gradual rollouts, fast rollback, incidents become reviewer tests
- Offers checklist: CLAUDE.md and REVIEW.md, risk tiers, CODEOWNERS
Category: announcement
Date: 2026-10-16
URL: https://claude.dev/blog/solving-code-review-at-anthropic/

## Code Review is now generally available
- Claude Code's Code Review is GA for Team and Enterprise after research preview
- Reviews ~3x faster (about 6-10 min vs 20); findings more concise
- Admins choose Quick, Standard (default), or Deep per repository
- Review is the bottleneck as coding agents speed up creation
- Setup: enable in Claude Code settings, install GitHub App, select repos
Category: feature update
Date: 2026-10-15
URL: https://claude.com/resources/articles/code-review-is-now-generally-available

## Agent observability on the Claude Platform
- Public beta: Claude Platform exports OpenTelemetry traces from Managed Agents, Messages API, and SDKs
- Add a destination in Claude Console; turns, model calls, tool uses exported with latency, tokens, IDs
- SDKs export traces automatically
- Follows OTel GenAI semantic conventions; works with Grafana Cloud, Datadog, Honeycomb, Langfuse
- Helps verify agent reliability, debug, build evals, track token usage
Category: feature update
Date: 2026-10-14
URL: https://claude.com/resources/articles/agent-observability-on-the-claude-platform
