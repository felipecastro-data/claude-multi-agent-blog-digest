## We're expanding the Claude Startups program to help founders build
- Anthropic expanded the Claude Startups program for founders
- Benefits include $7,000 in Claude products and credits
- New Claude Startup Stack offers up to $45,000 in partner tool discounts
- Adds virtual office hours with Applied AI team and marketplace support
- Eligible: founded within 5 years or funded within 2 years
Category: announcement
Date: 2026-10-06
URL: https://claude.com/blog/were-expanding-the-claude-startups-program-to-help-founders-build

## How Cresta turned CX expertise into an agent builder on the Claude Agent SDK
- Cresta's Conductor is a natural-language agent builder for customer experience agents
- Turned an internal tool into a product using the Claude Agent SDK
- Meta-agent guides blueprint, implementation, evaluation, optimization
- Roughly halves deployment time in early use cases
- Insight: initial build is ~20% of effort; 80% is testing and optimization
Category: announcement
Date: 2026-10-05
URL: https://claude.com/blog/how-cresta-turned-cx-expertise-into-an-agent-builder-on-the-claude-agent-sdk

## Customize Claude Code with mods
- Mods are small TypeScript functions that rewrite prompts, add UI, replace features
- Available in Claude Code CLI and desktop app, shipped via plugins
- Built-in features like /diff now ship as mods and can be disabled or customized
- Team/Enterprise plans load a "sec-default" mod first to block unsafe overrides
- Admins can create governance mods for CI/CD, production safeguards, audit logging
Category: feature update
Date: 2026-10-01
URL: https://claude.com/blog/claude-code-mods

## How Anthropic's sales team rebuilt inbound with Claude Managed Agents
- Buying agent deployed on Contact Sales and Pricing pages
- Handles thousands of daily conversations on pricing, security, purchasing
- Leads convert at over 2x the rate of the old form; deals close ~5 days faster
- Built on Claude Managed Agents; one engineer shipped first version in weeks
- Frees reps for complex deals
Category: announcement
Date: 2026-09-30
URL: https://claude.com/blog/how-anthropics-sales-team-rebuilt-inbound-with-claude-managed-agents

## Claude for Government is now generally available
- FedRAMP High authorized Claude environment for federal and state agencies
- Moved from public beta (July 2026) to GA
- Claude Code CLI and Microsoft 365 integration in early access
- No seat fees: usage-based fixed increments with spending caps
- Admin controls for budgets, audit logging, ATO compliance docs; history stays local
Category: announcement
Date: 2026-09-30
URL: https://claude.com/blog/claude-for-government-is-now-generally-available

## Agents you can coach: how Asana builds human-agent teams with Claude
- Asana runs AI agents as coworkers inside its Work Graph
- Agents use the same projects, tasks, channels as humans
- Scoped permissions by role; editors train memory, other users give task feedback
- Agent plans and steps visible in shared tasks for review and redirection
- Shared organizational memory prevents knowledge loss
Category: announcement
Date: 2026-09-29
URL: https://claude.com/blog/agents-you-can-coach-how-asana-builds-human-agent-teams-with-claude

## Claude Sonnet 5.5
- Second model in Claude 5.5 family; 30% faster, same per-token pricing as Sonnet 5
- Typically ~30% lower cost per task via fewer tokens
- Thinking now on by default with adaptive reasoning
- Breaking API changes: forced tool_choice replaced by auto plus strict tools; computer use moved to toolset format
- New cybersecurity safeguards and distillation protections; best for everyday coding, Opus 5.5 for complex work
Category: announcement
Date: 2026-09-28
URL: https://www.anthropic.com/claude-sonnet-5-5

## Automating eval design and hillclimbing with Claude
- Adds /claude-api build-eval and /claude-api hillclimb skill commands in Claude Code
- build-eval guides sampling production tasks, validating graders, checking ambiguity
- hillclimb uses train/test splits and reverts changes that only help training
- Evals need headroom below 100%, low variance, production-like tasks
- Update with `claude update`
Category: feature update
Date: 2026-09-28
URL: https://claude.dev/blog/automating-eval-design-and-hillclimbing/

## Building with Claude Sonnet 5.5
- Guide to using Sonnet 5.5: 30% faster, fewer tokens, same pricing as Sonnet 5
- Thinking enabled by default; `between_tools` option to disable upfront thinking
- Forced tool_choice replaced with auto plus strict: true; computer use uses toolset format
- Best for well-scoped coding, high-volume dev, document/slide creation, repeated agent tasks
- Reserve Opus 5.5 for work needing careful judgment
Category: feature update
Date: 2026-09-28
URL: https://claude.dev/blog/building-with-claude-sonnet-5-5/

## Using Claude Code: Spending your effort
- Effort parameter sets compute spent per task, low to max (xhigh); new /effort command for mid-conversation changes
- Fable 5.1 and Opus 5.5 have improved effort curves without breaking prompt caching
- Higher effort boosts verification-heavy tasks (security 64% to 87%, hardware 34% to 75%)
- Guidance: low for quick edits, medium for features, high for bugs/security, max for autonomous builds
- Costs 2-3x more tokens (50k to 300k median); does not fix a wrong approach
Category: feature update
Date: 2026-09-25
URL: https://claude.dev/blog/spending-your-effort/
