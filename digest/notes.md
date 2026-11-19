## Your apps can now open in Claude, and Claude can work in them
- Partner apps embed directly in Claude; built on interactive connectors and MCP Apps (open extension, public preview)
- Open a tool beside chat or full screen; Claude edits the open page/row/file with user approval
- Pin tools to sidebar and + menu; open without a prompt
- Launch partners: Asana, Canva, Dropbox, monday.com, Smartsheet, Vercel, Webflow; examples from Adobe, Atlassian, Box, HubSpot, Notion
- Matters: work stays in familiar tools while Claude assists inside them
Category: feature update
Date: 2026-11-10
URL: https://claude.com/resources/articles/interactive-connectors-full-tool

## Linked billing on the Claude Platform
- Beta: third-party platforms bill Claude API usage to the customer's own Claude Platform org
- Customers link via hosted flow, approve each platform, set monthly spend limits, view spend in Console, unlink anytime
- Platforms skip building metering/invoicing; get per-customer usage data; can choose per request who pays
- No API key changes hands; no key storage or rotation for platforms
- Caveat: requests run in platform's org, so customer-org IP allowlists, encryption keys, retention settings don't apply
Category: feature update
Date: 2026-11-17
URL: https://claude.com/resources/articles/linked-billing-on-claude-platform

## Using a "chaos loop" to harden the Claude Docs launch: 60 server errors across billions of requests
- Write-up on building the service behind Claude Docs (collaborative doc editor, launched Sept 16, 2026)
- Two weeks pre-launch, Claude ran a loop on staging: load test, break components, read telemetry, propose and deploy fixes; humans approved risky changes
- Rust and minimal dependencies so every number traces to team-written code
- Results: 4.6M+ docs in week one, ~50 pods, 60 server errors over 2B requests, no rollbacks; pod estimate cut from 500+ to ~50
- Cost about $125k inference; smaller services est. $3k-$10k
Category: announcement
Date: 2026-11-17
URL: https://claude.dev/blog/chaos-loop-claude-docs-launch/

## How the Claude Code team thinks about verification
- Engineering post (Addy Osmani) on verification loops so coding agents check their own work with evidence
- Test types: end-to-end, property-based, differential
- Practices: verify skill plus test/build/lint before PR; 3 fix attempts then human; 39-item reliability checklist; flaky tests fixed or deleted
- Guardrails: changes can't modify checks judging them; REVIEW.md read from base branch; commit gate with off/observe/enforce modes
- Matters: reliable verification lets teams run many agents in parallel; reviewers define "done" and review evidence
Category: announcement
Date: 2026-11-16
URL: https://claude.dev/blog/how-the-claude-code-team-thinks-about-verification/

## Building always-on agents
- Guide to stateful, proactive agents that act without direct supervision across sessions
- Better model judgment and much cheaper long-horizon tasks (Opus 5.5 78% cheaper per solved task than Opus 5 on one benchmark)
- Agent sleeps between event-triggered runs, saving state each time
- Five primitives: event inbox, timers, memory, permissions, outbox
- Advice: tight permissions via credential proxy, approvals for high-stakes actions, start quiet and earn attention
Category: announcement
Date: 2026-11-13
URL: https://claude.com/resources/articles/building-always-on-agents

## The Claude Tag guide for startups
- Guide from interviews with eight startups on Claude Tag (beta), @mentioning Claude in Slack channels connected to tools
- Top uses: on-call triage, threads to draft PRs, company knowledge base, self-serve data questions, recurring reports
- Claude can monitor alert channels, open draft PRs for human review, run scheduled routines
- Results: Campfire went from Slack mention to open PR in 21 min; Moritz cut daily update from ~1 hour to 5 min
- Requires Team or Enterprise; start with one task, pilot in a private channel, set access and spend limits
Category: announcement
Date: 2026-11-13
URL: https://claude.com/resources/articles/claude-tag-guide-for-startups

## Operate Claude Managed Agents inside your security perimeter
- Self-hosted Claude Managed Agents in private beta
- Run full service (harness, sandboxes, credentials, session history) in own cloud or on-prem; previously only the sandbox
- Choose where model requests go: Anthropic, cloud provider, or own gateway
- Reasoning separated from code execution; credentials kept out of sandbox; allowed-host network list; OpenTelemetry export of every step
- Matters: keeps data in the org's environment for unattended agents; ZDR applies to model requests
Category: feature update
Date: 2026-11-12
URL: https://claude.com/resources/articles/self-hosted-claude-managed-agents

## J.Crew brings its signature approach to styling to life with Claude
- Customer story: Style Advisor, an AI stylist on JCrew.com, live for US women's and men's styles
- Shoppers describe an occasion or start with a piece and get full outfits from J.Crew shoots, refinable in chat
- Built with Claude Code across several models (Fable planning, Opus prototype, Sonnet as stylist, Haiku quick tasks)
- Moves shopping toward inspiration-led browsing with consistent styling point of view
- Next: personalization from preferences and purchases, more markets and products
Category: announcement
Date: 2026-11-12
URL: https://claude.com/resources/articles/j-crew-style-advisor-with-claude

## Introducing Claude for Manufacturing
- Plugin with 17 skills and four connectors: Autodesk Fusion, Infor, Microsoft 365, Oracle NetSuite
- Drafts quotes, quality reports, supplier requests from the manufacturer's own records
- Skills include failed-inspection investigation, breakdown diagnosis, sourcing, design comparison, production reporting; Infor plugin allows approved changes
- Cites 79% of manufacturers entering data manually; humans approve work; does not operate equipment
- Available on Team and Enterprise; technical webinar Nov 17, 2026
Category: feature update
Date: 2026-11-12
URL: https://claude.com/resources/articles/claude-for-manufacturing

## Introducing Claude Meetings
- Beta: Claude joins video calls as a visible participant and can be asked questions by voice or chat
- Builds docs, whiteboards, and artifacts live; uses connected tools with permission; writes notes and action items
- Each meeting gets a claude.ai page with notes, transcript, and built artifacts, editable by invited org members
- Team and Enterprise only; Google Meet only; ZDR, HIPAA-ready, and CMEK orgs not yet eligible
- Admins control outside-guest meetings; transcripts and summaries saved, not audio
Category: feature update
Date: 2026-11-12
URL: https://claude.com/resources/articles/claude-meetings
