document.addEventListener("DOMContentLoaded", function () {
    const searchField = document.querySelector(".search-field");
    const resultsContainer = document.getElementById("search-results");

    function renderCards(cardsArray) {
        if (cardsArray.length === 0) {
            resultsContainer.innerHTML = `
            <p class="no-results-message">
                404 Rezept nicht gefunden. 👻
            </p>`;
            return;
        }
      resultsContainer.innerHTML = cardsArray.map(card => `
        <a href="${card.url}" class="card result-item">
            <img src="${card.img}" alt="${card.title}" class="card-img">
            <div class="card-content">
                <h4 class="card-title">${card.title}</h4>
                <p class="card-description">${card.description}</p>
            </div>
        </a>
    `).join('');
    }

    function filterRecipes() {
        const searchQuery = searchField.value.toLowerCase().trim();

        if (searchQuery === "") {
            resultsContainer.style.display = "none";
            resultsContainer.innerHTML = "";
            return;
        }

        resultsContainer.style.display = "block";

        const searchTerms = searchQuery.split(/\s+/);

        const filtered = recipes.filter(recipe => {
            const title = recipe.title.toLowerCase();
            const description = recipe.description.toLowerCase();
            return searchTerms.every(term => title.includes(term) || description.includes(term));
        });

        renderCards(filtered);
    }

    searchField.addEventListener("input", filterRecipes);

    const searchButton = document.querySelector(".search-button");
    if (searchButton) {
        searchButton.addEventListener("click", function(event) {
            event.preventDefault();
            filterRecipes();
        });
    }

    searchField.addEventListener("keypress", function(event) {
        if(event.key === "Enter") {
            event.preventDefault();
            filterRecipes();
        }
    });
});
