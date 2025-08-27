
document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.text', {
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 100,
        reset: false
    });

    ScrollReveal().reveal('.container1', {
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 100,
        reset: false
    });

    ScrollReveal().reveal('.banner2', {
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 100,
        reset: false
    });

    ScrollReveal().reveal('#paragraph', {
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 100,
        reset: false
    });

    ScrollReveal().reveal('h1', {
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 100,
        reset: false
    });

    ScrollReveal().reveal('.image-gallery', {
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 100,
        reset: false
    });

});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const menuIcon = document.querySelector("#menu-icon");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuIcon.textContent = "close";
    } else {
        menuIcon.textContent = "menu";
    }
});