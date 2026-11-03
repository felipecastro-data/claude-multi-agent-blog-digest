## Building agents: When to fold subagents into your main agent loop
- Guide on replacing subagents with a single main agent loop plus skills and tools
- One model in one context window loads domain knowledge only when needed and revises its own plan
- Enterprise comparisons: single agent often gives better quality at lower cost and latency; one customer saw about 2x faster runtime
- Keep subagents for context bloat, parallel tasks needing fresh context, or tool-selection and instruction conflicts
- Migrate incrementally with an end-to-end eval, fold one subagent at a time, and run tests more than once; includes a migration kit
Category: announcement
Date: 2026-10-22
URL: https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop

## Make long-running agents faster with message threads
- Message threads: public beta in the Claude Platform Messages API
- Add a `thread` parameter; later requests send only new messages plus the previous response ID
- Threads are held encrypted in memory and expire 5 minutes after the last request
- Claude Code median time to first token fell about 35% on 500k-1M token requests; token usage unchanged
- Suited to long-running coding agents, computer use agents, and document- or image-heavy workflows
Category: feature update
Date: 2026-11-02
URL: https://claude.com/resources/articles/message-threads

## Smart reports, surveys, and pooled group budgets for Claude Enterprise
- Three Claude Enterprise features now generally available
- Smart reports: Claude samples transcripts by team, groups work into workstreams, shows spend, deliverables, friction points, and recommendations
- In-app surveys: members answer short value questions such as time saved; admins customize, export, and set retention
- Pooled group budgets: one shared monthly team budget with alerts at 50/75/95/100%; member limits still apply
- Helps orgs see where Claude creates value and manage spend flexibly; not for evaluating individuals
Category: feature update
Date: 2026-10-28
URL: https://claude.com/resources/articles/smart-reports-surveys-pooled-budgets

## IDC brings Quanta into Claude and adopts Claude across the company
- IDC Research integrated its IDC Quanta platform into Claude through an MCP connector
- Customers can query forecasts, market data, and research and get answers citing IDC sources
- IDC rolled out Claude company-wide, starting with engineering
- Internal results: data repository rebuilt in 3 weeks instead of about 3 months; code review cut from 5 days to about 30 minutes
- Market research that took days can now be done in minutes inside the tools customers already use
Category: announcement
Date: 2026-10-28
URL: https://claude.com/resources/articles/idc-brings-quanta-into-claude-and-adopts-claude-across-the-company

## Introducing artifacts for legal work
- Ready-to-use interactive artifacts (trackers, dashboards) for legal teams, part of Claude for Legal
- New legal gallery: cite checking, matter board, playbook deviation board, tabular contract review; outputs link to sources
- More than 60 legal connectors added since May, including Bloomberg Law, Filevine, Ivo, Legora
- Contributions from Goodwin, Harvey, Foley & Lardner, PwC; nine access-to-justice artifacts released
- Teams start from prebuilt tools and share under privacy and ethical-wall controls; lawyers still review output
Category: feature update
Date: 2026-10-28
URL: https://claude.com/resources/articles/introducing-artifacts-for-legal-work

## Manage costs and demonstrate ROI for Claude Code on Google Cloud
- Best-practices guide written with Google Cloud around three levers: control, track, prove
- Control: spend caps per user, group, or org; alerts at 75% and 95%; model defaults and allowlists; admin API
- Track: OpenTelemetry metrics to Google Cloud Monitoring; Cloud Billing export to BigQuery
- Prove: measure adoption, satisfaction, and impact (PR cycle time, review turnaround) against a baseline
- Favors steering usage over blanket limits: target waste, leave high-value power users alone
Category: announcement
Date: 2026-10-27
URL: https://claude.com/resources/articles/how-to-manage-costs-and-demonstrate-roi-for-claude-code-on-google-cloud

## Claude for Financial Advisors
- Suite of connectors and workflow skills, available as a Cowork plugin
- Connects to Schwab, Addepar, Orion, Wealthbox and similar custodians, portfolio, CRM, and planning tools
- Skills: meeting prep, follow-up, rebalance review, estate and tax briefs, compliance checks (SEC Marketing Rule flags)
- Advisor must review and approve drafts and CRM updates; Enterprise plans recommended for audit logs
- Aims to free time, since advisors spend only about a sixth of their time in client meetings
Category: announcement
Date: 2026-10-27 (listing date; page says originally published 2026-09-14, latest update 2026-10-27)
URL: https://claude.com/resources/articles/claude-for-financial-advisors

## Expanding Claude for Nonprofits
- New Claude for Nonprofits plugin of skills and connectors, built with about 30 nonprofits
- Covers extending small teams (marketing, hiring, board work), responsible setup against AI policy, and fundraising
- Installs automatically at no extra cost on Team and Enterprise plans
- Claude Corps fellowship to be extended via a partnership with Taproot
- Targets small orgs: most of the 25,000+ nonprofits using Claude have fewer than 10 seats
Category: announcement
Date: 2026-10-26
URL: https://claude.com/resources/articles/expanding-claude-for-nonprofits

## Claude Cowork and chat come together for Enterprise
- Unified chat and Cowork experience now generally available for Enterprise on web, desktop, and mobile
- No mode selection: quick answers for simple questions; code and file tasks run in a managed cloud environment and continue after the laptop is closed
- Existing chats, projects, connectors, skills, plugins carry over
- Security: isolated VM per session, network off by default, SSO, Compliance API, role-based access
- Cost controls: usage-based pricing, new Efficient mode (Sonnet and Haiku only), per-role models, spend limits, pooled budgets
Category: feature update
Date: 2026-10-23
URL: https://claude.com/resources/articles/unified-claude-enterprise

## Claude Duet Safety, Privacy, and Security
- Claude Duet is a research-preview agent using a cloud computer to work while you are away (inbox, drafts, bookings, routines)
- Approval controls: shows action, destination, and content before sensitive sends, payments, or deletions; separate non-model intent check; some actions (trading, moving money) always blocked
- Outgoing-message classifier: credentials, full card and bank numbers, and government IDs never shared; health and financial details need consent
- Credential isolation: never sees passwords, cookies, or tokens; one-time merchant-limited cards for purchases
- Anthropic notes safeguards will sometimes miss things; approval frequency and sign-in methods still being refined
Category: announcement
Date: 2026-10-23
URL: https://claude.com/resources/articles/claude-duet-safety-privacy-and-security
