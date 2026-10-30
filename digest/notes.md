## Smart reports, surveys, and pooled group budgets for Claude Enterprise
- Three Claude Enterprise features now generally available: smart reports, in-app surveys, pooled group budgets
- Smart reports: admins pick team/date/products; Claude samples transcripts, groups workstreams, shows spend, deliverables, friction, and suggests skills
- Surveys: customizable questions/audience/timing, spreadsheet export, available with customer-managed encryption keys
- Pooled budgets: one shared monthly budget per group, individual limits still apply, alerts at 50/75/95/100%
- Meant for adoption and investment planning, not individual performance evaluation
Category: feature update
Date: 2026-10-28
URL: https://claude.com/resources/articles/smart-reports-surveys-pooled-budgets

## IDC brings Quanta into Claude and adopts Claude across the company
- IDC Research and Anthropic bring IDC Quanta (tech intelligence platform) into Claude via a connector
- Customers query IDC forecasts, market data, and research with cited answers
- Works in desktop/mobile apps, Cowork, and Microsoft Office add-ins
- IDC rolled out Claude company-wide; an engineering data repository rebuild took 3 weeks vs ~3 months estimated
- Reflects meeting customers where they already work
Category: announcement
Date: 2026-10-28
URL: https://claude.com/resources/articles/idc-brings-quanta-into-claude-and-adopts-claude-across-the-company

## Introducing artifacts for legal work
- Ready-to-use interactive artifacts (trackers, dashboards) for legal teams, in a new legal gallery
- Examples: cite checker, jurisdiction survey matrix, matter board, playbook deviation board, regulatory horizon scan, contract review
- Partners contributing include Goodwin, Harvey, Foley & Lardner, PwC; 60+ legal connectors added since May
- Sharing with privacy and ethical-wall settings; nine access-to-justice artifacts
- Launched Legal Ambassadors Program (waitlist open)
Category: feature update
Date: 2026-10-28
URL: https://claude.com/resources/articles/introducing-artifacts-for-legal-work

## Manage costs and demonstrate ROI for Claude Code on Google Cloud
- Best-practices guide built on three levers: control, track, prove
- Claude apps gateway in your Google Cloud project: spend caps per user/IdP group/org, model allowlists, in-CLI warnings at 75%/95%, admin API
- Claude Code OpenTelemetry data now broken down by skill, plugin, agent, MCP server
- Argues cost per task matters more than price per token; caps should guide, not block
- Prove value by pairing usage with surveys and metrics like PR cycle time and review turnaround
Category: feature update
Date: 2026-10-27
URL: https://claude.com/resources/articles/how-to-manage-costs-and-demonstrate-roi-for-claude-code-on-google-cloud

## Claude for Financial Advisors
- Suite of connectors and workflow skills (plugin) for financial advisors
- Connects to custodians (Schwab), portfolio platforms (Addepar, SS&C Black Diamond), CRMs (Wealthbox)
- Skills: pre-meeting prep, follow-up, rebalance reviews, compliance checks
- Claude stages client communications and CRM updates for advisor approval
- Available via Enterprise plans (audit logs useful for RIA recordkeeping)
Category: announcement
Date: 2026-10-27
URL: https://claude.com/resources/articles/claude-for-financial-advisors

## Expanding Claude for Nonprofits
- New Claude for Nonprofits plugin of skills and connectors, built with ~30 nonprofits
- Covers fundraising (donor research to grant reporting) and ops (marketing, hiring, board management)
- Auto-installed for nonprofits on Team and Enterprise at no extra cost
- ~90% discount for verified nonprofits in low/middle-income countries (Team seats $3/user/month)
- Claude Corps fellowship extended via Taproot partnership; 25,000+ nonprofits use Claude
Category: announcement
Date: 2026-10-26
URL: https://claude.com/resources/articles/expanding-claude-for-nonprofits

## Claude Cowork and chat come together for Enterprise
- Cowork and chat unified into one experience, generally available on Enterprise (web, desktop, mobile)
- Quick answers for simple questions; code/file tasks run in Anthropic-managed cloud environment and continue when laptop closes
- New Efficient mode for admins keeps usage on Sonnet and Haiku models
- SSO and Compliance API still apply; each cloud session runs in an isolated VM
- Agentic tasks use more tokens; spend limits and pooled budgets help manage cost
Category: feature update
Date: 2026-10-23
URL: https://claude.com/resources/articles/unified-claude-enterprise

## Claude Duet Safety, Privacy, and Security
- Claude Duet is a research-preview agent running on a cloud computer with your connected apps, continuing after app is closed
- Important actions (sending, paying, deleting) require approval, with a separate automated check per action
- New classifier screens outgoing messages for sensitive info ("never share" vs "needs consent" tiers)
- Never sees passwords, cookies, or tokens; handled by separate browser machine and outside proxy
- Approval frequency and classifier accuracy still being tuned in preview
Category: announcement
Date: 2026-10-23
URL: https://claude.com/resources/articles/claude-duet-safety-privacy-and-security

## Building agents: When to fold subagents into your main agent loop
- Guidance on replacing multiple subagents with one main agent loop plus skills and tools; includes a migration kit
- Single model/context; domain procedures load on demand via skills
- Subagents still useful for parallel work, context bloat, tool-selection conflicts
- Single agent with skills often outperformed multi-subagent designs; one customer saw ~2x faster runtime
- Migrate by building a small eval, folding one subagent at a time, keeping it only if the folded version scores worse
Category: announcement
Date: 2026-10-22
URL: https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop

## LLMs are making formal software verification feasible at a much larger scale
- Anthropic Frontier Red Team with Theorem used Claude to write formal proofs that compiled open-source code cannot crash
- Proofs target RISC-V assembly, checked with Rocq proof checker
- Covered 239 entry points across 123 open-source libraries, inputs up to 64 MB; also patched bugs found
- Could make verification practical for far more software (previously years of expert effort)
- Caveat: relies on trusted components; "formally verified" does not mean bug-free
Category: announcement
Date: 2026-10-22
URL: https://www.anthropic.com/research/formal-verification
