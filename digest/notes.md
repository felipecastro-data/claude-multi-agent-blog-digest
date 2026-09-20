## Working at the frontier: How Balyasny Asset Management evaluates and governs Claude Fable 5
- Interview with BAM's Chief AI Officer on deploying Claude Fable 5 across investment operations
- BAM shifted from AI-for-search to AI-for-task-completion; merger-arb analysis now under 1 day vs 3-5 days
- Fable tested on thousands of real financial tasks: 89.4% success vs 86.1% for prior model, stronger in planning/agentic execution
- Safety approach centers on data boundaries, tool permissions, logging, human review (not relying on model alone)
- Built internal "BAMAgent" platform running thousands of autonomous agents 24/7; used for tax-loss harvesting and central-bank research
Category: announcement
Date: 2026-09-17
URL: https://claude.com/blog/working-at-the-frontier-how-balyasny-asset-management-evaluates-and-governs-claude-fable-5

## Projects redesigned: from folder to conversation
- Claude Projects redesigned from static folder system to conversation-based, multi-threaded workflow
- New architecture: multiple threads perform work while a coordinator directs and assembles results
- Each thread runs as an independent Claude Code cloud session on its own repo branch; can open PRs and run tests
- Threads can spawn subagents, loops, and workflows for complex multi-step tasks
- Projects now build persistent contextual memory over time and maintain a shared file/artifact library
Category: feature update
Date: 2026-09-17
URL: https://claude.com/blog/projects-redesigned

## Claude Cowork and chat are now one Claude
- Anthropic merged Claude Cowork and chat into a single unified Claude interface
- Adds native Claude Docs and Claude Slides directly within conversations
- Users can create documents, presentations, and designs without switching apps; outputs shareable via link, editable on mobile
- Claude Design now embedded in chat conversations rather than a separate product
- Rolling out first to Pro and Max plans, with Team and Free plans to follow
Category: feature update
Date: 2026-09-16
URL: https://claude.com/blog/cowork-is-now-claude

## Bringing Salesforce into Claude
- Launched "Salesforce in Claude," a beta plugin giving sales professionals Salesforce data access within Claude
- Includes 37 skills covering account research, call prep, pipeline review, opportunity management, and record updates
- Integrates Salesforce and Slack connectors to consolidate scattered data
- Changes are user-approved before updating Salesforce records; respects existing permissions, no training on data for Team/Enterprise
- Early adopters include GitLab, Siemens, Legora; 7,000 Salesforce sellers already using it
Category: feature update
Date: 2026-09-15
URL: https://claude.com/blog/salesforce-in-claude

## Building an AI-native revenue organization
- Published guide for revenue leaders on implementing Claude across sales organizations
- Addresses fragmented workflows (reps spend ~30 min gathering context for 15-min calls) and inconsistent AI adoption
- Provides maturity model, pre-pilot setup checklist, three-phase rollout (setup, pilot, scale), and ROI framework
- Cox Communications cited 7x first-year ROI; Cyera reached 88% weekly Claude adoption among 1,500 employees
- Aims to move teams beyond individual productivity gains toward organizational transformation
Category: announcement
Date: 2026-09-15
URL: https://claude.com/blog/building-an-ai-native-revenue-organization

## Claude for Small Business launches new workflows, integrations, and training programs
- Expanded Claude for Small Business with new workflows and integrations
- Now 43 total workflows and 27 new integrations (Shopify, Salesforce, TikTok, Atlassian, Zoom, Xero, Gusto, Square, Stripe, Zapier, etc.)
- Over 900,000 installations since May 2026 launch; covers financial briefing, lead response, proposals, marketing, accounting
- Fall training tour resuming in 10 US cities; 150+ Approved SMB Trainers running 750+ community workshops
- Quote: "What used to take me 120 hours now takes me five minutes" (Pedro Rubio, Blackfyre GovCon)
Category: feature update
Date: 2026-09-15
URL: https://claude.com/blog/claude-for-small-business-launches-new-workflows-integrations-and-training-programs

## Agentic coding is straining CI. Here's how we scaled test impact analysis at Anthropic
- Describes how Anthropic scaled test impact analysis for CI amid a 25x increase in CI jobs over six months
- AI-assisted coding drove 8x more shipped code per quarter, with Claude authoring 80% of it; test volume grew 10x
- Failed fixes: bigger machine (worked 70 days), sharding by package (29 days), daily restarts (<1 day, caused lag)
- Solution: redesigned architecture with distributed, in-memory data store enabling stateless, horizontally scalable listener workers
- Argues horizontally scaled test-selection architecture will become industry standard; recommends planning for 25x growth within two quarters
Category: announcement
Date: 2026-09-14
URL: https://claude.com/blog/agentic-coding-is-straining-ci-heres-how-we-scaled-test-impact-analysis-at-anthropic

## Claude for Financial Advisors
- Launched Claude for Financial Advisors: connectors and workflow skills to reduce administrative burden for advisors
- Connectors to 11 platforms: Addepar, BlackRock, Charles Schwab, Envestnet, iCapital, Orion, SS&C Black Diamond, Wealthbox, Wealth.com, Vanguard, Zocks
- 8 specialized skills: pre-meeting prep, portfolio rebalancing review, estate/tax briefs, alt-investment summaries, compliance screening, post-meeting notes, prospect intake, advisor onboarding
- Built-in safeguards require advisor approval on key decisions; compliance skill screens marketing language against SEC rules
- Aims to free advisor time (currently only ~1/6 spent in client meetings) for client service and practice growth
Category: announcement
Date: 2026-09-14
URL: https://claude.com/blog/claude-for-financial-advisors
