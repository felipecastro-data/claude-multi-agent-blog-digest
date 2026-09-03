## A guide to the anatomy of effective commerce agents
- Comprehensive guide to building commerce agents with Claude, covering architecture, optimization, and production deployment
- Introduces reference implementation blueprint (anthropics/commerce-agents) with reusable patterns and guardrails for retail, travel, telecom, ticketing
- Key techniques: UI components as tools (not custom markup), skills instead of subagents to preserve context, aggressive prompt caching (90-99% hit rates)
- Emphasizes enforcing safety through the harness rather than prompts alone
- Helps engineering teams avoid pitfalls balancing quality, latency, and cost for customer-facing checkout flows
Category: announcement
Date: 2026-09-02
URL: https://claude.com/blog/the-anatomy-of-effective-commerce-agents

## Building commerce agents with Claude
- Anthropic launches commerce agents blueprint enabling retailers, marketplaces, and travel companies to build AI shopping assistants
- Includes reference implementations for customer-facing shopping agents and merchant-focused management agents
- Deployable via Claude API, Amazon Bedrock, Microsoft Foundry, or Google Cloud Vertex AI; includes Claude Code plugin for customization
- Early enterprise users report carts up to 35% larger and 60% higher purchase completion likelihood
- Some teams deployed working agents in under an hour; validated by partners Shopify, Priceline, Visa, Mastercard
Category: announcement
Date: 2026-09-02
URL: https://claude.com/blog/claude-for-commerce-agents

## How Anthropic employees use Claude Tag
- Showcases three real-world examples of employees using Claude Tag, a Slack integration to @-mention Claude for tasks
- Can be scoped to specific channel access and learns from feedback over time
- Can spot issues for legal review (e.g., unsubstantiated marketing claims) and verify facts in real time
- One employee consolidated a week's worth of product feedback in 50 minutes vs. a week of manual work
- Reduces turnaround times from days to minutes across marketing, sales ops, and legal review
Category: announcement
Date: 2026-08-28
URL: https://claude.com/blog/how-anthropic-employees-use-claude-tag

## Claude for Teachers, now available for U.S. K-12 schools and districts
- Claude for Teachers expands from individual educators to a free Enterprise offering for U.S. K-12 schools/districts
- Adds centrally managed accounts with SSO and role-based access controls
- Two new teaching skills: lesson preparation and check-for-understanding (math focus initially), plus improved accessibility
- Updated Claude for K-12 Academy with free AI fluency content; pilot with Detroit Public Schools Community District
- FERPA-aligned privacy protections; orgs signing up by June 30, 2027 get a full year free
Category: feature update
Date: 2026-08-28
URL: https://claude.com/blog/claude-for-teachers-now-available-for-schools-and-districts

## How Warp builds self-improving agents on Claude
- Warp (AI terminal company) built a self-improving agent framework using Claude's Agent Skills
- Two-skill architecture: inner skill holds domain knowledge, outer "improver" skill observes feedback and proposes refinements
- Updates flow through standard code review, keeping humans in control
- Demonstrated via GitHub issue triage agents that learned from maintainer feedback to label more accurately
- Addresses the drop-off from ~80% accuracy agents by building feedback loops in from the start; compounds across orgs
Category: announcement
Date: 2026-08-26
URL: https://claude.com/blog/how-warp-builds-self-improving-agents-on-claude

## Claude in Chrome is generally available
- Claude in Chrome moves from pilot to general availability across all paid Claude plans
- Enables Claude to autonomously read pages, fill forms, navigate sites, and approve safe actions without per-action manual approval
- Three-layer defense against prompt injection: improved model training, content-screening probes, and action classifiers verifying intent
- Red-team testing shows 0% attack success rate for Sonnet 5 and Opus 5 with safeguards enabled
- Expands Claude's utility to tools without direct integrations (internal dashboards, legacy systems, vendor portals)
Category: feature update
Date: 2026-08-26
URL: https://claude.com/blog/claude-in-chrome-generally-available

## Claude gets its own browser in Cowork
- Claude Cowork now includes a built-in browser, separate from the user's personal browser
- Claude can autonomously fill forms and extract data from portals without accessing personal browser data
- Users can optionally import logins from Chrome, Edge, or Firefox
- "Claude never sees your tabs, bookmarks, or passwords" — isolates web activity for privacy/security
- Rolling out this week to Pro, Max, and Team plans; available immediately for Enterprise
Category: feature update
Date: 2026-08-26
URL: https://claude.com/blog/cowork-built-in-browser

## Bain & Company joins the Claude Partner Network as a Global Premier partner
- Bain & Company becomes a Global Premier partner in the Claude Partner Network
- Bain rolled out Claude to all 19,000 employees across Claude.ai, Claude Code, and Claude for Microsoft 365
- Over 7,000 Bain employees actively using Claude within a few weeks of rollout
- Client engagements involving legacy code saw productivity gains of 30-50%
- Bain's 1,500+ AI and engineering experts will help enterprises move from experimentation to measurable deployments
Category: announcement
Date: 2026-08-25
URL: https://claude.com/blog/bain-company-joins-the-claude-partner-network-as-a-global-premier-partner

## Claude's memory works everywhere, and you decide what's in it
- Unified memory system now syncs consistently across Claude chat and Claude Cowork
- Memory updates in real time as users chat, rather than only after conversations end
- Transparent interface lets users view, edit, and delete saved memories
- Sensitive topics (health, beliefs, etc.) excluded from memory by default, optionally enabled
- Available by default on Free, Pro, and Max plans across web, desktop, and mobile
Category: feature update
Date: 2026-08-25
URL: https://claude.com/blog/claudes-memory-works-everywhere-and-you-decide-whats-in-it

## How an Anthropic field marketer uses Claude Code to send weekly personalized updates to every sales rep
- Field marketer Adam Ward automated personalized weekly sales briefings delivered via Slack using Claude Code
- Generates individualized Monday morning digests per rep based on their specific accounts
- Pulls data from BigQuery, HubSpot, Clay, and Salesforce; includes tailored events, content, and webinars
- Expanded from one pilot sales team to BDRs, customer success, and alliance teams
- Doubled executive dinner registrations; shows non-technical staff can build scalable AI workflows via plain-language prompts
Category: announcement
Date: 2026-08-24
URL: https://claude.com/blog/how-an-anthropic-field-marketer-uses-claude-code-to-send-weekly-personalized-updates-to-every-sales-rep
