## T. Rowe Price brings more of Claude to its investment process
- T. Rowe Price expands Claude use across its investment organization (portfolio management, research, tool development)
- Deploys Claude and Claude Cowork for research/knowledge-intensive tasks; developers use Claude Code to build investment tools
- Operates under new AI leadership model with governance in the Investments division and T. Rowe Price Labs
- Notable because deployment started with investment professionals ("people who pick the securities") rather than back office
- Human judgment remains central; AI increases analyst capacity for complex research evaluation
Category: announcement
Date: 2026-09-10
URL: https://claude.com/blog/t-rowe-price-brings-more-of-claude-to-its-investment-process

## What 1,000 small business owners taught us about AI
- Recap of Claude SMB Tour: free workshops in 10 US cities training 1,000+ small business owners on AI fluency and Claude Cowork
- Launches "Claude for Small Business," a Cowork plugin integrating QuickBooks, PayPal, HubSpot, etc.
- New "AI Fluency for Small Businesses" course (with PayPal) and a Claude SMB Trainer Program to scale training
- Part two of the SMB Tour starts fall 2026 in Boston (Sept 16)
- Key lessons: AI levels playing field for non-technical owners; data security is top concern; peer-based hands-on training works best
Category: announcement
Date: 2026-09-10
URL: https://claude.com/blog/what-1-000-small-business-owners-taught-us-about-ai

## Reducing cost and improving performance with Claude Platform
- Guidance on cutting Claude Platform costs without losing performance
- Three strategies: maximize prompt cache hit rates, remove outdated legacy prompt instructions when upgrading models, calibrate effort level to task
- New `claude-api` skill commands: `/claude-api prompt-audit`, `/claude-api hillclimb`, `/claude-api cost-optimize`
- Benchmarks show 52-73% cost savings possible; real-world case saw 14.6% cost cut + 5.3% accuracy gain
- Notes frontier models often make old "anti-pattern" prompting (verification rituals, scratchpads) unnecessary
Category: feature update
Date: 2026-09-08
URL: https://claude.com/blog/reducing-cost-and-improving-performance-with-claude-platform

## A guide to the anatomy of effective commerce agents
- Guide on building production-ready commerce agents with Claude, covering architecture, performance, and operations
- Releases a reference implementation ("blueprint") on GitHub
- Recommends single-agent architecture with skills instead of multiple subagents
- New patterns for memory, safety enforcement (in code, not prompts), and snapshot-based evaluation
- Enterprise customers report larger carts and more efficient seller operations; prompt caching gives 90-99% cache hit rates
Category: feature update
Date: 2026-09-02
URL: https://claude.com/blog/the-anatomy-of-effective-commerce-agents

## Building commerce agents with Claude
- Anthropic releases a blueprint for commerce agents: shopping agents (customers) and merchant agents (store operators)
- Covers retail, travel, telecom, ticketing; includes live demos, docs, and a Claude Code plugin
- Deployable via Claude API, Amazon Bedrock, Microsoft Foundry, or Google Cloud Vertex AI
- Backed by partners Shopify, Priceline, Visa, Mastercard, Accenture, and others
- Enterprise retailers report carts 35% larger and shoppers 60% more likely to complete purchases; repo at github.com/anthropics/commerce-agents
Category: announcement
Date: 2026-09-02
URL: https://claude.com/blog/claude-for-commerce-agents

## How Anthropic employees use Claude Tag
- Claude Tag is a Slack integration where employees @mention Claude to read thread context and complete tasks in Slack
- Showcases three internal workflows: marketing doc generation, cross-channel data consolidation, legal review acceleration
- Marketing: 15-message thread turned into a polished 2-page doc in 45 minutes
- Legal: pre-screening marketing assets cut review time from a full day to 30 minutes
- Demonstrates automating research/synthesis/review so employees focus on judgment-based work
Category: announcement
Date: 2026-08-28
URL: https://claude.com/blog/how-anthropic-employees-use-claude-tag

## Claude for Teachers, now available for U.S. K-12 schools and districts
- Claude for Teachers now offered as a free Enterprise offering for U.S. K-12 schools/districts, not just individual teachers
- Adds enterprise features: centralized admin accounts, SSO, role-based access, domain claiming
- Orgs that sign up by June 30, 2027 get one year free; includes FERPA-aligned terms and student data protection agreements
- Adds two new teaching skills (lesson prep, check for understanding) and accessibility improvements
- Updated Claude for K-12 Academy with free AI fluency content
Category: feature update
Date: 2026-08-28
URL: https://claude.com/blog/claude-for-teachers-now-available-for-schools-and-districts

## How Warp builds self-improving agents on Claude
- Warp (AI terminal, 800K monthly developers) built a self-improving agent pattern using Claude Platform's Agent Skills
- Two-skill architecture: base skill (domain knowledge) + "improver" skill that refines the base skill from human feedback
- Addresses agents producing noisy/unhelpful outputs that don't improve over time
- Scales to thousands of code reviews using specialized agents (triage, review, spec-writing); updates flow through normal code review, keeping humans in control
- Warp runs 400K+ Claude Code sessions weekly and 40M total agent conversations to date
Category: announcement
Date: 2026-08-26
URL: https://claude.com/blog/how-warp-builds-self-improving-agents-on-claude

## Claude in Chrome is generally available
- Claude in Chrome browser extension moves from pilot to general availability on all paid plans
- Lets Claude access and act on websites (including internal/legacy tools without APIs), now with autonomous actions instead of per-step approval
- New safeguards: improved model training, content-screening probes, action verification classifiers
- Testing shows 0% attack success rate against prompt injection with Sonnet 5/Opus 5 and full protections enabled
- Enterprise admins can restrict usage to approved domains via Organization Settings
Category: feature update
Date: 2026-08-26
URL: https://claude.com/blog/claude-in-chrome-generally-available

## Claude gets its own browser in Cowork
- Claude Cowork adds a built-in browser separate from the user's personal browser (no access to personal tabs/bookmarks/passwords)
- Previously web tasks required the Claude in Chrome extension; now Claude can handle web tasks independently
- Rolling out this week to Pro, Max, and Team desktop users; available now for Enterprise
- Available on macOS, Windows, and Linux (beta); banking/SSO sites excluded by default for safety
- Same prompt-injection safeguards as Claude in Chrome; admins manage via Organization settings
Category: feature update
Date: 2026-08-26
URL: https://claude.com/blog/cowork-built-in-browser
