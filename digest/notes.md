## KPMG's Todd Lohr on AI when your data is also your clients' data
- Anthropic interview with KPMG US Vice Chair Todd Lohr on adopting frontier AI while protecting client data
- KPMG integrated Claude into its Digital Gateway tax platform, now "Digital Gateway Powered by Claude"
- Enterprise Frontier Safeguards (public beta) adds misuse detection compatible with zero data retention
- Regulated-data firms can keep data in their own infrastructure and still use frontier models
- Lohr: "you have to adopt and secure at the same time"
Category: announcement
Date: 2026-11-23
URL: https://claude.com/resources/articles/kpmg-todd-lohr-on-ai-when-your-data-is-also-your-clients-data

## Zero data retention with Enterprise Frontier Safeguards is now in beta
- Enterprise Frontier Safeguards (EFS) is a misuse-detection layer that works with zero data retention
- Moved from private beta (100+ customers) to public beta
- Available on Claude Platform, Claude Platform on AWS, Amazon Bedrock, Claude on Google Cloud; Microsoft Foundry coming
- Customers store inputs/outputs in their own cloud; automated cross-request monitoring opens Safety Cases without underlying data
- Detects coordinated attacks that look harmless per request while customers keep data control
Category: feature update
Date: 2026-11-23
URL: https://claude.com/resources/articles/zero-data-retention-with-enterprise-frontier-safeguards

## The enterprise guide to securing coding agents
- Guide to securing coding agents like Claude Code, with six questions for vetting providers
- Covers four risks: leaked credentials, unvetted dependencies/extensions, data exfiltration, prompt injection
- Layered defenses: judgment layer (alignment, probes, auto mode classifier) and fixed boundaries (permissions, hooks, sandboxing, egress allowlists), centrally lockable
- Auto mode is now default for interactive sessions on every plan; skill/plugin scanning on Enterprise
- Cites Salesforce: 79% more PRs merged per developer, 5% fewer incidents
Category: announcement
Date: 2026-11-23
URL: https://claude.com/resources/articles/enterprise-guide-to-securing-coding-agents

## Introducing Claude Ship
- System for moving PRs through review, fixes, and approval: Code Review (GA) plus beta PR Steward and Claude Approvals
- Claude repairs failing checks, merge conflicts, reviewer feedback, and approves changes permitted by a policy file
- `/ship` in Claude Code advances your own PRs; admins enable per GitHub repo; Team and Enterprise plans
- Token-billed with admin spend limits; unavailable with ZDR, HIPAA configuration, or customer-managed keys
- Aims to remove review/merge bottleneck as agents write more code
Category: feature update
Date: 2026-11-23
URL: https://claude.com/resources/articles/introducing-claude-ship

## Linked billing on the Claude Platform
- Beta feature letting end customers of third-party tools pay for Claude API usage without sharing an API key
- Customers link their Claude Platform org via hosted flow, approve each platform, set spend limits, unlink anytime
- Platforms avoid storing/rotating keys and see per-customer usage; can choose per request who pays
- Requests run in the platform's org, so customer-org IP allowlists, encryption keys, retention settings don't apply
- Reduces key-handling risk and lets platforms ship Claude features without building billing
Category: feature update
Date: 2026-11-17
URL: https://claude.com/resources/articles/linked-billing-on-claude-platform

## Using a "chaos loop" to harden the Claude Docs launch: 60 server errors across billions of requests
- Claude Docs is a collaborative editor where people and Claude sessions edit live; launched Sept 16, 2026
- "Chaos loop": Claude continuously load-tested staging, read telemetry, proposed and deployed low-risk fixes; humans approved irreversible changes
- One doc's memory fell from ~3 GB to ~180 MB; launch capacity estimate dropped from 500+ pods to ~50
- Result: 4.6M docs, 60 server errors over 2B requests, no rollbacks; 7 of 10 rehearsed failures occurred and were handled
- Inference cost ~$125,000; relied on newer frontier models that sustain goals over long runs
Category: announcement
Date: 2026-11-17
URL: https://claude.dev/blog/chaos-loop-claude-docs-launch/

## How the Claude Code team thinks about verification
- By Addy Osmani; about 90% of the team's code is written and reviewed by Claude
- Agents cheaply generate tests, benchmarks, specs; failures feed back into hooks or CLAUDE.md rules
- Practices: `verify` skill for end-to-end runs, property and differential tests, reliability-checklist diff review, REVIEW.md on a protected branch
- New commit gates start in observe mode before enforce; reviewers evaluated against past incidents
- Engineer role shifts to defining "done" and reviewing evidence; separate rubric grader improved success up to 10 points
Category: announcement
Date: 2026-11-16
URL: https://claude.dev/blog/how-the-claude-code-team-thinks-about-verification/

## Building strong safety evaluations
- Engineering guide on designing, running, and reporting safety evals ("a safety claim is only as sound as the eval behind it")
- Advice: measure the intended construct, use multi-turn simulations, validate AI graders against experts, preregister, report uncertainty
- Anthropic hardened eval environments, paused many internet-access evals, added real-time monitoring for web search evals
- Self-harm transcript review led to a system prompt change; claude.ai appropriate response rate 94% vs 60% on raw API
- Weak evals can be gamed or reflect noise, making "safer" claims misleading
Category: announcement
Date: 2026-11-13
URL: https://www.anthropic.com/research/building-strong-safety-evaluations

## Building always-on agents
- Guide to stateful, proactive agents that act without direct supervision across sessions
- Agent mostly sleeps, wakes for short runs triggered by webhooks, schedules, or messages
- Five primitives: event inbox, timers, memory, permissions, outbox
- Newer models judge intent better; Opus 5.5 cost 78% less per solved task than Opus 5 on a long-horizon coding benchmark
- Practical blueprint for making agents proactive or building new ones
Category: announcement
Date: 2026-11-13
URL: https://claude.com/resources/articles/building-always-on-agents

## The Claude Tag guide for startups
- Guide on how eight fast-growing startups use Claude Tag, a beta Slack tool (@mention Claude, connect tools, assign tasks)
- Use cases: alert triage, Slack threads to draft PRs, Q&A from docs/code, self-serve data answers, scheduled reports
- Reported results: Campfire Slack mention to open PR in 21 minutes; Moritz cut daily update from ~1 hour to 5 minutes
- Stresses human review before merge, scoped access, spend limits
- Beta; Claude Team and Enterprise plans only
Category: announcement
Date: 2026-11-13
URL: https://claude.com/resources/articles/claude-tag-guide-for-startups
