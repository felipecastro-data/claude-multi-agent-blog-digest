## Linked billing on the Claude Platform
- Beta feature letting third-party platforms bill customers' Claude API usage without sharing API keys
- Customers link their existing Claude Platform org; usage bills directly to them
- Customers approve each platform, set monthly spend limits, view spend in Console, can unlink anytime
- Platforms skip building metering/invoicing and can choose per request who pays
- Trade-off: requests run in platform's org, so customer IP allowlists, encryption keys, retention settings do not apply
Category: feature update
Date: 2026-11-17
URL: https://claude.com/resources/articles/linked-billing-on-claude-platform

## Building always-on agents
- Guide to stateful, proactive agents that idle and wake on events for short runs
- Five primitives: event inbox, timers, memory, permissions, outbox
- Model improvements make this practical: better intent/check-in judgment, cheaper long-horizon work
- Opus 5.5 cost 78% less per solved task than Opus 5 on one long-horizon coding benchmark
- Stresses durable storage, careful permissions for unattended actions, tuning message frequency
Category: announcement
Date: 2026-11-13
URL: https://claude.com/resources/articles/building-always-on-agents

## The Claude Tag guide for startups
- Guide to Claude Tag (beta): @Claude in Slack channels with connected tools, drawn from eight startups
- Five setups: on-call triage, threads to draft PRs, knowledge base, self-serve data answers, scheduled reporting
- Results: Campfire went from Slack mention to open PR in 21 minutes; Moritz cut shift update from ~1 hour to 5 minutes
- Rollout advice: start with one task in a private channel, limit connectors, keep human review, set spend limits
- Available on Team and Enterprise plans
Category: announcement
Date: 2026-11-13
URL: https://claude.com/resources/articles/claude-tag-guide-for-startups

## Operate Claude Managed Agents inside your security perimeter
- Self-hosted Claude Managed Agents in private beta; run in your own cloud or on-prem
- Full service hostable (harness, credentials, session history), not just the sandbox
- Model requests can route to Anthropic, a cloud provider, or your own gateway
- Credentials kept out of sandbox, network limited to allowed hosts, every tool call recorded
- Activity exportable via OpenTelemetry; session history stays in your own database
Category: feature update
Date: 2026-11-12
URL: https://claude.com/resources/articles/self-hosted-claude-managed-agents

## J. Crew brings its signature approach to styling to life with Claude
- Style Advisor: AI stylist on JCrew.com that builds complete outfits; live for US women's and men's
- Built with Claude Code across several models (Fable planning, Opus prototype, Sonnet stylist, Haiku quick tasks)
- Shoppers describe an occasion and get looks from J.Crew's photo shoots, then refine conversationally
- Brings in-store styling expertise online with consistent brand voice
- Planned: personalization from preferences/purchases, more markets and product lines
Category: announcement
Date: 2026-11-12
URL: https://claude.com/resources/articles/j-crew-style-advisor-with-claude

## Introducing Claude for Manufacturing
- Plugin with 17 skills and four connectors (Autodesk Fusion, Infor, Microsoft 365, Oracle NetSuite)
- Covers quoting, quality investigations, breakdown diagnosis, sourcing, production reporting
- Claude drafts multi-step work (quotes, corrective action reports) up to human approval
- Infor releasing its own plugin enabling approved actions like releasing POs or rescheduling production
- Does not operate equipment; available on Team and Enterprise plans
Category: announcement
Date: 2026-11-12
URL: https://claude.com/resources/articles/claude-for-manufacturing

## Introducing Claude Meetings
- Claude joins video calls as a visible participant and works on tasks during the meeting
- Answers questions by voice or chat; builds live docs, whiteboards, action items
- Notes, transcripts, artifacts saved to a claude.ai page afterward
- Beta for Team and Enterprise; Google Meet only; not for ZDR, HIPAA-ready, or customer-managed key orgs yet
- Admins control joining calls with external guests
Category: feature update
Date: 2026-11-12
URL: https://claude.com/resources/articles/claude-meetings

## Using Claude Opus 5.5 as your daily driver for knowledge work
- Opus 5.5 is the recommended model for everyday knowledge work (research, memos, spreadsheets, decks)
- Now default on Pro, Max, Ultra, and Team plans
- At Medium effort (default) matches or beats Opus 5 at High; stronger at financial analysis and reading charts
- Fewer steps and less editing can offset higher per-token price
- Tips: ask for finished files, connect work systems, define done, start at Medium, drop "think hard" prompts
Category: feature update
Date: 2026-11-12
URL: https://claude.com/resources/articles/using-claude-opus-5-5-as-your-daily-driver-for-knowledge-work

## Your apps can now open in Claude, and Claude can work in them
- Partner apps can embed directly in Claude; open beside chat or full screen
- Claude can edit open pages, rows, files; actions approved like connector actions
- Rolling out on web and desktop for all plans, starting with Asana, Canva, Notion, Confluence; pin to sidebar
- Built on MCP Apps, an open MCP extension; app tools and embedded sites in public preview
- Reduces tab switching by letting Claude work inside existing tools
Category: feature update
Date: 2026-11-10
URL: https://claude.com/resources/articles/interactive-connectors-full-tool

## How Curative is building a national provider network with agents on Claude
- Case study: health insurer Curative uses a hierarchy of Claude agents to negotiate and sign provider contracts
- Gwen (Opus) manages each deal; Sonnet rate reviewer; Haiku judge checks outbound messages; CEO approves non-standard pricing
- Results: ~2,000-2,400 contracts/week vs 2,100 for all of 2025; claims dispute responses from ~90 days to under 30 minutes
- Network build estimated at ~30 years otherwise
- Lessons: limited initial authority, one general tool (Python), meet providers on fax, isolate runs, log and audit
Category: announcement
Date: 2026-11-10
URL: https://claude.com/resources/articles/how-curative-is-building-a-national-provider-network-with-agents-on-claude
