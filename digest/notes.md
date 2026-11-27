## Turn artifacts into Mac and Windows apps
- Artifacts can be installed as desktop apps on Mac and Windows via "Install as app" (beta)
- Apps get own icon and window, are shareable, auto-update when the artifact is edited
- Three permission levels: browser-like default, app permissions (notifications, shortcuts), full computer access
- Lets artifacts act as everyday work tools (e.g. calendar-driven meeting prep) with reminders
- All plans; not for HIPAA-ready orgs or hybrid deployments; needs internet and sign-in
Category: feature update
Date: 2026-11-24
URL: https://claude.com/resources/articles/install-as-app

## MCP servers can now ship skills, run tasks, and more with Claude
- MCP servers can now do more than expose tools
- Skills over MCP (public beta): servers publish skills, loaded on demand, updated with the server
- Tasks (background long jobs) and Elicitation (pause for user sign-off/input) now GA
- File Uploads (send PDFs, spreadsheets, images to servers) rolling out soon
- Part of open spec, so should work in other compatible clients
Category: feature update
Date: 2026-11-24
URL: https://claude.com/resources/articles/skills-over-mcp-tasks-and-more

## KPMG's Todd Lohr on AI when your data is also your clients' data
- Interview with Todd Lohr, KPMG US Vice Chair, on adopting frontier AI while protecting client data
- KPMG built "Digital Gateway Powered by Claude" into its tax platform
- Had early access to Enterprise Frontier Safeguards (EFS), now public beta; compatible with zero data retention
- EFS lets KPMG keep data in its own cloud while using frontier models
- Advice: "adopt and secure at the same time"
Category: announcement
Date: 2026-11-23
URL: https://claude.com/resources/articles/kpmg-todd-lohr-on-ai-when-your-data-is-also-your-clients-data

## Zero data retention with Enterprise Frontier Safeguards is now in beta
- EFS is a safety layer detecting sophisticated misuse while staying compatible with zero data retention
- Moved from private to public beta; developed with 100+ customers
- Automated monitoring finds misuse patterns across many requests; Safety Cases exclude inputs/outputs; analyzes data in customer's cloud storage
- Available via Claude Platform, Claude Platform on AWS, Amazon Bedrock, Claude on Google Cloud; Microsoft Foundry soon
- Helps strict-data orgs use frontier models with added protection
Category: feature update
Date: 2026-11-23
URL: https://claude.com/resources/articles/zero-data-retention-with-enterprise-frontier-safeguards

## The enterprise guide to securing coding agents
- Guide for security leaders on securing coding agents like Claude Code (Team/Enterprise)
- Six-question enterprise-readiness checklist
- Four risks: credential leakage, unvetted dependencies/extensions, data exfiltration, prompt injection
- Two defense layers: judgment-based (alignment, injection probes, auto mode classifier) and fixed boundaries (permissions, hooks, sandboxing, egress allowlists), lockable via managed settings
- Goal is to make agentic risk "legible and bounded"
Category: announcement
Date: 2026-11-23
URL: https://claude.com/resources/articles/enterprise-guide-to-securing-coding-agents

## Introducing Claude Ship
- Beta product taking a PR through review, fixes, and approval; Team/Enterprise, GitHub repos
- Code Review is GA; PR Steward (beta) fixes failing checks, conflicts, feedback; Claude Approvals (beta) applies repo-file approval policy
- Use `/ship` in Claude Code, or admins enable per repository with review depth, timing, spend limits
- Anthropic's Claude Code team merged PRs more than doubled June to September
- Token-billed; unavailable with ZDR, HIPAA configuration, or customer-managed keys
Category: announcement
Date: 2026-11-23
URL: https://claude.com/resources/articles/introducing-claude-ship

## Linked billing on the Claude Platform
- Beta: third-party tools bill end customers' Claude API usage without sharing API keys
- Customers link their org via hosted flow, approve each platform, set monthly limits, can unlink anytime
- Platforms skip key storage/rotation and choose per request who pays
- Platforms get per-customer usage without building metering/invoicing
- Requests run in platform's org, so customer org settings (IP allowlists, encryption keys, retention) don't apply
Category: feature update
Date: 2026-11-17
URL: https://claude.com/resources/articles/linked-billing-on-claude-platform

## Using a "chaos loop" to harden the Claude Docs launch: 60 server errors across billions of requests
- Claude Docs: collaborative editor where people and Claude sessions edit live; launched Sept 16, 2026
- Claude ran a ~2-week "chaos loop" on staging: load tests, deliberate breakage, fixes, human approval for risky changes
- Rust service with minimal dependencies; copy-on-write cut one doc's memory from ~3 GB to ~180 MB, capacity estimate 500+ pods to ~50
- Results: 4.6M docs, 2B requests, 60 server errors, 629 rollouts, no rollbacks
- Cost ~$125,000 inference, estimated ~6 team-months of work
Category: announcement
Date: 2026-11-17
URL: https://claude.dev/blog/chaos-loop-claude-docs-launch/
