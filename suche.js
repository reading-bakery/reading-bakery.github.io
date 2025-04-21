document.addEventListener("DOMContentLoaded", function () {
    const searchField = document.querySelector(".search-field");
    const searchButton = document.querySelector(".search-button");
    const cards = document.querySelectorAll(".card");

    function filterRecipes() {
        const searchQuery = searchField.value.toLowerCase().trim();
        const searchTerms = searchQuery.split(/\s+/); 

        cards.forEach(card => {
            const subtitle = card.querySelector(".subtitle").textContent.toLowerCase();
            const cardText = card.querySelector(".card-text").textContent.toLowerCase();

            
            const matchesAllTerms = searchTerms.every(term => 
                subtitle.includes(term) || cardText.includes(term)
            );

            if (matchesAllTerms) {
                card.style.display = "block"; 
            } else {
                card.style.display = "none"; 
            }
        });
    }

    searchButton.addEventListener("click", function (event) {
        event.preventDefault();
        filterRecipes();
    });

    searchField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            filterRecipes();
        }
    });
});
