document.addEventListener("DOMContentLoaded", () => {

    const zufallBtn2 = document.getElementById("luckyZufall2");

    // ===== 1️⃣ Klick auf index.html =====
    if (zufallBtn2) {
        zufallBtn2.addEventListener("click", () => {
            window.location.href = "kochen.html?zufall=true";
        });
    }

    // ===== 2️⃣ Wenn wir auf kochen.html landen =====
    const params = new URLSearchParams(window.location.search);

    if (params.get("zufall") === "true") {

        // Warten bis ALLES geladen ist
        window.addEventListener("load", () => {

            const rezepte = document.querySelectorAll(".card-rezept a.cardlink");

            if (rezepte.length === 0) {
                console.error("Keine Rezepte gefunden.");
                return;
            }

            const zufallsIndex = Math.floor(Math.random() * rezepte.length);
            const zufallsRezept = rezepte[zufallsIndex].href;

            // Kurze Verzögerung für Sicherheit
            setTimeout(() => {
                window.location.href = zufallsRezept;
            }, 200);

        });
    }

});
