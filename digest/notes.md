## Building always-on agents
- Guide to always-on agents: stateful, proactive, manage context across sessions and act without direct supervision
- Agent mostly sleeps and wakes for brief runs; five primitives: event inbox, timers, memory, permissions, outbox
- Practical now due to better model judgment and lower long-horizon costs; Opus 5.5 cost 78% less per solved task than Opus 5 on one coding benchmark
- Guidance: inbox as source of truth, one active worker per inbox, keep credentials outside agent behind a proxy
- Start with a quiet agent that earns more attention over time
Category: announcement
Date: 2026-11-13
URL: https://claude.com/resources/articles/building-always-on-agents

## The Claude Tag guide for startups
- Guide based on interviews with eight high-growth startups using Claude Tag (beta), which lets teams @Claude in Slack channels
- Uses: on-call alert triage, draft PRs from Slack threads, knowledge base, self-serve data answers, scheduled reports
- Results: Campfire went from Slack mention to open PR in 21 minutes; Moritz cut daily update from ~1 hour to 5 minutes
- Claude never merges; people review and merge changes
- Start with one channel and one task, small private pilot, limit connector access, set spend limits; requires Team or Enterprise
Category: announcement
Date: 2026-11-13
URL: https://claude.com/resources/articles/claude-tag-guide-for-startups

## Operate Claude Managed Agents inside your security perimeter
- Self-hosted Claude Managed Agents now in private beta
- Previously only the sandbox could be self-hosted; now harness, sandboxes, credentials and session history run in customer cloud or on-premise
- Customers choose where model requests go; session history in own database; ZDR applies as with Messages API
- Credentials stay outside sandbox, network allowlist, every step logged and exportable via OpenTelemetry
- Access via Anthropic account team
Category: feature update
Date: 2026-11-12
URL: https://claude.com/resources/articles/self-hosted-claude-managed-agents

## J.Crew brings its signature approach to styling to life with Claude
- Style Advisor, an AI stylist on JCrew.com, helps shoppers buy complete outfits; live for women's and men's in the U.S.
- Shoppers describe an occasion or start with an item; it returns full looks from J.Crew's own photo shoots
- Built with multiple models: frontier model for planning, Claude Code for prototype, Sonnet as stylist, Haiku for quick tasks
- Moves online shopping toward visual, inspiration-led conversations
- Next: personalization from preferences and past purchases, more markets and product lines
Category: announcement
Date: 2026-11-12
URL: https://claude.com/resources/articles/j-crew-style-advisor-with-claude

## Introducing Claude for Manufacturing
- Plugin with 17 skills and four connectors (Autodesk Fusion, Infor, Microsoft 365, Oracle NetSuite)
- Drafts quotes, quality reports and supplier requests; multi-step skills pause for human review
- Infor releasing its own plugin so Claude can act in Infor (e.g. release POs) per user permissions and with approval
- Targets manual data entry (79% of manufacturers per 2025 MLC survey); Claude doesn't operate equipment
- Available on Team and Enterprise plans; tell Claude "Set us up"
Category: feature update
Date: 2026-11-12
URL: https://claude.com/resources/articles/claude-for-manufacturing

## Introducing Claude Meetings
- Claude joins video calls as a visible participant, follows the conversation and starts work during the meeting
- Answers questions by voice or chat, builds docs and whiteboards live, writes notes and action items
- Beta on Team and Enterprise, Google Meet only; excludes ZDR, HIPAA-ready and CMEK orgs
- Saves transcript, summary and screen descriptions, not audio; stays out of calls with outside guests unless admin allows
- Notes and in-call answers free in beta; artifacts free through Feb 10, 2027
Category: feature update
Date: 2026-11-12
URL: https://claude.com/resources/articles/claude-meetings

## Using Claude Opus 5.5 as your daily driver for knowledge work
- Guide recommending Opus 5.5 for research, analysis, memos, reports, spreadsheets and decks; compares Haiku 5.5, Sonnet 5.5, Fable 5.2
- Opus 5.5 is now default in Claude on Pro, Max, Ultra and Team plans; Medium effort default, thinking always on
- Anthropic says Opus 5.5 at Medium matched or beat Opus 5 at High on its evals
- Strengths: accuracy with figures and sources, clearer writing, financial analysis, chart and document reading
- Tips: ask for finished files, state goal up front, connect work files, raise effort before switching to a larger model
Category: announcement
Date: 2026-11-12
URL: https://claude.com/resources/articles/using-claude-opus-5-5-as-your-daily-driver-for-knowledge-work

## Your apps can now open in Claude, and Claude can work in them
- Partner apps open inside Claude beside the conversation or full screen
- Where supported, Claude edits directly in open pages, rows or files, with user approval as with connectors
- Rolling out on web and desktop across all plans; launch tools include Asana, Canva, Dropbox, Notion, Atlassian
- Developers can build on MCP Apps, an open standard (public preview)
- Admins can restrict connector tools
Category: feature update
Date: 2026-11-10
URL: https://claude.com/resources/articles/interactive-connectors-full-tool

## How Curative is building a national provider network with agents on Claude
- Case study: health insurer Curative built a hierarchy of Claude agents to sign provider contracts; core agent Gwen runs on Opus
- Signs contracts ~50x faster than in 2025; 23,000+ contracts signed, 2,000-2,400 a week
- Claims dispute responses dropped from ~90 days to under 30 minutes
- Oversight: Sonnet rate reviewer clears ~2/3 of non-standard requests, Haiku judge reviews every outbound message
- Lessons: start with limited authority, one general tool, meet providers on their channel (fax doubled win rate)
Category: announcement
Date: 2026-11-10
URL: https://claude.com/resources/articles/how-curative-is-building-a-national-provider-network-with-agents-on-claude

## More ways to work with Claude: Sheets, Whiteboards, and Interactive Connectors
- Expands Claude into everyday knowledge work with new artifact types and upgraded connectors
- Claude Sheets (collaborative spreadsheets), Claude Whiteboards, Claude Data (formerly Dashboards), Interactive connectors
- Claude Meetings coming soon; Claude auto-connect in beta for eligible Team and Enterprise plans
- Enterprise admins control which products and connectors each person uses
- Advantage Solutions FP&A cut forecast assembly from ~10 hours to under 30 minutes
Category: feature update
Date: 2026-11-10
URL: https://claude.com/resources/articles/more-ways-to-work-with-claude-sheets-whiteboards-and-interactive-connectors
