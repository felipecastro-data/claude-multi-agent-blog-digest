// Placeholder data — will be replaced by a fetch of data/articles.json in a later step.
const ARTICLES = [
  {
    title: "Claude Opus 5 Now Available in the API",
    category: "announcement",
    date: "August 15, 2026",
    summary:
      "Anthropic has released Claude Opus 5, its most capable model yet, with improved reasoning and coding performance. The model is available today via the API, Claude apps, and major cloud platforms. Pricing remains unchanged from the previous Opus generation.",
    url: "https://claude.com/blog",
  },
  {
    title: "New Extended Thinking Controls for Developers",
    category: "feature update",
    date: "August 12, 2026",
    summary:
      "Developers can now fine-tune how long Claude spends reasoning before responding, with new API parameters for budget and effort level. Early testers report better cost predictability on long-running agentic tasks. Documentation and migration notes are available now.",
    url: "https://claude.com/blog",
  },
  {
    title: "Claude Code Adds Native Subagent Orchestration",
    category: "feature update",
    date: "August 9, 2026",
    summary:
      "Claude Code now supports defining and coordinating multiple specialized subagents within a single project, each with its own tools and instructions. This makes it easier to build pipelines where one agent gathers information and another refines it. The feature is available to all Claude Code users today.",
    url: "https://claude.com/blog",
  },
  {
    title: "Anthropic Expands Enterprise Data Residency Options",
    category: "announcement",
    date: "August 4, 2026",
    summary:
      "New regional data residency options give enterprise customers more control over where their data is processed and stored. The expansion covers additional regions in Europe and Asia-Pacific, with more planned by year end. Existing enterprise agreements can opt in without renegotiation.",
    url: "https://claude.com/blog",
  },
];

function renderArticles(articles) {
  const list = document.getElementById("article-list");
  list.innerHTML = "";

  articles.forEach((article, index) => {
    const card = document.createElement("article");
    card.className = "card";

    const cardId = `article-${index}`;

    card.innerHTML = `
      <button class="card-header" aria-expanded="false" aria-controls="${cardId}">
        <span class="card-tag">${article.category}</span>
        <h2 class="card-title">${article.title}</h2>
        <span class="card-meta">
          <span class="card-date">${article.date}</span>
          <svg class="card-chevron" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </button>
      <div class="card-body" id="${cardId}">
        <div class="card-body-inner">
          <p class="card-summary">${article.summary}</p>
          <a class="card-link" href="${article.url}" target="_blank" rel="noopener noreferrer">
            Read original &rarr;
          </a>
        </div>
      </div>
    `;

    const header = card.querySelector(".card-header");
    header.addEventListener("click", () => {
      const isExpanded = card.classList.toggle("expanded");
      header.setAttribute("aria-expanded", String(isExpanded));
    });

    list.appendChild(card);
  });
}

function renderToday() {
  const el = document.getElementById("today-date");
  const today = new Date();
  el.textContent = today.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

renderToday();
renderArticles(ARTICLES);
