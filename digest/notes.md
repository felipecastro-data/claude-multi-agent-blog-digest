## T. Rowe Price brings more of Claude to its investment process
- T. Rowe Price expands Claude and Claude Cowork use across its investment organization, not just back-office
- Portfolio managers/analysts use Claude for research synthesis; developers build tools with Claude Code
- Follows firm's new AI leadership model established in August
- Goal: keep human judgment central while giving analysts more capacity to evaluate info and debate decisions
- Quote: "Claude lets our investment professionals cover more ground and go deeper on what matters" - Eric Veiel, CIO
Category: announcement
Date: 2026-09-10
URL: https://claude.com/blog/t-rowe-price-brings-more-of-claude-to-its-investment-process

## What 1,000 small business owners taught us about AI
- Recap of Claude SMB Tour: free workshops across 10 US cities, 1,000+ small business owners trained
- Launches Claude for Small Business (Cowork plugin integrating QuickBooks, PayPal, HubSpot, etc.)
- New "AI Fluency for Small Businesses" course created with PayPal; new Claude SMB Trainer Program announced
- Part two of SMB Tour launches fall 2026, starting in Boston Sept 16
- Key lessons: AI democratizes expertise, accuracy/security concerns remain barriers, hands-on and peer training drive adoption
Category: announcement
Date: 2026-09-10
URL: https://claude.com/blog/what-1-000-small-business-owners-taught-us-about-ai

## Reducing cost and improving performance with Claude Platform
- Guide on cutting Claude API costs without sacrificing performance
- New `/claude-api` skill commands in Claude Code: prompt-audit, cost-optimize, hillclimb
- Updated prompt caching guidance and anti-pattern detection for legacy prompts (e.g., unneeded verification rituals)
- Recommends effort calibration: stronger models at lower effort often beat weaker models working harder
- Example results: 52-73% cost savings; one benchmark showed 14.6% cost decrease + 5.3% accuracy improvement
Category: feature update
Date: 2026-09-08
URL: https://claude.com/blog/reducing-cost-and-improving-performance-with-claude-platform

## A guide to the anatomy of effective commerce agents
- Guide to building production-ready commerce agents with Claude covering architecture, performance, deployment
- Releases reference implementation blueprint (github.com/anthropic/commerce-agents)
- Recommends single-agent-with-skills architecture over sub-agents for better quality/cost/latency
- Best deployments hit 90-99% prompt cache hit rates; long-term memory should live in databases, not context
- Financial ops require staged changes with human approval; snapshot-based evals recommended over simulated-user evals
Category: announcement
Date: 2026-09-02
URL: https://claude.com/blog/the-anatomy-of-effective-commerce-agents

## Building commerce agents with Claude
- Anthropic launches commerce agents blueprint on GitHub for building AI shopping/merchant assistants
- Provides pre-built shopping and merchant agent implementations, guardrails, and deployment on Claude API, Bedrock, Microsoft Foundry, Vertex AI
- Enterprise results: carts up to 35% larger, 60% higher purchase completion rates; cuts dev time from days to hours
- Partners already adopting: Shopify, Priceline, Wix, Square; Visa, Mastercard, Accenture collaborating
- Shopping agents handle search/recommendations/support; merchant agents manage inventory/pricing with human oversight
Category: announcement
Date: 2026-09-02
URL: https://claude.com/blog/claude-for-commerce-agents

## How Anthropic employees use Claude Tag
- Showcases internal use of Claude Tag, Anthropic's Slack-integrated AI assistant, now in public beta for Team/Enterprise plans
- Users tag @Claude in Slack threads to access workspace context and run tasks without leaving chat
- Marketing collateral creation cut from days to 45 minutes (product marketing use case)
- Customer feature-request consolidation (~120 findings) completed in 26 minutes instead of a week
- Legal document reviews accelerated from 1 day to 30 minutes per asset via automated pre-review
Category: feature update
Date: 2026-08-28
URL: https://claude.com/blog/how-anthropic-employees-use-claude-tag

## Claude for Teachers, now available for U.S. K-12 schools and districts
- Claude for Teachers expands from individual educators to free Enterprise offering for US K-12 schools/districts
- Districts get centralized management: SSO, role-based access controls; admins verify institution and connect email domain
- Two new teaching skills launched: lesson preparation and check-for-understanding (math focus initially), open-sourced
- Qualifying orgs signing up by June 30, 2027 get a full year free; overage billing disabled by default
- FERPA-compliant; student data excluded from training; Detroit Public Schools piloting impact evaluation this fall
Category: announcement
Date: 2026-08-28
URL: https://claude.com/blog/claude-for-teachers-now-available-for-schools-and-districts

## How Warp builds self-improving agents on Claude
- Warp built a self-improvement framework using Agent Skills so agents learn from feedback instead of manual prompt rewrites
- Uses two complementary skills: inner/base skill (domain knowledge) and outer/improver skill (observes feedback, proposes refinements)
- File-based skills let updates go through standard code review before deployment
- Addresses common ~80% initial accuracy problem in production agents
- Scale: 10M Claude Code sessions to date (400K+ weekly), 40M total Warp Agent conversations; powers spec-writing, code review, issue triage agents
Category: feature update
Date: 2026-08-26
URL: https://claude.com/blog/how-warp-builds-self-improving-agents-on-claude
