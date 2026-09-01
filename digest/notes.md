## How Anthropic employees use Claude Tag
- Claude Tag brings Claude into Slack, picking up thread context and posting answers back inline
- Marketing: turned a messy 15-message thread into a polished 2-page doc in 45 minutes
- Product ops: found 24 relevant customer accounts with feature requests in 26 minutes (vs a week manually)
- Legal: cut marketing-asset review turnaround from a day+ to ~30 minutes using a dedicated review channel
- Shows pattern of Claude handling synthesis while humans retain judgment/accuracy calls
Category: announcement
Date: 2026-08-28
URL: https://claude.com/blog/how-anthropic-employees-use-claude-tag

## Claude for Teachers, now available for U.S. K-12 schools and districts
- Claude for Teachers expands from individual verified teachers to a free Enterprise offering for schools/districts
- Adds school/district-level K-12 Terms and Data Processing Agreement (FERPA-aligned)
- New enterprise features: SSO, role-based access controls, org-wide adoption tracking
- Introduces two new teaching skills: lesson preparation and check-for-understanding (math focus)
- Claude for Teachers data is not used for model training
Category: feature update
Date: 2026-08-28
URL: https://claude.com/blog/claude-for-teachers-now-available-for-schools-and-districts

## How Warp builds self-improving agents on Claude
- Warp (AI terminal company) built a two-skill architecture for self-improving Claude agents
- "Inner skill" holds domain knowledge; "outer improver skill" observes feedback and proposes refinements
- Skills are file-based, so updates go through standard code-review workflows
- Addresses the common problem that initial agent prompts only reach ~80% accuracy
- Pattern applied simultaneously across Warp's spec-writing, code-review, and issue-triage agents
Category: announcement
Date: 2026-08-26
URL: https://claude.com/blog/how-warp-builds-self-improving-agents-on-claude

## Claude in Chrome is generally available
- Claude in Chrome browser extension now available to all paid Claude plan users
- Now supports autonomous action-taking (read pages, fill forms, click links) without per-task manual approval
- Safety classifier validates actions before execution
- Strengthened prompt-injection defenses: adversarial training, content-screening probes, automatic action verification
- Red-team testing shows 0% attack success rate for Opus and Sonnet with safeguards enabled
Category: feature update
Date: 2026-08-26
URL: https://claude.com/blog/claude-in-chrome-generally-available

## Claude gets its own browser in Cowork
- Claude Cowork now has a built-in browser, separate from the "Claude in Chrome" extension
- Rolling out this week to Pro, Max, and Team plans on macOS, Windows, and Linux (beta)
- Claude never sees user's tabs, bookmarks, or passwords; browsing is fully separate from personal browser
- Optional credential import from Chrome, Edge, or Firefox; same prompt-injection safeguards as Claude in Chrome
- Users can still choose Claude in Chrome for pages they're already viewing; default/preference set in Settings
Category: feature update
Date: 2026-08-26
URL: https://claude.com/blog/cowork-built-in-browser

## Bain & Company joins the Claude Partner Network as a Global Premier partner
- Anthropic and Bain & Company announced a strategic partnership for enterprise AI deployment
- Bain joins Claude Partner Network as a Global Premier partner
- Focus areas: AI strategy, technology modernization, AI-enabled operations
- Bain deployed Claude to all 19,000 employees; 7,000+ actively using it within weeks
- Combined offering targets 30-50% productivity gains on complex legacy code modernization
Category: announcement
Date: 2026-08-25
URL: https://claude.com/blog/bain-company-joins-the-claude-partner-network-as-a-global-premier-partner

## Claude's memory works everywhere, and you decide what's in it
- Memory now works consistently across Claude chat and Claude Cowork, updating in real-time during conversations
- Users can view, edit, and delete individual memory topics via Settings
- Sensitive topics (health, political beliefs) excluded by default; users can opt in
- Never stores ID numbers, criminal history, or policy-violating content, even with sensitive topics enabled
- Eliminates repeated re-briefing across Claude products (e.g., metrics defined once in chat carry into Cowork outputs)
Category: feature update
Date: 2026-08-25
URL: https://claude.com/blog/claudes-memory-works-everywhere-and-you-decide-whats-in-it

## How an Anthropic field marketer uses Claude Code to send weekly personalized updates to every sales rep
- Field marketer Adam Ward automated weekly personalized sales briefings using Claude Code
- Replaced manual Sunday-night slide creation with automated Monday Slack digests
- Pulls data from BigQuery, HubSpot, Clay, and Salesforce for AEs, BDRs, CS, and alliance managers
- Resulted in measurable gains, including doubled registrations for an executive dinner in a week
- Best practices: start small with existing manual processes, use plain language, pilot with committed groups, iterate via feedback
Category: announcement
Date: 2026-08-24
URL: https://claude.com/blog/how-an-anthropic-field-marketer-uses-claude-code-to-send-weekly-personalized-updates-to-every-sales-rep
