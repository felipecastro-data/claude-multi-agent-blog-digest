## Building agents: When to fold subagents into your main agent loop
- Guide on replacing multi-agent subagent setups with one agent loop using skills and tools; includes a migration kit
- Domain procedures move into on-demand skills; hard limits and lookups move into tools
- Shared context cuts lossy handoffs; often better quality at lower cost/latency (one customer ~2x faster)
- Warns orgs end up with "a copy of their org chart"; recommends a small central team owning the system prompt and evals
- Migrate by building a small eval set, folding in one subagent at a time, checking per-task results and repeating runs
Category: announcement
Date: 2026-10-22
URL: https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop

## Smart reports, surveys, and pooled group budgets for Claude Enterprise
- Three Claude Enterprise features now generally available
- Smart reports sample transcripts, group work into workstreams, show spend, deliverables, friction; not for evaluating individuals
- In-app surveys: customizable cards after replies, exportable responses
- Pooled group budgets: shared monthly budget per group, with admin alerts at 50/75/95/100%
- Helps leaders see where Claude adds value and direct spend; availability varies by configuration (HIPAA, CMEK)
Category: feature update
Date: 2026-10-28
URL: https://claude.com/resources/articles/smart-reports-surveys-pooled-budgets

## IDC brings Quanta into Claude and adopts Claude across the company
- IDC Quanta technology intelligence platform now available as an MCP connector in Claude
- Claude produces competitor briefs, vendor shortlists, forecast comparisons, with IDC source citations
- Works in Claude app, Cowork, and Microsoft Office add-ins
- IDC internal rollout: data repository rebuilt in 3 weeks vs ~3 months; code review 5 days to ~30 minutes (IDC-reported)
- Available to IDC Quanta customers using Claude
Category: announcement
Date: 2026-10-28
URL: https://claude.com/resources/articles/idc-brings-quanta-into-claude-and-adopts-claude-across-the-company

## Introducing artifacts for legal work
- Gallery of prebuilt interactive legal tools (trackers, dashboards) added to Claude for Legal
- Covers citation checks, law comparisons, matter tracking, contract deviation flags, regulation scans, review tables
- 60+ legal connectors added, including Bloomberg Law and Filevine
- Partner artifacts from Goodwin, Harvey, Foley & Lardner, PwC; nine access-to-justice tools; Legal Ambassadors Program waitlist
- Source links let lawyers verify output; sharing controls support privacy and ethical walls
Category: feature update
Date: 2026-10-28
URL: https://claude.com/resources/articles/introducing-artifacts-for-legal-work

## Manage costs and demonstrate ROI for Claude Code on Google Cloud
- Best-practices guide: control, track, and prove value of Claude Code on Google Cloud
- Claude apps gateway (self-hosted) adds per-user/group/org spend caps, server-side model allowlists, 75%/95% warnings, admin API
- OpenTelemetry metrics by user, model, skill, plugin, agent, MCP server; flow to Cloud Monitoring and BigQuery
- ROI: measure adoption, satisfaction, delivery impact (PR cycle time, review turnaround) vs a baseline
- Cost per task matters more than price per token; prefer model defaults over blunt restrictions
Category: feature update
Date: 2026-10-27
URL: https://claude.com/resources/articles/how-to-manage-costs-and-demonstrate-roi-for-claude-code-on-google-cloud

## Claude for Financial Advisors
- Suite of connectors and workflow skills linking Claude to custodians, portfolio platforms, CRMs, planning tools
- Partners include Addepar, BlackRock, Charles Schwab, Orion, Wealthbox
- Skills: meeting prep and notes, rebalance review, estate/tax briefs, prospect intake, compliance checks
- Claude stages actions for advisor review; recommendations and compliance remain subject to human approval
- Plugin in Cowork plugin browser for Enterprise; Enterprise recommended for audit logs
Category: announcement
Date: 2026-10-27
URL: https://claude.com/resources/articles/claude-for-financial-advisors

## Expanding Claude for Nonprofits
- Claude for Nonprofits plugin of skills and connectors, built with ~30 nonprofits
- Covers fundraising, marketing, hiring, board work, grant research, responsible setup against AI policy
- Claude Corps fellowship to extend via Taproot pro bono consulting; new consulting partners and webinars
- Auto-installs at no extra cost on Team and Enterprise plans
- 25,000+ nonprofits already use Claude; 75%+ have under 10 seats
Category: announcement
Date: 2026-10-26
URL: https://claude.com/resources/articles/expanding-claude-for-nonprofits

## Claude Cowork and chat come together for Enterprise
- Claude Enterprise now has one unified experience combining chat and Cowork on web, desktop, mobile; generally available
- Chat tasks needing code/files move to an Anthropic-managed cloud environment; work continues when laptop closes
- Admin controls: role access, model entitlements, spend limits, new Efficient mode (Sonnet/Haiku), pooled group budgets
- Each agentic session runs in an isolated VM, network egress off by default; SSO and Compliance API still apply
- ZDR for Claude Code, HIPAA-ready, and CMEK orgs stay on current setup
Category: feature update
Date: 2026-10-23
URL: https://claude.com/resources/articles/unified-claude-enterprise

## Claude Duet Safety, Privacy, and Security
- Claude Duet is a research-preview always-on agent on a cloud computer using connected apps
- Approval required before sensitive steps; some actions (trading, moving money) stay off-limits regardless
- Outgoing message classifier blocks credentials, card/bank numbers, government IDs
- Credential isolation: agent never sees passwords, cookies, tokens; handled by separate browser machine and proxy
- Still in preview; Anthropic asks for feedback and vulnerability reports
Category: announcement
Date: 2026-10-23
URL: https://claude.com/resources/articles/claude-duet-safety-privacy-and-security

## LLMs are making formal software verification feasible at a much larger scale
- Anthropic with Theorem used Claude to write formal proofs that compiled software won't crash, operating on RISC-V assembly
- Proved 239 fuzz-test entry points across 123 open-source libraries crash-free for inputs under 64 MB
- Claude also found and patched hundreds of bugs, some missed by fuzzing
- Proofs still cost hundreds of millions of tokens; proof reuse cut tokens 17%
- Caveat: "formally verified" is not "bug-free"; specs and trusted components must match reality
Category: announcement
Date: 2026-10-22
URL: https://www.anthropic.com/research/formal-verification
