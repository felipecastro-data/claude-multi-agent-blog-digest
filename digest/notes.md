## T. Rowe Price brings more of Claude to its investment process
- T. Rowe Price expanded Claude across its investment organization: portfolio management, research, and tool development
- Analysts use Claude Cowork to synthesize research; teams use it for multi-step, knowledge-intensive processes requiring consistency
- Developers use Claude Code to build investment-supporting applications/tools
- Unusual for enterprise AI: firm started with core investment decision-makers ("people who pick the securities") rather than back-office
- Human judgment and accountability remain central; operates under AI leadership model established in August
Category: announcement
Date: 2026-09-10
URL: https://claude.com/blog/t-rowe-price-brings-more-of-claude-to-its-investment-process

## What 1,000 small business owners taught us about AI
- Anthropic's Claude SMB Tour ran free workshops across 10 US cities, training 1,000+ small business owners on AI
- Followed launch of Claude for Small Business (Cowork plugin integrating QuickBooks, PayPal) and an AI Fluency course
- Small businesses generate 44% of US GDP but have been underserved by enterprise-focused AI resources
- Key lessons: non-technical owners can build custom tools; accuracy and data-security concerns dominate; hands-on guided practice drives adoption; peer stories matter more than features
- Reinforces Anthropic's push to make frontier AI accessible to small/mid-market businesses
Category: announcement
Date: 2026-09-10
URL: https://claude.com/blog/what-1-000-small-business-owners-taught-us-about-ai

## Reducing cost and improving performance with Claude Platform
- Guide on cutting Claude API costs without losing performance via prompt caching, removing outdated instructions, and calibrating effort levels
- New Claude Code commands introduced: /claude-api prompt-audit, /claude-api cost-optimize, /claude-api hillclimb
- Removing prompting anti-patterns (excessive verification/thoroughness instructions) improved accuracy by 5.3% while cutting costs 14.6%
- Newer models at lower effort settings often beat older models working harder, at much lower cost
- Testing across four benchmarks showed 52-73% cost reductions while maintaining performance; one example went from 78.6% accuracy at baseline cost to 90.5% accuracy at one-fifth the cost
Category: feature update
Date: 2026-09-08
URL: https://claude.com/blog/reducing-cost-and-improving-performance-with-claude-platform

## A guide to the anatomy of effective commerce agents
- Deep-dive guide on building production-ready commerce agents with Claude, based on learnings from enterprise commerce partners
- Architecture: use "skills, not subagents" — one model with modular skills beats domain-specific subagents on quality, cost, latency; turn UI components into typed tools
- Performance: prompt caching at 90-99% hit rates is the biggest cost lever; eager tool dispatch cuts multi-second delays to hundreds of ms
- Safety: "the model stages; a person applies" — no financial transactions without human approval; sanitize third-party content before the model sees it
- Memory: store long-term facts in databases (not markdown), extract asynchronously, enforce deterministic retention/deletion controls
Category: announcement
Date: 2026-09-02
URL: https://claude.com/blog/the-anatomy-of-effective-commerce-agents

## Building commerce agents with Claude
- Anthropic released an open-source blueprint/repo for building AI shopping (customer-facing) and merchant (staff-facing) agents with Claude
- Includes live demos and a Claude Code plugin; partners Shopify, Priceline, Visa already building with it
- Enterprise results: carts up to 35% larger, shoppers 60% more likely to complete purchase; agents deployed "in under an hour" by some partner engineers
- Shopping agent: catalog search, remembers preferences, in-chat product display, multi-item handling, customer service
- Merchant agent: sales analysis, inventory management, pricing/promo recommendations, marketing drafts; available via Claude API, Bedrock, Microsoft Foundry, Vertex AI; backed by Accenture, Mastercard, Visa
Category: feature update
Date: 2026-09-02
URL: https://claude.com/blog/claude-for-commerce-agents

## How Anthropic employees use Claude Tag
- Showcases internal use of Claude Tag (Claude in Slack) across marketing, product ops, and legal teams at Anthropic
- Employees tag @Claude in Slack threads for document generation, data consolidation, and content review without leaving chat
- Marketing: turned a 15-message thread into a two-page doc in 45 minutes (vs hours)
- Product ops: searched 50+ Slack channels, consolidated ~120 raw findings into 23 open/14 resolved issues in 50 minutes
- Legal: standing instructions let Claude flag issues and verify in real time, cutting review from a full day to 30 minutes per asset; Claude Tag is in public beta on Team and Enterprise plans
Category: feature update
Date: 2026-08-28
URL: https://claude.com/blog/how-anthropic-employees-use-claude-tag

## Claude for Teachers, now available for U.S. K-12 schools and districts
- Claude for Teachers expanded from individual educators to a free enterprise offering for qualifying US K-12 schools/districts
- Adds centralized management: single sign-on, role-based access controls, domain claiming for admins
- New teaching skills for lesson prep and standards-aligned comprehension checks, tied to all 50 states' academic standards
- FERPA-aligned terms; student data not used for model training; signup deadline June 30, 2027 for one year free access
- Pilot launching in Detroit Public Schools Community District this fall
Category: announcement
Date: 2026-08-28
URL: https://claude.com/blog/claude-for-teachers-now-available-for-schools-and-districts

## How Warp builds self-improving agents on Claude
- Warp (AI terminal company) built a self-improvement framework for Claude-based agents using file-based "skills"
- Two-skill architecture: base skill holds domain knowledge; "improver" skill observes feedback and proposes refinements as code changes reviewed via normal PR workflow
- Moved beyond one-off prompts (~80% accuracy) to a systematic loop where agent quality compounds over time
- Now used across multiple agents (code review, spec-writing, triage) managing Warp's entire open-source repo
- Scale: 800K monthly developers, 56% of Fortune 500 users, 10M Claude Code sessions, 40M agent conversations; principle: "write principles, not rules"
Category: announcement
Date: 2026-08-26
URL: https://claude.com/blog/how-warp-builds-self-improving-agents-on-claude

## Claude in Chrome is generally available
- Claude in Chrome extension moved from pilot to general availability across all paid Claude plans
- Lets Claude view and act on websites without direct integrations (click, type, fill forms) using the user's existing logins
- Now supports autonomous action approval for safe tasks, not just manual step-by-step approval
- Enhanced security: three-layer defense (adversarial training, content screening, automatic action verification); Opus 5 attack success rate against strong prompt-injection attacks dropped from 3.8% to 0% with full safeguards
- Requires Chrome Web Store install; enterprise admins can restrict to approved domains; not yet on other Chromium browsers or mobile
Category: feature update
Date: 2026-08-26
URL: https://claude.com/blog/claude-in-chrome-generally-available

## Claude gets its own browser in Cowork
- Claude Cowork now has a built-in browser so Claude can navigate sites, fill forms, and extract info independent of the user's personal browser
- Opens automatically within the desktop app when needed; separate from personal browser—no access to tabs, bookmarks, or passwords
- Users can optionally import logins site-by-site from Chrome, Edge, or Firefox
- Available now for Pro, Max, and Team plans; Enterprise users can enable immediately; works on macOS, Windows, Linux
- Includes prompt-injection safeguards; is the default browser when Claude in Chrome isn't active, with ability to switch in Settings; rollout began August 26, 2026
Category: feature update
Date: 2026-08-26
URL: https://claude.com/blog/cowork-built-in-browser
