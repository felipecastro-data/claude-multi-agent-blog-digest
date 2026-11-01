## Building agents: When to fold subagents into your main agent loop
- Guidance on merging subagents into a single main agent loop, with a migration kit for assessing multi-agent systems
- One model in one context runs a tool loop; domain procedures move into skills, hard limits (validation, approval gates) into tools
- Single agent with skills often beat one-prompt and subagent designs on quality, cost, latency; one customer saw about 2x faster runtimes
- Migrate by building a small end-to-end eval first, then fold in one subagent at a time
- Subagents still make sense for context bloat, parallel work, or tool-selection/conflicting-instruction problems
Category: announcement
Date: 2026-10-22
URL: https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop

## Smart reports, surveys, and pooled group budgets for Claude Enterprise
- Three Claude Enterprise features now generally available
- Smart reports: Claude samples transcripts for a team, groups work into workstreams, shows spend, deliverables, friction points, and skill recommendations (not for evaluating individuals)
- In-app surveys: short cards after replies, default questions on value/time saved, customizable, exportable
- Pooled group budgets: shared monthly budget with individual limits as guardrails; alerts at 50/75/95/100%
- Helps admins see where Claude creates value and avoids unused budget
Category: feature update
Date: 2026-10-28
URL: https://claude.com/resources/articles/smart-reports-surveys-pooled-budgets

## IDC brings Quanta into Claude and adopts Claude across the company
- IDC Quanta market intelligence platform now available as a Claude connector, with answers citing IDC sources
- Use cases: competitor briefs, vendor shortlists, budget vs. IDC forecast comparisons
- IDC rolled out Claude company-wide, starting with engineering
- Company-reported results: data repository rebuilt in 3 weeks vs. ~3 months; code reviews from 5 days to ~30 minutes; planning sprints from 3 weeks to 3 days
- Research that took days can be done in minutes inside tools customers already use
Category: announcement
Date: 2026-10-28
URL: https://claude.com/resources/articles/idc-brings-quanta-into-claude-and-adopts-claude-across-the-company

## Introducing artifacts for legal work
- Ready-to-use interactive artifacts (trackers, dashboards) for legal teams in Claude for Legal
- New legal gallery: cite checking, jurisdiction comparison tables, contract deviation boards, regulatory timelines
- 60+ legal connectors; partners Goodwin, Harvey, Foley & Lardner, PwC contributed artifacts
- Sharing controls support ethical walls; outputs link to sources for verification
- Nine access-to-justice artifacts included; Legal Ambassadors Program (waitlist) launching
Category: feature update
Date: 2026-10-28
URL: https://claude.com/resources/articles/introducing-artifacts-for-legal-work

## Manage costs and demonstrate ROI for Claude Code on Google Cloud
- Guide using a "control, track, prove" framework for Claude Code on Google Cloud
- Control: Claude apps gateway sets spend caps per user, IdP group, or org; model defaults/allowlists; in-CLI warnings
- Track: OpenTelemetry metrics by user, model, skill, plugin, agent, MCP server; export to Cloud Monitoring or BigQuery
- Prove: measure adoption, satisfaction, PR cycle time, review turnaround, deployment frequency vs. baseline
- Favors guiding over restricting; waste often comes from routine work on expensive models
Category: announcement
Date: 2026-10-27
URL: https://claude.com/resources/articles/how-to-manage-costs-and-demonstrate-roi-for-claude-code-on-google-cloud

## Claude for Financial Advisors
- Suite of connectors and workflow skills linking Claude to custodians, portfolio platforms, CRMs, planning tools
- 20+ partner connectors (Schwab, BlackRock, Addepar, Wealthbox, Orion)
- Skills: meeting prep, follow-up, rebalance review, estate/tax checks, compliance screening (SEC Marketing Rule flags)
- Claude stages CRM updates and client communications for advisor approval
- Plugin available now; Enterprise plans recommended for audit logs
Category: announcement
Date: 2026-10-27
URL: https://claude.com/resources/articles/claude-for-financial-advisors

## Expanding Claude for Nonprofits
- Claude for Nonprofits plugin of skills and connectors, built with about 30 nonprofits
- Skills for marketing, hiring, board work, data mapping, and fundraising (funder research, RFP eligibility, proposals, reports, donors)
- Free automatically for verified nonprofits on Team and Enterprise plans
- Over 75% of the 25,000+ nonprofits using Claude have fewer than 10 seats
- Claude Corps fellowship to expand via Taproot partnership; no training on customer data by default
Category: announcement
Date: 2026-10-26
URL: https://claude.com/resources/articles/expanding-claude-for-nonprofits

## Claude Cowork and chat come together for Enterprise
- Chat and Cowork unified into one product, now generally available for Claude Enterprise
- Conversations start as chat; code/file tasks move to cloud agentic work that continues after closing the device
- Agentic sessions run in isolated VMs, network off by default; builds on SSO and Compliance API
- New Efficient mode limits to Sonnet and Haiku; per-role model access, spend limits, pooled budgets
- One tool for both quick questions and multi-step projects
Category: feature update
Date: 2026-10-23
URL: https://claude.com/resources/articles/unified-claude-enterprise

## Claude Duet Safety, Privacy, and Security
- Claude Duet is a research-preview cloud-computer agent that works across connected apps and keeps running after the app closes
- Requires approval before sensitive messages, payments, or deletions; separate automated check outside the model
- Purchases use one-time cards limited to one merchant and amount
- Classifier blocks sharing credentials, card/bank numbers, ID numbers; Duet never sees passwords, cookies, or tokens (isolated browser VM)
- Safeguards still being refined and may occasionally miss issues
Category: announcement
Date: 2026-10-23
URL: https://claude.com/resources/articles/claude-duet-safety-privacy-and-security

## LLMs are making formal software verification feasible at a much larger scale
- Anthropic and Theorem used Claude to write formal proofs that open-source software is free of certain crashes, checking compiled RISC-V code
- Proved no-crash properties for 239 entry points across 123 libraries, inputs up to 64 MB
- Converted fuzz tests into formal specs; found bugs fuzzing missed, including a decade-old logic bug
- Caveat: "formally verified" is not "bug-free"; assumes single-threaded static RISC-V Linux binaries
- Proof costs falling; authors expect formal verification to become standard in secure development
Category: announcement
Date: 2026-10-22
URL: https://www.anthropic.com/research/formal-verification
