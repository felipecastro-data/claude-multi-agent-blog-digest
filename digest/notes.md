## Building agents: When to fold subagents into your main agent loop
- Guide on merging many specialist subagents into one main agent loop on Claude Platform
- Recommends one model with one tool loop; domain knowledge in on-demand skills plus tool search
- Subagents still useful for context bloat, parallel work, or tool-selection conflicts
- Single agent with skills often gave better quality, lower cost and latency (one customer ~2x faster)
- Migrate by building a small eval, folding one subagent at a time; includes migration kit
Category: announcement
Date: 2026-10-22
URL: https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop

## Expanding Claude for Nonprofits
- New Claude for Nonprofits plugin of skills and connectors, built with ~30 nonprofits
- Auto-installed for nonprofits on Team and Enterprise plans at no extra cost
- Covers small-team capacity (marketing, hiring, board), setup with data map/AI policy, and fundraising lifecycle
- Claude Corps fellowship to be extended via Taproot, matching pro bono consultants
- Admins control access and connectors; no training on org data by default
Category: feature update
Date: 2026-10-26
URL: https://claude.com/resources/articles/expanding-claude-for-nonprofits

## Claude Cowork and chat come together for Enterprise
- Chat and Cowork unified into one Claude experience on web, desktop, mobile for Enterprise
- Conversations start as chat; code/file tasks move to cloud environment that keeps running when laptop closes
- Chats, projects, connectors, skills, plugins carry over
- Agentic work in isolated cloud VMs, network off by default; SSO and Compliance API still apply
- New Efficient mode (Sonnet/Haiku), role-based model access, spend limits, pooled budgets
Category: feature update
Date: 2026-10-23
URL: https://claude.com/resources/articles/unified-claude-enterprise

## Claude Duet Safety, Privacy, and Security
- Duet is a research-preview cloud agent that keeps running after the app is closed
- Asks approval before sensitive sends, payments, deletions; separate check outside the model; some actions (trading, moving money) blocked regardless
- New classifier screens outgoing messages; credentials, card/bank and ID numbers never shared; health/financial info only with consent
- Never sees passwords, cookies, tokens; single-use encrypted passwords go to separate cloud browser
- Anthropic warns safeguards can still miss things and are evolving
Category: announcement
Date: 2026-10-23
URL: https://claude.com/resources/articles/claude-duet-safety-privacy-and-security

## LLMs are making formal software verification feasible at a much larger scale
- Anthropic research with Theorem: Claude writes formal proofs about compiled code (RISC-V assembly)
- Proved no-crash properties for 239 entry points across 123 OSS-Fuzz libraries, each machine-checked
- Claude patched bugs found and surfaced flaws fuzzing missed (e.g. counter underflow causing out-of-bounds write)
- Matters as AI gets better at finding exploits; testing alone may not suffice; falling token costs help
- Caveat: "verified" is not "bug-free"; limited to single-threaded static binaries on RISC-V/Linux with assumed hardware/OS models
Category: announcement
Date: 2026-10-22
URL: https://www.anthropic.com/research/formal-verification

## The full Claude Platform, available on Google Cloud
- Claude Models on Google Cloud (Anthropic managed) now generally available
- Use Google Cloud IAM credentials, single Google invoice, counts toward Google Cloud commitment
- New features and betas ship same day as native Claude Platform (Managed Agents beta, code execution, computer use, skills, Files API, MCP connector, etc.)
- Fast Mode on Claude Opus 5.5 GA at $8 input / $40 output per million tokens
- Google-managed offering remains for Google-as-processor, strict regional residency needs
Category: feature update
Date: 2026-10-22
URL: https://claude.com/resources/articles/claude-models-on-google-cloud-anthropic-managed

## HCLTech joins the Claude Partner Network as a Global Premier partner
- HCLTech (230,000+ staff, 60 countries) joins at top Global Premier tier
- Will build agentic solutions via dedicated Anthropic Business Unit and Center of Excellence
- Embedding Claude in HCLSoftware (BigFix, AppScan, Actian AI analyst) and Claude Code in AI Force platform
- Agents do routine work; engineers oversee high-impact changes with review/logging/approval
- Targets regulated sectors: banking, healthcare, telecom, manufacturing
Category: announcement
Date: 2026-10-21
URL: https://claude.com/resources/articles/hcltech-joins-claude-partner-network

## Introducing Claude Duet
- Research preview proactive agent app for iOS, Android, claude.ai
- Runs on its own virtual machine so works when your devices are off; daily brief, messages only when needed
- Asks approval before sending, paying, signing, deleting
- 6,000+ connectors/plugins (Gmail, Slack, QuickBooks, Stripe, Gusto, Docusign); classifier blocks sensitive data sharing
- Waitlist for US Pro and Max subscribers; usage counts against plan limits
Category: announcement
Date: 2026-10-21
URL: https://claude.com/resources/articles/claude-duet

## Claude Security now scans continuously and tracks fixes
- Claude Security (vulnerability scanning) latest version in public beta for Claude Enterprise
- Baseline scan of connected repos, then risk-based rescans of code changes; one project can span multiple repos
- Marks findings fixed when fix ships, reopens if reappearing; per-project knowledge base and editable threat model
- API, webhooks, MCP connector for Claude.ai and Claude Code; role-based permissions
- Prioritizes by attacker reachability with severity ratings and attack-path explanations
Category: feature update
Date: 2026-10-21
URL: https://claude.com/resources/articles/claude-security-now-scans-continuously-and-tracks-fixes

## Redesigning source control at Anthropic
- Describes Scion, Anthropic's in-house source control replacing git for its monorepo (plus Antique code review tool)
- Migrated in ~5 months; server-side history, clients fetch only needed files, replacing hundreds of git mirrors
- CI checkouts drop from minutes to seconds; 200x smaller CPU/memory footprint
- Claude-driven development raised merges from ~2,500 to 30,000+/day, making human-scale tooling a bottleneck
- Not a general git replacement; ideas shared for git platforms to adopt. (Article page shows Oct 13, updated Oct 15; listing shows Oct 19)
Category: announcement
Date: 2026-10-19
URL: https://www.anthropic.com/engineering/redesigning-source-control
