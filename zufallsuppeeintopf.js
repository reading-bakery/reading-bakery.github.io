document.addEventListener("DOMContentLoaded", () => {

    const zufallBtn = document.getElementById("luckyZufall");

    zufallBtn.addEventListener("click", () => {

        const cards = document.querySelectorAll(".grid .card-rezept");

        if (cards.length === 0) {
            console.log("Keine Karten gefunden");
            return;
        }

        // Zufällige Karte bestimmen
        const randomIndex = Math.floor(Math.random() * cards.length);

        cards.forEach((card, index) => {
            if (index === randomIndex) {
                card.style.display = "flex";   // deine Cards sind flex
                card.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            } else {
                card.style.display = "none";
            }
        });

    });

});
