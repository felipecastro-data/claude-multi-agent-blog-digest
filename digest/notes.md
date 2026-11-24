## Turn artifacts into Mac and Windows apps
- Beta "Install as app" turns Claude artifacts into desktop apps with own icon and window
- Apps open outside Claude, can be shared; no API key or separate login needed
- Permission-based access: browser-level, app features (notifications, menu bar), up to full computer access
- Auto-updates when artifact is edited; permissions re-requested after updates; usage counts toward plan limits
- Apps not reviewed by Anthropic; unavailable to HIPAA-ready orgs and hybrid deployments
Category: feature update
Date: 2026-11-24
URL: https://claude.com/resources/articles/install-as-app

## MCP servers can now ship skills, run tasks, and more with Claude
- MCP update lets servers work with Claude more like another agent
- Skills over MCP (public beta): servers bundle guidance with tools; loaded on demand, update with server
- Tasks (background long jobs) and Elicitation (pause to ask user input) now GA
- File Uploads rolling out soon: send PDFs, spreadsheets, images to servers without using context window
- Part of open spec, so other compatible clients can use them
Category: feature update
Date: 2026-11-24
URL: https://claude.com/resources/articles/skills-over-mcp-tasks-and-more

## KPMG's Todd Lohr on AI when your data is also your clients' data
- Interview with KPMG US Vice Chair Todd Lohr on adopting frontier AI while protecting client data
- KPMG tax platform now "Digital Gateway Powered by Claude"
- KPMG had early access to Enterprise Frontier Safeguards (now public beta), compatible with zero data retention
- Lets KPMG keep client data in-house while using frontier models, speeding regulated deployments
- Lohr: adopt and secure AI together; "wait and see" is not sustainable
Category: announcement
Date: 2026-11-23
URL: https://claude.com/resources/articles/kpmg-todd-lohr-on-ai-when-your-data-is-also-your-clients-data

## Zero data retention with Enterprise Frontier Safeguards is now in beta
- Enterprise Frontier Safeguards (EFS) detects sophisticated misuse while keeping zero data retention
- Moved from private beta (100+ customers incl. Bridgewater, Salesforce, Stripe) to public beta
- Automated monitoring across many requests creates "Safety Case" records; no human review, no training use
- Customers bring own storage (S3, GCS); data deleted after written there
- Available on Claude Platform, AWS (Claude Platform and Bedrock), Google Cloud; Microsoft Foundry coming
Category: feature update
Date: 2026-11-23
URL: https://claude.com/resources/articles/zero-data-retention-with-enterprise-frontier-safeguards

## The enterprise guide to securing coding agents
- Guide for security leaders scaling Claude Code with a layered risk framework
- Four risks: credential/privilege abuse, unvetted dependencies/extensions, data exfiltration, prompt injection
- Auto mode now default start mode for interactive Claude Code on all plans; headless, Agent SDK, HIPAA default to manual
- Enterprise plans get skill and plugin scanning
- Pairs probabilistic defenses with deterministic controls (deny rules, hooks, sandboxing, egress allowlists, managed settings)
Category: announcement
Date: 2026-11-23
URL: https://claude.com/resources/articles/enterprise-guide-to-securing-coding-agents

## Introducing Claude Ship
- Beta product that reviews PRs, fixes them, and decides which are ready to merge per team policy
- Combines Code Review (now GA) with PR Steward (fixes checks, conflicts, feedback) and Claude Approvals (policy-based approval)
- `/ship` command in Claude Code, or admins enable per repository with spend limits
- Anthropic says merged PRs on its Claude Code team more than doubled June to September
- Team and Enterprise, GitHub only; not for ZDR, HIPAA, or customer-managed keys; token-billed
Category: announcement
Date: 2026-11-23
URL: https://claude.com/resources/articles/introducing-claude-ship

## Linked billing on the Claude Platform
- Beta lets third-party platforms bill customers' Claude API usage to the customer's own Claude Platform org
- Customers link via hosted flow, approve platforms, set monthly spend limits, unlink anytime
- No API key changes hands, so platforms need not store or rotate keys
- Platforms skip building metering/invoicing; customers can use existing Anthropic commitments
- Tradeoff: requests run in platform's org, so customer IP allowlists, encryption keys, retention settings do not apply
Category: feature update
Date: 2026-11-17
URL: https://claude.com/resources/articles/linked-billing-on-claude-platform

## Using a "chaos loop" to harden the Claude Docs launch: 60 server errors across billions of requests
- Claude Docs (collaborative editor for people and Claude sessions) launched Sept 16, 2026
- Claude ran a "chaos loop" on staging: load tests, read telemetry, proposed and deployed fixes, reran; humans approved irreversible changes
- Rust service with minimal dependencies kept it legible; copy-on-write fix cut a 3 GB doc to ~180 MB and pods from 500+ to ~50
- Result: ~2B requests, 60 server errors, no rollbacks, 4.6M docs created by Sept 22
- Cost ~$125,000 inference; credited to newer models holding long goals without drifting
Category: announcement
Date: 2026-11-17
URL: https://claude.dev/blog/chaos-loop-claude-docs-launch/

## How the Claude Code team thinks about verification
- Addy Osmani on having coding agents verify work with evidence; ~90% of team code written and reviewed by Claude
- Prioritizes E2E tests (via a `verify` skill), plus property and differential tests
- Recurring failures become hooks or CLAUDE.md rules
- Safeguards: human after three failed fixes, rules read from base branch, gates start in observe mode, no skipping flaky tests
- Verification loops enable running dozens or hundreds of agents; separate grader improved success up to 10 points
Category: announcement
Date: 2026-11-16
URL: https://claude.dev/blog/how-the-claude-code-team-thinks-about-verification/

## Building strong safety evaluations
- Anthropic recommendations for building and relying on AI safety evals, drawing on psychology replication reforms
- Shifted from counting refusals to "appropriate response rate" on multi-turn conversations with a Claude-simulated user
- Hardened eval environments, paused many internet-access evals, added real-time monitoring for web search evals
- Urges validating graders against human labels, preregistering analyses, reporting uncertainty
- Config matters: system prompt change moved a score from 60% (API) to 94% (claude.ai)
Category: announcement
Date: 2026-11-13
URL: https://www.anthropic.com/research/building-strong-safety-evaluations
