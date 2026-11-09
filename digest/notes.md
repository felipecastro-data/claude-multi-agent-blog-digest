## Components of agent memory
- Describes "dreaming": an offline process where Claude reviews past session logs and reorganizes its memory (fixes notes, writes new ones, builds linked wikis).
- Notes written mid-session can be wrong or go stale; dreaming checks them against original transcripts.
- Results: document-wiki accuracy rose 13% to 48% over 128 dreaming sessions; contract task fact capture went 72% to 100%.
- Newer models (Opus 5, Sonnet 5) judge what to remember better; strict steering rules often hurt stronger models.
- Keeping always-loaded context small matters; dreaming trades compute for accuracy.
Category: announcement
Date: 2026-11-06
URL: https://www.anthropic.com/research/components-of-agent-memory

## Introducing Personal Finance in Claude
- Connects to bank and card accounts via Plaid, read-only; Claude cannot move or invest funds.
- Beta rollout on Pro, Max, and Ultra plans in the US.
- Totals spending by category, flags duplicate charges and rising bills, explains terms, builds charts/dashboards.
- Claude doesn't see bank passwords; Personal Finance hub chats not used for training; accounts can be unlinked anytime.
- Not designed for investment advice; users should verify important figures.
Category: feature update
Date: 2026-11-05
URL: https://claude.com/resources/articles/introducing-personal-finance-in-claude

## More visibility and control over Claude Enterprise for security teams
- Security center (beta) compares org Claude settings against Anthropic's recommended config; exports auditor reports.
- Inference hooks (GA): prompt and pre-tool-call hooks send data to existing DLP/security tools.
- Centralized management (beta): one admin console for parent orgs (SSO, SCIM).
- Admin API sign-out of members, self-managed IP allowlist, block personal accounts in Claude Desktop on managed machines.
- EDR sensor integration in Cowork VM (beta, macOS/Windows), detection mode only.
Category: feature update
Date: 2026-11-05
URL: https://claude.com/resources/articles/claude-enterprise-security-updates

## New agents and products for security, productivity, and creative work on Claude Marketplace
- Claude Marketplace now has over 25 partner agents and products.
- New security partners: Chainguard, Checkmarx, Cyera, Rubrik, Tanium; dev infra: Datadog, Netlify.
- Creative/marketing: AirOps, Runway, Webflow; productivity: Asana, Glean, monday, Zoom.
- Eligible customers can apply committed Anthropic spend to partner solutions.
- Security tools pair Claude with code scanning, vulnerability testing, endpoint management, and agent governance.
Category: announcement
Date: 2026-11-04
URL: https://claude.com/resources/articles/new-agents-and-products-claude-marketplace

## Make long-running agents faster with message threads
- Public beta in the Claude Platform Messages API: send full conversation once, then only new messages.
- Uses a `thread` parameter plus previous response ID; threads expire 5 minutes after last request.
- Cuts time to first token; about 35% median drop for 500k-1M token requests in Claude Code (on by default).
- Token usage and rates unchanged; Claude still reads the full conversation each turn.
- Available on Claude Platform, AWS, Microsoft Foundry, and Google Cloud.
Category: feature update
Date: 2026-11-02
URL: https://claude.com/resources/articles/message-threads

## Smart reports, surveys, and pooled group budgets for Claude Enterprise
- Three Claude Enterprise features now generally available.
- Smart reports: Claude samples transcripts, groups work into workstreams, shows spend, deliverables, friction points; not for evaluating individuals.
- In-app surveys: short cards after replies; customizable questions/audiences, export, retention settings.
- Pooled group budgets: shared monthly budget per group; alerts at 50/75/95/100%; members can request more.
- Availability varies by config (e.g., HIPAA, customer-managed keys).
Category: feature update
Date: 2026-10-28
URL: https://claude.com/resources/articles/smart-reports-surveys-pooled-budgets

## IDC brings Quanta into Claude and adopts Claude across the company
- IDC Quanta platform integrated into Claude; answers draw on IDC forecasts and research with source citations.
- Works in Claude app, Cowork, and Microsoft Office add-ins; supports competitor briefs, vendor shortlists, budget vs forecast comparisons.
- IDC rolled out Claude company-wide, starting with engineering.
- Reported results: data repository rebuilt in 3 weeks vs ~3 months; code review from 5 days to ~30 minutes.
- Existing Quanta customers add the connector within Claude.
Category: announcement
Date: 2026-10-28
URL: https://claude.com/resources/articles/idc-brings-quanta-into-claude-and-adopts-claude-across-the-company

## Introducing artifacts for legal work
- Gallery of ready-to-use interactive artifacts (trackers, dashboards) for legal teams.
- Use cases: cite checking, comparing laws, matter management, contract deviation flagging, regulation scanning, contract review tables.
- Contributions from Goodwin, Harvey, Foley & Lardner, PwC; nine access-to-justice artifacts (five by nonprofits).
- 60+ legal connectors added since May launch.
- Shareable internally or with clients, with privacy and ethical wall settings; answers link to sources.
Category: feature update
Date: 2026-10-28
URL: https://claude.com/resources/articles/introducing-artifacts-for-legal-work

## Manage costs and demonstrate ROI for Claude Code on Google Cloud
- Best-practices guide using a control, track, prove framework.
- Control: Claude apps gateway sets spend caps per user/group/org, warns at 75% and 95%, enforces model allowlists.
- Track: OpenTelemetry metrics by user, model, skill, plugin, agent, MCP server; export to Cloud Monitoring or BigQuery.
- Prove: measure adoption, satisfaction, PR cycle time, review turnaround against a pre-rollout baseline.
- Recommends cutting waste (expensive models on routine tasks) over capping power users.
Category: announcement
Date: 2026-10-27
URL: https://claude.com/resources/articles/how-to-manage-costs-and-demonstrate-roi-for-claude-code-on-google-cloud

## Claude for Financial Advisors
- Suite of connectors and workflow skills for advisor research, meeting prep, and documentation.
- Connectors include Charles Schwab, Addepar, BlackRock, Orion, Wealthbox; bundled in a single plugin.
- Skills: pre-meeting prep, follow-up, rebalance reviews, estate/tax checks, compliance screening.
- Human review required for recommendations, communications, and compliance; CRM updates are staged for approval.
- Available now in Cowork for Enterprise customers.
Category: feature update
Date: 2026-10-27
URL: https://claude.com/resources/articles/claude-for-financial-advisors
