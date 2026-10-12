## Build live dashboards and animate explainers with Claude
- Announces Claude Dashboards and Claude Motion
- Dashboards: live plain-language reports from BigQuery, Snowflake, Databricks, Salesforce; refresh with data, numbers link to queries; beta on paid plans
- Motion: editable animations from a prompt, exportable as MP4; beta on Team/Enterprise
- Docs, Slides, Design left beta and are on all plans incl. Free
- Claude Design moved into conversations; claude.ai/design closes Dec 14
Category: feature update
Date: 2026-10-08
URL: https://claude.com/resources/articles/dashboards-and-motion

## Building effective agent automations
- Guide and reference implementation for a scheduled agent that reads Slack/GitHub and posts a daily brief to Slack, on Claude Managed Agents (beta)
- Provides a `daily-brief` template applied with `ant apply`, plus `/claude-api managed-agents-onboard` in Claude Code
- Design patterns: per-source bookmarks, failed reads reported as unavailable, re-check before posting, send confirmed only on Slack ok:true
- Read-only preferences, per-run spend caps, scoped credentials in vaults outside the sandbox
- Matters because unattended agents can silently lose access or repeat/skip items
Category: announcement
Date: 2026-10-08
URL: https://claude.dev/blog/building-effective-agent-automations/

## How Block orchestrates Claude Fable across thousands of pull requests
- Customer story: Block's Bradley Axen on using Claude Fable 5 for large engineering work
- Fable handles high-level design (data models, API specs) and directs smaller models (Opus/Sonnet) to edit files and run tests
- One migration can involve about a thousand PRs; engineers steer
- Frontier tokens go to upfront planning, cheaper models do more work, no quality drop; auto model-selector in development
- Humans still approve merges to main and prod deploys
Category: announcement
Date: 2026-10-08
URL: https://claude.com/resources/articles/how-block-orchestrates-claude-fable-across-thousands-of-pull-requests

## Claude Haiku 5.5
- New small model (`claude-haiku-5-5`), billed as the cheapest, fastest, most capable small model yet
- About 75% cheaper than Haiku 4.5 on average; $0.10 input / $0.50 output per million tokens (prompts up to 100k); first Haiku with adjustable effort
- Sonnet 5.5 cache-read price halved (about 20% cheaper on most agentic work); new monthly API credit for Max/Team; SDK beta support for computer/browser use
- OSWorld 2.1 offline subset 72.4% vs 15.7% for Haiku 4.5
- Aimed at high-volume work and subagents; not ideal for complex agentic coding
Category: announcement
Date: 2026-10-07
URL: https://www.anthropic.com/claude-haiku-5-5

## Automating eval design and hillclimbing with Claude
- Playbook for designing evals and hillclimbing without overfitting, via `/claude-api build-eval` and `/claude-api hillclimb` in Claude Code
- build-eval interviews you, samples inputs, proposes a grader, runs a baseline
- hillclimb proposes one patch per round and keeps it only if both train and test scores improve
- Support benchmark: held-out accuracy 78.6% to 90.5% at about one fifth the cost; claude-api skill eval 66.1% to 87.9%
- Guards against overfitting and grader/harness bugs (note: article body shows Sep 28, 2026; listing shows Oct 7)
Category: feature update
Date: 2026-10-07
URL: https://claude.dev/blog/automating-eval-design-and-hillclimbing/

## How Comcast and Booz Allen use Claude Mythos to find exploit chains and secure their codebases
- Security teams used Mythos-class models via Project Glasswing to find, validate, fix vulnerabilities scanners missed
- Models reason across code, config, identity, and live behavior to surface exploit chains
- Comcast: critical auth flaw found across 258 systems and about 170M lines of code; fixed before exploitation; validation is now the bottleneck
- Booz Allen: pre-boot flaw traced; one analyst covered 8 systems/138 repos in 12 days
- Human validation and remediation ownership remain essential
Category: announcement
Date: 2026-10-06
URL: https://claude.com/resources/articles/how-comcast-booz-allen-use-claude-mythos-to-secure-their-codebases

## Claude now works with Google Docs, Sheets, and Slides
- Claude for Google Workspace: public beta add-on with sidebar in Docs, Sheets, Slides; all paid plans
- Reads open file/selection and edits in place: Doc revision cards, Sheets formulas/charts, Slides built from deck layouts
- Beta Google connectors let Claude create/edit Google files from chat
- Modes: "Ask before edits" or "Accept all edits"
- Keeps Google sharing permissions; Enterprise controls like Compliance API
Category: feature update
Date: 2026-10-06
URL: https://claude.com/resources/articles/claude-now-works-in-google-docs-sheets-and-slides

## We're expanding the Claude Startups program to help founders build
- Program for founders building on Claude opens to more startups
- Perks: free year of Claude Team (up to 5 Premium seats), $1,000 API credit, Applied AI office hours
- New Claude Startup Stack: partner tool discounts/credits worth up to $45,000
- Help listing products on Claude Marketplace
- Eligible: founded within 5 years or funded within 2 years
Category: announcement
Date: 2026-10-06
URL: https://claude.com/resources/articles/were-expanding-the-claude-startups-program-to-help-founders-build

## Expanding the Cyber Verification Program
- CVP gives vetted security pros access to top models with reduced cyber-blocking classifiers
- Three tiers: Defense Access, Red Team Access (orgs only, authorized pentesting), Specialized Access (safety-critical systems, reviewed with US government)
- Merges Project Glasswing with original CVP; data retention required for misuse monitoring
- Glasswing and open-source scanning found 5,500+ verified vulns plus 129,000 via partners; 33,000+ critical/high
- Red Team tier: no blocks on CyScenarioBench, 34 of 50 tasks; Defense tier blocked 46 of 50
Category: announcement
Date: 2026-10-06
URL: https://www.anthropic.com/news/cyber-verification-program

## Claude Code in the cloud: a field guide to cloud sessions
- Cloud sessions run Claude Code on an isolated VM with the repo cloned to a new branch; output is a branch/PR
- Start from claude.ai/code, mobile, Desktop, terminal (`claude --cloud "..."`), or Slack
- Runs without your laptop; parallel tasks do not collide; GitHub token stays outside the VM; `~/.claude` config does not travel (use repo CLAUDE.md)
- Good for backlog fixes, CI auto-fix, scheduled routines, untrusted code; `claude --teleport` pulls a session local
- Included in Pro, Max, Team, Enterprise; shares usage limits
Category: feature update
Date: 2026-10-06
URL: https://claude.dev/blog/claude-code-in-the-cloud/
