## Build live dashboards and animate explainers with Claude
- Launches two betas: Claude Dashboards (live dashboards from company data) and Claude Motion (animated explainers)
- Dashboards connect to BigQuery, Databricks, Snowflake, Salesforce; charts show underlying query and last refresh; paid plans
- Motion builds editable code-based animations exportable as MP4; Team and Enterprise
- Docs, Slides, and Design leave beta and are available on all plans including Free
- Standalone Claude Design folds into Claude; standalone site stays until December 14
Category: feature update
Date: 2026-10-08
URL: https://claude.com/resources/articles/dashboards-and-motion

## Uber's CISO on building an insider threat program for AI
- Interview with Uber CISO Philip Martin on treating AI agents like insider-threat subjects
- Uber's open-source AI Detection and Response (ADR) tool works with Anthropic's Enterprise Frontier Safeguards
- Safeguards let Uber keep data control and choose responses; classifier output feeds ADR as a real-time signal
- Newer models pull context from code, design docs, Jira, making threat modeling more specific
- Priorities: real-time detection near prompt entry and ongoing analysis of new model behaviors
Category: announcement
Date: 2026-10-13
URL: https://claude.com/resources/articles/uber-s-ciso-on-building-an-insider-threat-program-for-ai

## Building effective agent automations
- Guide by Lance Martin and CJ Avilla to scheduled agents on Claude Managed Agents (beta), with "daily-brief" reference implementation (Slack and GitHub PRs to Slack brief)
- Setup is config files (agent, schedule, memory, vault, network allowlist) applied with `ant apply`; runs on Anthropic infrastructure
- Patterns: per-source bookmarks, report unreadable sources as such, confirm post landed before updating ledger, re-check live status
- Credentials in vault outside sandbox, read-only access, per-run spending cap
- Matters because background agents fail silently; these guardrails make failures visible
Category: feature update
Date: 2026-10-08
URL: https://claude.dev/blog/building-effective-agent-automations/

## How Block orchestrates Claude Fable across thousands of pull requests
- Interview with Block's Bradley Axen on using Claude Fable 5 for large-scale code migrations
- Fable coordinates many agent sessions and does high-level design; Opus/Sonnet handle edits and tests; one migration can reach 1,000+ PRs
- Frontier models used for planning, cheaper models for routine work; tools help pick model and effort
- Merges and production deploys still need two human approvals; model refusals blocked bypass attempts in testing
- Engineers shift toward designing migrations and reviewing agents; model selection becomes a core skill
Category: announcement
Date: 2026-10-08
URL: https://claude.com/resources/articles/how-block-orchestrates-claude-fable-across-thousands-of-pull-requests

## Claude Haiku 5.5
- New small model (claude-haiku-5-5), billed as Anthropic's cheapest, fastest, most capable small model
- About 75% cheaper to run than Haiku 4.5 on average
- First Haiku-class model with adjustable effort setting
- Sonnet 5.5 cache-read prices halved (about 20% cheaper on most agentic work); Max and Team get monthly API credit
- Targets high-volume work (classification, summaries, subagents, live support); Sonnet/Opus still better for complex coding
Category: announcement
Date: 2026-10-07
URL: https://www.anthropic.com/claude-haiku-5-5

## Automating eval design and hillclimbing with Claude
- New `claude-api` skill commands in Claude Code: `/claude-api build-eval` and `/claude-api hillclimb` (by Lance Martin)
- build-eval interviews user, samples inputs, proposes cheapest fitting grader, pauses for approval
- hillclimb makes one patch per round, keeps it only if train and held-out scores both improve
- Results: support benchmark hit 90.5% held-out accuracy at about 1/5 cost; claude-api skill eval rose 66% to ~88%
- Get started with `claude update`. Note: article page shows date Sep 28, 2026; listing shows Oct 7, 2026
Category: feature update
Date: 2026-10-07
URL: https://claude.dev/blog/automating-eval-design-and-hillclimbing/

## How Comcast and Booz Allen use Claude Mythos to find exploit chains and secure their codebases
- Security teams used Claude Mythos-class models via limited-access Project Glasswing to find and fix vulnerabilities
- Comcast found a critical authentication flaw across 258 systems and ~170M lines of code, fixed before exploitation
- Booz Allen traced a boot-time key-protection flaw across two programs and languages; one analyst covered 8 systems/138 repos in 12 days
- Models connect code, config, identity, and deployment context to surface cross-component exploit chains
- Validation of findings is the new bottleneck
Category: announcement
Date: 2026-10-06
URL: https://claude.com/resources/articles/how-comcast-booz-allen-use-claude-mythos-to-secure-their-codebases

## Claude now works with Google Docs, Sheets, and Slides
- Claude for Google Workspace: public beta add-on for all paid plans, plus new Docs/Sheets/Slides connectors (beta)
- Sidebar Claude reads selection and edits files directly: rewrites and suggestion cards in Docs, formulas/pivots/charts in Sheets, theme-matched slides in Slides
- Modes: "Ask before edits" or "Accept all edits"
- Respects Google sharing permissions; Compliance API and customer-managed keys apply
- Install from Workspace Marketplace; Team/Enterprise owners enable connectors, admins deploy via Admin console
Category: feature update
Date: 2026-10-06
URL: https://claude.com/resources/articles/claude-now-works-in-google-docs-sheets-and-slides

## We're expanding the Claude Startups program to help founders build
- Claude Startups program expanded to admit more founders
- Up to $7,000 in products/credits: free year of Claude Team (up to 5 Premium seats) and one-time $1,000 API credit
- New Claude Startup Stack: discounts and credits worth up to $45,000 on company tools
- Also office hours with Applied AI team, Claude Marketplace listing help, events, newsletter
- Oct 13 update: current cohort full, applications closed for now
Category: announcement
Date: 2026-10-06
URL: https://claude.com/resources/articles/were-expanding-the-claude-startups-program-to-help-founders-build

## Expanding the Cyber Verification Program
- Cyber Verification Program merges Project Glasswing and earlier CVP into one offering for vetted security professionals
- Three tiers: Defense, Red Team, Specialized; each includes newest models (Opus 5.5, Sonnet 5.5, Mythos 5.1) with reduced cyber-blocking classifiers
- Red Team allows authorized pentesting; Specialized has fewest blocks, limited to verified orgs reviewed with US government
- Glasswing partners found 129,000+ verified vulnerabilities Apr-Jul 2026; Anthropic's own scanning found 5,500 more
- Enrolled orgs must retain data for misuse monitoring; Enterprise Frontier Safeguards (zero data retention) expected later this fall
Category: announcement
Date: 2026-10-06
URL: https://www.anthropic.com/news/cyber-verification-program
