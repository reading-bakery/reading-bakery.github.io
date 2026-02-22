document.addEventListener("DOMContentLoaded", () => {

    const zufallBtn = document.getElementById("luckyZufall");

    zufallBtn.addEventListener("click", () => {

        // Alle Rezept-Karten sammeln
        const rezepte = document.querySelectorAll(".card-rezept");

        if (!rezepte || rezepte.length === 0) {
            alert("Keine Rezepte vorhanden.");
            return;
        }

        // Alle Karten zurücksetzen
        rezepte.forEach(card => {
            card.style.display = "none";
            card.style.transform = "scale(1)";
            card.style.boxShadow = "none";

            // Entferne ggf. vorherige Hover-Events
            card.onmouseenter = null;
            card.onmouseleave = null;
        });

        // Zufällige Karte auswählen
        const zufallsIndex = Math.floor(Math.random() * rezepte.length);
        const zufallsRezept = rezepte[zufallsIndex];

        // Karte sichtbar machen
        zufallsRezept.style.display = "block";

        // Scrollen, damit die Karte sichtbar ist
        zufallsRezept.scrollIntoView({ behavior: "smooth", block: "center" });

        // Hervorhebung beim Hover
        zufallsRezept.onmouseenter = () => {
            zufallsRezept.style.transition = "transform 0.3s, box-shadow 0.3s";
            zufallsRezept.style.transform = "scale(1.05)";
            zufallsRezept.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
        };

        zufallsRezept.onmouseleave = () => {
            zufallsRezept.style.transform = "scale(1)";
            zufallsRezept.style.boxShadow = "none";
        };

    });

});
