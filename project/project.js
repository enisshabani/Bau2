
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

// Project Details Lightbox Modal
const projectItems = [
    { src: "../img/1img.jpg", keyPrefix: "project_1" },
    { src: "../img/2img.jpg", keyPrefix: "project_2" },
    { src: "../img/3img.jpg", keyPrefix: "project_3" }
];

const galleryImages = document.querySelectorAll(".image-gallery img[data-project]");
const projectModal = document.getElementById("project-modal");
const modalImg = document.getElementById("project-modal-img");
const modalTag = document.getElementById("project-modal-tag");
const modalLocation = document.getElementById("project-modal-location");
const modalTitle = document.getElementById("project-modal-title");
const modalDesc = document.getElementById("project-modal-desc");
const modalCloseBtn = document.querySelector(".project-modal-close");
const modalBackdrop = document.querySelector(".project-modal-backdrop");
const modalPrevBtn = document.querySelector(".project-modal-prev");
const modalNextBtn = document.querySelector(".project-modal-next");

let activeProjectIndex = null;

function getProjectTranslation(key) {
    const lang = localStorage.getItem("lang") || "de";
    if (typeof translations !== "undefined") {
        const dict = translations[lang] || translations.de;
        if (dict && dict[key]) {
            return dict[key];
        }
    }
    return "";
}

function renderProjectModal(index) {
    const item = projectItems[index];
    if (!item || !projectModal) return;

    const title = getProjectTranslation(`${item.keyPrefix}_title`);
    modalImg.src = item.src;
    modalImg.alt = title;
    modalTag.textContent = getProjectTranslation(`${item.keyPrefix}_tag`);
    modalLocation.textContent = getProjectTranslation(`${item.keyPrefix}_location`);
    modalTitle.textContent = title;
    modalDesc.textContent = getProjectTranslation(`${item.keyPrefix}_desc`);
}

function openProjectModal(index) {
    if (!projectModal) return;
    activeProjectIndex = ((index % projectItems.length) + projectItems.length) % projectItems.length;
    renderProjectModal(activeProjectIndex);
    projectModal.classList.add("active");
    projectModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove("active");
    projectModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    activeProjectIndex = null;
}

if (projectModal && galleryImages.length > 0) {
    galleryImages.forEach((img) => {
        const idx = Number(img.getAttribute("data-project"));
        img.addEventListener("click", () => openProjectModal(idx));
        img.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openProjectModal(idx);
            }
        });
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeProjectModal);
    if (modalBackdrop) modalBackdrop.addEventListener("click", closeProjectModal);
    if (modalPrevBtn) {
        modalPrevBtn.addEventListener("click", () => {
            if (activeProjectIndex !== null) openProjectModal(activeProjectIndex - 1);
        });
    }
    if (modalNextBtn) {
        modalNextBtn.addEventListener("click", () => {
            if (activeProjectIndex !== null) openProjectModal(activeProjectIndex + 1);
        });
    }

    document.addEventListener("keydown", (e) => {
        if (!projectModal.classList.contains("active")) return;
        if (e.key === "Escape") closeProjectModal();
        if (e.key === "ArrowLeft" && activeProjectIndex !== null) openProjectModal(activeProjectIndex - 1);
        if (e.key === "ArrowRight" && activeProjectIndex !== null) openProjectModal(activeProjectIndex + 1);
    });

    window.addEventListener("languageChanged", () => {
        if (activeProjectIndex !== null && projectModal.classList.contains("active")) {
            renderProjectModal(activeProjectIndex);
        }
    });
}