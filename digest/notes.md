## A guide to the anatomy of effective commerce agents
- Comprehensive guide on building production-ready commerce agents with Claude
- Covers architecture, optimization (speed/cost), and safe operation at scale
- Released a reference implementation on GitHub (anthropics/commerce-agents)
- Recommends single-agent-with-skills over multi-agent designs; prompt caching hits 90-99%
- Safety enforcement should live in the harness, not the prompt; covers memory & eval practices
Category: announcement
Date: 2026-09-02
URL: https://claude.com/blog/the-anatomy-of-effective-commerce-agents

## Building commerce agents with Claude
- Anthropic launched a "commerce agents" blueprint for retailers to build AI shopping assistants
- Includes shopping agent (search, cart, customer service) and merchant agent (analytics, inventory, pricing)
- Reference implementations for retail, travel, telecom, and ticketing verticals
- Deployable via Claude API, Amazon Bedrock, Microsoft Foundry, or Google Cloud Vertex AI
- Early adopters report carts up to 35% larger and 60% higher purchase completion; partners include Shopify, Priceline, Visa, Mastercard
Category: feature update
Date: 2026-09-02
URL: https://claude.com/blog/claude-for-commerce-agents

## How Anthropic employees use Claude Tag
- Showcases internal use of Claude Tag, which lets employees tag Claude in Slack like a colleague
- Marketing manager turned a 15-message Slack thread into a polished doc in 45 minutes
- Ops specialist consolidated ~24 customer accounts' feature requests from months of history in 26 minutes
- Legal team uses a dedicated channel where Claude pre-screens marketing assets, cutting review time from a day to 30 minutes
- Illustrates delegation of synthesis/research tasks so staff focus on judgment calls
Category: announcement
Date: 2026-08-28
URL: https://claude.com/blog/how-anthropic-employees-use-claude-tag

## Claude for Teachers, now available for U.S. K-12 schools and districts
- Claude for Teachers expands from individual educators to a free Enterprise offering for schools/districts
- Adds centrally managed orgs with SSO and role-based access controls
- New teaching skills: lesson preparation and check-for-understanding (math-focused at launch)
- FERPA-aligned data protection; Claude for Teachers data not used for model training
- Schools signing up by June 30, 2027 get a full year free
Category: feature update
Date: 2026-08-28
URL: https://claude.com/blog/claude-for-teachers-now-available-for-schools-and-districts

## How Warp builds self-improving agents on Claude
- Warp (AI terminal company) built self-improving agents using Claude's Agent Skills
- Uses paired base skill + improver skill to create feedback-driven learning loops
- Human feedback automatically updates skill files, reviewed via normal code-review workflows
- Avoids manual prompt tweaking; improvements compound and scale across teams
- Deployed across code review, issue triage, and spec-writing agents for hundreds of developers
Category: feature update
Date: 2026-08-26
URL: https://claude.com/blog/how-warp-builds-self-improving-agents-on-claude

## Claude in Chrome is generally available
- Claude in Chrome extension is now GA on all paid plans
- Enables autonomous browser actions without approval for every step
- New safeguards: expanded prompt-injection attack recognition, content screening of web pages before acting, and action-verification classifier
- Testing showed zero successful attacks against Sonnet 5/Opus 5 with safeguards enabled
- Enables safer enterprise browser automation
Category: feature update
Date: 2026-08-26
URL: https://claude.com/blog/claude-in-chrome-generally-available

## Claude gets its own browser in Cowork
- Claude Cowork desktop app now has a built-in browser separate from the user's personal browser
- Claude cannot access personal tabs, bookmarks, or passwords; users can selectively import credentials
- Rolling out to Pro, Max, Team on macOS/Windows/Linux this week; Enterprise admins can activate now
- Built-in browser handles independent research/data tasks; Claude in Chrome remains for collaborative work on open pages
- Includes prompt-injection safeguards; advises starting with trusted sites
Category: feature update
Date: 2026-08-26
URL: https://claude.com/blog/cowork-built-in-browser

## Bain & Company joins the Claude Partner Network as a Global Premier partner
- Anthropic and Bain & Company announced a strategic partnership
- Bain has deployed Claude to its 19,000 employees across multiple applications
- Firms will collaborate on client AI strategy, tech modernization, and operations engagements
- Bain reports 30-50% productivity gains on legacy code modernization projects
- Combines Claude's capabilities with Bain's 1,500+ AI specialists
Category: announcement
Date: 2026-08-25
URL: https://claude.com/blog/bain-company-joins-the-claude-partner-network-as-a-global-premier-partner

## Claude's memory works everywhere, and you decide what's in it
- Claude's memory now syncs consistently across Cowork, chat, web, desktop, and mobile
- Memory updates in real-time during chats rather than after the fact
- Users can view, edit, and delete individual memory topics in settings
- By default avoids storing sensitive topics (health, religion) unless enabled; SSNs/criminal records never stored
- Context now carries seamlessly between Cowork and chat
Category: feature update
Date: 2026-08-25
URL: https://claude.com/blog/claudes-memory-works-everywhere-and-you-decide-whats-in-it

## How an Anthropic field marketer uses Claude Code to send weekly personalized updates to every sales rep
- Field marketer Adam Ward automated personalized weekly sales briefings using Claude Code
- Replaced manual Sunday-night slide prep with auto-generated tailored Slack messages per rep
- Connects Claude to BigQuery, integrating HubSpot, Salesforce, and Slack data
- Expanded from one sales team to BDRs, customer success, and alliance teams
- Non-technical use case: "you don't need to code, you need to explain"; doubled event registrations in one week
Category: announcement
Date: 2026-08-24
URL: https://claude.com/blog/how-an-anthropic-field-marketer-uses-claude-code-to-send-weekly-personalized-updates-to-every-sales-rep
