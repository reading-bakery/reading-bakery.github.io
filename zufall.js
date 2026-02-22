document.addEventListener("DOMContentLoaded", () => {

    const zufallBtn = document.getElementById("luckyZufall");

    zufallBtn.addEventListener("click", () => {

        // Alle Rezept-Karten sammeln
        const rezepte = document.querySelectorAll(".card-rezept a.cardlink");

        if (!rezepte || rezepte.length === 0) {
            alert("Keine Rezepte vorhanden.");
            return;
        }

        // Zufälligen Index wählen
        const zufallsIndex = Math.floor(Math.random() * rezepte.length);

        // Zufälliges Rezept holen
        const zufallsRezept = rezepte[zufallsIndex];

        // Optional: kleines visuelles Feedback
        zufallsRezept.closest(".card-rezept").style.transform = "scale(1.05)";
        zufallsRezept.closest(".card-rezept").style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";

        // Nach kurzer Verzögerung weiterleiten
        setTimeout(() => {
            window.location.href = zufallsRezept.href;
        }, 400);
    });

});
