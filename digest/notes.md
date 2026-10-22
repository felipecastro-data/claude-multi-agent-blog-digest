## Introducing Claude Duet
- Research preview of standalone proactive-agent app (iOS, Android, claude.ai)
- Sends morning brief across connected apps; checks apps every few hours; works in its own VM when devices are off
- Shows planned messages, payments, signatures, deletions and waits for approval
- New classifier blocks sharing of most sensitive data (card numbers, government IDs)
- Waitlist, starting with US Pro and Max; shares usage limits with Claude
Category: announcement
Date: 2026-10-21
URL: https://claude.com/resources/articles/claude-duet

## HCLTech joins the Claude Partner Network as a Global Premier partner
- HCLTech (230k+ employees, 60 countries) becomes Global Premier Partner
- Will build agentic solutions on Claude via dedicated business unit and Center of Excellence
- Embeds Claude in select HCLSoftware products; adds Claude/Claude Code to AI Force platform
- Safeguards: sandbox testing, policy guardrails, human approval for production changes
- Brings Claude into regulated sectors (banking, healthcare, telecom, manufacturing)
Category: announcement
Date: 2026-10-21
URL: https://claude.com/resources/articles/hcltech-joins-claude-partner-network

## Claude Security now scans continuously and tracks fixes
- Latest Claude Security version in public beta for Claude Enterprise
- Connects to Git repos (incl. GitHub Enterprise Server); baseline scan then risk-based rescans of changed code
- Findings auto-marked fixed when the fix ships (Claude Code or elsewhere); reopen if they recur
- Per-project knowledge base and editable threat model drive severity ratings
- API, webhooks, MCP connector, and role-based access controls
Category: feature update
Date: 2026-10-21
URL: https://claude.com/resources/articles/claude-security-now-scans-continuously-and-tracks-fixes

## Redesigning source control at Anthropic
- Anthropic built Scion, in-house source control, and moved monorepo off git in ~5 months; also built Antique code review tool
- Server-side commits/merges/history; clients fetch only needed files; sparse or virtualized checkouts
- Reported ~200x less CPU/memory than old git mirrors; CI/research checkouts from minutes to seconds
- Merges rose from ~2,500/day (May) to 30,000+/day (Sept) due to agent-driven development
- Not pitched as general git replacement; suggests git platforms adopt server-side APIs
Category: announcement
Date: 2026-10-19 (listing); article page shows Oct 13, 2026
URL: https://www.anthropic.com/engineering/redesigning-source-control

## How an Anthropic BDR in Japan runs his day with Claude Managed Agents
- Japan BDR Shahboz Ibragimov runs six agents ("Nakama") on Claude Managed Agents (beta)
- Agents route/qualify leads, update Salesforce, draft emails, summarize meetings
- Managed Agents gives single definitions, schedules, shared memory, vaulted credentials
- Cheaper models for rule-based tasks, Opus for judgment; Claude Tag handles Slack follow-ups
- Estimated ~60 hours/week saved
Category: announcement
Date: 2026-10-16
URL: https://claude.com/resources/articles/how-an-anthropic-japan-business-development-representative-runs-his-day

## How the Claude Code team does code review
- Claude writes ~90% of Claude Code codebase; automated reviewers do most reading, humans focus on risk and direction
- AI reviewer on every PR, findings verified by other agents; security review can block merges; human approvals scale with risk
- June-Sept: merged PRs more than doubled, reverts fell 40%+; PRs with substantive comments 16% to 54%
- PRs needing 5+ review rounds dropped from 8.9% to 1.5%
- Adoption checklist: REVIEW.md, capped rounds, risk tiers, incidents as eval set
Category: announcement
Date: 2026-10-16 (listing); article page shows Oct 15, 2026
URL: https://claude.dev/blog/solving-code-review-at-anthropic/

## Code Review is now generally available
- Claude Code's automated PR review is GA for Team and Enterprise
- Reviews finish in ~6-10 minutes, down from ~20 in preview
- Shorter, clearer findings (problem, trigger, fix)
- Admins set per-repo depth: Quick, Standard (default), Deep
- Setup: enable in Claude Code settings, install GitHub App, select repos
Category: feature update
Date: 2026-10-15
URL: https://claude.com/resources/articles/code-review-is-now-generally-available

## Agent observability on the Claude Platform
- Claude Platform exports OpenTelemetry traces from Managed Agents, Messages API, and SDKs (public beta)
- Add a destination in Claude Console; agent turns, model calls, tool uses sent with latency, tokens, IDs
- Follows OTel GenAI semantic conventions; works with Grafana Cloud, Datadog, Langfuse, Splunk, any OTLP endpoint
- Enables debugging, evals from production traces, org-wide token tracking
- Helps review agent behavior before granting more access
Category: feature update
Date: 2026-10-14
URL: https://claude.com/resources/articles/agent-observability-on-the-claude-platform

## Uber's CISO on building an insider threat program for AI
- Interview with Uber CISO Philip Martin on insider-threat-style oversight for AI agents
- Enterprise Frontier Safeguards let Uber keep data inaccessible to Anthropic without permission
- Uber's open-source AI Detection and Response (ADR) ingests safeguard outputs plus telemetry and LLM gateway data
- Newer models pull context from code, docs, tickets for security reviews and threat modeling
- Argues agents need same oversight as employees; priorities are real-time intervention and detecting emerging model behaviors
Category: announcement
Date: 2026-10-13
URL: https://claude.com/resources/articles/uber-s-ciso-on-building-an-insider-threat-program-for-ai

## Building effective agent automations
- Reference implementation of scheduled "daily brief" agent on Claude Managed Agents (beta); reads Slack and GitHub PRs, posts brief to Slack
- Configured via files applied with `ant` CLI (schedule in deployment.md, agent in agent.md); credentials in vault
- Per-source bookmarks instead of fixed windows; failed sources reported as unreadable; send counted only on Slack "ok": true
- Guardrails: read-only GitHub token and memory store, host allowlist, per-run budget cap
- Code at anthropics/claude-quickstarts (managed-agents/daily-brief)
Category: feature update
Date: 2026-10-08
URL: https://claude.dev/blog/building-effective-agent-automations/
