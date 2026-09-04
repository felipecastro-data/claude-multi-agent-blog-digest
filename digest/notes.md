## A guide to the anatomy of effective commerce agents
- Comprehensive guide for engineers building production-ready commerce agents on Claude
- Covers architecture, performance optimization, and production operations
- Released a reference implementation (blueprint) for commerce agents on GitHub
- Recommends single agent with skills over one-prompt-for-everything or subagent designs; better quality, lower cost/latency
- Stresses solid engineering (system integration, eval suites, code-enforced safety) over raw model capability
Category: announcement
Date: 2026-09-02
URL: https://claude.com/blog/the-anatomy-of-effective-commerce-agents

## Building commerce agents with Claude
- Anthropic launched a blueprint for building commerce agents (shopping and merchant agents) on Claude
- Includes harnesses, patterns, guardrails, reference implementations, live demos, and a Claude Code plugin
- Available on GitHub; deployable via Claude API, Amazon Bedrock, Microsoft Foundry, and Google Cloud Vertex AI
- Enterprise retailers report carts up to 35% larger and 60% higher purchase completion likelihood
- Reduces commerce agent setup time from days to hours; supports multi-item requests, personalization, comparisons, integrated customer service
Category: feature update
Date: 2026-09-02
URL: https://claude.com/blog/claude-for-commerce-agents

## How Anthropic employees use Claude Tag
- Showcases internal workflows using Claude Tag (Claude integrated into Slack)
- Marketing manager turned a 15-message Slack thread into a review-ready doc in 45 minutes
- Product ops team used Claude to search Slack history and consolidate feature requests/incident reports, saving a week of manual work
- Legal team set up a Slack channel where Claude pre-screens marketing assets for compliance, cutting review time from a day to 30 minutes
- Illustrates shifting time from information synthesis to higher-judgment work
Category: announcement
Date: 2026-08-28
URL: https://claude.com/blog/how-anthropic-employees-use-claude-tag

## Claude for Teachers, now available for U.S. K-12 schools and districts
- Claude for Teachers now offered as a free Enterprise option for U.S. K-12 schools/districts
- Enables centralized management of educator accounts: SSO, role-based access controls
- Qualifying orgs signing up by June 30, 2027 get a full year free
- Added two new teaching skills: lesson preparation and check for understanding (math)
- Includes FERPA-aligned commitments and a K-12 Data Processing Agreement for student data protection
Category: feature update
Date: 2026-08-28
URL: https://claude.com/blog/claude-for-teachers-now-available-for-schools-and-districts

## How Warp builds self-improving agents on Claude
- Warp built self-improving agents using Claude's Skills framework
- Uses paired skills: an inner "base skill" doing the task and an outer "improver skill" refining it from human feedback
- Skills are file-based, so updates go through normal code review, keeping humans in control
- Addresses plateauing agent accuracy by institutionalizing continuous feedback loops
- Deployed across Warp's repo for spec-writing, review, and triage agents at scale
Category: feature update
Date: 2026-08-26
URL: https://claude.com/blog/how-warp-builds-self-improving-agents-on-claude

## Claude in Chrome is generally available
- Claude in Chrome extension now GA on all paid Claude plans
- Lets Claude act autonomously in-browser (click, type, navigate) without per-action approval
- New safety classifier validates actions before execution
- Deployed defenses against prompt injection: enhanced training, content-scanning "probes," automated intent verification
- Latest safeguards reduced injection attack success rate to 0% (from 17.6% on earlier versions) for Sonnet 5/Opus 5
Category: feature update
Date: 2026-08-26
URL: https://claude.com/blog/claude-in-chrome-generally-available

## Claude gets its own browser in Cowork
- Claude Cowork desktop app now includes a dedicated, built-in browser separate from the user's personal browser
- Previously web access required the Claude in Chrome extension tied to the user's own browser session
- Users can optionally import logins from Chrome, Edge, or Firefox; banking/SSO sites excluded by default
- Improves privacy: delegate web tasks without exposing browsing habits, bookmarks, or credentials
- Includes prompt-injection safeguards; rolling out this week to Pro, Max, and Team plans
Category: feature update
Date: 2026-08-26
URL: https://claude.com/blog/cowork-built-in-browser
