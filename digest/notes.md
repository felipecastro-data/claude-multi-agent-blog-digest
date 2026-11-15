## Building always-on agents
- Guide to agents that keep context across sessions and act unattended, waking for brief runs on events, timers, or messages
- Newer models judge user intent better and long-horizon work is cheaper (Opus 5.5 cost 78% less per solved task than Opus 5 on one coding benchmark)
- Architecture uses five primitives: event inbox, timers, memory, permissions, outbox
- Each run reads memory, acts within permissions, saves learnings, sends results
- Permissions are the biggest risk; start with fewer messages and expand as trust grows
Category: announcement
Date: 2026-11-13
URL: https://claude.com/resources/articles/building-always-on-agents

## The Claude Tag guide for startups
- Guide to Claude Tag (beta): @mention Claude in Slack, connect tools, assign and steer tasks
- Five use cases: on-call triage, Slack threads to draft PRs, shared knowledge base, self-serve data answers, recurring reports
- Results: Campfire went from Slack mention to open PR in 21 minutes; Moritz cut daily update from about 1 hour to 5 minutes
- Advice: start with one clear task, keep humans reviewing, set channel instructions and spend limits
- Available only on Team and Enterprise plans
Category: announcement
Date: 2026-11-13
URL: https://claude.com/resources/articles/claude-tag-guide-for-startups

## Operate Claude Managed Agents inside your security perimeter
- Self-hosted Claude Managed Agents in private beta; run the full service in own cloud or on-prem
- Previously only the sandbox could be self-hosted; now harness, sandboxes, credentials, and session history too
- Choose where model requests go: Anthropic, a cloud provider, or own gateway
- Session history stored in the org's own database; zero data retention policy applies if held
- Design keeps credentials out of sandbox, restricts network to approved hosts, logs tool calls via OpenTelemetry
Category: feature update
Date: 2026-11-12
URL: https://claude.com/resources/articles/self-hosted-claude-managed-agents

## J. Crew brings its signature approach to styling to life with Claude
- Style Advisor, an AI stylist on JCrew.com, helps shoppers buy complete outfits; live for U.S. women's and men's styles
- Shoppers describe an occasion or start from one item and get full looks from J.Crew photo shoots, refinable by chat
- Built with Claude Code; frontier model for planning, Sonnet for styling decisions, Haiku for quick tasks
- Brings in-store styling expertise online with consistent brand point of view
- Customer case study
Category: announcement
Date: 2026-11-12
URL: https://claude.com/resources/articles/j-crew-style-advisor-with-claude

## Introducing Claude for Manufacturing
- Plugin for plant teams with 17 skills and connectors to Autodesk Fusion, Infor, Microsoft 365, Oracle NetSuite
- Skills cover quotes, failed inspection investigations, breakdown diagnosis, supplier sourcing, design comparison, production reports
- Infor releasing its own plugin so Claude can act (release POs, reschedule production) after user approval, within user permissions
- Targets manual data entry (79% of manufacturers per a 2025 survey cited)
- Humans approve before output goes to customers or suppliers; Claude does not operate equipment
Category: feature update
Date: 2026-11-12
URL: https://claude.com/resources/articles/claude-for-manufacturing

## Introducing Claude Meetings
- Beta: Claude joins video calls as a visible participant and follows the conversation
- Answers questions aloud or in chat (in writing by default); with permission can use tools and build docs/whiteboards live
- Writes notes and action items; each meeting gets a claude.ai page with notes, transcript, artifacts
- Team and Enterprise plans, Google Meet only; excludes ZDR, HIPAA-ready, and customer-managed key orgs during beta
- Stays out of calls with outside guests unless admin allows; notes and transcripts free during beta
Category: feature update
Date: 2026-11-12
URL: https://claude.com/resources/articles/claude-meetings

## Using Claude Opus 5.5 as your daily driver for knowledge work
- Guide recommending Opus 5.5 for research, analysis, memos, reports, spreadsheets, decks
- Now default model on Pro, Max, Ultra, and Team plans; compared with Haiku 5.5, Sonnet 5.5, Fable 5.2
- Fewer back-and-forths can offset higher per-token price; better accuracy with figures, sources, charts
- Internal test: merger model and deck in 63 min vs 93 min for Opus 5, at about half the cost
- Tips: start at Medium effort, ask for finished files, define "done", skip "think hard" since thinking is always on
Category: announcement
Date: 2026-11-12
URL: https://claude.com/resources/articles/using-claude-opus-5-5-as-your-daily-driver-for-knowledge-work

## Your apps can now open in Claude, and Claude can work in them
- Partner apps open inside Claude beside chat or full screen, no tab switching
- Claude can edit directly in open pages, rows, or files; user approves actions like any connector
- Open tools without a prompt, pin to sidebar, use full editor under own account
- Rolling out on web and desktop for all plans, starting with Asana, Notion, Confluence
- MCP Apps support for developers now in public preview; admins can restrict connector tools
Category: feature update
Date: 2026-11-10
URL: https://claude.com/resources/articles/interactive-connectors-full-tool

## How Curative is building a national provider network with agents on Claude
- Case study: health insurer Curative built a hierarchy of agents; core agent Gwen handles a provider deal from outreach to signature
- Contracts signed about 50x faster than in 2025; 23,000+ signed, 2,000-2,400 per week
- Team grew 45 to about 55 with roughly 2.5x productivity each; claims dispute responses from about 90 days to under 30 minutes
- Lessons: start with limited agent authority, meet providers on preferred channels (adding fax more than doubled win rate), judge agent audits outbound messages
- Old pace would have needed about 30 years for a national network
Category: announcement
Date: 2026-11-10
URL: https://claude.com/resources/articles/how-curative-is-building-a-national-provider-network-with-agents-on-claude

## More ways to work with Claude: Sheets, Whiteboards, and Interactive Connectors
- Introduces Claude Sheets, Claude Whiteboards, Claude Data (formerly Dashboards), and upgraded interactive connectors
- Partner apps such as Adobe and Atlassian run inside Claude; Claude Meetings coming soon
- Claude keeps context across formats, from whiteboard to spreadsheet to dashboard
- Enables non-technical teams to build their own tools
- Admin controls over products and connectors; Claude auto-connect (beta) sets up app connections once per org
Category: feature update
Date: 2026-11-10
URL: https://claude.com/resources/articles/more-ways-to-work-with-claude-sheets-whiteboards-and-interactive-connectors
