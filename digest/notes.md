## Building agents: When to fold subagents into your main agent loop
- Guidance for Claude Platform builders on merging subagents into a single main agent loop.
- Recommends one model/context with progressive disclosure: domain procedures as skills, tools loaded via tool search.
- Applied AI team found single agents with skills often beat one-prompt and subagent designs on quality, cost, latency (one customer ~2x faster).
- Migrate by building a small end-to-end eval, folding in subagents one at a time, keeping one only if folded version scores worse.
- Subagents still fit parallel, context-heavy, or conflicting-instruction work; avoid splitting agents by team.
Category: announcement
Date: 2026-10-22
URL: https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop

## Claude Cowork and chat come together for Enterprise
- Chat and Cowork unified into one Claude experience on web, desktop, mobile; GA for Enterprise plans.
- No mode choice up front: chat conversation continues as agentic work in the cloud when a task needs code or files.
- Tasks run in Anthropic-managed cloud, continue after laptop closes, resumable across devices.
- Admins get role-based access, new Efficient mode (Sonnet/Haiku only), spend controls per org/group/member.
- SSO and Compliance API controls carry over.
Category: feature update
Date: 2026-10-23
URL: https://claude.com/resources/articles/unified-claude-enterprise

## Claude Duet Safety, Privacy, and Security
- Explains safeguards for Claude Duet, a research-preview cloud-computer agent using connected apps.
- Sensitive actions (send, pay, delete) require user approval showing details.
- Outgoing-message classifier blocks credentials/government IDs; health/financial data shared only with consent.
- Duet never sees passwords, cookies, tokens; browser runs in a separate VM.
- Anthropic notes approval-fatigue risk and that safeguards can miss things.
Category: announcement
Date: 2026-10-23
URL: https://claude.com/resources/articles/claude-duet-safety-privacy-and-security

## The full Claude Platform, available on Google Cloud
- Claude Models on Google Cloud (Anthropic managed) now GA; Anthropic runs service and is data processor.
- Same-day access to new features/betas: Managed Agents (beta), code execution, computer use, web search, prompt caching.
- Fast Mode on Claude Opus 5.5 GA, up to 2.5x faster output.
- Uses Google Cloud IAM, single invoice, counts toward Google Cloud commitments.
- Google-managed offering remains for data residency, Model Armor, Agent Engine needs.
Category: announcement
Date: 2026-10-22
URL: https://claude.com/resources/articles/claude-models-on-google-cloud-anthropic-managed

## HCLTech joins the Claude Partner Network as a Global Premier partner
- HCLTech (230,000+ employees, 60 countries) becomes a Global Premier partner.
- Will build agentic solutions via dedicated Anthropic business unit and center of excellence.
- Embeds Claude in HCL BigFix, AppScan, Actian AI analyst; adds Claude and Claude Code to AI Force platform.
- Client sandboxes and engineer oversight of high-impact changes.
- Targets regulated sectors (banking, healthcare, telecom, manufacturing); HCLSoftware becomes ISV partner.
Category: announcement
Date: 2026-10-21
URL: https://claude.com/resources/articles/hcltech-joins-claude-partner-network

## Introducing Claude Duet
- Research preview proactive agent app for iOS, Android, claude.ai.
- Sends morning brief, checks connected apps every few hours, works in background on its own VM.
- Asks approval before sending, paying, signing, deleting; some actions (trading, moving money) off-limits.
- 6,000+ connectors/plugins in Claude Marketplace (Gmail, Slack, QuickBooks, Stripe, Shopify).
- Waitlist, starting with US Pro and Max subscribers; shares usage limits with Claude.
Category: announcement
Date: 2026-10-21
URL: https://claude.com/resources/articles/claude-duet

## Claude Security now scans continuously and tracks fixes
- Claude Security in public beta for Enterprise, powered by Claude models incl. Claude Mythos.
- Connects to repos (GitHub app or tokens), baseline scan, then risk-based rescans of changes.
- Marks findings fixed when code lands; reopens automatically if issue reappears.
- Per-project knowledge base and editable threat model; findings include severity and attacker reachability.
- New API, MCP connector, webhooks, role-based access controls.
Category: feature update
Date: 2026-10-21
URL: https://claude.com/resources/articles/claude-security-now-scans-continuously-and-tracks-fixes

## Redesigning source control at Anthropic
- Anthropic engineering post on in-house source control Scion and review tool Antique, built for AI-agent-heavy monorepos.
- Monorepo moved from git to Scion in about five months.
- Reports ~200x less CPU/memory than prior git mirroring; CI/research checkouts from minutes to seconds.
- Daily merged changes grew from ~2,500 (May 2026) to 30,000+ (Sept); git's offline-first design became a bottleneck.
- Not a general git replacement, but ideas may inform future git servers.
Category: announcement
Date: 2026-10-19 (listing; article page shows Oct 13, 2026)
URL: https://www.anthropic.com/engineering/redesigning-source-control

## How an Anthropic BDR in Japan runs his day with Claude Managed Agents
- Japan BDR runs six agents ("Nakama") for lead routing, emails, CRM updates, meeting follow-ups on Managed Agents.
- Agents run on schedules, share a memory store, use scoped credential vaults; Claude Tag handles Slack follow-ups.
- Cheaper models for rule-based jobs, larger model for judgment work.
- Reports ~60 hours saved per week, built without being a developer.
- Tips: one job per agent, shared knowledge base for corrections, match model size to task difficulty.
Category: announcement
Date: 2026-10-16
URL: https://claude.com/resources/articles/how-an-anthropic-japan-business-development-representative-runs-his-day

## How the Claude Code team does code review
- Claude Code team describes review when Claude writes ~90% of its code.
- Continuous automated checks: self-verification, AI reviewer per PR, blocking security review, CI, merge queue with staged releases.
- Human approvals risk-scaled by classifier: none for low risk, one for medium, two for high-risk paths.
- June-Sept: merged PRs more than doubled, reverts fell 40%+, substantive review comments 16% to 54%.
- Agent author/reviewer loops capped at three rounds with diff-only re-review.
Category: announcement
Date: 2026-10-16 (listing; article page shows Oct 15, 2026)
URL: https://claude.dev/blog/solving-code-review-at-anthropic/
