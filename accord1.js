document.querySelector(".accordion-button-1").addEventListener("click", function() {
this.classList.toggle("active"); 
let content = document.querySelector(".accordion-content-1");
content.style.display = content.style.display === "block" ? "none" : "block";
});
                