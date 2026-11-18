## Your apps can now open in Claude, and Claude can work in them.
- Partner apps open inside Claude (web and desktop, all plans), side-by-side or full screen
- Claude can edit the open page, row, or file; actions need approval like any connector
- Uses your own account (Confluence, Notion) for the full editor; pin tools to sidebar
- Starts with Asana, Canva, Dropbox, monday.com, Webflow; Figma, Harvey, Shopify coming
- Developers can build on MCP Apps, an open MCP extension, in public preview
Category: feature update
Date: 2026-11-10
URL: https://claude.com/resources/articles/interactive-connectors-full-tool

## Linked billing on the Claude Platform.
- Beta: third-party tools bill customers' Claude API usage to the customer's own Anthropic org
- Customers link via hosted flow, set monthly spend limits per platform, view spend in Console, unlink anytime
- No API keys change hands, so platforms need not store or rotate customer keys
- Platforms skip building metering/invoicing; customers can use existing Anthropic commitments
- Limitation: requests run in the platform's org, so customer org settings (IP allowlists, encryption keys, retention) don't apply
Category: feature update
Date: 2026-11-17
URL: https://claude.com/resources/articles/linked-billing-on-claude-platform

## Using a "chaos loop" to harden the Claude Docs launch: 60 server errors across billions of requests.
- Claude Docs is a collaborative editor where people and Claude sessions edit live; launched Sept 16, 2026
- Claude ran continuously on a staging cluster for ~2 weeks: load tests, telemetry reading, proposed and deployed fixes, with approval gates for risky changes
- Copy-on-write fix cut a large doc from ~3 GB to ~180 MB; launch capacity estimate fell from 500+ pods to ~50
- Result: 4.6M+ docs, 2B requests, 60 server errors, 629 production rolls in September with no rollbacks
- Key lesson: make the system easy for Claude to measure (Rust, minimal dependencies); author estimates ~$125K inference cost (rough)
Category: announcement
Date: 2026-11-17
URL: https://claude.dev/blog/chaos-loop-claude-docs-launch/

## How the Claude Code team thinks about verification.
- Post by Addy Osmani: the team says ~90% of its code is written and reviewed by Claude, enabled by verification loops
- Agents cheaply generate tests, benchmarks, and specs; recommended types are end-to-end, property, and differential tests
- Practices: `verify` skill, human escalation after 3 failed fixes, 39-item reliability checklist, checks taken from base branch, flaky tests deleted, commit gate (off/observe/enforce)
- Verification loops let people run dozens or hundreds of agents in parallel; separate grader with rubric gave up to 10-point success gain
- Human work shifts to defining "done" and reviewing evidence
Category: announcement
Date: 2026-11-16
URL: https://claude.dev/blog/how-the-claude-code-team-thinks-about-verification/

## Building always-on agents.
- Guide to stateful, proactive agents that sleep mostly and wake on events
- Five primitives: event inbox, timers, memory, permissions, outbox
- Resurgence due to better model judgment and cheaper long-horizon intelligence (cited: Opus 5.5 78% cheaper per solved task than Opus 5 on one coding benchmark)
- Reliability needs dedup, a single active worker, persistent memory; unattended agents need credential proxies, auto-mode classifiers, deferred tool calls for approvals
- Advice: start quiet and earn user attention over time
Category: announcement
Date: 2026-11-13
URL: https://claude.com/resources/articles/building-always-on-agents

## The Claude Tag guide for startups.
- Claude Tag (beta) is Slack-based for Team and Enterprise: @mention Claude, connect tools, assign tasks
- Guide shows eight startups using it for on-call triage, Slack-to-draft-PR, company Q&A, self-serve data, recurring reports
- Results: Campfire mention-to-PR in 21 min; NavigateAI merged 134 PRs; Moritz cut daily update from ~1 hr to 5 min
- Guardrails: draft PRs reviewed and merged by people; admin connector bundles, per-channel settings, spend limits
- Tip: invest in documented context and tune chattiness
Category: announcement
Date: 2026-11-13
URL: https://claude.com/resources/articles/claude-tag-guide-for-startups

## Operate Claude Managed Agents inside your security perimeter.
- Self-hosted Claude Managed Agents in private beta: run harness, sandboxes, credentials, session history in your own cloud or on-prem
- Previously only the sandbox could be self-hosted; now server, database, and workers too
- Customers choose model request routing (Anthropic, cloud provider, own gateway)
- Session history stays in customer DB; ZDR applies to Claude requests if in place
- Reasoning separated from code execution, credentials kept out of sandbox, network allowlists, OpenTelemetry logging; contact account team for access
Category: feature update
Date: 2026-11-12
URL: https://claude.com/resources/articles/self-hosted-claude-managed-agents

## J. Crew brings its signature approach to styling to life with Claude.
- J.Crew Style Advisor: AI stylist on JCrew.com that builds complete outfits; live for U.S. women's and men's
- Shoppers describe an occasion or start from an item and refine looks drawn from J.Crew photo shoots
- Built with Claude Code using multiple models: frontier model for planning, Sonnet for response decisions, Haiku for fast tasks
- Moves retail toward inspiration-led shopping consistent with J.Crew styling
- Plans: personalization from past purchases, more markets and product lines
Category: announcement
Date: 2026-11-12
URL: https://claude.com/resources/articles/j-crew-style-advisor-with-claude

## Introducing Claude for Manufacturing.
- Plugin with 17 skills and four connectors: Autodesk Fusion, Infor, Microsoft 365, Oracle NetSuite
- Drafts quotes, quality reports, supplier requests; carries multistep jobs (quoting, failed inspections, machine diagnosis) to human review
- Systems without connectors can work via exports saved to Microsoft 365; Infor plugin can make changes (e.g., release POs) after buyer approval
- Targets manual data entry (cited: ~4 in 5 manufacturers enter data manually)
- Claude does not operate equipment; humans approve before anything reaches customers or suppliers
Category: announcement
Date: 2026-11-12
URL: https://claude.com/resources/articles/claude-for-manufacturing

## Introducing Claude Meetings.
- Beta: Claude joins video calls as a visible participant; Google Meet only; Team and Enterprise plans
- Answers questions by voice or chat, builds docs and whiteboards live, writes notes and action items
- Each meeting gets a claude.ai page with notes, transcript, and built artifacts; ask about past meetings
- Defaults to staying out of calls with outside guests unless admin allows; stores transcripts/summaries, not audio
- Not available for ZDR, HIPAA-ready, or CMEK orgs during beta
Category: feature update
Date: 2026-11-12
URL: https://claude.com/resources/articles/claude-meetings
