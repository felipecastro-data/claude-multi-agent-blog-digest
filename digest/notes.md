## Turn artifacts into Mac and Windows apps
- Artifacts can be installed as desktop apps on Mac and Windows via "Install as app" (beta)
- Apps get own icon and window, notifications, menu bar/system tray items, auto-update when the artifact is edited
- Three permission levels: browser-equivalent (default), app permissions, full computer access (only for apps you or your org made; re-asks after each update)
- Artifacts become everyday work tools; usage counts toward plan limits
- Beta rollout
Category: feature update
Date: 2026-11-24
URL: https://claude.com/resources/articles/install-as-app

## MCP servers can now ship skills, run tasks, and more with Claude
- Skills over MCP (public beta): servers publish skills with tools; Claude loads on demand; updates with server
- Tasks and Elicitation (GA): background long jobs; servers can pause to ask user input/approval
- File Uploads rolling out soon: send PDFs, spreadsheets, images to servers without using context window
- Part of open MCP spec, so should work in any compatible client
- Developers can add support to plugins now
Category: feature update
Date: 2026-11-24
URL: https://claude.com/resources/articles/skills-over-mcp-tasks-and-more

## KPMG's Todd Lohr on AI when your data is also your clients' data
- Interview with Todd Lohr, KPMG US Vice Chair, on adopting frontier AI while protecting client data
- KPMG integrated Claude into its Digital Gateway tax platform ("Digital Gateway Powered by Claude")
- KPMG had early access to Enterprise Frontier Safeguards (now public beta), compatible with zero data retention
- Regulated firms keep client data in infrastructure they control while using frontier models
- Lohr: adopt and secure AI simultaneously; "wait and see" is unsustainable
Category: announcement
Date: 2026-11-23
URL: https://claude.com/resources/articles/kpmg-todd-lohr-on-ai-when-your-data-is-also-your-clients-data

## Zero data retention with Enterprise Frontier Safeguards is now in beta
- Enterprise Frontier Safeguards (EFS) detects sophisticated misuse while keeping zero data retention intact
- Moved from private beta (100+ customers) to public beta; eligible customers get setup instructions
- Monitors misuse patterns across many requests; creates Safety Cases for review excluding inputs/outputs; analysis runs on data in customer's cloud storage
- Helps regulated and security-sensitive orgs keep data custody
- Works on Claude Platform, Claude Platform on AWS, Bedrock, Claude on Google Cloud; Microsoft Foundry coming soon
Category: feature update
Date: 2026-11-23
URL: https://claude.com/resources/articles/zero-data-retention-with-enterprise-frontier-safeguards

## The enterprise guide to securing coding agents
- Guide for security/technical leaders on securing Claude Code on Team and Enterprise plans
- Covers six evaluation questions, four risks (credential leakage, unvetted dependencies, data exfiltration, prompt injection), layered controls (sandboxing, permission rules, managed settings)
- Auto mode is now default starting mode for interactive Claude Code sessions on all plans; headless, Agent SDK, HIPAA default to manual
- Enterprise plans gained skill and plugin scanning for malicious content
- Suggests piloting on a low-sensitivity repo before expanding
Category: announcement
Date: 2026-11-23
URL: https://claude.com/resources/articles/enterprise-guide-to-securing-coding-agents

## Introducing Claude Ship
- Beta system taking a PR through review, fixes, and approval; combines Code Review (GA) with new PR Steward and Claude Approvals agents
- PR Steward fixes failing CI, merge conflicts, reviewer feedback (does not approve/merge)
- Claude Approvals applies a team-written policy file to approve routine changes or require human sign-off; `/ship` in Claude Code
- Available on Team and Enterprise for GitHub repos; token-billed
- Not available with ZDR, HIPAA configuration, or customer-managed encryption keys
Category: feature update
Date: 2026-11-23
URL: https://claude.com/resources/articles/introducing-claude-ship

## Linked billing on the Claude Platform
- Beta: third-party platforms can bill customers' Claude API usage without sharing an API key
- Customers link their Claude Platform org, approve each platform, set spend limit, can unlink anytime
- Platforms no longer store/rotate keys or build own metering; can choose per request who pays
- Gives customers spend visibility by platform
- Caveat: requests run in the platform's org, so customer IP allowlists, encryption keys, retention settings don't apply
Category: feature update
Date: 2026-11-17
URL: https://claude.com/resources/articles/linked-billing-on-claude-platform

## Using a "chaos loop" to harden the Claude Docs launch: 60 server errors across billions of requests
- Claude Docs (collaborative editor for people and Claude sessions) launched Sept 16, 2026
- Claude ran a "chaos loop" on staging: injected load/failures, read Datadog telemetry, shipped fixes; humans approved irreversible changes
- Found keystroke copying causing ~3 GB doc memory; copy-on-write cut to ~180 MB, launch need from 500+ pods to ~50
- Results: ~2B requests, 60 server errors, no rollback, 4.6M docs by Sept 22; inference cost ~$125,000
- Newer models can hold one goal across weeks of long-running work
Category: announcement
Date: 2026-11-17
URL: https://claude.dev/blog/chaos-loop-claude-docs-launch/

## How the Claude Code team thinks about verification
- Addy Osmani post on verifying agent-written code; ~90% of team's code is written and reviewed by Claude
- Prioritizes end-to-end tests, plus property tests and differential tests
- Practices: `verify` skill in `.claude/skills/`, 39-item diff-triggered reliability checklist, tests/build/lint before PR, human escalation after three failed rounds, REVIEW.md read from base branch
- Commit gates (off/observe/enforce); flaky tests deleted and documented, not retried
- Separate grader improved task success up to 10 points; dev role shifts to defining "done"
Category: announcement
Date: 2026-11-16
URL: https://claude.dev/blog/how-the-claude-code-team-thinks-about-verification/

## Building strong safety evaluations
- Anthropic guide with recommendations for building, running, and reporting AI safety evals
- Match design to the question and measure the right construct; favor multi-turn simulations since single-turn tests are near saturated (94-98% harmless)
- Validate LLM graders against human experts, preregister analyses, use large samples, report confidence intervals
- Document full config: one model's appropriate-response rate differed up to 34 points between API and claude.ai
- Weak evals can make models look safer than they are
Category: announcement
Date: 2026-11-13
URL: https://www.anthropic.com/research/building-strong-safety-evaluations
