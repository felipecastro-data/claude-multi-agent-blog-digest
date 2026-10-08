## Claude Haiku 5.5
- Anthropic's cheapest, fastest, most capable small model; ID claude-haiku-5-5; on AWS, Google Cloud, Azure
- About 75% cheaper to run than Haiku 4.5 on average
- First Haiku-class model with an adjustable effort setting
- Sonnet 5.5 cache-read price halved; Max and Team subscribers get a new monthly API credit
- Suited to high-volume work (classification, summaries, subagents); not a replacement for Opus/Sonnet 5.5 on complex agentic coding
Category: announcement
Date: 2026-10-07
URL: https://www.anthropic.com/claude-haiku-5-5

## Automating eval design and hillclimbing with Claude
- Playbook for building evals and improving apps against them without overfitting
- Adds /claude-api build-eval and /claude-api hillclimb commands to the claude-api skill in Claude Code
- build-eval interviews you, samples inputs, proposes the cheapest fitting grader, runs baseline and diagnostics
- hillclimb makes one change per round and keeps it only if both train and test scores improve
- Example results: cost per ticket 4.6c to about 1c; claude-api skill eval pass rate 66.1% to 87.9%
Category: feature update
Date: 2026-10-07 (listing date; article page itself says Sep 28, 2026)
URL: https://claude.dev/blog/automating-eval-design-and-hillclimbing/

## How Comcast and Booz Allen use Claude Mythos to find exploit chains and secure their codebases
- Customer story on using Claude Mythos-class models via Project Glasswing to find and fix vulnerabilities
- Models reason across code, config, and live behavior, finding exploit chains of minor weaknesses
- Comcast: critical auth flaw found across 258 systems, about 170M lines of code, fixed before exploitation
- Booz Allen: one analyst reviewed 8 production systems across 138 repos in 12 days
- Key point: validation of findings is now the bottleneck; Anthropic urges continuous security review
Category: announcement
Date: 2026-10-06
URL: https://claude.com/resources/articles/how-comcast-booz-allen-use-claude-mythos-to-secure-their-codebases

## Claude now works with Google Docs, Sheets, and Slides
- Claude for Google Workspace: public beta add-on for all paid plans, plus new beta connectors
- Sidebar in Docs, Sheets, Slides reads content and edits in place
- Docs: change proposal cards; Sheets: formulas, pivot tables, charts; Slides: themed slides, layout checks
- Choose per-edit approval or automatic apply; follows Google sharing permissions
- Admins deploy via Google Admin console; Team/Enterprise owners must enable connectors first
Category: feature update
Date: 2026-10-06
URL: https://claude.com/resources/articles/claude-now-works-in-google-docs-sheets-and-slides

## We're expanding the Claude Startups program to help founders build
- Program for founders building on Claude is opening to more founders
- Eligible members get a year of Claude Team (up to 5 Premium seats) and a one-time $1,000 API credit
- Claude Startup Stack: partner discounts and credits worth up to $45,000
- Virtual office hours with Applied AI team and help listing on Claude Marketplace
- Eligibility: founded in last 5 years or funded in last 2
Category: announcement
Date: 2026-10-06
URL: https://claude.com/resources/articles/were-expanding-the-claude-startups-program-to-help-founders-build

## Expanding the Cyber Verification Program
- CVP gives vetted security pros advanced cyber capabilities with reduced safeguards on top models
- Now three tiers: Defense, Red Team, Specialized; merges earlier CVP with Project Glasswing
- Tiers include newest models (Opus 5.5, Sonnet 5.5, Mythos 5.1)
- Review times: Defense a few days, Red Team a few weeks; Specialized reviewed with US government; data retention required
- Glasswing partners found at least 129,000 verified vulnerabilities between April and July 2026
Category: announcement
Date: 2026-10-06
URL: https://www.anthropic.com/news/cyber-verification-program

## Claude Code in the cloud: a field guide to cloud sessions
- Cloud sessions run Claude Code on its own VM with repo cloned to a new branch; start from web, mobile, desktop, terminal (claude --cloud), or Slack
- Keeps running if laptop sleeps; sessions are isolated so parallel tasks do not collide
- Test: three parallel sessions on one repo finished within 87 seconds
- Setup: GitHub sign-in plus Claude GitHub App; put shared commands in CLAUDE.md and setup script; push local commits first
- Limits: not available with Console API key, third-party providers, or Zero Data Retention; shares plan usage limits
Category: feature update
Date: 2026-10-06
URL: https://claude.dev/blog/claude-code-in-the-cloud/

## How Cresta turned CX expertise into an agent builder on the Claude Agent SDK
- Customer story: Cresta's Conductor, a natural-language builder for customer experience agents, runs on the Claude Agent SDK
- Started as an internal forward-deployed tool, became a customer-facing product
- Roughly halved initial deployment time in early use
- Evaluated on build tasks (create agent, write tests, modify, root cause analysis), rerun on new Claude models
- Argues ongoing testing and iteration is harder than the initial build
Category: announcement
Date: 2026-10-05
URL: https://claude.com/resources/articles/how-cresta-turned-cx-expertise-into-an-agent-builder-on-the-claude-agent-sdk

## Getting started with Claude Code mods
- Mods are small JS/TS modules in a Claude Code session, shipped as plugins
- register(on) adds hooks that can observe, rewrite (next(e)), or answer events, e.g. return { deny } to block a tool call
- Unlike shell hooks, mods persist, keep state, draw UI, open panes, register slash commands
- Examples: Token Weather, Blast Radius, Replay Theater (code in anthropics/claude-code-playground)
- Needs Claude Code 2.1.287+; on by default; install only from trusted publishers
Category: feature update
Date: 2026-10-01
URL: https://claude.dev/blog/getting-started-with-claude-code-mods/

## Customize Claude Code with mods
- Mods are small TypeScript functions that change Claude Code behavior and look; ship in plugins; work in CLI and desktop
- Hook into tool calls, permission requests, screen drawing
- Can rewrite prompts, block or retry tool calls, edit UI, replace built-ins like /diff
- Goes beyond hooks, which could not rewrite events or draw UI; admins can manage allowed plugin marketplaces
- Not sandboxed: same machine access as Claude Code, so trust sources
Category: feature update
Date: 2026-10-01
URL: https://claude.com/resources/articles/claude-code-mods
