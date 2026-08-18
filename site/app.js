const ARTICLES_URL = "data/articles.json";

function formatDate(dateStr) {
  // Expects "YYYY-MM-DD". Falls back to the raw string if it doesn't parse.
  const parsed = new Date(`${dateStr}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return dateStr;
  return parsed.toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function renderLoading() {
  const list = document.getElementById("article-list");
  list.innerHTML = `<p class="state-message">Loading today's digest…</p>`;
}

function renderError() {
  const list = document.getElementById("article-list");
  list.innerHTML = `<p class="state-message">Couldn't load the digest right now. Please try again later.</p>`;
}

function renderEmpty() {
  const list = document.getElementById("article-list");
  list.innerHTML = `<p class="state-message">No articles yet. Check back soon.</p>`;
}

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
          <span class="card-date">${formatDate(article.date)}</span>
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

async function loadArticles() {
  renderLoading();
  try {
    const response = await fetch(ARTICLES_URL, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const articles = await response.json();
    if (!Array.isArray(articles) || articles.length === 0) {
      renderEmpty();
      return;
    }
    renderArticles(articles);
  } catch (err) {
    console.error("Failed to load articles:", err);
    renderError();
  }
}

renderToday();
loadArticles();
