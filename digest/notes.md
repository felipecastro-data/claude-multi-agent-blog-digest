## Building agents: When to fold subagents into your main agent loop
- Guidance on when to merge subagents into a single main agent loop on Claude Platform; includes a migration kit
- Recommends fewer subagents: specialist prompts become skills, API calls become tools loaded via tool search
- Anthropic says single agents with skills often beat one-prompt and subagent designs on quality, cost, latency
- Keep subagents for context bloat, parallel work needing fresh context, or tool-selection/conflicting-instruction problems
- Migrate by building a small eval first, folding one subagent at a time; one customer saw ~2x faster runtime
Category: announcement
Date: 2026-10-22
URL: https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop

## Claude Cowork and chat come together for Enterprise
- Chat and Cowork unified into one experience, generally available on Claude Enterprise
- Simple questions get quick answers; larger tasks run in an Anthropic-managed cloud environment and continue when laptop closed
- Isolated VM per session, network off by default; builds on SSO and Compliance API
- Admin controls: role access, Efficient mode, model entitlements, spend limits, pooled group budgets
- Existing chats, projects, connectors, skills, plugins carry over; ZDR Claude Code, HIPAA-ready, CMEK orgs stay on current setup
Category: feature update
Date: 2026-10-23
URL: https://claude.com/resources/articles/unified-claude-enterprise

## Claude Duet Safety, Privacy, and Security
- Duet is a research-preview cloud agent that keeps working after the app is closed, using connected apps
- Sensitive actions (send, pay, delete) require user approval, with a separate check on each action
- New classifier screens outgoing messages for sensitive information
- Credentials isolated: passwords encrypted and typed into sites without passing through the model; browser runs in separate cloud VM
- Anthropic admits safeguards will sometimes miss things or over-flag; still being refined
Category: announcement
Date: 2026-10-23
URL: https://claude.com/resources/articles/claude-duet-safety-privacy-and-security

## LLMs are making formal software verification feasible at a much larger scale
- Frontier Red Team research with Theorem: Claude writes formal proofs that code is free of certain bugs
- Proved "no crashes on any input (up to 64 MB)" for 239 entry points across 123 OSS-Fuzz libraries (~180M lines of Rocq)
- Found bugs fuzzing missed (e.g. out-of-bounds write at ~20 MB input layout) and rediscovered a libexpat vulnerability
- Costs falling: newer models ~40% fewer tokens on a benchmark; shared proofs cut token use 17%
- Caveat: "formally verified" is not "bug-free"; assumes single-threaded static RISC-V Linux binaries and trusted components
Category: announcement
Date: 2026-10-22
URL: https://www.anthropic.com/research/formal-verification

## The full Claude Platform, available on Google Cloud
- Claude Models on Google Cloud (Anthropic managed) is now generally available with full Claude Platform feature set
- Uses existing Google Cloud IAM credentials; billed on one Google Cloud invoice, draws down existing commitments
- Same-day access to new features/betas: Managed Agents, code execution, prompt caching, batch, Files API
- Fast Mode on Claude Opus 5.5 also GA
- Limited to US and Global endpoints for now; Google's managed offering remains for strict residency needs
Category: feature update
Date: 2026-10-22
URL: https://claude.com/resources/articles/claude-models-on-google-cloud-anthropic-managed

## HCLTech joins the Claude Partner Network as a Global Premier partner
- HCLTech (230,000+ employees) joins Claude Partner Network at top tier, which requires 1,000 certified practitioners
- Will build agentic solutions via dedicated business unit and Center of Excellence
- Embedding Claude in HCLSoftware products (BigFix, AppScan) and adding Claude/Claude Code to AI Force platform
- Deployments include guardrails, human review, and sandbox testing
- Targets regulated sectors: banking, healthcare, telecom, manufacturing
Category: announcement
Date: 2026-10-21
URL: https://claude.com/resources/articles/hcltech-joins-claude-partner-network

## Introducing Claude Duet
- Research preview of a proactive agent app on iOS, Android, claude.ai; included in Pro and Max, US waitlist first
- Sends morning brief, checks connected apps every few hours, messages only when attention needed
- Keeps working in its own VM when devices are off; 6,000+ connectors and plugins
- Approval required before sending, paying, signing, deleting; trading and moving money between accounts are off-limits
- Early product: may misjudge urgency; background checks count against shared usage limits
Category: feature update
Date: 2026-10-21
URL: https://claude.com/resources/articles/claude-duet

## Claude Security now scans continuously and tracks fixes
- Claude Security (code security product) now in public beta for Claude Enterprise
- Continuous scanning: monitors repos and rescans on code changes, no manual scheduling
- Marks findings fixed when changes ship, reopens if issue returns; knowledge base and generated threat model guide flagging
- Severity ratings plus attacker-reachability explanations; API, webhooks, MCP connector for integration
- Orgs get $25,000 monthly usage credits for two months (usage through Dec 31, 2026)
Category: feature update
Date: 2026-10-21
URL: https://claude.com/resources/articles/claude-security-now-scans-continuously-and-tracks-fixes

## Redesigning source control at Anthropic
- Scion: Anthropic's in-house source control system built for its monorepo at agent scale
- Migrated off git in ~5 months; server-side commits/merges, always-online clients, sparse on-demand checkouts
- CI and research checkouts dropped from minutes to seconds; infrastructure ~200x smaller than old git mirrors
- Merges grew from ~2,500/day (May 2026) to 30,000+/day (Sept); human-scale tooling was the bottleneck
- Not a general git replacement; hopes ideas (server-side APIs, sparse checkouts) are adopted in git. (Article body says Oct 13; listing says Oct 19)
Category: announcement
Date: 2026-10-19
URL: https://www.anthropic.com/engineering/redesigning-source-control

## How an Anthropic BDR in Japan runs his day with Claude Managed Agents
- First-person post by Shahboz Ibragimov, BDR on Anthropic's Japan team, on running his workday with Claude agents
- Built on Claude Managed Agents (beta) and Claude Tag; five scheduled agents (lead routing, triage, email drafts, CRM updates, meeting follow-ups) plus a coordinator agent
- Shared memory store learns from his edits; credentials in managed vaults; complex items hand off to Claude Tag in Slack
- Models matched to task: cheaper for rule-based work, Opus for judgment; estimated ~60 hours saved
- Lesson: "the knowledge base matters more than the prompt"; shows a non-developer can build multi-agent workflows
Category: announcement
Date: 2026-10-16
URL: https://claude.com/resources/articles/how-an-anthropic-japan-business-development-representative-runs-his-day
