

document.addEventListener("DOMContentLoaded", () => {
    const dessertBtn = document.getElementById("dessert-button");
    const gridContainer = document.querySelector(".grid2");

    async function loadRandomDessertCard() {
        try {
            const response = await fetch("dessert.json");
            if (!response.ok) throw new Error("dessert.json konnte nicht geladen werden");

            const data = await response.json();
            if (!Array.isArray(data) || data.length === 0) {
                console.log("Keine Rezepte in dessert.json gefunden");
                return;
            }

            const randomIndex = Math.floor(Math.random() * data.length);
            const recipe = data[randomIndex];

            // Default-Werte falls Felder fehlen
            const title = recipe.title || "Titel fehlt";
            const category = recipe.category || "";
            const tags = recipe.tags || "";
            const time = recipe.time || "";
            const servings = recipe.servings || "";
            const href = recipe.href || "#";
            const img = recipe.img || "/images/default.png";
            const alt = recipe.alt || title;

            // Alte Karten entfernen
            gridContainer.innerHTML = "";

            // Neue Karte als Link erstellen
            const cardLink = document.createElement("a");
            cardLink.href = href;
            cardLink.target = "_blank"; // Optional, öffnet in neuem Tab
            cardLink.classList.add("card-rezept", "zufall-card");
            cardLink.style.textDecoration = "none"; // Link-Styling entfernen
            cardLink.style.color = "inherit";       // Textfarbe übernehmen

            cardLink.innerHTML = `
                <img class="cardimg" src="${img}" alt="${alt}">
                <div class="card-content">
                    <h3 class="subtitle">${title}</h3>
                    <p class="category card-text">${tags} • ${time} • ${servings}</p>
                </div>
            `;

            gridContainer.appendChild(cardLink);

            // Karte in die Mitte scrollen
            cardLink.scrollIntoView({ behavior: "smooth", block: "center" });

        } catch (error) {
            console.error("Fehler beim Laden der Karte:", error);
        }
    }

    dessertBtn.addEventListener("click", loadRandomDessertCard);
});
