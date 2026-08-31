## How Anthropic Employees Use Claude Tag
- Claude Tag is a Slack integration: tag @Claude in a thread and it reads context to complete tasks
- Showcases 3 internal use cases: marketing collateral generation, consolidating scattered feature requests, expediting legal document review
- Converts multi-hour/multi-day tasks into ~30-minute turnarounds
- Reduces manual info synthesis while keeping human oversight for judgment/verification
- Demonstrates internal dogfooding of Claude across non-engineering teams
Category: feature update
Date: 2026-08-28
URL: https://claude.com/blog/how-anthropic-employees-use-claude-tag

## Claude for Teachers, now available for U.S. K-12 schools and districts
- Claude for Teachers now offered free as an Enterprise-managed offering for U.S. K-12 schools/districts
- Districts get centrally managed accounts: SSO, role-based access controls, domain claiming
- Two new teaching skills added: lesson preparation and check for understanding
- Improved accessibility in student-facing materials; updated K-12 Academy with free AI fluency content
- FERPA-aligned; district holds terms/privacy agreement; data not used for model training; free year for signups by June 30, 2027
Category: announcement
Date: 2026-08-28
URL: https://claude.com/blog/claude-for-teachers-now-available-for-schools-and-districts

## How Warp Builds Self-Improving Agents on Claude
- Warp (AI terminal/dev environment) built self-improving agents using Claude's Skills API
- Uses two linked skills: a base skill that performs tasks, an improver skill that refines it from human feedback
- Feedback loop: human input captured, analyzed by an observer agent, converted into small reviewable edits to skill files
- Updates go through standard code-review workflows before deployment
- Enables compounding improvement over time rather than static agents; scaled across hundreds of contributors, thousands of code reviews
Category: feature update
Date: 2026-08-26
URL: https://claude.com/blog/how-warp-builds-self-improving-agents-on-claude

## Claude in Chrome is Generally Available
- Browser extension letting Claude access/interact with sites lacking direct integrations (dashboards, legacy systems, vendor portals)
- Moves from pilot to general availability across all paid Claude plans
- Claude can now autonomously approve safe actions instead of requiring manual approval every step
- New safety defenses: expanded prompt-injection attack detection training, content-screening probes, action verification classifiers
- Testing shows 0% attack success against Claude Sonnet 5 and Opus 5 with safeguards enabled
Category: feature update
Date: 2026-08-26
URL: https://claude.com/blog/claude-in-chrome-generally-available

## Claude Gets Its Own Browser in Cowork
- Claude Cowork desktop app now has an integrated browser for Claude to navigate sites, read pages, fill forms independently
- Previously web access required the Claude in Chrome extension and sharing your personal browser
- New browser: site-by-site login transfer from Chrome/Edge/Firefox, exclusions for sensitive sites (banking, email) unless approved, same anti-prompt-injection safeguards as Claude in Chrome
- Claude never sees tabs, bookmarks, or passwords, preserving privacy while delegating web tasks
- Rolling out this week to Pro, Max, Team plans; Enterprise can enable immediately
Category: feature update
Date: 2026-08-26
URL: https://claude.com/blog/cowork-built-in-browser

## Bain & Company Joins the Claude Partner Network as a Global Premier Partner
- Anthropic and Bain & Company formalize strategic partnership; Bain joins as Global Premier member of Claude Partner Network
- Bain deployed Claude across its entire 19,000-person workforce, with 7,000+ employees actively using it within weeks
- Bain now offers combined Claude technology plus consulting expertise to enterprise clients
- Demonstrated productivity gains of 30-50% on legacy code modernization projects
- Positions Bain's internal adoption as a proven deployment model for advising client rollouts
Category: announcement
Date: 2026-08-25
URL: https://claude.com/blog/bain-company-joins-the-claude-partner-network-as-a-global-premier-partner

## Claude's Memory Works Everywhere, and You Decide What's in It
- Unified memory system now works across both Claude chat and Claude Cowork (previously chat-only)
- Retains info about users, projects, preferences to reduce repetitive explanations
- Real-time memory updates during conversations rather than post-conversation summaries
- Transparent "Topics" interface to view, edit, delete saved information
- Sensitive topics (health, beliefs, etc.) excluded by default, can be enabled by user; context set in chat carries over to Cowork outputs
Category: feature update
Date: 2026-08-25
URL: https://claude.com/blog/claudes-memory-works-everywhere-and-you-decide-whats-in-it

## How an Anthropic Field Marketer Uses Claude Code to Send Weekly Personalized Updates to Every Sales Rep
- Anthropic field marketer Adam Ward built a Claude Code system generating personalized weekly sales-rep briefings sent via Slack every Monday
- Automated a manual Sunday-night slide-deck process into individualized digests per rep tied to their specific accounts
- Pulls data from BigQuery, HubSpot, Salesforce, Slack, enriched with blog posts, webinars, customer stories, partner events
- Expanded beyond sales to BDRs, customer success, and alliance teams; doubled event registrations for one executive dinner
- Now runs autonomously without manual review before sending, built via iterative prompt engineering
Category: announcement
Date: 2026-08-24
URL: https://claude.com/blog/how-an-anthropic-field-marketer-uses-claude-code-to-send-weekly-personalized-updates-to-every-sales-rep
