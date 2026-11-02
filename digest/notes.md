## Make long-running agents faster with message threads
- Public beta "message threads" feature in the Messages API (Claude Platform, AWS, Microsoft Foundry, Google Cloud)
- Clients add a `thread` parameter; first request sends full conversation, later ones send only new messages plus previous response ID
- Median time to first token down about 35% for 500k-1M token requests in Claude Code (threads on by default)
- Threads expire 5 minutes after last request; token usage unchanged, standard rates and rate limits apply
- Targets latency in coding, computer use, and document/image-heavy agents
Category: feature update
Date: 2026-11-02
URL: https://claude.com/resources/articles/message-threads

## Smart reports, surveys, and pooled group budgets for Claude Enterprise
- Three Claude Enterprise features now generally available
- Smart reports: Claude samples transcripts, groups work into workstreams, shows spend, deliverables, friction points, and recommendations
- In-app surveys: short cards after replies on value, time saved; admins customize and export responses
- Pooled group budgets: shared monthly budget per group, individual limits still apply, alerts at 50/75/95/100%
- Aimed at adoption and investment planning, not individual performance reviews
Category: feature update
Date: 2026-10-28
URL: https://claude.com/resources/articles/smart-reports-surveys-pooled-budgets

## IDC brings Quanta into Claude and adopts Claude across the company
- IDC Quanta (forecasts, market data, research) now available in Claude via an MCP connector
- Supports competitor briefs, vendor shortlists, budget vs. forecast comparisons with cited sources; works in Claude app, Cowork, Office add-ins
- Internally, IDC rebuilt a research data repository in 3 weeks vs. an estimated 3 months
- Code review time dropped from 5 days to about 30 minutes
- Shows Claude adoption across enterprise functions (product, sales, marketing)
Category: announcement
Date: 2026-10-28
URL: https://claude.com/resources/articles/idc-brings-quanta-into-claude-and-adopts-claude-across-the-company

## Introducing artifacts for legal work
- Ready-to-use interactive artifacts (trackers, dashboards) for legal teams, adaptable to their own data
- Legal gallery: cite checking, contract vs. standard terms, regulatory change tracking, contract review tables
- Partner-contributed artifacts (Goodwin, Harvey, Foley & Lardner, PwC) plus nine access-to-justice artifacts
- 60+ legal connectors (e.g., Bloomberg Law, Filevine); outputs link to sources; sharing with privacy settings and ethical walls
- Launches a Legal Ambassadors Program (waitlist) and funds access-to-justice groups
Category: feature update
Date: 2026-10-28
URL: https://claude.com/resources/articles/introducing-artifacts-for-legal-work

## Manage costs and demonstrate ROI for Claude Code on Google Cloud
- Best-practices guide for governing Claude Code spend on Google Cloud
- Framework of three levers: control, track, prove
- Claude apps gateway offers spend caps, model allowlists, alerts at 75% and 95%; Google Cloud budgets, BigQuery exports, Cloud Monitoring for tracking
- Recommends measuring adoption, satisfaction, PR cycle time and review turnaround against a baseline
- Advises guiding developers over arbitrary limits; start with defaults, refine by role and team
Category: announcement
Date: 2026-10-27
URL: https://claude.com/resources/articles/how-to-manage-costs-and-demonstrate-roi-for-claude-code-on-google-cloud

## Claude for Financial Advisors
- Connectors and workflow skills for advisor research, meeting prep, and paperwork
- Integrates custodians (Schwab), portfolio platforms (Addepar, SS&C Black Diamond), CRMs (Wealthbox, Orion), planning software
- Skills: pre-meeting prep, follow-up, rebalance review, compliance screening
- Advisors approve critical actions; recommendations and compliance stay under human review
- Available via Enterprise plans (audit logs); originally published Sept 14, 2026, later updated
Category: announcement
Date: 2026-10-27
URL: https://claude.com/resources/articles/claude-for-financial-advisors

## Expanding Claude for Nonprofits
- Claude for Nonprofits plugin of skills and connectors built with about 30 nonprofits
- Covers extending small teams (marketing, hiring, board), org-context setup with AI policy checks, and fundraising through grant reporting
- Plans to extend Claude Corps via a Taproot partnership matching nonprofits with pro bono consultants
- 25,000+ nonprofits use Claude; over 75% have fewer than 10 seats
- Installs automatically at no extra cost on Team and Enterprise plans
Category: feature update
Date: 2026-10-26
URL: https://claude.com/resources/articles/expanding-claude-for-nonprofits

## Claude Cowork and chat come together for Enterprise
- Claude Enterprise gets a unified experience combining chat and Cowork on web, desktop, mobile
- Chats start as chat and continue in an Anthropic-managed cloud environment when code or files are needed; context, connectors, skills, plugins carry over
- Each cloud session runs in an isolated VM with network egress off by default; builds on SSO and Compliance API controls
- New Efficient mode keeps usage on Sonnet and Haiku; role-based model entitlements, spend limits, pooled budgets
- Users no longer choose between chat and Cowork up front
Category: feature update
Date: 2026-10-23
URL: https://claude.com/resources/articles/unified-claude-enterprise

## Claude Duet Safety, Privacy, and Security
- Claude Duet is a proactive agent in research preview, running on a cloud computer and continuing after the app closes
- Sensitive actions (messages, payments, deletions) require user approval, backed by a separate check outside the model
- Classifier screens outgoing messages; credentials, card/bank numbers, government IDs never shared; other private data needs consent
- Never sees passwords, cookies, or tokens; browser runs in an isolated cloud machine
- Anthropic notes approval fatigue and imperfect classifiers remain open challenges
Category: announcement
Date: 2026-10-23
URL: https://claude.com/resources/articles/claude-duet-safety-privacy-and-security

## Building agents: When to fold subagents into your main agent loop
- Guidance on replacing orchestrator-plus-subagent designs with a single agent loop on Claude Platform
- Uses one model and context, with skills and tool search loading knowledge and tools on demand
- Staged migration: build end-to-end eval, merge coupled specialists, convert subagents to tools, then fold into skills
- Anthropic reports single agent with skills often beats subagent designs on quality, cost, latency; one customer saw about 2x speedup
- Subagents still fit context bloat, parallel tasks, and tool-selection conflicts; migration kit and API skills introduced
Category: announcement
Date: 2026-10-22
URL: https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop
