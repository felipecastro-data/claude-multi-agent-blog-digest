## How to prepare for AI-driven code modernization projects
- Guide for enterprises/regulated orgs preparing for large-scale codebase modernization using Claude Code
- Six-step framework: define target, create certificate (correctness proof), set promotion/review policy, prepare prerequisites, build agentic workflow, run modernization starting small
- Argues the bottleneck shifts from writing code to managing organizational approval processes
- Emphasizes traceability: every change linked to an agent transcript and certificate evidence
- Aims to pre-stage governance so speed and human oversight are balanced in regulated environments
Category: announcement
Date: 2026-09-23
URL: https://claude.com/blog/how-to-prepare-for-ai-driven-code-modernization-projects

## What a task costs on Opus 5.5
- Explains pricing/cost structure for Claude Code tasks on Opus 5.5 vs Opus 5
- Opus 5.5 costs 20% less per input/output token; cache read pricing dropped 60% (1/10 to 1/20 of input price)
- Typical session saves ~31% on cost from pricing changes alone
- Four cost drivers: number of turns, cache hit rate, output/thinking tokens, model selection
- Tips: start at medium effort, use smaller models (Sonnet/Haiku) for lookups, avoid mid-session config changes to preserve cache, use prompt-audit tool
Category: feature update
Date: 2026-09-22
URL: https://claude.com/blog/what-a-task-costs-on-opus-5-5

## Working at the frontier: How Balyasny Asset Management evaluates and governs Claude Fable 5
- Interview with BAM's Chief AI Officer on evaluating/deploying Claude Fable 5 for financial analysis
- 2026 shift described as moving "from AI systems that do search to AI systems that do work" via longer multi-step tasks
- BAM evaluates on thousands of real financial tasks with verifiable outcomes (equities, macro, commodities), not generic benchmarks
- Fable 5 scored 89.4% vs 86.1% for prior production model, strongest in complex planning/agentic execution
- Safety relies on data boundaries, tool permissions, logging, human review (not the model alone); BAMAgent platform runs thousands of autonomous agents continuously
Category: announcement
Date: 2026-09-17
URL: https://claude.com/blog/working-at-the-frontier-how-balyasny-asset-management-evaluates-and-governs-claude-fable-5

## Projects redesigned: from folder to conversation
- Claude Projects redesigned from static folders into conversation-driven, multi-threaded agentic workflows
- Multiple threads can work on tasks in parallel while Claude coordinates; users monitor via main chat or individual threads
- Each thread runs as its own Claude Code cloud session, potentially on different branches
- Builds persistent memory over time, reducing repeated context; adds a library collecting files/artifacts
- Supports complex multi-part work like cross-repo optimization or retiring deprecated APIs simultaneously
Category: feature update
Date: 2026-09-17
URL: https://claude.com/blog/projects-redesigned

## Claude Cowork and chat are now one Claude
- Claude Cowork and Claude chat merged into a single unified app/interface
- New capabilities: Claude Docs and Claude Slides launchable directly from conversations, editable and downloadable as PDF/PowerPoint
- Claude Design now works within conversations instead of as a separate tool
- Rolling out first to Pro/Max (web, desktop, mobile); Team and Free plans to follow; Enterprise admins get 30+ days notice
- Eliminates friction of choosing between Cowork and chat for different task types
Category: feature update
Date: 2026-09-16
URL: https://claude.com/blog/cowork-is-now-claude

## Bringing Salesforce into Claude
- New plugin integrates Salesforce CRM directly into Claude for sales professionals
- Includes 37 skills: account research, call prep, pipeline review, CRM updates
- Features personalized daily briefings, deal scoring, meeting prep, automated follow-up documentation
- Operates under existing Salesforce permissions; seller approval required for changes by default
- Available on all paid plans via Salesforce MCP marketplace; early adopters GitLab, Siemens, Legora report time savings
Category: feature update
Date: 2026-09-15
URL: https://claude.com/blog/salesforce-in-claude

## Claude for Small Business launches new workflows, integrations, and training programs
- Expanded Claude for Small Business with 43 workflows and 27 new integrations (Shopify, Salesforce, Xero, etc.)
- Workflows cover back-office ops and growth activities (lead gen, proposals, reporting)
- Over 900,000 installations since May launch
- Free training programs launching fall 2026: 10-city tour, 750+ community workshops, 14 partner webinars (Sept-Nov)
- One owner reported work dropping from 120 hours to five minutes
Category: feature update
Date: 2026-09-15
URL: https://claude.com/blog/claude-for-small-business-launches-new-workflows-integrations-and-training-programs

## Agentic coding is straining CI. Here's how we scaled test impact analysis at Anthropic
- Describes how Anthropic scaled its test impact analysis service for a 25x increase in CI jobs over six months
- Engineers now ship 8x more code quarterly, with Claude authoring 80% of it; test volume grew 10x with flat headcount
- Three temporary patches applied before a full architectural redesign was needed (lasted 70 days, 29 days, <24 hours)
- Final fix: in-memory data store, offloaded consumer, moved from singleton to distributed stateless architecture with independent listener workers
- Advises teams to plan for exponential growth rather than patches, assuming 25x load within two quarters
Category: announcement
Date: 2026-09-14
URL: https://claude.com/blog/agentic-coding-is-straining-ci-heres-how-we-scaled-test-impact-analysis-at-anthropic
