## Linked billing on the Claude Platform
- Beta feature letting third-party platforms (coding agents, workflow tools) have customers pay for Claude API usage without sharing API keys
- Customers link their Claude Platform org via hosted approval flow; usage billed directly to that org
- Customers can set per-platform spend limits and unlink anytime
- Platforms avoid storing/rotating keys and building metering/invoicing; see per-customer usage
- Caveat: requests run in platform's org, so customer IP allowlists, encryption keys, retention settings don't apply
Category: feature update
Date: 2026-11-17
URL: https://claude.com/resources/articles/linked-billing-on-claude-platform

## Using a 'chaos loop' to harden the Claude Docs launch: 60 server errors across billions of requests
- Claude Docs (collaborative editor for people and Claude sessions) launched Sept 16, 2026 on ~50 pods
- Team ran a ~2-week "chaos loop" on staging: Claude load-tested, read telemetry, proposed and deployed fixes; humans approved hard-to-undo changes
- Claude found a ~3 GB memory issue from per-keystroke copying; copy-on-write cut estimated capacity from 500+ pods to ~50
- Results: 4.6M+ docs by Sept 22, ~2B requests with 60 server errors, 629 deploys in September, no rollbacks
- Cost ~$125,000 inference at list price; author estimates $3k-$10k for small-team stack (unverified)
Category: announcement
Date: 2026-11-17
URL: https://claude.dev/blog/chaos-loop-claude-docs-launch/

## How the Claude Code team thinks about verification
- About 90% of Claude Code team's code is written and reviewed by Claude; verification enables running many agents in parallel
- Prioritize end-to-end tests on the real app, plus property tests and differential tests (good for migrations)
- Practices: `verify` skill in .claude/skills/, 39-item diff-triggered reliability checklist, REVIEW.md read from base branch so changes can't edit own checks
- Commit gate with off/observe/enforce modes; missed bugs become REVIEW.md rules; flaky tests are root-caused or deleted, never retried
- Humans shift from reading diffs to defining "done" and reviewing evidence
Category: announcement
Date: 2026-11-16
URL: https://claude.dev/blog/how-the-claude-code-team-thinks-about-verification/

## Building always-on agents
- Anthropic guide to stateful, proactive agents that mostly sleep and wake for brief runs
- Five primitives: event inbox, timers, external memory, permissions/credentials, outbox
- Better model judgment and cheaper intelligence: Opus 5.5 cost 78% less per solved task than Opus 5 on a long-horizon coding benchmark (vs 40% typical)
- Practices: inbox as source of truth, one active worker per inbox, batch events, start quiet and earn attention
- Permissions/credentials flagged as highest-risk area
Category: announcement
Date: 2026-11-13
URL: https://claude.com/resources/articles/building-always-on-agents

## The Claude Tag guide for startups
- Guide to Claude Tag (beta), which lets teams @mention Claude in Slack connected to their tools
- Not a new feature; documents how eight startups use it for on-call triage, Slack-to-draft-PR, knowledge base, self-serve data, recurring reports
- Example: Campfire went from Slack mention to open PR in 21 minutes
- Requires Team or Enterprise; humans review/merge PRs
- Unavailable for orgs with zero data retention, CMEK, or HIPAA configuration
Category: announcement
Date: 2026-11-13
URL: https://claude.com/resources/articles/claude-tag-guide-for-startups

## Operate Claude Managed Agents inside your security perimeter
- Self-hosted Claude Managed Agents now in private beta
- Harness, sandboxes, credentials, and session history can run in customer's cloud or on-prem (previously Anthropic-hosted)
- Model routing choice: direct to Anthropic, Bedrock, Google Agent Platform, Microsoft Foundry, or own gateway
- Keeps code, credentials, and session logs inside the security perimeter; session history in customer's database
- Design separates reasoning from execution, keeps credentials out of sandbox, limits network to approved hosts, OpenTelemetry export
Category: feature update
Date: 2026-11-12
URL: https://claude.com/resources/articles/self-hosted-claude-managed-agents

## J. Crew brings its signature approach to styling to life with Claude
- Style Advisor, an AI stylist on JCrew.com, builds full outfits for women's and men's styles in the U.S.
- Shoppers describe an occasion or start with an item; looks come from J.Crew's own photo shoots and are refined by conversation
- Multiple Claude models used: top-tier for planning, Claude Code for prototype, Sonnet as stylist, Haiku for quick tasks
- Shifts online shopping toward inspiration-led browsing
- Recommendations stay consistent with J.Crew's styling approach
Category: announcement
Date: 2026-11-12
URL: https://claude.com/resources/articles/j-crew-style-advisor-with-claude

## Introducing Claude for Manufacturing
- Plugin for plant teams with 17 skills and four connectors (Autodesk Fusion, Infor, Microsoft 365, Oracle NetSuite)
- Drafts quotes, quality reports, and supplier requests; skills span sales, quality, operations, supply chain, design, setup
- With Infor's separate plugin, Claude can write to Infor (release POs, reschedule production), following user permissions
- Humans approve work before it goes to customers or suppliers
- Does not operate equipment; Model Hardware Standard research preview aims to standardize equipment settings/safety limits
Category: announcement
Date: 2026-11-12
URL: https://claude.com/resources/articles/claude-for-manufacturing

## Introducing Claude Meetings
- Beta feature: Claude joins video calls as a visible participant and can act during the meeting
- Answers questions aloud or in chat (default written), uses connected tools, builds docs/whiteboards live, writes notes and action items
- Each meeting gets a claude.ai page with notes, transcript, outputs; audio not saved
- Rolling out to Team and Enterprise; Google Meet only for now
- Not yet for zero data retention, HIPAA-ready, or CMEK orgs; admins control outside-guest joining
Category: feature update
Date: 2026-11-12
URL: https://claude.com/resources/articles/claude-meetings

## Using Claude Opus 5.5 as your daily driver for knowledge work
- Guide recommending Opus 5.5 as default for research, analysis, memos, reports, spreadsheets, decks
- Lineup: Haiku 5.5 (fast/simple), Sonnet 5.5 (scoped work), Opus 5.5 (judgment-heavy), Fable 5.2 (demanding long-running technical work)
- Opus 5.5 is now default on Pro, Max, Ultra, Team; thinking always on; Medium effort reportedly matches or beats Opus 5 at High
- Prompting tips: ask for finished files, define "done", skip "think hard", use connectors
- Fewer steps can offset higher per-token price; try higher effort before a bigger model
Category: feature update
Date: 2026-11-12
URL: https://claude.com/resources/articles/using-claude-opus-5-5-as-your-daily-driver-for-knowledge-work
