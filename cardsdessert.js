// cardskochen.js

document.addEventListener("DOMContentLoaded", () => {

    const grid = document.querySelector(".grid");

    // Pfad zur JSON-Datei
    const jsonPath = "dessert.json";

    fetch(jsonPath)
        .then(response => {
            if (!response.ok) {
                throw new Error("Fehler beim Laden der JSON-Datei");
            }
            return response.json();
        })
        .then(data => {
            data.forEach(recipe => {
                // Card erstellen
                const card = document.createElement("div");
                card.className = "card-rezept";

                // Link & Bild
                const link = document.createElement("a");
                link.href = recipe.href;
                link.className = "cardlink";

                const img = document.createElement("img");
                img.src = recipe.img;
                img.alt = recipe.alt;
                img.className = "cardimg";

                link.appendChild(img);

                // Card-Body
                const cardBody = document.createElement("div");
                cardBody.className = "card-body";

                const subtitle = document.createElement("p");
                subtitle.className = "subtitle";
                subtitle.textContent = recipe.title;

                const cardText = document.createElement("p");
                cardText.className = "card-text";
                cardText.innerHTML = `${recipe.tags} • ${recipe.time} • ${recipe.servings}`;

                cardBody.appendChild(subtitle);
                cardBody.appendChild(cardText);

                card.appendChild(link);
                card.appendChild(cardBody);

                grid.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Fehler beim Laden der Rezepte:", error);
            grid.innerHTML = "<p>Rezepte konnten nicht geladen werden.</p>";
        });

});
