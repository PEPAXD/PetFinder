var navMenu = document.querySelector(".nav-pointer");
var navbarLinks = document.querySelector(".links-navbar");

function loadMenu() {
    navbarLinks.classList.toggle("mobile-menu");
    navMenu.classList.toggle("open");
}

navMenu.addEventListener("click", loadMenu);
