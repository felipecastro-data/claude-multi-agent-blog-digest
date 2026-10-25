## Claude Cowork and chat come together for Enterprise
- Claude Enterprise now has one unified experience combining chat and Cowork, GA on web, desktop, mobile
- No mode picking: simple questions get quick chat answers; code/file tasks run in a cloud environment returning finished docs, analyses, decks
- Cloud work keeps running after laptop closes and can be resumed on another device; chats, projects, connectors, skills, plugins carry over
- Isolated cloud sessions, network egress off by default; admin controls include Efficient mode (Sonnet/Haiku), role-based model access, spend limits, pooled budgets
- Admins manage rollout in Organization settings; ZDR Claude Code, HIPAA-ready, and customer-managed key orgs stay on current setup
Category: announcement
Date: 2026-10-23
URL: https://claude.com/resources/articles/unified-claude-enterprise

## Claude Duet Safety, Privacy, and Security
- Duet is a research-preview agent using a cloud computer to work with connected apps, running after the app is closed
- Asks approval before sensitive actions (sending messages, paying, deleting); separate automated check outside the model verifies intent
- New classifier screens outgoing messages for sensitive data; credentials never shared, health/financial info needs consent
- Credential isolation: Duet never sees passwords, cookies, or tokens; passwords delivered to browser without passing through model, tokens added by outside proxy
- Anthropic says safeguards will sometimes miss things and are still being refined during preview
Category: announcement
Date: 2026-10-23
URL: https://claude.com/resources/articles/claude-duet-safety-privacy-and-security

## Building agents: When to fold subagents into your main agent loop
- Guidance for teams building on Claude Platform on replacing multi-subagent setups with a single main agent loop
- Recommends one model, one context window, open tool loop; procedures move into skills, tools load on demand
- Claims single agent with skills often beats one-prompt and subagent designs on quality, usually cheaper and faster; one customer saw ~2x faster runtime
- Migration: build small end-to-end eval, fold in one subagent at a time, keep subagents for context bloat, parallelism, or conflicting instructions
- Anthropic released a migration kit; suggests small central team owns system prompt while domain teams contribute skills, tools, evals
Category: announcement
Date: 2026-10-22
URL: https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop

## The full Claude Platform, available on Google Cloud
- Claude Models on Google Cloud (Anthropic managed) is GA, giving Google Cloud customers the full Claude Platform feature set
- Uses Google Cloud IAM credentials and a single Google Cloud invoice drawing down existing commitments; US and Global endpoints
- Includes Managed Agents (beta), code execution, computer use, skills, Files API, citations, web search/fetch, MCP connector (beta), prompt caching, batch; new features ship day-zero
- Fast Mode on Claude Opus 5.5 is GA at $8/$40 per million input/output tokens
- Two options: Anthropic managed (Anthropic is data processor) or Google managed (Google is processor, regional residency, Model Armor/Agent Engine)
Category: feature update
Date: 2026-10-22
URL: https://claude.com/resources/articles/claude-models-on-google-cloud-anthropic-managed

## HCLTech joins the Claude Partner Network as a Global Premier partner
- HCLTech (230,000+ people, 60 countries) joins Claude Partner Network as Global Premier partner
- Will build agentic solutions via a dedicated Anthropic Business Unit and Center of Excellence
- Embedding Claude in HCLSoftware products (BigFix, AppScan, Actian AI analyst) and Claude/Claude Code in AI Force IT services platform
- Clients can test Claude in secure sandboxes; engineers oversee high-impact agent changes
- Targets regulated sectors: banking, healthcare, telecom, manufacturing
Category: announcement
Date: 2026-10-21
URL: https://claude.com/resources/articles/hcltech-joins-claude-partner-network

## Introducing Claude Duet
- Research preview of a standalone proactive agent app for iOS, Android, claude.ai; waitlist, US Pro and Max subscribers first
- Sends a morning brief, checks connected apps every few hours, runs delegated background tasks on its own VM
- Reaches out proactively; requires approval for sending messages, payments, signing, deleting; cannot trade securities or move money between accounts
- Classifier blocks sharing of most sensitive data (card numbers, government IDs); never directly sees passwords or tokens
- Aimed at professionals and small business owners; early testers said it caught missed issues
Category: feature update
Date: 2026-10-21
URL: https://claude.com/resources/articles/claude-duet

## Claude Security now scans continuously and tracks fixes
- Claude Security (code scanning, public beta since April) latest version now in public beta for Claude Enterprise
- Connects to Git repos, runs baseline scan, then rescans continuously as code changes based on risk/complexity
- Tracks fixes: marks findings fixed when a fix ships (from Claude Code or elsewhere) and reopens if issue reappears
- Per-project knowledge base and editable threat model; findings get severity and attacker-reachability explanation
- New API, webhooks, MCP connector, role-based access; Enterprise gets $25,000 monthly usage credits for two months through 2026-12-31
Category: feature update
Date: 2026-10-21
URL: https://claude.com/resources/articles/claude-security-now-scans-continuously-and-tracks-fixes

## Redesigning source control at Anthropic
- Engineering post on Scion, an in-house source control system replacing git for Anthropic's monorepo, plus Antique code review tool; migrated in ~5 months
- Scion assumes always-connected clients that fetch only needed files; CI/research jobs query server via API
- Reported ~200x less CPU/memory than prior git mirrors; checkouts dropped from minutes to seconds
- Daily merged changes rose from ~2,500 (May 2026) to 30,000+ (Sept); dev infrastructure built for human scale is the bottleneck
- Shared so git platforms can adopt parts of the approach (article itself shows Oct 13, updated Oct 15; listing shows Oct 19)
Category: announcement
Date: 2026-10-19
URL: https://www.anthropic.com/engineering/redesigning-source-control

## How an Anthropic BDR in Japan runs his day with Claude Managed Agents
- First-person account from Shahboz Ibragimov, Anthropic Japan BDR, running six agents on Claude Managed Agents (beta) and Claude Tag
- Agents handle lead routing, first-touch emails, replies, CRM updates, meeting follow-ups on schedules; he reviews and sends drafts
- Model mix: Sonnet for rule-based, Opus for judgment, Sonnet with Opus adviser for reply agent to control cost
- Estimates ~60 hours/week saved; credentials in scoped vaults; no developer background needed
- Lessons: describe each job once, save corrections to shared knowledge base, delegate sooner than feels comfortable
Category: announcement
Date: 2026-10-16
URL: https://claude.com/resources/articles/how-an-anthropic-japan-business-development-representative-runs-his-day

## How the Claude Code team does code review
- Claude Code team describes review now that Claude writes ~90% of the codebase; most review is automated, humans focus on risky decisions
- June to September: merged PRs more than doubled, reverts share fell over 40%
- Claude reviews continuously, findings verified by other agents; CI and security review can block merges; human approvals scale by risk (0, 1, 2)
- Past incidents form a daily eval set; review rounds capped at three, only new diffs re-reviewed (mean reviews to pass 2.08 to 1.32)
- Treats human time as the scarce resource; includes adoption checklist (article shows Oct 15; listing shows Oct 16)
Category: announcement
Date: 2026-10-16
URL: https://claude.dev/blog/solving-code-review-at-anthropic/
