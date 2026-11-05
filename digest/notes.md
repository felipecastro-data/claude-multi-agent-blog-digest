## More visibility and control over Claude Enterprise for security teams
- New security and admin features for Claude Enterprise aimed at security teams
- Security center (beta) compares settings to Anthropic's recommended config; exportable report, not a compliance certification
- Inference hooks (GA): prompt and pre-tool-call hooks check against existing DLP/security policies
- Centralized management (beta) at admin.claude.com across orgs under a parent; EDR sensor support in Cowork VM (detection mode)
- Matters: one place to review config, enforce policies, sign out members, block personal accounts in Claude Desktop
Category: feature update
Date: 2026-11-05
URL: https://claude.com/resources/articles/claude-enterprise-security-updates

## New agents and products for security, productivity, and creative work on Claude Marketplace
- Claude Marketplace now lists 25+ partner agents and products
- Additions span security (Chainguard, Checkmarx, Tanium), dev infra (Datadog, Netlify), creative (Runway, Webflow), productivity (Asana, Glean, monday, Zoom)
- Eligible enterprises can apply part of committed Anthropic spend to partner solutions
- Matters: one commitment covers Claude and partner products
- Applies to both new purchases and expanding existing tools
Category: announcement
Date: 2026-11-04
URL: https://claude.com/resources/articles/new-agents-and-products-claude-marketplace

## Make long-running agents faster with message threads
- Public beta in Claude Platform Messages API for long-running agent sessions
- Send full conversation once, then only new messages plus previous response ID via `thread` parameter; threads expire after 5 min idle
- Claude Code (on by default): ~35% lower median time to first token on 500k-1M token requests
- Token usage unchanged; standard rates and rate limits apply
- Available on Claude Platform, AWS, Microsoft Foundry, Google Cloud
Category: feature update
Date: 2026-11-02
URL: https://claude.com/resources/articles/message-threads

## Smart reports, surveys, and pooled group budgets for Claude Enterprise
- Three Claude Enterprise features now GA
- Smart reports: Claude samples transcripts, groups work into workstreams, shows spend, deliverables, friction points, skill recommendations
- In-app surveys: short cards for members, customizable questions, exportable responses
- Pooled group budgets: shared monthly budget with alerts at 50/75/95/100%; individual limits still apply
- Not intended for evaluating individual performance or employment decisions
Category: feature update
Date: 2026-10-28
URL: https://claude.com/resources/articles/smart-reports-surveys-pooled-budgets

## IDC brings Quanta into Claude and adopts Claude across the company
- IDC Quanta technology intelligence platform now in Claude via MCP connector, with cited answers
- Supports competitor briefs, vendor shortlists, budget vs IDC forecast comparisons
- IDC rolled out Claude company-wide (engineering, product, marketing, sales)
- Reported: internal data repository rebuilt in 3 weeks vs ~3 months; code review from 5 days to ~30 min
- Matters: day-long report reading reduced to minutes
Category: announcement
Date: 2026-10-28
URL: https://claude.com/resources/articles/idc-brings-quanta-into-claude-and-adopts-claude-across-the-company

## Introducing artifacts for legal work
- Ready-to-use interactive artifacts (trackers, dashboards) for legal teams, shareable and adaptable
- Legal gallery: cite checker, jurisdiction survey matrix, matter board, playbook deviation board, regulatory horizon scan, contract review tool
- Partner artifacts from Goodwin, Harvey, Foley & Lardner, PwC; nine access-to-justice artifacts
- Claude for Legal now has 60+ connectors; Legal Ambassadors Program (waitlist); funding for public interest groups
- Lawyer reviews Claude's first pass; sharing supports privacy and ethical walls
Category: feature update
Date: 2026-10-28
URL: https://claude.com/resources/articles/introducing-artifacts-for-legal-work

## Manage costs and demonstrate ROI for Claude Code on Google Cloud
- Guide using a "control, track, prove" framework
- Control: Claude apps gateway sets spend caps per user/IdP group/org, model allowlists, warnings at 75%/95%, admin API
- Track: OpenTelemetry metrics by user, model, skill, plugin, agent, MCP server; export to Cloud Monitoring and BigQuery
- Prove: measure adoption, satisfaction, PR cycle time, review turnaround, PRs per engineer against baseline
- Advice: guide heavy users rather than block them; tie cost to outcomes
Category: announcement
Date: 2026-10-27
URL: https://claude.com/resources/articles/how-to-manage-costs-and-demonstrate-roi-for-claude-code-on-google-cloud

## Claude for Financial Advisors
- Suite of connectors and workflow skills for advisors: research, meeting prep, documentation
- 20+ connector partners incl. Charles Schwab, BlackRock, Addepar, Orion, Wealthbox
- Plugin skills: meeting prep, notes/follow-up, rebalance review, estate/tax briefs, prospect intake, compliance checks
- Available in Cowork for Enterprise (recommended for RIAs for audit logs); others can request a license
- Advisors keep approval over client communications and regulated actions; page notes original publish Sept 14, 2026 and later updates
Category: feature update
Date: 2026-10-27
URL: https://claude.com/resources/articles/claude-for-financial-advisors

## Expanding Claude for Nonprofits
- Claude for Nonprofits plugin of skills and connectors, built with ~30 nonprofits
- Covers fundraising (donor research to grant reporting), marketing, hiring, operations, and setup with org policies
- Auto-installed at no extra cost on Team and Enterprise nonprofit plans
- Claude Corps fellowship expansion via Taproot partnership (pro bono consultants); two November webinars
- 25,000+ nonprofits already use Claude, mostly small orgs
Category: announcement
Date: 2026-10-26
URL: https://claude.com/resources/articles/expanding-claude-for-nonprofits

## Claude Cowork and chat come together for Enterprise
- Chat and Cowork merged into one experience on web, desktop, mobile; GA for Enterprise
- Conversations start as chat; code/file tasks shift to cloud agentic work producing documents, analyses, decks
- Cloud tasks keep running when laptop closes; resume on any device; chats, projects, connectors, skills carry over
- Isolated Anthropic-managed sessions; works with SSO and Compliance API; role-based access
- Cost controls: Efficient mode, model entitlements, spend limits, pooled group budgets
Category: feature update
Date: 2026-10-23
URL: https://claude.com/resources/articles/unified-claude-enterprise
