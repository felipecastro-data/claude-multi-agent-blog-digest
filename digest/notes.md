## Introducing Claude Whiteboards, Claude Sheets, and Claude Data
- Whiteboards and Sheets launch in beta; Dashboards becomes generally available as Claude Data; all on paid plans
- Whiteboards: shared boards where Claude builds timelines, groups notes, drafts action items; export to doc/deck or Lucid/Miro
- Sheets: Claude builds spreadsheets with formulas and drop-downs, logs each edit, exports to .xlsx/CSV
- Claude Data adds certified metrics, live sharing (beta), caching, tracked changes with rollback; partners include Amplitude, Mixpanel, Omni, PostHog, Sigma
- Enterprise: Whiteboards and Sheets off by default; Claude Data turns on Nov 19, 2026
Category: feature update
Date: 2026-11-10
URL: https://claude.com/resources/articles/sheets-whiteboards-data

## Your apps can now open in Claude, and Claude can work in them
- Partner apps open inside Claude beside chat or full screen, no tab switching
- Claude can edit open pages, rows, or files; user approves actions as with any connector
- Rolling out on web and desktop, all plans, as part of a new experience combining chat and Cowork
- Initial tools: Asana, Canva, Notion, Confluence, Box; can be pinned to sidebar
- Built on MCP Apps (open MCP extension); full apps in Claude in public preview for developers
Category: feature update
Date: 2026-11-10
URL: https://claude.com/resources/articles/interactive-connectors-full-tool

## More ways to work with Claude: Sheets, Whiteboards, and Interactive Connectors
- Overview post: new artifact types (Sheets, Whiteboards, Data), upgraded interactive connectors, and a coming Claude Meetings feature
- Dashboards can be built from connected sources such as Snowflake and Salesforce
- Partners embed apps (Adobe, Atlassian); some plugins include role-specific skills
- Enterprise controls: per-user product/connector access, spending limits, connector restrictions; auto-connect (beta)
- Aimed at non-technical teams building their own tools with carried-over context
Category: announcement
Date: 2026-11-10
URL: https://claude.com/resources/articles/more-ways-to-work-with-claude-sheets-whiteboards-and-interactive-connectors

## JPMorganChase expands Claude Code to more employees across the firm
- Customer story: JPMorganChase widening Claude and Claude Code use firm-wide
- Access extends beyond engineers to product, advisors, infrastructure/ops, security teams
- Agents built for PR review, self-healing systems, legacy modernization; faster path to production
- Guardrails: containerized environments, staged access, automated pass/halt gates so Claude can't sign off its own work
- Example of agents in a heavily regulated financial institution
Category: announcement
Date: 2026-11-09
URL: https://claude.com/resources/articles/jpmorganchase-expands-claude-code

## Claude Fable 5.2 and Mythos 5.2
- Upgraded models (same underlying model): Fable for all users, Mythos limited to vetted cybersecurity/biomedical orgs
- Better coding, reasoning, vision; up to 30% faster than 5.1; $8/$40 per million input/output tokens; optional fast mode
- About 55% fewer safety-classifier blocks than 5.1; outperforms Opus 5.5 on nearly all evals
- Examples: Fermat's Last Theorem formalization in 30 hours, working electronic devices
- Caveats: models often suspect evaluation; Anthropic recommends Opus 5.5 for most daily work
Category: announcement
Date: 2026-11-09
URL: https://www.anthropic.com/claude-fable-and-mythos-5-2

## Claude can design electronic prototypes from start to finish
- With Diode Computers, Claude designed a speakerphone, voice-assistant hub, and handheld virtual pet
- From a short prompt: schematics, PCB layouts, 3D-printable enclosures, firmware, parts lists
- Fable 5.2 scored 69% on Diode's PCB Gym benchmark vs 25% for Fable 5
- Prototypes worked without circuit fixes; humans did assembly and testing
- Caveat: early prototypes, no electrical validation, thermal testing, or certification
Category: announcement
Date: 2026-11-09
URL: https://www.anthropic.com/research/claude-electronics-design

## Safely scaling multi-agent teams with Claude Fable 5.2
- Experiment: 1,000 Claude agents (1 lead, 999 helpers) reproduced a Lean proof of Fermat's Last Theorem using early Fable 5.2
- Used only general tools (shell, editor, Lean/Mathlib, Git, shared Postgres); agents built their own coordination with no human steering
- Finished in 28.7 hours with about one-third the output tokens; proof about one-seventh original length
- Safety: per-agent sandboxes without internet, real-time classifier on every tool call, offline monitor; none of 1M+ calls needed blocking
- Agents tended to give up early on hard statements; domain tools and occasional encouragement still help
Category: announcement
Date: 2026-11-09
URL: https://claude.dev/blog/safely-scaling-multi-agent-teams-with-fable-5-2/

## Which Claude model should you build with?
- Playbook for choosing among Haiku 5.5, Sonnet 5.5, Opus 5.5, Fable 5.2, plus pricing, effort levels, subagents
- Recommended default: Opus 5.5 at medium effort, half the per-token cost of Fable 5.2
- Fable 5.2 at high roughly matched Opus 5.5 at max on FrontierCode 2.0 (45.3% vs 45.5%) at about half cost per task
- Tune effort before switching models; low effort with high-effort retry of failures hit ~97% on SWE-bench Pro at ~$0.17/task
- Migration: thinking blocks do not carry across tiers; tool_choice any/tool and budget_tokens settings return 400 errors on some models
Category: feature update
Date: 2026-11-09
URL: https://claude.dev/blog/which-claude-model-should-you-build-with/

## The components of agent memory
- Describes agent memory as a hierarchy: transcripts, memory notes, wiki-style representations, small injected context layer
- Introduces "dreaming": offline review of past transcripts to fix and write notes
- Wiki-only setup rose from 13% to 48% over 128 dreaming sessions; legal brief contract facts 72% to 100%
- Pokémon test: dreaming corrected a wrong note, agent escaped a prior trap
- Rigid save rules can hurt stronger models; always-loaded context must stay small
Category: announcement
Date: 2026-11-06
URL: https://www.anthropic.com/research/components-of-agent-memory

## Introducing Personal Finance in Claude
- Connect bank and card accounts via Plaid and ask money questions in plain language; read-only access
- Claude categorizes spending, compares months, flags duplicate charges/rising bills, builds charts and dashboards
- Beta rolling out on Pro, Max, Ultra plans in the US
- Hub conversations not used for training; accounts can be unlinked anytime
- No ads or lending products; not investment advice, verify key figures with your bank
Category: feature update
Date: 2026-11-05
URL: https://claude.com/resources/articles/introducing-personal-finance-in-claude
