## Building agents: When to fold subagents into your main agent loop
- Guidance on merging subagents (routers, planners, specialists) into one main agent loop
- Single model/context loads domain procedures as skills and exposes actions as tools
- Keep subagents only for parallel work, context bloat, or tool-selection problems
- Staged migration: build end-to-end eval, merge coupled specialists, fold in one at a time
- Single agents often beat multi-subagent designs on quality, cost, latency (one customer ~2x faster)
Category: announcement
Date: 2026-10-22
URL: https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop

## Introducing Personal Finance in Claude
- Connect bank and card accounts and ask plain-language questions about money; read-only
- Beta rollout on Pro, Max, Ultra plans in the US
- Spending by category, month comparisons, flags duplicate charges and rising bills
- Accounts connect via Plaid; hub conversations not used for training; unlink anytime
- No ads, sponsored recommendations, or own financial products
Category: feature update
Date: 2026-11-05
URL: https://claude.com/resources/articles/introducing-personal-finance-in-claude

## More visibility and control over Claude Enterprise for security teams
- New security and admin features for Claude Enterprise
- Security center (beta) compares settings for chat, Cowork, Claude Code to recommended config; exportable for auditors
- Inference hooks GA: prompts and tool calls sent to existing DLP/security tools
- Centralized multi-org admin console (beta), admin sign-out via Admin API, IP allowlists, block personal accounts on managed Desktop
- EDR sensors can run inside Cowork VM on macOS/Windows (detection mode)
Category: feature update
Date: 2026-11-05
URL: https://claude.com/resources/articles/claude-enterprise-security-updates

## New agents and products for security, productivity, and creative work on Claude Marketplace
- New partner listings on Claude Marketplace; now over 25 partner agents and products
- Security: Chainguard, Checkmarx, Cyera, Rubrik, Tanium; dev infra: Datadog, Netlify
- Marketing/creative: AirOps, Runway, Webflow; productivity: Asana, Glean, monday, Zoom
- Eligible enterprises can apply committed Anthropic spend to partner products
- Builders can apply to join the marketplace
Category: announcement
Date: 2026-11-04
URL: https://claude.com/resources/articles/new-agents-and-products-claude-marketplace

## Make long-running agents faster with message threads
- Public beta for Claude Platform Messages API
- Add a `thread` parameter; send only new messages plus previous response ID instead of full conversation
- Threads held in memory, encrypted, expire 5 minutes after last request
- ~35% drop in median time to first token for 500k-1M token requests in Claude Code (on by default)
- Token usage unchanged; best for long coding, computer use, and document/image-heavy agents
Category: feature update
Date: 2026-11-02
URL: https://claude.com/resources/articles/message-threads

## Smart reports, surveys, and pooled group budgets for Claude Enterprise
- Three new Claude Enterprise features
- Smart reports: per team/date/product view of workstreams, spend, deliverables, friction, with skill/rule recommendations
- In-app surveys: customizable cards after replies, exportable; work with customer-managed keys
- Pooled group budgets: shared monthly budget per group; member limits still apply
- Aimed at adoption insight, not individual performance evaluation
Category: feature update
Date: 2026-10-28
URL: https://claude.com/resources/articles/smart-reports-surveys-pooled-budgets

## IDC brings Quanta into Claude and adopts Claude across the company
- IDC Quanta platform now available in Claude as a connector
- Answers drawn from IDC forecasts, market data, and research, with citations
- Customers can get competitor briefs, vendor shortlists, budget comparisons in minutes
- IDC also rolled Claude out internally (e.g., code review cut from 5 days to ~30 minutes)
- Quanta customers add connector within Claude
Category: announcement
Date: 2026-10-28
URL: https://claude.com/resources/articles/idc-brings-quanta-into-claude-and-adopts-claude-across-the-company

## Introducing artifacts for legal work
- Ready-to-use interactive artifacts (trackers, dashboards) for legal teams
- Legal gallery: cite-checking, contract vs standard terms, regulatory tracking, side-by-side review
- Includes nine access-to-justice artifacts; Legal Ambassadors Program launched
- Shareable internally and externally with privacy and ethical-wall settings
- Outputs link to sources for lawyer verification
Category: feature update
Date: 2026-10-28
URL: https://claude.com/resources/articles/introducing-artifacts-for-legal-work

## Manage costs and demonstrate ROI for Claude Code on Google Cloud
- Best-practices guide with "control, track, prove" framework
- Control: Claude apps gateway spend caps per user/group/org, model allowlists
- Track: OpenTelemetry metrics into Cloud Monitoring and BigQuery; cost-center tags
- Prove: measure adoption, satisfaction, PR cycle time, review effort, merged output
- Define consistent "unit of work" to justify spend without restricting power users
Category: announcement
Date: 2026-10-27
URL: https://claude.com/resources/articles/how-to-manage-costs-and-demonstrate-roi-for-claude-code-on-google-cloud

## Claude for Financial Advisors
- Connectors and workflow skills for advisor research, prep, documentation
- Connects to Schwab, Addepar, BlackRock, Wealthbox, and other custodians, CRMs, planning tools
- Skills: meeting prep/notes, rebalance review, estate and tax briefs, SEC Marketing Rule checks
- Advisor stays in control; approval required for critical tasks
- Available now as a plugin via Cowork; Enterprise recommended for audit logs
Category: announcement
Date: 2026-10-27
URL: https://claude.com/resources/articles/claude-for-financial-advisors
