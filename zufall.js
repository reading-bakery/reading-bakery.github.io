document.addEventListener("DOMContentLoaded", () => {

    const zufallBtn = document.getElementById("luckyZufall");

    zufallBtn.addEventListener("click", () => {

        // Alle Rezept-Karten sammeln
        const rezepte = document.querySelectorAll(".card-rezept");

        if (!rezepte || rezepte.length === 0) {
            alert("Keine Rezepte vorhanden.");
            return;
        }

        // Zuerst alle Karten verstecken / normalisieren
        rezepte.forEach(card => {
            card.style.display = "none";        // Karte ausblenden
            card.style.transform = "scale(1)";  // Skalierung zurücksetzen
            card.style.boxShadow = "none";      // Shadow zurücksetzen
        });

        // Zufälligen Index wählen
        const zufallsIndex = Math.floor(Math.random() * rezepte.length);

        // Zufälliges Rezept anzeigen
        const zufallsRezept = rezepte[zufallsIndex];
        zufallsRezept.style.display = "block";
        zufallsRezept.style.transform = "scale(1.05)";
        zufallsRezept.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";

        // Optional: Scrollen, damit die Karte sichtbar ist
        zufallsRezept.scrollIntoView({ behavior: "smooth", block: "center" });

    });

});
