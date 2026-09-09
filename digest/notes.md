## Reducing cost and improving performance with Claude Platform
- Guidance on cutting Claude Platform costs without sacrificing performance
- Three strategies: maximize prompt cache hit rates, remove outdated prompting anti-patterns on model upgrades, calibrate the "effort" parameter per task
- New `claude-api` skill commands: `/claude-api prompt-audit`, `/claude-api hillclimb`, `/claude-api cost-optimize`
- Addresses "verification rituals" and emphasis boosters that waste tokens on advanced models
- Real-world benchmarks show 50-73% cost reductions while maintaining or improving accuracy
Category: feature update
Date: 2026-09-08
URL: https://claude.com/blog/reducing-cost-and-improving-performance-with-claude-platform

## A guide to the anatomy of effective commerce agents
- Blueprint/guide for building commerce agents with Claude
- Recommends single agent with skills over one-prompt-for-everything or subagent designs; outperforms on quality, cost, latency
- Covers optimization (latency, cost, caching) and production concerns (memory, safety, evals)
- Introduces asynchronous memory extraction and server-staged writes requiring approval before execution
- Provides eval practices tailored to non-deterministic agent systems; supports multi-team scaling within one context window
Category: announcement
Date: 2026-09-02
URL: https://claude.com/blog/the-anatomy-of-effective-commerce-agents

## Building commerce agents with Claude
- Anthropic launched a commerce blueprint for shopping and merchant agents on GitHub
- Reference implementations across retail, travel, telecom, ticketing verticals
- Integration points for catalogs, carts, checkout, customer service, plus a Claude Code plugin for customization
- Compatible with Claude API, Amazon Bedrock, Microsoft Foundry, and Google Cloud Vertex AI
- Reported business impact: carts up to 35% larger, 60% higher purchase completion; rapid setup (under an hour)
Category: announcement
Date: 2026-09-02
URL: https://claude.com/blog/claude-for-commerce-agents

## How Anthropic employees use Claude Tag
- Showcases internal use of Claude Tag, which brings Claude into Slack conversations
- Marketing: turned a 15-message thread into a fact-checked marketing doc in 45 minutes
- Product strategy: compiled 24 customer feature requests with Slack links in ~26 minutes
- Legal: Claude pre-screens marketing assets before human review, cutting turnaround from a day to 30 minutes
- Illustrates shifting human focus to judgment calls over manual info-gathering
Category: announcement
Date: 2026-08-28
URL: https://claude.com/blog/how-anthropic-employees-use-claude-tag

## Claude for Teachers, now available for U.S. K-12 schools and districts
- Claude for Teachers now offered as a free enterprise product for U.S. K-12 schools/districts
- Centrally managed accounts with SSO and role-based access controls
- New teaching skills added: lesson preparation, check for understanding (math-focused)
- Accessibility improvements to student-facing materials; free AI fluency content via Claude for K-12 Academy
- Pilot evaluation launching this fall with Detroit Public Schools Community District; maintains FERPA compliance
Category: feature update
Date: 2026-08-28
URL: https://claude.com/blog/claude-for-teachers-now-available-for-schools-and-districts

## How Warp builds self-improving agents on Claude
- Warp (AI terminal company) built a self-improving agent framework using Claude Agent Skills
- Two-skill architecture: inner "base skill" with functional instructions, outer "improver skill" that observes feedback and refines instructions
- Demonstrated via Warp's GitHub issue triage agent, now deployed across their open-source repo
- Addresses persistence problem: feedback usually disappears when a session ends
- Enables agents to compound improvements over time rather than remain static
Category: announcement
Date: 2026-08-26
URL: https://claude.com/blog/how-warp-builds-self-improving-agents-on-claude

## Claude in Chrome is generally available
- Claude in Chrome extension now generally available on all paid Claude plans
- Lets Claude read pages and take actions (click, type, fill forms) on sites without direct integrations
- New autonomous action capability: safety classifier auto-approves safe actions matching user's request, reducing per-action approval prompts
- Strengthened prompt-injection defenses: enhanced model training, content-scanning "probes," and action verification classifiers
- Testing showed zero successful prompt-injection attacks against Claude Sonnet 5 and Opus 5 with safeguards enabled
Category: feature update
Date: 2026-08-26
URL: https://claude.com/blog/claude-in-chrome-generally-available

## Claude gets its own browser in Cowork
- Claude Cowork now has a built-in browser separate from the user's personal browser
- Lets Claude independently navigate sites and complete web tasks (e.g., research, collecting invoices)
- Rolling out this week to Pro, Max, and Team plans; enterprise available immediately
- Optional login import from Chrome, Edge, or Firefox; banking and SSO sites excluded by default for security
- Complements existing Claude in Chrome extension, giving users a choice of tools; "Claude never sees your tabs, bookmarks, or passwords"
Category: feature update
Date: 2026-08-26
URL: https://claude.com/blog/cowork-built-in-browser
