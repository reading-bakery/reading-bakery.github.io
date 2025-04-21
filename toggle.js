const toggleButton = document.getElementById('toggle-button');
const navLinks = document.getElementById('nav-links');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const navbar = document.querySelector('.navbar');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navbar.classList.toggle('expanded');

    if (navLinks.classList.contains('active')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'inline';
    } else {
        menuIcon.style.display = 'inline';
        closeIcon.style.display = 'none';
    }
});
        