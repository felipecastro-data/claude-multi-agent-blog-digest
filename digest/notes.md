## A guide to the anatomy of effective commerce agents
- Guide on building production-ready commerce agents with Claude
- Introduces open-source "commerce agents" blueprint repo with reference implementations
- Covers consumer- and merchant-facing agents for retail, travel, telecom, ticketing
- Recommends single agent with modular skills over per-domain subagents; agent skills outperformed one-prompt and subagent designs on quality, cost, latency
- Stresses safety enforcement via code (not just prompts), persistent memory, and evaluation frameworks given financial stakes
Category: announcement
Date: 2026-09-02
URL: https://claude.com/blog/the-anatomy-of-effective-commerce-agents

## Building commerce agents with Claude
- Anthropic released a commerce agents blueprint (github.com/anthropics/commerce-agents), available now
- Includes reference implementations for Messages API, Agent SDK, and Claude Managed Agents
- Covers shopping and merchant agents across retail, travel, telecom, ticketing; includes live demos and engineering docs
- Compatible with Claude API, Amazon Bedrock, Microsoft Foundry, Google Cloud Vertex AI
- Partners (Shopify, Priceline, Accenture, Mastercard, Visa) support it; retailers report carts up to 35% larger, 60% higher purchase completion
Category: announcement
Date: 2026-09-02
URL: https://claude.com/blog/claude-for-commerce-agents

## How Anthropic employees use Claude Tag
- Showcases internal use of Claude Tag (Slack integration) across departments
- Marketing: condensed a 15-message thread into a polished doc in 45 minutes with fact verification
- Sales ops: searched Slack to compile customer feature requests in 26 minutes vs. a week manually
- Legal: pre-screens marketing assets for unsubstantiated claims, cutting review time from a full day to 30 minutes
- Demonstrates time savings from automating research/synthesis so staff focus on judgment calls
Category: announcement
Date: 2026-08-28
URL: https://claude.com/blog/how-anthropic-employees-use-claude-tag

## Claude for Teachers, now available for U.S. K-12 schools and districts
- Expands Claude for Teachers to U.S. K-12 schools/districts as a free Enterprise offering
- Enables centrally managed orgs with SSO and role-based access controls (shift from individual verification to district-level admin)
- Adds two new teaching skills: "Lesson preparation" and "Check for understanding"
- Adds accessibility upgrades for student-facing materials and updates K-12 Academy curriculum resources
- Maintains FERPA compliance; student data not used for model training
Category: feature update
Date: 2026-08-28
URL: https://claude.com/blog/claude-for-teachers-now-available-for-schools-and-districts

## How Warp builds self-improving agents on Claude
- Explains Warp's (AI terminal) framework for self-improving agents built on Claude Agent Skills
- Uses two-skill architecture: an inner skill (domain knowledge) plus an outer "improver" skill that observes feedback and proposes refinements
- Lets agents learn from accumulated user feedback instead of relying on static prompts
- Skills are versioned files that flow through standard code-review workflows
- Addresses agent quality degradation over time from unaddressed errors
Category: announcement
Date: 2026-08-26
URL: https://claude.com/blog/how-warp-builds-self-improving-agents-on-claude

## Claude in Chrome is generally available
- Claude in Chrome extension now GA on all paid Claude plans
- Lets Claude view and act on websites without direct integrations (internal dashboards, legacy systems, vendor portals) using existing credentials
- New: Claude can auto-approve actions it determines safe via a safety classifier, instead of requiring approval every time
- Reports 0% prompt-injection attack success against Claude Sonnet 5/Opus 5 in testing, down from 17.6% in earlier versions
- Signals improved security maturity enabling enterprise browser automation
Category: feature update
Date: 2026-08-26
URL: https://claude.com/blog/claude-in-chrome-generally-available

## Claude gets its own browser in Cowork
- Claude Cowork adds a built-in browser separate from the user's personal browser
- Rolling out week of Aug 26, 2026 to Pro, Max, and Team users on desktop app
- Users can import logins from Chrome/Edge/Firefox; banking and SSO sites excluded by default
- Claude never sees user's tabs, bookmarks, or passwords; keeps browsing environment isolated
- Runs same prompt-injection safeguards as Claude in Chrome
Category: feature update
Date: 2026-08-26
URL: https://claude.com/blog/cowork-built-in-browser

## Bain & Company joins the Claude Partner Network as a Global Premier partner
- Anthropic and Bain & Company announce global partnership; Bain named Global Premier partner
- Bain deployed Claude across its ~19,000 employees, now advising clients using that internal experience
- Partnership formalizes collaboration on AI strategy, tech modernization, AI-enabled operations
- Combines Bain's 1,500+ AI/analytics experts with Claude technology
- Early client work shows 30-50% productivity gains on legacy code modernization projects
Category: announcement
Date: 2026-08-25
URL: https://claude.com/blog/bain-company-joins-the-claude-partner-network-as-a-global-premier-partner

## Claude's memory works everywhere, and you decide what's in it
- Unified memory system now syncs across Claude chat and Claude Cowork
- Claude saves conversation topics to memory in real-time (not just after sessions end)
- New transparent "Topics" interface lets users view, edit, delete saved memories
- Sensitive topics (health, beliefs, identity) excluded by default, opt-in available
- Reduces need to re-explain context/preferences across chat and Cowork work sessions
Category: feature update
Date: 2026-08-25
URL: https://claude.com/blog/claudes-memory-works-everywhere-and-you-decide-whats-in-it

## How an Anthropic field marketer uses Claude Code to send weekly personalized updates to every sales rep
- Field marketer Adam Ward automated weekly sales briefings using Claude Code
- System pulls data from BigQuery, CRM, and Slack to generate personalized Slack digests per rep
- Expanded from one sales team to account executives, BDRs, customer success, and alliance teams
- Replaced a manual, time-consuming Sunday process with a scalable automated solution
- Doubled registrations for an executive dinner in a week by surfacing the right event to the right reps; emphasizes non-technical marketers can build this ("explain, don't code")
Category: announcement
Date: 2026-08-24
URL: https://claude.com/blog/how-an-anthropic-field-marketer-uses-claude-code-to-send-weekly-personalized-updates-to-every-sales-rep
