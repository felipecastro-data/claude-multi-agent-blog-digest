## Automating eval design and hillclimbing with Claude
- Two new claude-api skill commands: `/claude-api build-eval` and `/claude-api hillclimb`
- build-eval guides principled eval creation with grader validation (production-like tasks, headroom, low variance)
- hillclimb auto-optimizes against an eval with train/test splits and overfitting guards (reverts patches that only help train)
- Example: support benchmark 74.4% at 4.6c/ticket to 98.9% at 1c/ticket; claude-api skill eval 66.1% to 87.9%
- Get started with `claude update`. Note: article page says Sep 28, 2026; listing says Oct 7, 2026
Category: feature update
Date: 2026-10-07
URL: https://claude.dev/blog/automating-eval-design-and-hillclimbing/

## How Comcast and Booz Allen use Claude Mythos to find exploit chains and secure their codebases
- Customer story on using Claude Mythos for security work (exploit-chain discovery, codebase hardening)
- Customers: Comcast and Booz Allen
- Article page returned 404; details taken from listing title only
- Shows Mythos applied to defensive security in large enterprises
- Details unverified
Category: announcement
Date: 2026-10-06
URL: https://www.anthropic.com/resources/articles/how-comcast-booz-allen-use-claude-mythos-to-secure-their-codebases

## Claude now works with Google Docs, Sheets, and Slides
- Claude integrates with Google Docs, Sheets, and Slides (per title)
- Article page returned 404; details taken from listing title only
- Extends Claude into Google Workspace document workflows
- Specific features and availability unverified
- Needs follow-up if details are required
Category: feature update
Date: 2026-10-06
URL: https://www.anthropic.com/resources/articles/claude-now-works-in-google-docs-sheets-and-slides

## We're expanding the Claude Startups program to help founders build
- Expansion of the Claude Startups program for founders (per title)
- Article page returned 404; details taken from listing title only
- Aimed at helping startups build with Claude
- Specific benefits and eligibility unverified
- Needs follow-up if details are required
Category: announcement
Date: 2026-10-06
URL: https://www.anthropic.com/resources/articles/were-expanding-the-claude-startups-program-to-help-founders-build

## Expanding the Cyber Verification Program
- Expanded Cyber Verification Program with three tiers: Defense Access, Red Team Access, Specialized Access
- Consolidates Project Glasswing and the original CVP into one offering
- Covers Claude Opus 5.5, Sonnet 5.5, Mythos 5.1 and future models, with reduced blocking safeguards for vetted security pros
- Glasswing partners found 129,000+ verified vulnerabilities in four months, thousands critical/high
- Safeguards scale by tier: Defense blocks offensive work; higher tiers allow authorized pen testing under oversight
Category: announcement
Date: 2026-10-06
URL: https://www.anthropic.com/news/cyber-verification-program

## Claude Code in the cloud: a field guide to cloud sessions
- Cloud sessions run Claude Code on dedicated VMs, each with its own repo clone, ports and branch
- Enables parallel tasks (e.g. 3 tasks done in 87 seconds) and long-running proofs like 200+ test reruns
- Seven workflows: parallel backlog, prove fixes, plan locally/build in cloud, mobile steering, auto-fix CI, routines, sandbox untrusted code
- GitHub proxy keeps user token outside the VM; requires Claude GitHub App for private repos
- Included in Pro, Max, Team, Enterprise; Pro/Max bonus credits ($100/$250) through Nov 4
Category: feature update
Date: 2026-10-06
URL: https://claude.dev/blog/claude-code-in-the-cloud/

## How Cresta turned CX expertise into an agent builder on the Claude Agent SDK
- Customer story: Cresta built a customer-experience agent builder on the Claude Agent SDK (per title)
- Article page returned 404; details taken from listing title only
- Shows Agent SDK used for domain-specific agent products
- Specifics unverified
- Needs follow-up if details are required
Category: announcement
Date: 2026-10-05
URL: https://www.anthropic.com/resources/articles/how-cresta-turned-cx-expertise-into-an-agent-builder-on-the-claude-agent-sdk

## Getting started with Claude Code mods
- Mods are small JS/TS files running inside Claude Code sessions to observe, rewrite, or answer events via hooks
- No API knowledge needed: describe the mod in plain language and Claude builds it
- Hot reload without restarting; `$.state` persists data across reloads
- Examples: Token Weather (context usage display), Blast Radius (previews risky bash commands), Replay Theater (steps through edits)
- Extends Claude Code beyond settings and slash commands: custom UI, safety guards, session data
Category: feature update
Date: 2026-10-01
URL: https://claude.dev/blog/getting-started-with-claude-code-mods/

## Customize Claude Code with mods
- Announcement post for Claude Code mods (per title); companion to the getting-started guide
- Article page returned 404; details taken from listing title only
- See the getting-started post for mod mechanics
- Specific availability unverified
- Needs follow-up if details are required
Category: feature update
Date: 2026-10-01
URL: https://www.anthropic.com/resources/articles/claude-code-mods

## How Anthropic's sales team rebuilt inbound with Claude Managed Agents
- Internal case study: Anthropic sales team rebuilt inbound handling with Claude Managed Agents (per title)
- Article page returned 404; details taken from listing title only
- Demonstrates Managed Agents in a real sales workflow
- Specifics unverified
- Needs follow-up if details are required
Category: announcement
Date: 2026-09-30
URL: https://www.anthropic.com/resources/articles/how-anthropics-sales-team-rebuilt-inbound-with-claude-managed-agents
