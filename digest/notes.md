## Turn artifacts into Mac and Windows apps
- "Install as app" beta turns a Claude artifact into a desktop app on Mac and Windows with its own icon and window.
- Apps open outside Claude, can be shared, and auto-update when the artifact is edited; can send notifications and add menu bar/system tray items.
- Three permission levels: default, app permissions (global shortcuts, always-on-top), full computer access (only for own/org apps); permissions reset on update.
- Open on all plans except HIPAA-ready orgs and hybrid deployments; usage counts toward plan limits; must be online and signed in.
- Lets artifacts act as everyday tools without packaging, signing, or a separate API key.
Category: feature update
Date: 2026-11-24
URL: https://claude.com/resources/articles/install-as-app

## MCP servers can now ship skills, run tasks, and more with Claude
- Skills over MCP enters public beta: servers can publish step-by-step skills alongside tools; loaded only when needed, update with the server.
- Tasks (background long-running work) and Elicitation (pausing to ask user input) are now generally available.
- File Uploads rolling out soon, letting Claude send PDFs, spreadsheets, and images to servers without using context window.
- Sensitive actions (spending, deleting) can be confirmed before proceeding.
- Part of the open MCP spec, so works in other clients; tool search cuts tool-definition context by over 85% in multi-server setups.
Category: feature update
Date: 2026-11-24
URL: https://claude.com/resources/articles/skills-over-mcp-tasks-and-more

## KPMG's Todd Lohr on AI when your data is also your clients' data
- Interview with KPMG US Vice Chair Todd Lohr on using frontier AI with regulated, sensitive client data.
- KPMG integrated Claude into its Digital Gateway tax platform ("Digital Gateway Powered by Claude").
- Enterprise Frontier Safeguards (EFS), now in public beta, adds automated misuse review and works with zero data retention.
- Lohr: data stays in the organization's own cloud while accessing frontier models; safeguards should speed deployment on sensitive engagements.
- Advice: "adopt and secure at the same time."
Category: announcement
Date: 2026-11-23
URL: https://claude.com/resources/articles/kpmg-todd-lohr-on-ai-when-your-data-is-also-your-clients-data

## Zero data retention with Enterprise Frontier Safeguards is now in beta
- EFS is an automated safety monitoring layer for business customers that detects misuse spread across many requests, and works with zero data retention (ZDR).
- Moved from private to public beta on Claude Platform, Claude Platform on AWS, Amazon Bedrock, and Claude on Google Cloud; Microsoft Foundry coming soon.
- Customers store inputs/outputs in their own S3 or Google Cloud Storage; risks produce Safety Cases (no inputs/outputs) for customer review.
- Anthropic has no human review access to customer data.
- Pattern-level detection helps regulated industries (healthcare, finance) adopt Claude.
Category: feature update
Date: 2026-11-23
URL: https://claude.com/resources/articles/zero-data-retention-with-enterprise-frontier-safeguards

## The enterprise guide to securing coding agents
- Guide for security leaders on risks of running Claude Code at scale: prompt injection, credential leaks, privilege abuse.
- Two defense layers: judgment (alignment training, injection probes, auto mode classifier) and fixed boundaries (permission rules, hooks, sandboxing, egress allowlists).
- Auto mode is now the default starting mode for interactive sessions on every plan; Anthropic's own study: blocked 89% of dangerous test commands vs 13.6% by human reviewers (vendor-funded).
- Admins can enforce managed settings: hard-deny rules, mandatory sandboxing, approved domains.
- Includes six evaluation questions and a two-week pilot checklist.
Category: announcement
Date: 2026-11-23
URL: https://claude.com/resources/articles/enterprise-guide-to-securing-coding-agents

## Introducing Claude Ship
- System for handling PRs after opening: Code Review (GA), plus PR Steward and Claude Approvals (beta).
- `/ship` in Claude Code pushes a change, opens a PR, and works through review and failing checks.
- Admins enable per GitHub repo with review depth, timing, and spend limits; approval policy file in repo, with observe-only mode and human sign-off for sensitive changes.
- Anthropic reports on its Claude Code team merged PRs more than doubled June to September and reverted changes fell over 40%.
- Team/Enterprise on GitHub only; not for ZDR, HIPAA config, or customer-managed keys; billed by token usage.
Category: feature update
Date: 2026-11-23
URL: https://claude.com/resources/articles/introducing-claude-ship

## Linked billing on the Claude Platform
- Beta: third-party platforms can bill Claude API usage to a customer's existing Claude Platform org without sharing an API key.
- Customers link via hosted flow, approve each platform, set monthly spend limits, and can unlink in Console.
- Platforms see per-customer usage and choose per request who pays; no key storage/rotation needed.
- Customers can draw down existing commitments and see spend by platform.
- Tradeoff: requests run in the platform's org, so customer org settings (IP allowlists, encryption keys, retention) don't apply.
Category: feature update
Date: 2026-11-17
URL: https://claude.com/resources/articles/linked-billing-on-claude-platform

## Using a "chaos loop" to harden the Claude Docs launch: 60 server errors across billions of requests
- Claude Docs is a collaborative editor where people and Claude sessions edit live; a two-week "chaos loop" had Claude load-test a staging cluster, break components, and ship fixes.
- Found real issues: a large doc used about 3 GB per pod; copy-on-write cut it to about 180 MB, reducing estimated launch capacity from 500+ pods to about 50.
- Rust service with minimal vendored dependencies and no GC made memory causes traceable; hard-to-undo changes went to human approval.
- Launched Sept 16, 2026: 4.6M+ docs in a week, 2 billion requests, 60 server errors, no rollbacks.
- Author estimates about $125,000 inference cost; newer models holding goals over long runs made it practical.
Category: announcement
Date: 2026-11-17
URL: https://claude.dev/blog/chaos-loop-claude-docs-launch/
