## Introducing Personal Finance in Claude
- Beta feature: connect bank and card accounts (via Plaid) and ask Claude plain-language questions about your money
- Read-only access to balances, account details, up to two years of transactions; cannot move or invest money
- Categorizes spending, compares months, flags duplicate charges or rising bills, explains terms, builds charts/dashboards
- US rollout on Pro, Max, Ultra plans; Personal Finance hub chats not used for training; accounts can be unlinked
- No ads, sponsored recommendations, or own financial products; answers may contain errors
Category: feature update
Date: 2026-11-05
URL: https://claude.com/resources/articles/introducing-personal-finance-in-claude

## More visibility and control over Claude Enterprise for security teams
- New Claude Enterprise security and admin features for security teams
- Security center (beta) compares settings with Anthropic's recommended config; exportable report
- Inference hooks now GA: prompt and pre-tool-call hooks send data to existing data security tools
- Centralized management (beta) at admin.claude.com for SSO, SCIM, domain verification; access controls (beta) include IP allowlist, sign-out via Admin API, blocking personal accounts in Claude Desktop
- EDR sensor (beta, macOS/Windows) runs in the Cowork VM and reports activity without blocking
Category: feature update
Date: 2026-11-05
URL: https://claude.com/resources/articles/claude-enterprise-security-updates

## New agents and products for security, productivity, and creative work on Claude Marketplace
- Claude Marketplace now lists over 25 partner agents and products
- New additions: security (Chainguard, Checkmarx, Cyera, Rubrik, Tanium), dev infra (Datadog, Netlify)
- Also marketing/creative (AirOps, Runway, Webflow) and productivity (Asana, Glean, monday, Zoom)
- Eligible enterprise customers can apply part of their committed Anthropic spend to partner solutions
- Matters because one Anthropic commitment covers Claude plus partner tools
Category: announcement
Date: 2026-11-04
URL: https://claude.com/resources/articles/new-agents-and-products-claude-marketplace

## Make long-running agents faster with message threads
- Public beta in the Claude Platform Messages API: send the conversation once, then only new messages
- Add a `thread` parameter; later requests include only new messages plus the previous response ID
- Threads kept in encrypted memory, expire 5 minutes after the last request; token usage unchanged
- Claude Code users with 500k-1M token requests saw median time to first token drop about 35%
- Helps coding agents, computer use agents, and document/image-heavy workflows
Category: feature update
Date: 2026-11-02
URL: https://claude.com/resources/articles/message-threads

## Smart reports, surveys, and pooled group budgets for Claude Enterprise
- Three GA Claude Enterprise features: smart reports, in-app surveys, pooled group budgets
- Smart reports sample transcripts, group work into workstreams, show spend, deliverables, friction points, and recommend skills/rules
- In-app surveys: customizable questions, recipients, timing; responses exportable
- Pooled budgets: one shared monthly team budget, individual limits as guardrails, alerts at 50/75/95/100%
- Meant for adoption and planning, not judging individual employees
Category: feature update
Date: 2026-10-28
URL: https://claude.com/resources/articles/smart-reports-surveys-pooled-budgets
