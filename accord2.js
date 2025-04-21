    document.querySelector(".accordion-button-2").addEventListener("click", function() {
    this.classList.toggle("active"); 
    let content = document.querySelector(".accordion-content-2");
    content.style.display = content.style.display === "block" ? "none" : "block";

    let arrow = this.querySelector(".arrow-2");
    arrow.style.transform = arrow.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
});
                