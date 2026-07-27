/* Asian Meat Kitchen – Interactive App Logic */

(function () {
  const grid = document.getElementById("recipe-grid");
  const favGrid = document.getElementById("favorites-grid");
  const countEl = document.getElementById("result-count");
  const searchInput = document.getElementById("search-input");
  const cuisineFilter = document.getElementById("cuisine-filter");
  const proteinFilter = document.getElementById("protein-filter");
  const typeFilter = document.getElementById("type-filter");
  const modal = document.getElementById("recipe-modal");
  const modalBody = document.getElementById("modal-body");
  const noFavMsg = document.getElementById("no-favorites");
  const themeToggle = document.getElementById("theme-toggle");

  // ---- Dark mode ----
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
    themeToggle.title = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
    localStorage.setItem("amk-theme", theme);
  }

  // Init theme: saved preference → system preference → light
  const savedTheme = localStorage.getItem("amk-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });

  // Favorites from localStorage
  let favorites = JSON.parse(localStorage.getItem("amk-favorites") || "[]");

  function saveFavorites() {
    localStorage.setItem("amk-favorites", JSON.stringify(favorites));
  }

  function isFavorite(id) {
    return favorites.includes(id);
  }

  function toggleFavorite(id) {
    if (isFavorite(id)) {
      favorites = favorites.filter((f) => f !== id);
    } else {
      favorites.push(id);
    }
    saveFavorites();
    render();
    if (document.getElementById("favorites-view").classList.contains("active")) {
      renderFavorites();
    }
  }

  // Navigation
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".nav-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const view = btn.dataset.view;
      document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
      document.getElementById(view + "-view").classList.add("active");
      if (view === "favorites") renderFavorites();
    });
  });

  // Filtering
  function getFiltered() {
    const q = searchInput.value.trim().toLowerCase();
    const cuisine = cuisineFilter.value;
    const protein = proteinFilter.value;
    const type = typeFilter.value;

    return recipes.filter((r) => {
      if (cuisine !== "all" && r.cuisine !== cuisine) return false;
      if (protein !== "all") {
        if (protein === "veg" && r.protein !== "veg") return false;
        if (protein !== "veg" && r.protein !== protein) return false;
      }
      if (type !== "all" && r.type !== type) return false;
      if (q) {
        const hay = (r.title + " " + r.description + " " + r.ingredients.join(" ") + " " + r.cuisine).toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }

  function createCard(r) {
    const card = document.createElement("article");
    card.className = "recipe-card";
    card.innerHTML = `
      <div class="card-header">
        <h3 class="card-title">${r.title}</h3>
        <button class="fav-btn ${isFavorite(r.id) ? "active" : ""}" data-id="${r.id}" title="Toggle favorite">★</button>
      </div>
      <div class="card-meta">
        <span class="badge cuisine">${r.cuisine}</span>
        <span class="badge protein">${r.protein}</span>
        <span class="badge type">${r.type}</span>
      </div>
      <p class="card-desc">${r.description}</p>
      <div class="card-footer">
        <span>${r.time}</span>
        <span>${r.servings} servings</span>
      </div>
    `;
    card.addEventListener("click", (e) => {
      if (e.target.classList.contains("fav-btn")) {
        e.stopPropagation();
        toggleFavorite(r.id);
        return;
      }
      openModal(r);
    });
    return card;
  }

  function render() {
    const list = getFiltered();
    grid.innerHTML = "";
    list.forEach((r) => grid.appendChild(createCard(r)));
    countEl.textContent = `Showing ${list.length} of ${recipes.length} recipes`;
  }

  function renderFavorites() {
    favGrid.innerHTML = "";
    const favRecipes = recipes.filter((r) => isFavorite(r.id));
    if (favRecipes.length === 0) {
      noFavMsg.classList.remove("hidden");
    } else {
      noFavMsg.classList.add("hidden");
      favRecipes.forEach((r) => favGrid.appendChild(createCard(r)));
    }
  }

  function openModal(r) {
    modalBody.innerHTML = `
      <h2 class="modal-title">${r.title}</h2>
      <div class="modal-meta">
        <span class="badge cuisine">${r.cuisine}</span>
        <span class="badge protein">${r.protein}</span>
        <span class="badge type">${r.type}</span>
        <span class="badge">${r.time}</span>
        <span class="badge">${r.servings} servings</span>
      </div>
      <p style="margin-bottom:1.25rem;color:#555">${r.description}</p>

      <div class="modal-section">
        <h3>Ingredients</h3>
        <ul class="ingredients-list">
          ${r.ingredients.map((i) => `<li>${i}</li>`).join("")}
        </ul>
      </div>

      <div class="modal-section">
        <h3>Directions</h3>
        <ol class="directions-list">
          ${r.directions.map((d) => `<li>${d}</li>`).join("")}
        </ol>
      </div>

      <div class="modal-section">
        <h3>Substitution Suggestions</h3>
        <div class="subs-box">${r.substitutions}</div>
      </div>

      <div class="modal-actions">
        <button class="btn btn-primary" id="modal-fav-btn">${isFavorite(r.id) ? "★ Remove from Favorites" : "☆ Add to Favorites"}</button>
        <button class="btn btn-secondary" onclick="window.print()">Print Recipe</button>
      </div>
    `;
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    document.getElementById("modal-fav-btn").addEventListener("click", () => {
      toggleFavorite(r.id);
      openModal(r); // refresh button text
    });
  }

  function closeModal() {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }

  document.querySelector(".modal-close").addEventListener("click", closeModal);
  document.querySelector(".modal-backdrop").addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // Event listeners for filters
  [searchInput, cuisineFilter, proteinFilter, typeFilter].forEach((el) => {
    el.addEventListener("input", render);
    el.addEventListener("change", render);
  });

  // Initial render
  render();
})();
