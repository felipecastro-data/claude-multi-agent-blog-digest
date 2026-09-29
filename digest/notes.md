## Agents you can coach: how Asana builds human-agent teams with Claude
- Asana embeds AI agents in its Work Graph as teammates with defined roles, access controls, and shared memory
- Agents now have persistent memory, explicit permissions, and dedicated profiles
- Agent work is visible in shared tasks so colleagues can coach and refine it
- Separate agent "users" from "admins" who train memory; scope access by project, doc, and app
- Matters: removes context switching and makes agent reasoning transparent
Category: announcement
Date: 2026-09-29
URL: https://claude.com/blog/agents-you-can-coach-how-asana-builds-human-agent-teams-with-claude

## Giving companies more control over their AI agents, with NVIDIA
- Claude Managed Agents: composable APIs for production agents with security, credential management, audit trails
- Layered security: credentials held in separate vaults, never directly accessible to agents
- NVIDIA OpenShell integration: open-source runtime that blocks everything unless a rule allows it, enforcing policy outside the model
- Enterprises can set narrow permissions, review logs, and formally verify agent access
- Adopters include Notion, Rakuten, Asana
Category: announcement
Date: 2026-09-28
URL: https://claude.com/blog/giving-companies-more-control-over-their-ai-agents-with-nvidia

## Build plugins for Claude
- Developers on paid plans can submit plugins via a new directory submission portal with auto-validation and safety scanning
- Two paths: a single MCP connector, or a plugin bundle (MCP servers plus skills hosted on GitHub)
- Published plugins get analytics: installs by surface and version, listing views, search traffic
- Supports MCP 2.0 incl. MCP Apps (interactive UI) and Enterprise Managed Auth
- Plugins become the primary third-party extension route; skills and connectors remain building blocks
Category: feature update
Date: 2026-09-25
URL: https://claude.com/blog/build-plugins-for-claude

## Claude Tag now supports personal connectors in channels
- Users can invoke their own connectors (Drive, calendar, CRM) when asking Claude Tag in Slack channels
- Previously only admin-attached shared channel connectors worked
- Responses can be reviewed before posting or use auto-mode with sensitive content flagging
- Activity is logged under the user's account, preserving audit trails
- Available on Team plans, Enterprise next; not used for scheduled/autonomous actions
Category: feature update
Date: 2026-09-24
URL: https://claude.com/blog/claude-tag-now-supports-personal-connectors-in-channels

## Coding sessions are longer and use more context. Claude Opus 5.5 is built with that in mind.
- New model about 40% cheaper to run than Opus 5, aimed at long, context-heavy coding
- Cached token pricing cut 60%; Claude Code has 50% fewer cache misses
- Fewer turns needed for complex tasks; output about 30% faster than predecessor
- Context per request has grown 2.6x in six months
- Tips: pick model upfront, use one-hour cache lifetimes on API keys
Category: announcement
Date: 2026-09-24
URL: https://claude.com/blog/claude-opus-5-5-built-for-coding-sessions-that-use-more-context

## How CodeRabbit, Power Digital, and ThoughtSpot scale with Snowflake and Vercel on Claude Marketplace
- Customer story: three companies expanded Snowflake/Vercel spend via Claude Marketplace
- Uses existing Anthropic commitments instead of separate budgets and vendors
- Snowflake runs Claude on customer data; Vercel Sandbox isolates CodeRabbit agent code
- Enables scaling without new budget requests
- Limited preview; eligible customers contact account team
Category: announcement
Date: 2026-09-23
URL: https://claude.com/blog/how-coderabbit-power-digital-and-thoughtspot-scale-with-snowflake-and-vercel-on-claude-marketplace

## How to prepare for AI-driven code modernization projects
- Six-step framework for readiness before running agent-led modernization
- Define scope: uplift, transform, or reimagine, with a stakeholder-agreed behavioral spec
- Build a "certificate" of checkable conditions (tests, coverage, performance, security) so agents iterate independently
- Tier reviews: route high-risk changes to experts, fast-track low-risk
- Bottleneck has shifted from code production to org readiness; stage infra and approvals early
Category: announcement
Date: 2026-09-23
URL: https://claude.com/blog/how-to-prepare-for-ai-driven-code-modernization-projects

## Claude Marketplace: one place to discover plugins, agents, and services from our partners
- Unified marketplace for connectors, plugins, agents, and consulting services
- 2,000+ connectors/plugins from Atlassian, Google, Microsoft, Salesforce, etc.
- Customers can apply committed Anthropic spend to third-party tools
- Builder paths: MCP connectors/plugins, list Claude-powered products, or join Claude Partner Network
- Live today; partners include CrowdStrike, Cursor, Harvey, Lovable, Snowflake
Category: announcement
Date: 2026-09-23
URL: https://claude.com/blog/claude-marketplace

## Working at the frontier: How Balyasny Asset Management evaluates and governs Claude Fable 5
- Balyasny (about $38B AUM) runs Claude Fable 5 in its BAMAgent multi-step agent platform
- Merger-arbitrage analysis drops from 3-5 days to under an hour; accuracy 89.4% vs 86.1% on prior models
- Governance layers (data boundaries, tool permissions, human review) matter more than raw capability
- 300+ agents run continuous analysis; humans keep accountability
- Moving toward AI "teammates" that improve over time
Category: announcement
Date: 2026-09-17
URL: https://claude.com/blog/working-at-the-frontier-how-balyasny-asset-management-evaluates-and-governs-claude-fable-5

## Projects redesigned: from folder to conversation
- Projects become conversation-based workflows instead of static folders
- A coordinator directs parallel worker threads with shared memory building context over time
- Handles multi-part tasks across repos (e.g., latency work, retiring deprecated endpoints); keeps working when you step away
- Beta for select Pro and Max users on Claude Code cloud sessions; broader rollout to follow
- Local execution behind your network coming soon
Category: feature update
Date: 2026-09-17
URL: https://claude.com/blog/projects-redesigned
