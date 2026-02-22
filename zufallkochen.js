document.addEventListener("DOMContentLoaded", () => {
    // Button für "Kochen" holen
    const kochenBtn = document.getElementById("kochen-button");
    // Container, in dem die Karten angezeigt werden
    const gridContainer = document.querySelector(".grid2");

    // Funktion, um eine zufällige Kochen-Karte zu laden
    async function loadRandomKochenCard() {
        try {
            // kochen.json laden
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

            // Standardwerte, falls Felder fehlen
            const title = recipe.title || "Titel fehlt";
            const category = recipe.category || "";
            const tags = recipe.tags || "";
            const time = recipe.time || "";
            const servings = recipe.servings || "";
            const href = recipe.href || "#";
            const img = recipe.img || "/images/default.png";
            const alt = recipe.alt || title;

            // Alte Karten entfernen → nur 1 Karte sichtbar
            gridContainer.innerHTML = "";

            // Neue Karte als klickbaren Link erstellen
            const cardLink = document.createElement("a");
            cardLink.href = href;
            cardLink.target = "_blank"; // optional: neues Tab
            cardLink.classList.add("card-rezept", "zufall-card");
            cardLink.style.textDecoration = "none"; // Link-Standard entfernen
            cardLink.style.color = "inherit";       // Textfarbe übernehmen

            // Karte mit Bild und Text füllen
            cardLink.innerHTML = `
                <img class="cardimg" src="${img}" alt="${alt}">
                <div class="card-content">
                    <h3 class="subtitle">${title}</h3>
                    <p class="category card-text">${category} <br> ${tags}</p>
                    <p class="time-servings card-text">${time} • ${servings}</p>
                </div>
            `;

            // Karte in den Container einfügen
            gridContainer.appendChild(cardLink);

            // Karte ins Blickfeld scrollen
            cardLink.scrollIntoView({ behavior: "smooth", block: "center" });

        } catch (error) {
            console.error("Fehler beim Laden der Karte:", error);
        }
    }

    // Eventlistener: Klick auf "Kochen" → Karte laden
    kochenBtn.addEventListener("click", loadRandomKochenCard);
});
