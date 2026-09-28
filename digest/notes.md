## Build plugins for Claude
- New directory submission portal lets developers build/publish plugins (bundles of MCP connectors + Agent Skills) for paid Claude plans
- Two submission paths: single MCP connector, or plugin bundle hosted on GitHub
- Auto-validation and safety scanning run at submission time
- New usage analytics dashboard tracks installs and discovery metrics
- Supports MCP 2.0 extensions (MCP Apps for interactive UI, Enterprise Managed Auth for OAuth); plugins become the main path for third-party Claude extensions
Category: feature update
Date: 2026-09-25
URL: https://claude.com/blog/build-plugins-for-claude

## Claude Tag now supports personal connectors in channels
- Claude Tag (Slack integration) now lets users bring their own personal connectors (Google Drive, calendar, CRM) into shared channels
- Previously channels could only use connectors admins attached at the channel level
- Personal connector use is private to the requesting user; others can't access it, and activity logs under the individual's account, not a shared service account
- Users can review responses before posting, or enable auto-mode with content screening; can disconnect anytime
- Rolling out to Team plans first (Sept 2026), Enterprise to follow; unattended tasks still use shared channel connectors
Category: feature update
Date: 2026-09-24
URL: https://claude.com/blog/claude-tag-now-supports-personal-connectors-in-channels

## Claude Opus 5.5: built for coding sessions that use more context
- New model release optimized for longer, context-heavy Claude Code sessions rather than raw scaling
- Cached token pricing cut 60%; input/output costs down 20%; Claude Code caching improved, cutting cache misses by 50%+
- Completes complex tasks in fewer turns than Opus 5, with ~30% faster output
- Anthropic estimates ~40% lower operational cost vs Opus 5 for typical coding workloads
- Motivated by usage shift since March 2026: context per request up 2.6x, Claude working 3.3x longer per prompt
Category: feature update
Date: 2026-09-24
URL: https://claude.com/blog/claude-opus-5-5-built-for-coding-sessions-that-use-more-context

## How CodeRabbit, Power Digital, and ThoughtSpot scale with Snowflake and Vercel on Claude Marketplace
- Customer case study on using Claude Marketplace to apply existing Anthropic spend commitments toward partner services (Snowflake, Vercel)
- Reduces procurement friction by consolidating vendor budgets under one Anthropic commitment
- Power Digital scaled Snowflake usage after growing from 12 to 800+ Claude-using engineers
- ThoughtSpot runs Claude directly on customer data via Snowflake's inference API
- CodeRabbit moved from pay-as-you-go to committed Vercel pricing within a week using Anthropic budget
Category: announcement
Date: 2026-09-23
URL: https://claude.com/blog/how-coderabbit-power-digital-and-thoughtspot-scale-with-snowflake-and-vercel-on-claude-marketplace

## How to prepare for AI-driven code modernization projects
- Guidance from Anthropic's forward-deployed engineers on organizing AI-driven code modernization for critical/regulated systems
- Presents a 6-step framework; bottleneck has shifted from code generation to organizational readiness/governance
- Defines three modernization types: uplift (version bumps), transform (cross-stack rewrites), reimagine (behavioral redesigns)
- Introduces "certificate" (conditions every change must meet) and "promotion policy" (review depth based on risk)
- Recommends dedicated environments, CI/CD readiness, pilot testing on small codebases, and early SME involvement
Category: announcement
Date: 2026-09-23
URL: https://claude.com/blog/how-to-prepare-for-ai-driven-code-modernization-projects

## Claude Marketplace: one place to discover plugins, agents, and services from our partners
- Launch of Claude Marketplace, a unified hub for connectors, plugins, agents, and consulting/systems-integration services
- Features 2,000+ connectors and plugins from partners including Atlassian, Google, Microsoft, Notion, Salesforce, CrowdStrike, Cursor, Harvey, Lovable, Snowflake
- Customers can apply committed Anthropic spend toward compatible partner products and services
- Three builder pathways: connectors/plugins (via MCP), Claude-powered agents, and consulting services
- Live immediately as of announcement
Category: announcement
Date: 2026-09-23
URL: https://claude.com/blog/claude-marketplace

## Working at the frontier: How Balyasny Asset Management evaluates and governs Claude Fable 5
- Customer story: Balyasny Asset Management (BAM), a ~$38B AUM investment firm, on evaluating/governing Claude Fable 5
- BAM shifted from AI-assisted search to autonomous agents executing complex work via internal platform "BAMAgent," running 24/7 on approved workflows
- Reduced tasks like merger analysis from 3-5 days to under one hour
- Fable 5 scored 89.4% vs 86.1% for the prior model on BAM's internal evaluation suite
- Governance emphasizes data boundaries, tool permissions, and human review; more capable models don't automatically get broader authority
Category: announcement
Date: 2026-09-17
URL: https://claude.com/blog/working-at-the-frontier-how-balyasny-asset-management-evaluates-and-governs-claude-fable-5

## Projects redesigned: from folder to conversation
- Claude Code Projects redesigned from static folders into multi-threaded workspaces with a coordinator orchestrating parallel work
- Coordinator scopes requests, delegates work across independent cloud-session threads, reviews outputs, and assembles results
- Adds shared memory that accumulates project context/decisions/preferences over time, plus a library for files and artifacts
- Enables parallel tasks (e.g., profiling multiple endpoints, migrating deprecated APIs across repos) monitorable from main chat or individual threads, even on mobile
- In beta for select Claude Pro/Max subscribers using cloud sessions; full Team/Enterprise rollout planned after initial expansion
Category: feature update
Date: 2026-09-17
URL: https://claude.com/blog/projects-redesigned
