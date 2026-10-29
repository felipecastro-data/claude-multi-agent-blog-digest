## Building agents: When to fold subagents into your main agent loop
- Guide on replacing subagents with a single agent loop using skills and tools
- One model keeps context; domain procedures become skills, mechanical checks become tools via tool search
- Single agents often matched or beat multi-agent designs on quality with lower cost/latency; one customer saw ~2x faster runtime
- Migrate by building a small eval, then folding in one subagent at a time; keep a subagent only if the score drops
- Migration kit and API skills (build-eval, prompt-audit, hillclimb, cost-optimize) offered
Category: announcement
Date: 2026-10-22
URL: https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop

## Smart reports, surveys, and pooled group budgets for Claude Enterprise
- Three Claude Enterprise features now generally available
- Smart reports: Claude samples transcripts, groups workstreams, shows spend, deliverables, friction points; not for individual performance review
- In-app surveys: customizable cards after replies on value and time saved; responses exportable
- Pooled group budgets: shared monthly budget with alerts at 50/75/95/100%; individual limits still apply
- Helps orgs see where Claude creates value and allocate spend; availability varies by configuration
Category: feature update
Date: 2026-10-28
URL: https://claude.com/resources/articles/smart-reports-surveys-pooled-budgets

## IDC brings Quanta into Claude and adopts Claude across the company
- IDC Quanta technology intelligence platform now available in Claude via MCP connector
- Customers ask about markets, competitors, vendors; answers cite IDC sources
- Example uses: competitor briefs, Excel vendor scorecards, budget vs IDC forecast comparisons
- IDC rolled out Claude company-wide, starting with engineering; code reviews went from 5 days to ~30 minutes
- Puts trusted research data where customers already work
Category: announcement
Date: 2026-10-28
URL: https://claude.com/resources/articles/idc-brings-quanta-into-claude-and-adopts-claude-across-the-company

## Introducing artifacts for legal work
- Gallery of ready-to-use interactive artifacts (trackers, dashboards) for legal teams in Claude for Legal
- Tasks include cite checking, contract review, regulatory tracking; outputs link to sources
- 60+ legal connectors added since May launch
- Partner artifacts from Goodwin, Harvey, Foley & Lardner, PwC; nine access-to-justice artifacts; Legal Ambassadors Program waitlist
- Reduces setup; sharing controls cover privacy and ethical walls
Category: feature update
Date: 2026-10-28
URL: https://claude.com/resources/articles/introducing-artifacts-for-legal-work

## Manage costs and demonstrate ROI for Claude Code on Google Cloud
- Best-practices guide for Claude Code cost management and ROI on Google Cloud
- Control, track, prove framework
- Claude apps gateway: spend caps, model allowlists, admin API; OpenTelemetry metrics to Cloud Monitoring and BigQuery
- Advises guiding rather than restricting developers, since high-cost sessions are often high-value
- Measure impact such as PR cycle time and review effort against a baseline
Category: announcement
Date: 2026-10-27
URL: https://claude.com/resources/articles/how-to-manage-costs-and-demonstrate-roi-for-claude-code-on-google-cloud

## Claude for Financial Advisors
- Suite of connectors and workflow skills for research, meeting prep, documentation
- Connectors include Charles Schwab, Addepar, Wealthbox, Orion; skills cover meeting prep/follow-up, rebalance review, estate/tax checks, compliance screening
- Advisor stays in control: CRM updates and client communications need approval; regulated activity needs human review
- Advisors spend only ~1/6 of time in client meetings; aims to shift admin work to Claude
- Available now as a Cowork plugin for Enterprise customers
Category: feature update
Date: 2026-10-27
URL: https://claude.com/resources/articles/claude-for-financial-advisors

## Expanding Claude for Nonprofits
- Claude for Nonprofits plugin of skills and connectors for verified nonprofits, built with ~30 nonprofits
- Covers extending small teams (marketing, hiring, board), setup with org context/AI policies, and fundraising
- 25,000+ nonprofits use Claude, mostly small (under 10 seats)
- Claude Corps plans 1,000 early-career fellows in 400+ US nonprofits; planned Taproot pro bono partnership
- Installs automatically at no extra cost on Team and Enterprise plans
Category: announcement
Date: 2026-10-26
URL: https://claude.com/resources/articles/expanding-claude-for-nonprofits

## Claude Cowork and chat come together for Enterprise
- Chat and Cowork unified into one experience on web, desktop, mobile; GA for Enterprise
- No mode choice: quick answers, or code/file tasks run in Anthropic-managed cloud environment
- Cloud work continues after laptop closes and can be resumed on any device
- Admin controls: role access, model entitlements, Efficient mode, spend limits, pooled group budgets
- Security: isolated VMs, network egress off by default, SSO and Compliance API apply
Category: feature update
Date: 2026-10-23
URL: https://claude.com/resources/articles/unified-claude-enterprise

## Claude Duet Safety, Privacy, and Security
- Claude Duet is a research-preview agent that works on a cloud computer using connected apps, running even when app is closed
- Sensitive actions (sending, paying, deleting) need approval; classifier checks outgoing messages for private data
- Never sees passwords, cookies, or tokens; browser runs in separate VM
- Users can review task list, steer, reset memory; browser identifies as an agent and some sites block it
- Layered protections, external pen testing, bug bounty; approval prompts still being refined
Category: announcement
Date: 2026-10-23
URL: https://claude.com/resources/articles/claude-duet-safety-privacy-and-security

## LLMs are making formal software verification feasible at a much larger scale
- Anthropic research with Theorem: Claude writes formal proofs of security properties for assembly-level (RISC-V) open-source code
- Proved 239 fuzz-test entry points across 123 libraries cannot crash on inputs up to 64 MB
- Found and patched long-undetected bugs, including a rediscovered libexpat vulnerability
- Argues testing alone is insufficient as AI improves at finding bugs; proofs checked by a proof checker
- Caveat: verified does not mean bug-free; assumes single-threaded static binaries on RISC-V Linux
Category: announcement
Date: 2026-10-22
URL: https://www.anthropic.com/research/formal-verification
