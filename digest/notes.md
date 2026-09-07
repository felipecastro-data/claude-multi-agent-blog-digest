## A guide to the anatomy of effective commerce agents
- Guide for architects/eng leaders on building production commerce agents with Claude
- Recommends single Claude model in standard agent loop with skills/tools over multiple subagents
- Prompt caching flagged as biggest cost lever; deployed systems see 90-99% cache hit rates
- Financial transactions must be enforced in code, not prompts; model proposes, humans/policy approve
- Long-term memory belongs in databases; evals need snapshot-based testing incl. negative cases
Category: announcement
Date: 2026-09-02
URL: https://claude.com/blog/the-anatomy-of-effective-commerce-agents

## Building commerce agents with Claude
- Anthropic launched a commerce agent blueprint for retailers to build shopping/merchant agents
- Shopping agent: multi-item search, personalized recs, in-chat UI, cart building, customer service
- Merchant agent: sales analysis, inventory tracking, pricing/promo recommendations, marketing drafts
- Enterprise customers report carts up to 35% larger, 60% higher purchase completion likelihood
- Available via Claude API, Bedrock, Microsoft Foundry, Vertex AI; partners include Accenture, Mastercard, Visa, Shopify, Priceline
Category: feature update
Date: 2026-09-02
URL: https://claude.com/blog/claude-for-commerce-agents

## How Anthropic employees use Claude Tag
- Showcases internal use of Claude Tag, a Slack integration to tag @Claude in conversations
- Marketing: generated polished 2-page doc from 15-message thread in 45 minutes
- Ops: identified 24 accounts requesting a feature and compiled 23 open issues from 120 findings in ~50 min
- Legal: pre-screening marketing assets via dedicated channel cut review time from a day to 30 min
- No new feature; Claude Tag currently in public beta on Team/Enterprise plans
Category: announcement
Date: 2026-08-28
URL: https://claude.com/blog/how-anthropic-employees-use-claude-tag

## Claude for Teachers, now available for U.S. K-12 schools and districts
- Expanded Claude for Teachers from individual educators to district-wide free Enterprise access
- Adds SSO, role-based access controls, and domain claiming for centralized management
- Free access to teaching skills aligned with state standards across all 50 states
- New lesson prep and standards-aligned understanding-check tools
- Sign up by June 30, 2027 for one year free; FERPA-aligned data protections, no training on student data
Category: feature update
Date: 2026-08-28
URL: https://claude.com/blog/claude-for-teachers-now-available-for-schools-and-districts

## How Warp builds self-improving agents on Claude
- Warp (AI terminal) built a feedback loop system to continuously improve its Claude-based agents
- Two-skill framework: inner skill holds domain knowledge, outer "improver" skill analyzes feedback
- Skills are file-based, making updates reviewable/mergeable via standard code review
- Best practices: write principles not rigid rules, explain rationale, capture feedback easily, keep skills modular
- Example: triage agent updates via maintainer feedback deployed through pull requests
Category: announcement
Date: 2026-08-26
URL: https://claude.com/blog/how-warp-builds-self-improving-agents-on-claude

## Claude in Chrome is generally available
- Claude in Chrome extension moved from pilot to general availability on all paid plans
- Claude can now take autonomous browser actions without per-step approval
- Safety classifier validates actions match user requests before execution
- Accesses internal dashboards, legacy systems, vendor portals using existing user logins
- Strengthened prompt injection defenses: expanded training, content-screening "probes," action-verification classifiers
Category: feature update
Date: 2026-08-26
URL: https://claude.com/blog/claude-in-chrome-generally-available

## Claude gets its own browser in Cowork
- Claude Cowork now has a built-in browser, separate from users' personal browsers
- Can navigate sites, fill forms, retrieve info without needing personal browser access
- Users can optionally transfer logins from Chrome/Edge/Firefox; banking/email/SSO excluded by default
- Includes prompt injection safeguards
- Available on Pro, Max, Team desktop app; Enterprise admins can enable immediately; complements (not replaces) Claude in Chrome
Category: feature update
Date: 2026-08-26
URL: https://claude.com/blog/cowork-built-in-browser

## Bain & Company joins the Claude Partner Network as a Global Premier partner
- Anthropic and Bain announced global partnership for enterprise AI deployment using Claude
- Bain rolled out Claude to all 19,000 employees across Claude.ai, Cowork, Claude Code, Excel, M365
- 7,000+ employees actively used Claude within weeks of pilot; two-thirds adopted Claude for Excel
- Bain reports 30-50% productivity gains on legacy code modernization client engagements
- Bain joins as Global Premier partner, contributing 1,500+ AI/data/engineering experts
Category: announcement
Date: 2026-08-25
URL: https://claude.com/blog/bain-company-joins-the-claude-partner-network-as-a-global-premier-partner
