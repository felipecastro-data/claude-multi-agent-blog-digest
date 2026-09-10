## Reducing cost and improving performance with Claude Platform
- Explains strategies to cut Claude Platform costs without hurting performance: prompt cache optimization, removing outdated prompt patterns, calibrating effort levels
- Introduced new Claude Code commands: `/claude-api prompt-audit`, `/claude-api hillclimb`, `/claude-api cost-optimize`
- These commands audit prompts for anti-patterns, search model/effort configs, and run holistic cost audits
- Real-world benchmarks showed 52-73% cost reduction while maintaining or improving accuracy
- Shows cost and performance are not opposing goals, enabling more efficient enterprise deployment
Category: feature update
Date: 2026-09-08
URL: https://claude.com/blog/reducing-cost-and-improving-performance-with-claude-platform

## A guide to the anatomy of effective commerce agents
- Guide for engineers on building production-ready commerce agents with Claude
- Covers architecture design, speed/cost optimization, and operational best practices at scale
- Released a reference blueprint repository with runnable examples (retail, travel, telecom, entertainment)
- Recommends using skills instead of subagents to preserve context/quality; targets 90-99% cache hit rates
- Based on real deployments showing larger carts and more efficient seller operations; stresses evaluation frameworks since small prompt/tool changes can shift agent behavior
Category: announcement
Date: 2026-09-02
URL: https://claude.com/blog/the-anatomy-of-effective-commerce-agents

## Building commerce agents with Claude
- Anthropic launched a comprehensive blueprint for shopping and merchant agents powered by Claude
- Includes working implementations, integration patterns, guardrails, reference code deployable via Claude API, Amazon Bedrock, Microsoft Foundry, Google Cloud Vertex AI
- Released on GitHub with live demos for retail, travel, telecom, ticketing; includes a Claude Code plugin for customization
- Partnerships with Accenture, Mastercard, and Visa
- Enterprise results: carts up to 35% larger, shoppers 60% more likely to complete purchase; merchant agents provide analytics, inventory tracking, promo recommendations with human-in-the-loop approval
Category: announcement
Date: 2026-09-02
URL: https://claude.com/blog/claude-for-commerce-agents

## How Anthropic employees use Claude Tag
- Showcases internal use of Claude Tag (brings Claude into Slack conversations) across three workflows
- Marketing: converted a 15-message Slack thread into a polished one-pager in 45 minutes
- Product ops: compiled feature requests/customer issues from Slack channels in 26-50 minutes vs. a full week
- Legal: pre-screened marketing assets for legal/factual issues, cutting review time from a day to 30 minutes
- Illustrates delegating research/synthesis to Claude while keeping human judgment for final calls
Category: announcement
Date: 2026-08-28
URL: https://claude.com/blog/how-anthropic-employees-use-claude-tag

## Claude for Teachers, now available for U.S. K-12 schools and districts
- Claude for Teachers now offered free as an Enterprise offering for U.S. K-12 schools/districts, expanding beyond individual educator program
- Districts get centralized management via single org account with SSO and role-based access controls
- Added two new teaching skills: lesson preparation and check for understanding (math-focused); updated Claude for K-12 Academy curriculum
- Pilot evaluation program launching in Detroit Public Schools
- FERPA-aligned commitments org-wide; student data protected from model training; free for a year if signed up by June 30, 2027
Category: feature update
Date: 2026-08-28
URL: https://claude.com/blog/claude-for-teachers-now-available-for-schools-and-districts

## How Warp builds self-improving agents on Claude
- Details Warp's (AI terminal company) self-improving agent framework built using Claude's Agent Skills
- Two-skill architecture: an "inner skill" with domain knowledge that executes tasks, and an "outer/improver skill" that analyzes feedback to refine the inner skill
- Automates prompt improvement (vs. manual engineering) since first-pass agent prompts often only hit ~80% accuracy
- Skills treated as editable files flowing through standard code review workflows, making the approach reproducible/scalable
- Best practices: write principles not rigid rules, explain reasoning, prioritize feedback quality over volume, invest in the improver skill, keep humans in control of changes
Category: announcement
Date: 2026-08-26
URL: https://claude.com/blog/how-warp-builds-self-improving-agents-on-claude

## Claude in Chrome is generally available
- Claude in Chrome browser extension is now generally available on all paid plans
- Lets Claude view web pages and take autonomous actions (click, type, fill forms) on sites without direct integrations
- Major change: Claude now acts autonomously in the browser instead of requiring approval for every action, with safety validation per action
- Enhanced defenses against prompt injection attacks (malicious hidden instructions)
- No attacks succeeded against Claude Sonnet 5 or Opus 5 with probes plus automatic approval safety classifiers during testing
Category: feature update
Date: 2026-08-26
URL: https://claude.com/blog/claude-in-chrome-generally-available

## Claude gets its own browser in Cowork
- Claude Cowork now includes a built-in, isolated browser for Claude to navigate websites, read pages, fill forms, and complete web tasks independently
- Previously Claude needed the Claude in Chrome extension and access to the user's personal browser
- New browser is fully separate from user's tabs, bookmarks, and passwords, addressing privacy concerns
- Users can delegate web tasks (filling forms, pulling dashboard data, working through portals) while continuing other work
- Rolling out this week to Pro, Max, and Team plans in the Claude desktop app; Enterprise admins can enable immediately
Category: feature update
Date: 2026-08-26
URL: https://claude.com/blog/cowork-built-in-browser
