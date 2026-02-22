document.addEventListener("DOMContentLoaded", () => {
    const kochenBtn = document.getElementById("kochen-button");
    const gridContainer = document.querySelector(".grid2");

    async function loadRandomKochenCard() {
        try {
            const response = await fetch("kochen.json");
            if (!response.ok) throw new Error("kochen.json konnte nicht geladen werden");

            const data = await response.json();
            if (!Array.isArray(data) || data.length === 0) {
                console.log("Keine Rezepte in kochen.json gefunden");
                return;
            }

            // Zufälliges Rezept auswählen
            const randomIndex = Math.floor(Math.random() * data.length);
            const recipe = data[randomIndex];

            const title = recipe.title || "Titel fehlt";
            const category = recipe.category || "";
            const tags = recipe.tags || "";
            const time = recipe.time || "";
            const servings = recipe.servings || "";
            const href = recipe.href || "#";
            const img = recipe.img || "/images/default.png";
            const alt = recipe.alt || title;

            // Alte Karten im Zufallsbereich entfernen → immer nur 1 sichtbar
            gridContainer.innerHTML = "";

            // Neue Karte als Link erstellen
            const cardLink = document.createElement("a");
            cardLink.href = href;
            cardLink.target = "_blank"; // Optional: neues Tab
            cardLink.classList.add("card-rezept", "zufall-card");
            cardLink.style.textDecoration = "none";
            cardLink.style.color = "inherit";

            cardLink.innerHTML = `
                <img class="cardimg" src="${img}" alt="${alt}">
                <div class="card-content">
                    <h3 class="part-name">${title}</h3>
                    <p class="category card-text">${category}</p>
                    <p class="tags card-text">${tags}</p>
                    <p class="time-servings card-text">${time} • ${servings}</p>
                </div>
            `;

            gridContainer.appendChild(cardLink);

            // Karte in die Mitte scrollen
            cardLink.scrollIntoView({ behavior: "smooth", block: "center" });

        } catch (error) {
            console.error("Fehler beim Laden der Karte:", error);
        }
    }

    kochenBtn.addEventListener("click", loadRandomKochenCard);
});
