document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const recipeCardsContainer = document.getElementById("recipeCards");
    const cards = document.querySelectorAll('.card'); 

    // Funktion zum Filtern der Cards
    function filterRecipes() {
      const searchQuery = searchInput.value.toLowerCase();  

      cards.forEach(card => {
        const title = card.getAttribute("data-title").toLowerCase();  
        const description = card.getAttribute("data-description").toLowerCase(); 

       
        if (title.includes(searchQuery) || description.includes(searchQuery)) {
          card.style.display = "block"; 
        } else {
          card.style.display = "none";  
        }
      });
    }

    searchInput.addEventListener("input", function () {
      filterRecipes();  
    });
  });