## Turn artifacts into Mac and Windows apps
- Beta "Install as app" turns a Claude artifact into a desktop app on Mac or Windows
- Apps get own icon and window, are shareable, and auto-update when the artifact is edited
- Start with browser-level access; can request app permissions or full computer access, re-approved after each update
- Uses Claude account and plan limits; needs online sign-in; unavailable to HIPAA-ready orgs and hybrid deployments
- Anthropic does not review apps; grant full access only to trusted apps
Category: feature update
Date: 2026-11-24
URL: https://claude.com/resources/articles/install-as-app

## MCP servers can now ship skills, run tasks, and more with Claude
- MCP updates let servers act more like agents: share guidance, run background work, exchange files
- Skills over MCP (public beta): servers publish skills with tools; Claude loads them only when needed
- Tasks and Elicitation now GA: long-running operations, and servers can pause to ask user for input
- File Uploads rolling out soon: send PDFs, sheets, images to servers without using context window
- Part of the open MCP spec, so other compatible clients can support them
Category: feature update
Date: 2026-11-24
URL: https://claude.com/resources/articles/skills-over-mcp-tasks-and-more

## KPMG's Todd Lohr on AI when your data is also your clients' data
- Interview with Todd Lohr, KPMG US Vice Chair, on deploying frontier AI with sensitive client data
- KPMG integrated Claude into its Digital Gateway tax platform ("Digital Gateway Powered by Claude")
- Early user of Enterprise Frontier Safeguards, keeping data in its own organization
- Automated misuse review flags serious misuse for human review
- Advice: "adopt and secure at the same time"
Category: announcement
Date: 2026-11-23
URL: https://claude.com/resources/articles/kpmg-todd-lohr-on-ai-when-your-data-is-also-your-clients-data

## Zero data retention with Enterprise Frontier Safeguards is now in beta
- Enterprise Frontier Safeguards (EFS) is a misuse-detection layer compatible with zero data retention
- Moved from private beta (Bridgewater, Salesforce, Stripe) to public beta
- Monitors misuse patterns across many requests; creates Safety Cases for customer review
- Customers supply own storage (S3 or GCS); data deleted after write, never used for training
- Available on Claude Platform, Platform on AWS, Bedrock, Google Cloud; Microsoft Foundry coming soon
Category: feature update
Date: 2026-11-23
URL: https://claude.com/resources/articles/zero-data-retention-with-enterprise-frontier-safeguards

## The enterprise guide to securing coding agents
- Guide for security leaders on managing risks of coding agents like Claude Code
- Goal is making agentic risk "legible and bounded," not zero
- Risks: credential leaks, unvetted dependencies, data exfiltration, prompt injection
- Layered defenses: judgment layer (alignment, injection probes, auto mode classifier) over fixed boundaries (permissions, hooks, sandboxing, egress allowlists), centrally lockable
- Includes six-question vendor checklist and low-risk pilot plan
Category: announcement
Date: 2026-11-23
URL: https://claude.com/resources/articles/enterprise-guide-to-securing-coding-agents

## Introducing Claude Ship
- Beta system handling pull requests after they are opened: Code Review (GA) plus new PR Steward and Claude Approvals agents
- Fixes failing checks, merge conflicts, review feedback; approves changes allowed by team policy; `/ship` command in Claude Code
- Admins enable per repo, set review depth, spend limits, observe-only approval mode
- Anthropic's Claude Code team merged PRs more than doubled June to September
- Team and Enterprise plans, GitHub only, token-billed; not for ZDR, HIPAA, or customer-managed keys
Category: feature update
Date: 2026-11-23
URL: https://claude.com/resources/articles/introducing-claude-ship

## Linked billing on the Claude Platform
- Beta lets third-party platforms bill customers for Claude API usage without sharing API keys
- Customers link their org, approve each platform, set monthly spend limits, can unlink anytime
- Platforms skip storing/rotating keys and building metering and invoicing
- Tradeoff: requests run in platform's org, so customer IP allowlists, encryption keys, retention settings do not apply
- Partners include Asana, Linear, Ramp, Railway, Warp
Category: feature update
Date: 2026-11-17
URL: https://claude.com/resources/articles/linked-billing-on-claude-platform

## Using a "chaos loop" to harden the Claude Docs launch: 60 server errors across billions of requests
- Claude Docs is a live collaborative editor for teammates and Claude sessions; post covers its backend
- Claude ran a ~2 week "chaos loop" on staging: load test, read telemetry, ship fixes, repeat; humans approved risky changes
- Launch: 4.6M+ docs, only 60 server errors in 2B requests, no rollbacks
- Cut one doc's memory from ~3 GB to ~180 MB; pod need from 500+ to ~50
- Inference cost ~$125,000 at list price; author estimates smaller services $3k-$10k (unverified)
Category: announcement
Date: 2026-11-17
URL: https://claude.dev/blog/chaos-loop-claude-docs-launch/

## How the Claude Code team thinks about verification
- Engineering post (Addy Osmani) on how agents verify work with evidence; Claude writes ~90% of team code
- Three test types: end-to-end, property, differential
- Practices: per-repo `verify` skill, 39-item reliability checklist, REVIEW.md read from base branch, human takeover after three failed rounds
- Commit gate with off/observe/enforce modes; flaky tests deleted with written reason
- Separate grader improved task success up to 10 points; human role shifts to defining "done"
Category: announcement
Date: 2026-11-16
URL: https://claude.dev/blog/how-the-claude-code-team-thinks-about-verification/

## Building strong safety evaluations
- Anthropic engineering guide to designing, running, and reporting AI safety evals
- Recommends appropriate response rate with domain rubrics over refusal rate; multi-turn simulations as single-turn tests saturate
- Rigor: validate graders against experts, preregister, repeat runs, report confidence intervals
- Anthropic hardened eval environments, paused some internet-access evals, added monitoring for web search evals
- Config matters: targeted system prompt raised appropriate response rate from 60% (API) to 94% on claude.ai
Category: announcement
Date: 2026-11-13
URL: https://www.anthropic.com/research/building-strong-safety-evaluations
