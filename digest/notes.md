## Working at the frontier: How Balyasny Asset Management evaluates and governs Claude Fable 5
- Interview with Charlie Flanagan, Chief AI Officer at Balyasny Asset Management (BAM), a $38B asset manager
- 2026 marked shift from "AI systems that do search" to "AI systems that do work"; agents now handle complex multi-step tasks autonomously
- BAM built BAMAgent, an internal platform for secure deployment of thousands of autonomous agents running 24/7
- Claude Fable 5 hit 89.4% accuracy on financial tasks vs 86.1% for prior model
- Safety framed as depending on data access controls, tool permissions, and human oversight, not just model capability
Category: announcement
Date: 2026-09-17
URL: https://claude.com/blog/working-at-the-frontier-how-balyasny-asset-management-evaluates-and-governs-claude-fable-5

## Projects redesigned: from folder to conversation
- Claude Projects redesigned from folder-based organization to conversation-based coordination
- New structure: threads that execute work independently, a coordinator managing delegation, persistent shared memory, and a library for files/artifacts
- Users describe desired outcomes and Claude delegates tasks, coordinates parallel work, and assembles results
- Removes friction of manually dividing work, handoffs, and stitching results together
- Users can steer work remotely and let Claude continue after disconnecting; in beta for select Claude Pro and Max subscribers via Claude Code cloud sessions
Category: feature update
Date: 2026-09-17
URL: https://claude.com/blog/projects-redesigned

## Claude Cowork and chat are now one Claude
- Claude Cowork (for larger projects) and chat merged into a single unified interface
- New integrated tools: Claude Docs, Claude Slides, and Claude Design, all usable within conversations
- Claude now auto-determines task requirements instead of users choosing between Cowork and chat
- Unified shareable links for created content and customizable notification preferences for Claude's actions
- Rolling out first to Pro and Max plans, then Team and Free; context/connectors persist across all features
Category: feature update
Date: 2026-09-16
URL: https://claude.com/blog/cowork-is-now-claude

## Salesforce in Claude
- New beta plugin integrating sellers' Salesforce data directly into Claude
- Includes 37 skills for sales activities: account research, call prep, pipeline review, CRM updates
- Connects Salesforce and Slack via two connectors, respecting existing permissions
- Automates admin work previously requiring manual assembly of info across Salesforce, email, calls, Slack
- Early adopters GitLab, Siemens, Legora report efficiency gains; available on all paid plans via AgentExchange
Category: feature update
Date: 2026-09-15
URL: https://claude.com/blog/salesforce-in-claude

## Building an AI-native revenue organization
- New eBook/guide helping revenue leaders deploy Claude across sales teams
- Addresses limited AI adoption, siloed best practices, and poor visibility into usage/ROI
- Provides a three-phase rollout plan (setup, pilot, scale), role-based use cases, and ROI measurement framework
- Cox Communications case study: 7x first-year return, 86% reduction in lead validation costs
- Aims to move orgs from fragmented AI adoption to cohesive, compounding company-wide implementation
Category: announcement
Date: 2026-09-15
URL: https://claude.com/blog/building-an-ai-native-revenue-organization

## Claude for Small Business launches new workflows, integrations, and training programs
- Claude for Small Business expanded with 43 workflows and 27 new integrations (Shopify, Salesforce, TikTok, Zoom, Xero, Gusto, Stripe, etc.)
- Plugin installed over 900,000 times since May launch
- New capabilities: lead generation, customer inquiry handling, proposal writing, marketing content, month-end accounting reconciliation
- Expansion driven by feedback from small business owners on a spring tour
- Includes expanded training: 750+ community workshops and 14 partner webinars in fall 2026
Category: feature update
Date: 2026-09-15
URL: https://claude.com/blog/claude-for-small-business-launches-new-workflows-integrations-and-training-programs

## Agentic coding is straining CI. Here's how we scaled test impact analysis at Anthropic
- Engineering account of Anthropic's CI infrastructure straining under exponential growth from AI-assisted code generation/review
- Test impact analysis service (determines which tests run per change) faced major scaling challenges
- Team applied three temporary patches over five months (bigger machines, process sharding, daily restarts) before redesigning architecture
- Final fix: added database/in-memory store to offload processing from a single process, enabling horizontal scaling
- Key lesson: teams should anticipate 25x load increases within two quarters and design stateless, instrumented services for AI-driven scale from the start
Category: announcement
Date: 2026-09-14
URL: https://claude.com/blog/agentic-coding-is-straining-ci-heres-how-we-scaled-test-impact-analysis-at-anthropic

## Claude for Financial Advisors
- New suite of connectors and workflow skills for financial advisors, integrating Claude with custodians, portfolio platforms, CRMs, and planning tools
- 11 new connectors: Addepar, BlackRock, Charles Schwab, Envestnet, iCapital, Orion, SS&C Black Diamond, Wealthbox, Wealth.com, Vanguard, Zocks
- 8 specialized skills: advisor onboarding, portfolio rebalancing, estate planning, compliance review, meeting prep, follow-up documentation
- Addresses that advisors spend only ~17% of time in client meetings, rest on admin tasks
- Includes built-in compliance features and requires advisor approval on critical decisions, keeping humans in control
Category: feature update
Date: 2026-09-14
URL: https://claude.com/blog/claude-for-financial-advisors
