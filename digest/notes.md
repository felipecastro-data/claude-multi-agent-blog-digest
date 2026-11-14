## Building always-on agents
- Guide to stateful, proactive agents that sleep and wake for brief runs to handle events
- Five primitives: event inbox, timers, memory, permissions, outbox
- Interest renewed as models judge intent/timing better and long-horizon work is cheaper (cited 78% cost drop per solved task, Opus 5 to Opus 5.5)
- Recommends safeguards: credential proxies, deferred approvals, tuning message frequency
- Gives developers a blueprint for adding proactive agents to products
Category: announcement
Date: 2026-11-13
URL: https://claude.com/resources/articles/building-always-on-agents

## The Claude Tag guide for startups
- Guide on how eight startups use Claude Tag (beta), @mentioning Claude in Slack to run tasks with connected tools
- Five setups: on-call triage, threads to draft PRs, company brain, self-serve data analysis, recurring reports
- Results: Campfire went from mention to open PR in 21 min; Moritz cut daily update from ~1 hr to 5 min
- Advice: start with one task, small private pilot, limit access, humans review/merge PRs
- Beta, Team and Enterprise plans only; plan for usage-based billing and security review
Category: announcement
Date: 2026-11-13
URL: https://claude.com/resources/articles/claude-tag-guide-for-startups

## Operate Claude Managed Agents inside your security perimeter
- Self-hosted Claude Managed Agents enters private beta
- Previously only sandboxes were self-hostable; now harness, sandboxes, credentials, session history can all run in your cloud or on-prem
- Model routing to Anthropic, Bedrock, Google Agent Platform, Microsoft Foundry, or own gateway
- Session history stays in your database; ZDR applies if your org has it
- Security: code separated from agent loop and secrets, allowlisted network hosts, OpenTelemetry export
Category: feature update
Date: 2026-11-12
URL: https://claude.com/resources/articles/self-hosted-claude-managed-agents

## J. Crew brings its signature approach to styling to life with Claude
- Style Advisor: AI stylist on JCrew.com that builds complete outfits; live for US women's and men's styles
- Shoppers describe an occasion and refine looks conversationally, using J.Crew photo-shoot looks
- Built with Claude Code; Opus built the prototype, Sonnet is the stylist, Haiku handles quick tasks
- Recommendations come from J.Crew's own stylists, preserving brand voice
- Next: personalization from preferences and past purchases, more markets and product lines
Category: announcement
Date: 2026-11-12
URL: https://claude.com/resources/articles/j-crew-style-advisor-with-claude

## Introducing Claude for Manufacturing
- Plugin with 17 skills and four connectors (Autodesk Fusion, Infor, Microsoft 365, Oracle NetSuite)
- Skills: quotes, failed-inspection investigation, breakdown diagnosis, supplier sourcing, design comparison, production reports
- Infor releasing its own plugin so Claude can act (e.g., release POs, reschedule production) after user approval
- Human review before anything reaches customers or suppliers; does not operate equipment
- Targets manual data work affecting 79% of manufacturers; Team and Enterprise plans
Category: feature update
Date: 2026-11-12
URL: https://claude.com/resources/articles/claude-for-manufacturing

## Introducing Claude Meetings
- Beta feature: Claude joins video calls as a visible participant and starts work during the meeting
- Answers questions in writing, builds docs/whiteboards live, writes notes and action items
- Team and Enterprise plans; Google Meet only for now; ZDR, HIPAA-ready, CMEK orgs excluded
- Each meeting gets a claude.ai page with notes, transcript, artifacts; audio not saved
- Stays out of calls with outside guests unless admin allows; Gong and Otter integrations planned
Category: feature update
Date: 2026-11-12
URL: https://claude.com/resources/articles/claude-meetings

## Using Claude Opus 5.5 as your daily driver for knowledge work
- Recommends Opus 5.5 as the default for research, analysis, memos, reports, spreadsheets, decks; default on Pro, Max, Ultra, Team
- Better instruction following, scope discipline, accuracy with figures and sources, chart reading, long task completion vs Opus 5
- Lineup: Haiku 5.5 quick tasks, Sonnet 5.5 scoped work, Opus 5.5 most knowledge work, Fable 5.2 hardest long-running projects
- Opus 5.5 at Medium effort matched or beat Opus 5 at High on Anthropic evals, offsetting higher per-token price
- Tips: ask for the finished file upfront, connect work files, skip filler like "think hard"
Category: announcement
Date: 2026-11-12
URL: https://claude.com/resources/articles/using-claude-opus-5-5-as-your-daily-driver-for-knowledge-work

## Your apps can now open in Claude, and Claude can work in them
- Interactive connectors: partner apps open inside Claude beside chat or full screen, built on open MCP Apps extension
- Claude can edit open pages, rows, files; user approves actions as with any connector
- Rolling out on web and desktop, all plans; starts with Asana, Canva, Notion
- Admins can restrict connector tools as today
- Developers can run full apps inside Claude in public preview
Category: feature update
Date: 2026-11-10
URL: https://claude.com/resources/articles/interactive-connectors-full-tool

## How Curative is building a national provider network with agents on Claude
- Customer story: health insurer Curative uses a hierarchy of Claude agents to sign provider contracts
- Gwen (Opus) handles a deal end to end; Sonnet reviews rates, Haiku judges every outbound message, CEO approves non-standard pricing
- ~50x faster contract signing than 2025; 23,000+ contracts; dispute responses from ~90 days to under 30 min
- Contracting team grew 45 to ~55, each ~2.5x as productive
- Lessons: start with limited authority, one general tool, isolated runs, judge agents and sampled audits
Category: announcement
Date: 2026-11-10
URL: https://claude.com/resources/articles/how-curative-is-building-a-national-provider-network-with-agents-on-claude

## More ways to work with Claude: Sheets, Whiteboards, and Interactive Connectors
- New artifact types: Claude Sheets (collaborative spreadsheets, formulas, tabs), Whiteboards, Claude Data (formerly Dashboards)
- Claude Data connects to tools like Snowflake and Salesforce to build dashboards
- Partner apps such as Adobe and Atlassian can run inside Claude; Claude Meetings coming soon
- Lets non-technical teams build tools and move ideas across formats with shared context
- Works within existing permissions; admins control connectors and actions
Category: feature update
Date: 2026-11-10
URL: https://claude.com/resources/articles/more-ways-to-work-with-claude-sheets-whiteboards-and-interactive-connectors
