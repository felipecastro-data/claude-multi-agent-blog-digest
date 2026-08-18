## Claude on call: How Claude Tag serves as Anthropic's first responder for CI/CD failures
- Anthropic deployed Claude Tag as an automated first responder for CI/CD incident detection, triage, and resolution assistance
- Orchestrator/executor agent workflow investigates failures across Grafana, logs, GitHub, Kubernetes and publishes initial analysis reports
- Uses memory across Slack channels and a self-improving lessons-learned database; integrates with Datadog, Grafana, PagerDuty, GitHub, Kubernetes
- Median time to first analysis is 14 minutes (fastest root-cause ID: 4 minutes), cutting on-call engineer workload and after-hours disruption
- Requires Claude Team or Enterprise plan; open-source setup kit available on GitHub for other orgs to replicate
Category: announcement
URL: https://claude.com/blog/ai-ci-cd-on-call

## The Claude Science product guide
- Introduces Claude Science, a new beta AI workbench built specifically for life sciences research and analysis
- Uses a local daemon architecture that keeps data on-premises while dispatching compute to GPUs, SLURM clusters, or cloud accounts
- Includes specialized life sciences skills and database connectors; complements Claude Chat, Cowork, Code, and Microsoft 365 for different research tasks
- Addresses an adoption gap: 78% of biopharma/medtech leaders expect AI to drive major change, but only 14% have fully implemented AI tools; 91% of scientists want more AI in research, and 79% cite trust/reliability as top barrier
- Five design principles ensure analysis withstands peer review; three-phase adoption roadmap (Foundation, Pilot, Scale); customers include Novo Nordisk, Garvan Institute, and Benchling
Category: announcement
URL: https://claude.com/blog/the-claude-science-product-guide
