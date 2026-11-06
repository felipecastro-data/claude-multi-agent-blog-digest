## Building agents: When to fold subagents into your main agent loop
- Guidance on when to replace orchestrator/subagent designs with one main agent loop on Claude Platform
- Single loop loads skills on demand and finds tools via tool search; migrate subagents one at a time, comparing evals
- Enterprise comparisons: single agent with skills often beat single-prompt and subagent designs on quality, cost, latency
- One customer saw its single loop ~2x faster than multi-agent setup
- Subagents still fit for context bloat, parallel tasks, or tool-selection trouble; migration kit and Claude API skills released
Category: announcement
Date: 2026-10-22
URL: https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop

## Introducing Personal Finance in Claude
- Feature connecting bank and card accounts so users can ask plain-language questions about money
- Beta rollout for Pro, Max, Ultra plans in the US; read-only, cannot move or invest money
- Accounts linked via Plaid; Claude never sees bank password; can categorize spending, flag unusual charges, explain terms
- Personal Finance hub conversations not used for model training; accounts can be unlinked anytime
- No ads or sponsored recommendations
Category: feature update
Date: 2026-11-05
URL: https://claude.com/resources/articles/introducing-personal-finance-in-claude

## More visibility and control over Claude Enterprise for security teams
- New security/admin features for Claude Enterprise
- Security center (beta): compares org settings to Anthropic's recommended configuration; downloadable report (not a compliance certification)
- Inference hooks (GA): send prompts and tool calls to existing DLP/security tools
- Admin controls (beta): parent-org admin console, sign-out via Admin API, self-serve IP allowlist, block personal accounts in Claude Desktop on managed machines, EDR sensor in Cowork VM
- Gives security teams visibility into configuration, device activity, and data handling
Category: feature update
Date: 2026-11-05
URL: https://claude.com/resources/articles/claude-enterprise-security-updates

## New agents and products for security, productivity, and creative work on Claude Marketplace
- New partner agents/products added to Claude Marketplace
- Security (Chainguard, Checkmarx, Cyera), dev infra (Datadog, Netlify), creative (AirOps, Runway, Webflow), productivity (Asana, Glean, monday, Zoom)
- Marketplace now has 25+ partner offerings
- Eligible enterprises can apply part of committed Anthropic spend to partner products
- One commitment covers Claude and partner tools
Category: announcement
Date: 2026-11-04
URL: https://claude.com/resources/articles/new-agents-and-products-claude-marketplace

## Make long-running agents faster with message threads
- Message threads: public beta in Claude Platform Messages API
- Add a `thread` parameter; first request sends full conversation, later ones send only new messages plus previous response ID; threads expire 5 min after last request
- Median time to first token dropped ~35% for 500k-1M token requests (on by default for most Claude Code users)
- Token usage and pricing/rate limits unchanged
- Helps long coding, computer-use, and document/image-heavy agents
Category: feature update
Date: 2026-11-02
URL: https://claude.com/resources/articles/message-threads

## Smart reports, surveys, and pooled group budgets for Claude Enterprise
- Three Claude Enterprise features now generally available
- Smart reports analyze sampled team transcripts for workstreams, spend, deliverables, friction, and skill recommendations
- In-app surveys gather team feedback; customizable, exportable
- Pooled group budgets: shared monthly limit with member guardrails and admin threshold alerts
- Meant for adoption planning, not individual performance reviews
Category: feature update
Date: 2026-10-28
URL: https://claude.com/resources/articles/smart-reports-surveys-pooled-budgets

## IDC brings Quanta into Claude and adopts Claude across the company
- IDC Quanta (technology intelligence platform) now available inside Claude
- Users benchmark, size markets, compare vendors; answers cite IDC sources
- IDC rolled out Claude company-wide
- Engineering rebuilt internal research data repository in 3 weeks vs. estimated 3 months
- Tasks like vendor shortlists drop from a day to minutes
Category: announcement
Date: 2026-10-28
URL: https://claude.com/resources/articles/idc-brings-quanta-into-claude-and-adopts-claude-across-the-company

## Introducing artifacts for legal work
- Claude for Legal gets ready-to-use artifacts (interactive trackers, dashboards) in a new legal gallery
- Templates: cite checking, playbook contract review, tabular review, regulatory horizon scanning
- 60+ legal connectors added (e.g., Bloomberg Law, Filevine); contributions from Goodwin, Harvey, PwC
- Sharing with privacy and ethical-wall controls; lawyer review still required
- Nine access-to-justice artifacts; Legal Ambassadors Program waitlist opened
Category: feature update
Date: 2026-10-28
URL: https://claude.com/resources/articles/introducing-artifacts-for-legal-work

## Manage costs and demonstrate ROI for Claude Code on Google Cloud
- Best-practices guide for cost governance of Claude Code on Google Cloud
- Framework: control (guardrails), track (visibility), prove (business value)
- Claude apps gateway: spend caps, 75%/95% warnings, model allowlists, admin API; Google Cloud budgets, BigQuery exports, provisioned throughput
- OpenTelemetry data breaks down usage/cost by user, model, tool
- Recommends judging cost per task and outcomes over blunt restrictions
Category: announcement
Date: 2026-10-27
URL: https://claude.com/resources/articles/how-to-manage-costs-and-demonstrate-roi-for-claude-code-on-google-cloud

## Claude for Financial Advisors
- Suite of connectors and workflow skills for advisor research, meeting prep, documentation
- Connects to Schwab, Addepar, Wealthbox and others; skills for pre-meeting prep, rebalance reviews, follow-ups, compliance checks
- Advisors retain final approval over recommendations and communications
- Available now as a Cowork plugin for Enterprise plans; others can request a license
- Originally published Sept 14, 2026, later updated
Category: feature update
Date: 2026-10-27
URL: https://claude.com/resources/articles/claude-for-financial-advisors
