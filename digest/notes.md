## Introducing Claude Whiteboards, Claude Sheets, and Claude Data
- Whiteboards and Sheets launched in beta; Dashboards now generally available as Claude Data; paid plans
- Whiteboards turn notes into timelines with owners/dates; Sheets builds/edits spreadsheets with formulas and logs edits
- Claude Data adds certified metric definitions, data stories, live sharing (beta), caching, design system support, version rollback
- Work can move to partner tools like Lucid, Miro, Airtable
- Matters: docs, boards, sheets, dashboards stay in Claude without copy-paste
Category: feature update
Date: 2026-11-10
URL: https://claude.com/resources/articles/sheets-whiteboards-data

## Your apps can now open in Claude, and Claude can work in them
- Partner apps (Confluence, Notion etc.) open inside Claude, beside chat or full screen, with full editor under your own account
- Claude can edit the open page/row/file; actions approved like other connector actions
- Pin tools to sidebar or open from + menu
- Built on MCP Apps (open MCP extension); app tools and embedded sites in public preview
- Web and desktop, all plans; admins can restrict connector tools
Category: feature update
Date: 2026-11-10
URL: https://claude.com/resources/articles/interactive-connectors-full-tool

## How Curative is building a national provider network with agents on Claude
- Curative (health insurer) built agent hierarchy to negotiate provider contracts; lead agent Gwen runs on Opus
- Over 23,000 contracts signed; ~2,000-2,400/week vs ~2,100 in all of 2025
- Claims dispute responses dropped from ~90 days to under 30 minutes
- Oversight: Haiku judge reviews every outbound message; Sonnet rate reviewer; humans approve uncleared requests
- Matters: national network estimated at 30 years at prior pace; helps small practices get paid sooner
Category: announcement
Date: 2026-11-10
URL: https://claude.com/resources/articles/how-curative-is-building-a-national-provider-network-with-agents-on-claude

## More ways to work with Claude: Sheets, Whiteboards, and Interactive Connectors
- Announces Claude Sheets, Whiteboards, Data (formerly Dashboards), and upgraded interactive connectors; Claude Meetings coming soon
- Claude Data draws from Snowflake, Salesforce, etc.
- Context carries across whiteboard, spreadsheet, dashboard
- Enterprise admins control products/connectors per person
- Early results: Anthropic legal review 3 days to ~1; Gusto contracts from over a week to hours
Category: announcement
Date: 2026-11-10
URL: https://claude.com/resources/articles/more-ways-to-work-with-claude-sheets-whiteboards-and-interactive-connectors

## JPMorganChase expands Claude Code to more employees across the firm
- Claude Code expanding beyond engineering to product, advisors, infra/ops, security teams
- Uses: requirements, risk/controls assessments, incident root cause analysis, vulnerability fixes
- Runs in controlled environments (containerized Devspace); agents lack direct employee credentials
- Staged access expansion; new models need internal approval; automated gates stop Claude approving its own changes
- Matters: shows AI coding agent within oversight of a large regulated bank
Category: announcement
Date: 2026-11-09
URL: https://claude.com/resources/articles/jpmorganchase-expands-claude-code

## Claude Fable 5.2 and Mythos 5.2
- Two access tiers of same model: Fable for all users (stronger cyber/bio safeguards); Mythos for vetted orgs
- Better coding, reasoning, vision; up to 30% faster output than 5.1; $8/$40 per M tokens; optional fast mode up to 2.5x faster
- Beats Opus 5.5 on nearly all evals (FrontierCode 2.0: 49.1% vs 45.5%)
- Applications: black-hole physics problems, Fermat's Last Theorem formalization (~30 hrs, 1,000 agents), three working electronic devices
- ~55% fewer safeguard false positives; models suspect evaluation more often, complicating assessment
Category: announcement
Date: 2026-11-09
URL: https://www.anthropic.com/claude-fable-and-mythos-5-2

## Claude can design electronic prototypes from start to finish
- With Diode Computers, Claude designed a speakerphone, voice-assistant hub, and handheld virtual pet
- Fable 5.2 scored 69% on internal board-layout benchmark vs 25% for Fable 5
- Revises failing designs; wrote its own routing tool; ran manufacturability and parts checks
- Diode built all three boards from design files without usual revision rounds; worked after weeks of use
- Caveat: early prototypes, not validated/certified; Claude had no test equipment access
Category: announcement
Date: 2026-11-09
URL: https://www.anthropic.com/research/claude-electronics-design

## Safely scaling multi-agent teams with Claude Fable 5.2
- 1,000 agents (1 lead, 999 helpers) on early Fable 5.2 wrote a formal Lean proof of Fermat's Last Theorem
- Took 28.7 hours, ~1/3 the output tokens of September effort, proof 1/7 the length, no researcher steering
- Safety: per-agent sandboxes without internet, real-time command classifier, offline monitor; none of 1M+ tool calls blocked
- Team self-organized with its own task tree
- Caveat: agents misjudged difficulty (47 of 60 statements called infeasible, most later proved)
Category: announcement
Date: 2026-11-09
URL: https://claude.dev/blog/safely-scaling-multi-agent-teams-with-fable-5-2/

## Which Claude model should you build with?
- Guide to Haiku 5.5, Sonnet 5.5, Opus 5.5, Fable 5.2; Mythos 5.2 limited to verification programs
- Default: Opus 5.5 at medium effort; Sonnet for scoped tasks, Haiku for high-volume, Fable for hardest work
- Tune effort before model; Opus high + Fable lower effort can match Opus max at ~half cost
- Pricing: Opus $4/$20, Fable $8/$40 per M tokens; cost per task matters more than list price
- Switching models mid-conversation loses model-specific prompt cache and thinking blocks
Category: announcement
Date: 2026-11-09
URL: https://claude.dev/blog/which-claude-model-should-you-build-with/

## The components of agent memory
- Describes "dreaming": offline review of past session transcripts to fix mistakes, write notes, build memory structures
- Memory layers: raw transcripts, working notes, representations like wikis, small always-loaded context
- Newer models (Opus 5+) better at deciding what to save; compact memory beat bulky in Pokémon run
- Wiki-only answer scores rose 13% to 48% over 128 dreaming sessions on 350k-file corpus
- Matters: periodic review corrects drift/errors; keep always-loaded context small
Category: announcement
Date: 2026-11-06
URL: https://www.anthropic.com/research/components-of-agent-memory
