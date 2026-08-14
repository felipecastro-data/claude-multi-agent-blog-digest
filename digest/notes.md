## Self-service data analytics in Slack: how Anthropic deploys Claude Tag for ad-hoc questions
- Anthropic extended Claude Tag (its Slack bot) so non-technical employees can ask data analytics questions directly in Slack and get answers backed by governed data definitions
- Builds on a prior Claude Code implementation; now company-wide in Slack, answering roughly 95% of queries accurately via a semantic layer, skill files, and evaluation methods
- Skill files refresh continuously to track data model changes and prevent stale answers; the agent also pulls in business context like incident trackers, Slack threads, and docs
- Access is deliberately scoped: a limited-permission service account queries the warehouse, and all channel members inherit that same access level ("everyone who can mention the bot has the bot's data access")
- Structured logging tracks adoption and correctness via reaction feedback; the system also automates repetitive tasks like weekly readouts and pipeline monitoring
Category: feature update
URL: https://claude.com/blog/self-service-data-analytics-in-slack-how-anthropic-deploys-claude-tag-for-ad-hoc-questions

## Claude Tag now reads even more of the room
- Claude Tag now evaluates broader channel context, memory, and standing instructions instead of judging one message at a time when deciding whether to respond proactively
- Replaces the prior "lightweight classifier" approach that looked at isolated messages; accuracy at deciding when to engage improved by roughly 30%
- Can now recognize cross-cutting discussions, e.g. connecting two engineers separately debugging the same underlying issue, without being explicitly tagged
- Four response strategies: inline replies, threaded deep work, routing to existing workstreams, or staying silent; it can "sleep" in inactive channels and wake instantly on mention
- Additional context processing doesn't count toward usage limits or spend; users can customize behavior with plain-language instructions or disable auto-responses; live today for Claude Teams and Enterprise
Category: feature update
URL: https://claude.com/blog/claude-tag-now-reads-even-more-of-the-room

## Securing the frontier: How JetBrains evaluates and deploys Claude Fable 5
- JetBrains CTO Vladislav Tankov describes how the company evaluates and deploys Claude Fable 5, focusing on performance against private codebases and enterprise deployment strategy
- Claude Fable 5 is now JetBrains' preferred model for complex coding tasks, outperforming previous versions in their internal benchmarks
- On JetBrains' private-repo Python benchmark, Fable 5 hit a 44.3% pass rate versus 28.2% for Opus 4.8, solving 18 more tasks while maintaining code quality
- Fable 5 also needed 22% fewer steps than Opus 4.8 to reach a solution; key use cases include long-running agentic coding, rich text editor implementation, cross-framework app rewrites, and security vulnerability testing
- Tankov stresses treating safeguards and data retention as central to model use, viewing Anthropic's red-teaming as foundational to safe deployment rather than relying only on model-level restrictions
Category: announcement
URL: https://claude.com/blog/how-jetbrains-evaluates-and-deploys-claude-fable-5
