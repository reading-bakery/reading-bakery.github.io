document.addEventListener("DOMContentLoaded", function () {
    const searchField = document.querySelector(".search-field");
    const resultsContainer = document.getElementById("search-results");

    function renderCards(cardsArray) {
        if (cardsArray.length === 0) {
            resultsContainer.innerHTML = "<p>404 Rezept nicht gefunden. 👻</p>";
            return;
        }
        resultsContainer.innerHTML = cardsArray.map(card => `
            <a href="${card.url}" class="card" style="
                display: flex;
                gap: 10px;
                margin-bottom: 10px;
                text-decoration: none;
                color: inherit;
                border: 1px solid #ccc;
                padding: 10px;
                border-radius: 6px;
                align-items: center;">
                <img src="${card.img}" alt="${card.title}" style="
                    width: 100px;
                    height: 100px;
                    object-fit: cover;
                    border-radius: 6px;
                    flex-shrink: 0;
                ">
                <div style="display: flex; flex-direction: column; justify-content: center;">
                    <h4 class="subtitle" style="margin: 0;">${card.title}</h4>
                    <p class="card-text" style="margin: 0; font-size: 0.9em; color: #555;">${card.description}</p>
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