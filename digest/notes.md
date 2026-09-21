## Working at the frontier: How Balyasny Asset Management evaluates and governs Claude Fable 5
- Interview with BAM's Chief AI Officer on deploying Claude Fable 5 across investment operations
- BAM shifted from AI-for-retrieval to AI-for-autonomous-task-execution via internal platform "BAMAgent"
- BAMAgent handles multi-step tasks like merger analysis and tax-loss harvesting
- Claude Fable 5 scored 89.4% accuracy vs 86.1% for prior model on BAM's financial task evals, notably stronger at planning/analysis/agentic execution
- Success required governance controls: data boundaries, tool permissions, human review, not just model power
Category: announcement
Date: 2026-09-17
URL: https://claude.com/blog/working-at-the-frontier-how-balyasny-asset-management-evaluates-and-governs-claude-fable-5

## Projects redesigned: from folder to conversation
- Redesign of Claude Code's project experience from static folders to conversation-based workflows
- New coordinator-based architecture: "threads do the work, Claude directs it"
- Users describe goals; Claude delegates tasks across parallel threads, coordinates, reviews, and assembles results
- Adds shared memory that builds context over time, reducing repetitive instructions
- Enables goals like "reduce checkout p75 latency" or "retire a deprecated API endpoint" handled across repos with tests and PRs
Category: feature update
Date: 2026-09-17
URL: https://claude.com/blog/projects-redesigned

## Claude Cowork and chat are now one Claude
- Claude Cowork and the chat interface have been merged into a single unified product
- Adds new capabilities: Claude Docs and Claude Slides (beta), plus Claude Design now works within conversations
- Users can request documents, presentations, or visuals directly in chat
- Outputs can be edited, presented, or exported as PowerPoint/PDF
- Rollout starts on Pro and Max plans, with Team and Free plans to follow
Category: feature update
Date: 2026-09-16
URL: https://claude.com/blog/cowork-is-now-claude

## Bringing Salesforce into Claude
- Beta plugin integrating Salesforce sales data directly into Claude with 37 skills
- Lets sellers research accounts, prep for calls, review pipelines, and update CRM without leaving Claude
- Features: personalized daily briefings, automated call prep (Salesforce/Slack/email), deal scoring, close-plan generation, post-call summaries, interactive pipeline dashboards
- Operates under sellers' existing Salesforce permissions
- Early adopters (GitLab, Siemens, Legora) report freed-up time for customer conversations
Category: feature update
Date: 2026-09-15
URL: https://claude.com/blog/salesforce-in-claude

## Building an AI-native revenue organization
- New eBook guide for revenue leaders on rolling out Claude across sales organizations
- Details a three-phase rollout plan: setup, pilot, scale
- Includes maturity models and ROI measurement frameworks
- Addresses challenges like low adoption and fragmented workflows across sales teams
- Cites Cox Communications achieving 7x first-year ROI and 86% cost reduction in lead validation
Category: announcement
Date: 2026-09-15
URL: https://claude.com/blog/building-an-ai-native-revenue-organization

## Claude for Small Business launches new workflows, integrations, and training programs
- Expansion of Claude for Small Business with 43 workflows and 27 new integrations
- New integrations include Shopify, Salesforce, and Gusto
- Adds capabilities for lead generation, proposal writing, financial reconciliation, content planning, weekly reporting
- Launching a fall tour with free workshops in 10 US cities plus partner webinars
- One founder reports work that took 120 hours now takes 5 minutes
Category: announcement
Date: 2026-09-15
URL: https://claude.com/blog/claude-for-small-business-launches-new-workflows-integrations-and-training-programs

## Agentic coding is straining CI. Here's how we scaled test impact analysis at Anthropic
- Describes scaling Anthropic's internal test impact analysis service through a 25x increase in CI jobs over six months
- Increase driven by AI-assisted coding generating more code and tests
- Three temporary fixes (hardware upgrade, per-package sharding, daily restarts) each gave diminishing relief (70 days, 29 days, <1 day)
- Final fix: full redesign with in-memory data store and stateless workers, making the service horizontally scalable
- Argues engineering teams should plan for 25x load growth within two quarters rather than quick patches
Category: announcement
Date: 2026-09-14
URL: https://claude.com/blog/agentic-coding-is-straining-ci-heres-how-we-scaled-test-impact-analysis-at-anthropic

## Claude for Financial Advisors
- New suite of connectors and workflow skills for financial advisors' admin tasks
- 11 new connectors to custodians/CRMs/portfolio platforms (Charles Schwab, BlackRock, Addepar, Envestnet)
- 8 specialized skills for meeting prep, portfolio analysis, compliance checks, client follow-up
- Includes governance: approval workflows and SEC Marketing Rule compliance screening
- Claude drafts briefs/summaries for advisor review rather than acting autonomously, preserving human oversight
Category: feature update
Date: 2026-09-14
URL: https://claude.com/blog/claude-for-financial-advisors

## How healthcare organizations use Claude Tag
- Case studies of Insight Health, Tennr, and Medallion using Claude Tag (beta), a Slack-integrated AI agent
- Per-channel scoping lets admins restrict Claude Tag from PHI-containing channels
- Enterprises linking Claude Tag to GitHub get $25,000 in credits (expires Oct 1, 2026)
- Insight Health automated 97% of alert triage using Claude Tag
- Other use cases include internal tool maintenance and knowledge accumulation around payer rules
Category: feature update
Date: 2026-09-14
URL: https://claude.com/blog/how-healthcare-organizations-use-claude-tag

## Deploying AI from pilot to production
- Guide co-developed with Accenture on moving AI initiatives from pilot to full production
- Outlines seven considerations across before-pilot, during-pilot, and production phases
- Provides a four-part job definition framework and cost modeling tools
- Introduces a four-tier oversight model: automated, sampled, reviewed, advisory
- Cites Accenture research that only 23% of C-suite leaders report sustained enterprise-wide AI impact
Category: announcement
Date: 2026-09-14
URL: https://claude.com/blog/deploying-ai-from-pilot-to-production
