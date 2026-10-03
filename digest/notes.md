## Customize Claude Code with mods
- Mods are TypeScript functions that change Claude Code behavior (prompt rewrites, UI changes, new functionality)
- Hook into events to rewrite prompts or block/rewrite/retry tool calls
- Some built-in features now ship as replaceable mods
- Team/Enterprise plans get a security-default mod plus admin plugin controls
- Live in CLI and desktop app; distributed via plugins in the Claude directory
Category: feature update
Date: 2026-10-01
URL: https://claude.com/blog/claude-code-mods

## Claude for Government is now generally available
- GA for federal and state agencies in a FedRAMP High authorized environment (beta began in July)
- No seat fees; usage-based pay with fixed increments and hard spending caps
- Audit logs, two-person approval for sensitive operations, metering-only usage exports
- Claude Code CLI and Claude for Microsoft 365 enter early access
- Conversation history stays on agency-managed devices
Category: announcement
Date: 2026-09-30
URL: https://claude.com/blog/claude-for-government-is-now-generally-available

## How Anthropic's sales team rebuilt inbound with Claude Managed Agents
- Claude buying agent deployed on Contact Sales and Pricing pages, handling thousands of conversations daily
- Escalated leads convert to opportunities over 2x as often and close about 5 days faster
- Reps shifted from repetitive questions to education and live conversations; one rep closed 2.5x more deals
- Built simply: a prompt, a few tools, and Claude on Managed Agents; non-engineers edit the prompt in Console
- Recommends fitting plans (including lower tiers) with 24/7 multilingual support
Category: announcement
Date: 2026-09-30
URL: https://claude.com/blog/how-anthropics-sales-team-rebuilt-inbound-with-claude-managed-agents

## Agents you can coach: how Asana builds human-agent teams with Claude
- Asana embeds AI agents as teammates in its Work Graph with roles, permissions, and shared memory
- Agents have profiles, access controls, and activity feeds, and can be coached by designated team members
- Shared memory lets agents retain learning across tasks; only admins make permanent behavior changes
- Agents post reasoning and steps in shared tasks so reviewers can coach in real time
- Uses: Slack product Q&A, at-risk renewal briefings, engineering cycle planning
Category: announcement
Date: 2026-09-29
URL: https://claude.com/blog/agents-you-can-coach-how-asana-builds-human-agent-teams-with-claude

## Giving companies more control over their AI agents, with NVIDIA
- Anthropic and NVIDIA pair Claude Managed Agents with NVIDIA's Open Agent Safety Platform
- Credentials are vault-protected separately from agent execution
- NVIDIA OpenShell (open source, Apache 2.0) enforces policy on agent actions outside the model
- Features: long-running sessions, multi-agent orchestration, sandboxing, audit trails, policy verification
- Available now; adopters include Notion, Rakuten, Asana
Category: announcement
Date: 2026-09-28
URL: https://claude.com/blog/giving-companies-more-control-over-their-ai-agents-with-nvidia

## Build plugins for Claude
- Developers on paid plans can submit plugins via a directory portal with auto-validation and safety scanning
- Two paths: single MCP connectors or plugin bundles (MCP servers plus skills on GitHub)
- Published plugins get install metrics by surface, view counts, and search data
- Claude now supports MCP 2.0 (MCP Apps for interactive UI, Enterprise Managed Auth)
- Unified discovery across Claude and Claude Code rolling out over coming weeks
Category: feature update
Date: 2026-09-25
URL: https://claude.com/blog/build-plugins-for-claude

## Claude Tag now supports personal connectors in channels
- Claude Tag in Slack can use users' personal connectors (Drive, calendars, CRM), not just admin-attached ones
- Individuals control how info surfaces via review or auto mode
- Admins can provide shared tools via agent identity, restrict to personal connectors, or set tool-by-tool access
- Launching on Team plans now; Enterprise to follow
- Enables role-specific info in shared channels with personal auth logs
Category: feature update
Date: 2026-09-24
URL: https://claude.com/blog/claude-tag-now-supports-personal-connectors-in-channels

## Coding sessions are longer and use more context. Claude Opus 5.5 is built with that in mind.
- Opus 5.5 costs about 40% less to run than Opus 5; cached token prices down 60%
- Developer data: Claude works 3.3x longer per prompt with 2.6x more context per request
- Fewer turns to finish tasks and output about 30% faster
- Cache miss rates down over 50% via Claude Code improvements (e.g., change effort mid-session without resetting cache)
- Tips: pick the model upfront, use one-hour cache lifetimes, route context-heavy work to Opus 5.5
Category: announcement
Date: 2026-09-24
URL: https://claude.com/blog/claude-opus-5-5-built-for-coding-sessions-that-use-more-context

## How CodeRabbit, Power Digital, and ThoughtSpot scale with Snowflake and Vercel on Claude Marketplace
- Claude Marketplace lets companies redirect part of their Anthropic commitment to partners like Snowflake and Vercel
- Power Digital expanded Snowflake capacity, running Claude on client data within governance
- ThoughtSpot applied its commitment to Snowflake's inference API for agentic products
- CodeRabbit moved to a committed Vercel plan for sandbox isolation and agent workflow coordination
- Partners gain streamlined customer acquisition and shorter sales cycles
Category: announcement
Date: 2026-09-23
URL: https://claude.com/blog/how-coderabbit-power-digital-and-thoughtspot-scale-with-snowflake-and-vercel-on-claude-marketplace

## How to prepare for AI-driven code modernization projects
- Six-step framework: target architecture, verification certificates, promotion policies, infrastructure, agentic workflows, pilot then scale
- Certificate-driven validation (test coverage, performance, security scans) instead of relying solely on human review
- Tiered review by risk so changes reach production faster than human review alone allows
- Three types: uplift (version bumps), transform (language rewrites), reimagine (architectural rebuilds)
- Pilot on a small codebase slice to measure token usage and estimate full cost
Category: announcement
Date: 2026-09-23
URL: https://claude.com/blog/how-to-prepare-for-ai-driven-code-modernization-projects
