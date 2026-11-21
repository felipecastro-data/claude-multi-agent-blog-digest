## Your apps can now open in Claude, and Claude can work in them
- Partner apps can open inside Claude beside the chat or full screen
- Claude can edit the live page, row, or file; user approves actions as with any connector
- Pin tools to sidebar, open from + menu without a prompt
- Rolling out on web and desktop, all plans; starts with Asana, Canva, Notion, Atlassian
- Developers can build full apps on MCP Apps standard (public preview)
Category: feature update
Date: 2026-11-10
URL: https://claude.com/resources/articles/interactive-connectors-full-tool

## Linked billing on the Claude Platform
- Beta: third-party tools let customers pay for Claude API usage without sharing an API key
- Customers link their org via Anthropic's hosted flow, approve each platform, set monthly spend limits, unlink in Console
- No key storage or rotation for platforms; Anthropic handles billing and approvals
- Platforms get per-customer usage and can choose per request who pays
- Caveat: requests run in the platform's org, so customer IP allowlists, encryption keys, retention settings don't apply
Category: feature update
Date: 2026-11-17
URL: https://claude.com/resources/articles/linked-billing-on-claude-platform

## Using a 'chaos loop' to harden the Claude Docs launch: 60 server errors across billions of requests
- Claude ran a roughly two-week chaos loop on staging: generated load, broke components, read telemetry, shipped fixes; humans approved hard-to-undo changes
- Key fix: copy-on-write cut one doc from ~3 GB to ~180 MB; launch pods estimate fell from 500+ to ~50
- Results: 4.6M+ docs by Sep 22, 2B requests with 60 server errors, no rollbacks across 629 September deploys
- Cost about $125,000 in inference; author estimates $3k-$10k for smaller projects (untested)
- Argues long-running models can hold one goal across many iterations
Category: announcement
Date: 2026-11-17
URL: https://claude.dev/blog/chaos-loop-claude-docs-launch/

## How the Claude Code team thinks about verification
- Claude Code team (Addy Osmani) on how agents verify their own work with evidence; ~90% of team code is written and reviewed by Claude
- Prioritizes E2E tests, plus property tests and differential tests for migrations
- Claude runs the app via a `verify` skill; humans take over after three failed fix attempts; checks read from base branch; flaky tests fixed or deleted, never retried
- Missed bugs become REVIEW.md or CLAUDE.md rules; commit gates start in observe mode; reviewers evaluated against past reverts
- Verification lets one person direct many agents; the job shifts to defining "done" and reviewing evidence
Category: announcement
Date: 2026-11-16
URL: https://claude.dev/blog/how-the-claude-code-team-thinks-about-verification/

## Building always-on agents
- Guide (William Hu) on architecture for agents that run in bursts, keep context across sessions, act unsupervised
- Five primitives: event inbox, timers, memory, permissions, outbox
- Interest rising as models show better judgment and long-task intelligence gets cheaper (cites Opus 5.5 78% cheaper per solved task than Opus 5 on one benchmark)
- Covers reliability: event dedup, one worker per inbox, credential and approval handling
- Blueprint for making agents proactive
Category: announcement
Date: 2026-11-13
URL: https://claude.com/resources/articles/building-always-on-agents

## The Claude Tag guide for startups
- Guide to Claude Tag (beta), which lets teams @mention Claude in Slack; for Team and Enterprise plans
- Eight startups share setups: on-call triage, Slack threads to draft PRs, internal Q&A, data requests, recurring reports
- Results: Campfire went from mention to open PR in 21 min; Moritz cut daily update from ~1 hour to 5 min
- Guardrails: draft PRs only, humans review and merge; scoped access, spend limits, security review
- Advice: start with one clear task in an existing channel
Category: announcement
Date: 2026-11-13
URL: https://claude.com/resources/articles/claude-tag-guide-for-startups

## Operate Claude Managed Agents inside your security perimeter
- Self-hosted Claude Managed Agents in private beta
- Previously only the sandbox was self-hostable; now harness, sandboxes, credentials, session history all run in customer environment
- Model routing choices: direct to Anthropic, Bedrock, Google Agent Platform, Microsoft Foundry, or own gateway
- Reasoning separated from code execution, credentials kept out of sandbox, network allowlists, OpenTelemetry session logs
- Access via Anthropic account team
Category: feature update
Date: 2026-11-12
URL: https://claude.com/resources/articles/self-hosted-claude-managed-agents

## J. Crew brings its signature approach to styling to life with Claude
- Style Advisor, an AI stylist on JCrew.com, helps shoppers by full outfit; live for US women's and men's
- Users describe an occasion or start from one piece; looks come from J.Crew photo shoots; refine by chat
- Built with Claude Code: Opus prototype, Sonnet as in-conversation stylist, Haiku for quick tasks
- Moves shopping toward inspiration-led experience per J.Crew CEO
- Next: personalization from preferences and purchases, more markets and lines
Category: announcement
Date: 2026-11-12
URL: https://claude.com/resources/articles/j-crew-style-advisor-with-claude

## Introducing Claude for Manufacturing
- Plugin with 17 skills and four connectors: Autodesk Fusion, Infor, Microsoft 365, Oracle NetSuite
- Drafts quotes, quality reports, supplier requests; handles multistep work like failed-inspection investigation and bid comparison
- Without a connector, saved system exports in Microsoft 365 work; separate Infor plugin can act (e.g. release POs) with approval
- Humans approve outputs before they reach customers or suppliers; does not operate equipment
- Available on Team and Enterprise plans
Category: feature update
Date: 2026-11-12
URL: https://claude.com/resources/articles/claude-for-manufacturing

## Introducing Claude Meetings
- Claude joins video calls as a visible participant and starts work during the meeting
- Beta on Team and Enterprise; Google Meet supported, others coming soon
- Answers questions aloud or in chat, builds docs/whiteboards live, writes notes and action items on a claude.ai meeting page
- Saves transcript, summary, screen descriptions, not audio; posts join notice; admins control outside-guest calls
- Not available with zero data retention, HIPAA-ready configs, or customer-managed keys
Category: feature update
Date: 2026-11-12
URL: https://claude.com/resources/articles/claude-meetings
