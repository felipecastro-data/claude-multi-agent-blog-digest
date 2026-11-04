## Building agents: When to fold subagents into your main agent loop
- Claude Platform guidance: a single agent loop with skills and tools can often replace orchestrator plus specialist subagents
- Skills hold domain procedures; tools handle actions, live data, hard limits; context is progressively disclosed
- Migrate step by step: build a small end-to-end eval, fold in one subagent at a time; migration kit available
- Enterprise comparisons reportedly show single agents matching or beating subagent designs, often with lower cost and latency
- Subagents still fit context bloat, parallel work, or tool/instruction conflicts; small central team owns system prompt
Category: announcement
Date: 2026-10-22
URL: https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop

## Make long-running agents faster with message threads
- Public beta in the Claude Platform Messages API: send the conversation once, then only new content on later turns
- Follow-ups include new messages plus the previous response ID instead of full history
- Threads held in memory 5 minutes after last request; after that the full conversation must be resent
- Claude Code (on by default): median time to first token down about 35% for 500k-1M token requests
- Token counts unchanged since Claude still processes full history each turn
Category: feature update
Date: 2026-11-02
URL: https://claude.com/resources/articles/message-threads

## Smart reports, surveys, and pooled group budgets for Claude Enterprise
- Three new Claude Enterprise features: smart reports, in-app surveys, pooled group budgets
- Smart reports: Claude samples transcripts for a chosen team and date range, groups work into workstreams, shows spend, deliverables, friction points
- Surveys: customizable default questions, targeted to chosen users, live responses, exportable
- Pooled budgets: shared monthly team limit, individual limits still apply, members can request more, admin alerts at 50/75/95/100%
- Gives admins visibility into value and cost of Claude usage
Category: feature update
Date: 2026-10-28
URL: https://claude.com/resources/articles/smart-reports-surveys-pooled-budgets

## IDC brings Quanta into Claude and adopts Claude across the company
- IDC Research added its Quanta market intelligence platform to Claude and rolled out Claude company-wide
- Customers can ask about competitors, vendors, markets, budgets, with answers citing IDC data and sources
- Internally used for software development, planning, sales analysis, marketing content
- Engineers rebuilt an internal research data repository in 3 weeks versus an estimated 3 months
- Competitive briefs that took days can now take minutes
Category: announcement
Date: 2026-10-28
URL: https://claude.com/resources/articles/idc-brings-quanta-into-claude-and-adopts-claude-across-the-company

## Introducing artifacts for legal work
- New legal gallery of ready-to-use interactive artifacts (trackers, dashboards) that legal teams can adapt and share
- Covers citation checks, jurisdiction comparison, matter tracking, contract deviation flagging, regulation scanning, contract review tables
- 60+ legal connectors added since the May launch of Claude for Legal
- Contributions from Goodwin, Harvey, Foley & Lardner, PwC; nine access-to-justice artifacts; Legal Ambassadors Program waitlist
- Sharing settings designed to protect privacy and ethical walls
Category: feature update
Date: 2026-10-28
URL: https://claude.com/resources/articles/introducing-artifacts-for-legal-work

## Manage costs and demonstrate ROI for Claude Code on Google Cloud
- Best-practices guide (from a webinar with Google Cloud) on controlling spend and measuring ROI for Claude Code
- Framework: control, track, prove
- Self-hosted Claude apps gateway: spend caps per user/IdP group/org, model allowlists, warnings at 75% and 95%, HTTP 429 at cap
- OpenTelemetry data now broken down by skill, plugin, agent, MCP server; feeds Cloud Monitoring and BigQuery
- Advises guiding rather than restricting usage; key metric is cost per task
Category: feature update
Date: 2026-10-27
URL: https://claude.com/resources/articles/how-to-manage-costs-and-demonstrate-roi-for-claude-code-on-google-cloud

## Claude for Financial Advisors
- Suite of connectors and workflow skills for advisor research, meeting prep, and paperwork
- New connectors to custodians, portfolio platforms, CRMs, planning, estate, and meeting-capture tools (page updated; originally Sept 14, 2026)
- Plugin bundles skills: pre-meeting prep, follow-up, rebalance reviews, estate/tax checks, prospect intake
- Claude stages CRM updates and client communications for approval; investment and compliance decisions need human review
- Available to Enterprise customers; others can request a license
Category: feature update
Date: 2026-10-27
URL: https://claude.com/resources/articles/claude-for-financial-advisors

## Expanding Claude for Nonprofits
- Claude for Nonprofits plugin (skills and connectors built with about 30 nonprofits) auto-installed for verified nonprofits on Team and Enterprise at no extra cost
- Covers team extension (marketing, hiring, board), setup with org context and AI policy, and fundraising support
- About 90% discount for verified nonprofits in low/middle-income countries (Team seats $3/user/month)
- Team plan minimum now two people; Claude Code included at no extra cost; Claude Corps extension planned with Taproot
- 25,000+ nonprofits use Claude, over 75% with fewer than 10 seats
Category: announcement
Date: 2026-10-26
URL: https://claude.com/resources/articles/expanding-claude-for-nonprofits

## Claude Cowork and chat come together for Enterprise
- Unified Claude (chat plus Cowork) now generally available for Enterprise, after Pro and Max launch in September
- One Claude on web, desktop, mobile; heavier tasks run in an Anthropic-managed cloud and continue after closing the laptop
- Admin controls: role-based access, new Efficient mode (Sonnet and Haiku), spend limits at org/group/member level, pooled group budgets
- Each cloud session in an isolated VM, network egress off by default, connector credentials outside the sandbox
- ZDR, HIPAA-ready, and customer-managed key orgs stay on current configuration
Category: feature update
Date: 2026-10-23
URL: https://claude.com/resources/articles/unified-claude-enterprise

## Claude Duet Safety, Privacy, and Security
- Claude Duet is a research-preview agent that works in a cloud computer with your connected apps and keeps running after you close the app
- Sensitive actions (sending, paying, deleting) need user approval, checked by a separate automated check outside the model
- New classifier screens outgoing messages for sensitive info, blocking some categories and requiring consent for others
- Never sees passwords, cookies, or tokens; credentials are handled outside the model, and the browser runs in its own cloud machine
- Identifies itself via a distinct User-Agent, and some sites block it; Anthropic says safeguards will sometimes miss things
Category: announcement
Date: 2026-10-23
URL: https://claude.com/resources/articles/claude-duet-safety-privacy-and-security
