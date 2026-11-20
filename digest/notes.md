## Linked billing on the Claude Platform
- Beta feature: third-party tools can bill customers' Claude API usage to the customer's own Anthropic org
- Customers link org via hosted flow, approve each platform, set monthly spend limits, can unlink anytime
- Platforms see per-customer requests, tokens, models; choose per request who pays
- No API key changes hands, so platforms skip storing/rotating keys and building metering/invoicing
- Trade-off: requests run in platform's org, so customer IP allowlists, encryption keys, retention settings don't apply
Category: feature update
Date: 2026-11-17
URL: https://claude.com/resources/articles/linked-billing-on-claude-platform

## Using a "chaos loop" to harden the Claude Docs launch: 60 server errors across billions of requests
- Claude Docs (collaborative editor for people and Claude sessions) launched Sept 16, 2026
- For two weeks pre-launch Claude ran continuously on staging: load-tested, read telemetry, proposed and deployed fixes; humans approved irreversible changes
- Rust service with minimal dependencies; one doc's 3 GB memory use fixed via copy-on-write (~180 MB), cutting capacity estimate from 500+ pods to ~50
- Results: 4.6M docs by Sept 22, 60 server errors over 2B requests, 629 prod rollouts, no rollbacks
- Cost about $125k inference at list price; relies on newer models holding goals across long runs
Category: announcement
Date: 2026-11-17
URL: https://claude.dev/blog/chaos-loop-claude-docs-launch/

## How the Claude Code team thinks about verification
- About 90% of the team's code is written and reviewed by Claude; verification enables delegation and parallel agents
- Preferred tests: end-to-end, property tests, differential tests
- A `verify` skill in .claude/skills/ boots and drives the app; after three failed rounds Claude escalates to a human
- Guardrails: changes can't modify the checks judging them; REVIEW.md read from base branch; gates start in observe mode; flaky tests never skipped or retried
- Engineer's role shifts to defining "done" and reviewing evidence
Category: announcement
Date: 2026-11-16
URL: https://claude.dev/blog/how-the-claude-code-team-thinks-about-verification/

## Building always-on agents
- Guide to stateful, proactive agents that keep context across sessions and act unsupervised, mostly sleeping and waking for short runs
- Five primitives: event inbox, timers, durable memory, permissions, outbox
- Newer models better judge intent and when to check in; long-horizon work is cheaper (Opus 5.5 78% less per solved task than Opus 5 on one benchmark)
- Permissions carry the most risk
- Advice: start quiet and earn the user's attention
Category: announcement
Date: 2026-11-13
URL: https://claude.com/resources/articles/building-always-on-agents

## The Claude Tag guide for startups
- Claude Tag (beta) is Claude inside Slack: @mention in channels, connect GitHub, Sentry, Notion; Team and Enterprise plans
- Startup uses: incident first responder, Slack threads to draft PRs, internal Q&A, scheduled reports
- Results: NavigateAI merged 134 PRs from threads; Campfire went from mention to PR in 21 minutes; Moritz cut daily update from ~1 hour to 5 minutes
- Usage-based billing; set spend limits and start with one channel
- Not available for zero data retention, CMEK, or HIPAA configurations
Category: announcement
Date: 2026-11-13
URL: https://claude.com/resources/articles/claude-tag-guide-for-startups

## Operate Claude Managed Agents inside your security perimeter
- Private beta: self-host the full Managed Agents service (harness, sandboxes, credentials, session history) in your own cloud or on-prem
- Previously only the sandbox could be self-hosted
- Choose where model requests go: Anthropic, a cloud provider, or own gateway; session history in your own database
- Code runs in a separate sandbox from agent loop and secrets; host allowlists; every step logged, OpenTelemetry export
- Access via Anthropic account team
Category: feature update
Date: 2026-11-12
URL: https://claude.com/resources/articles/self-hosted-claude-managed-agents

## J. Crew brings its signature approach to styling to life with Claude
- J.Crew launched Style Advisor, an AI stylist on JCrew.com for full outfits; US women's and men's
- Built with Claude Code; larger model planned reasoning, Sonnet makes conversation decisions, Haiku handles quick tasks
- Shoppers describe an occasion and get complete looks from J.Crew's photo shoots, refinable in chat
- Next: personalization from preferences and purchase history, more markets and lines
Category: announcement
Date: 2026-11-12
URL: https://claude.com/resources/articles/j-crew-style-advisor-with-claude

## Introducing Claude for Manufacturing
- Plugin with 17 skills and four connectors (Autodesk Fusion, Infor, Microsoft 365, Oracle NetSuite); Team and Enterprise plans
- Covers sales, quality, operations, supply chain, design; multi-step flows like quoting and failed-inspection investigation
- Separate Infor plugin lets Claude act (release POs, reschedule production) within user permissions
- Skills end with human review; plugin doesn't operate equipment
- Targets manual data work (79% of manufacturers enter data manually per cited survey)
Category: feature update
Date: 2026-11-12
URL: https://claude.com/resources/articles/claude-for-manufacturing

## Introducing Claude Meetings
- Beta: Claude joins video calls as a visible participant, follows discussion, starts tasks during the meeting
- Answers questions aloud or in chat, uses connected tools with permission, builds docs/whiteboards live, writes notes and action items
- Each meeting gets a claude.ai page with notes, transcript, artifacts; audio not saved; Gong and Otter integrations coming
- Team and Enterprise; Google Meet only for now; not for ZDR, HIPAA-ready, or CMEK orgs
- Get consent from participants before transcribing
Category: feature update
Date: 2026-11-12
URL: https://claude.com/resources/articles/claude-meetings

## Using Claude Opus 5.5 as your daily driver for knowledge work
- Guide recommending Opus 5.5 for research, analysis, memos, spreadsheets, decks
- Opus 5.5 is now default on Pro, Max, Ultra, Team; lineup includes Haiku 5.5, Sonnet 5.5, Fable 5.2
- Pricing $4/$20 per M tokens vs $2/$10 for Sonnet 5.5; a financial modeling task took 63 vs 93 minutes (Opus 5) at half the cost
- Medium effort matched or beat Opus 5 at High
- Tips: ask for finished files, connect work files, state goal and output up front
Category: feature update
Date: 2026-11-12
URL: https://claude.com/resources/articles/using-claude-opus-5-5-as-your-daily-driver-for-knowledge-work
