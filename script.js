// ================================
// MENU RESPONSIVO
// ================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});


// Fecha o menu ao clicar em um link

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

    });

});


// ================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ================================

const sections = document.querySelectorAll(
    ".section-title, .card, .food-card, .habitat-example, .suit-container, .food-list"
);

sections.forEach(element => {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach(element => {
    observer.observe(element);
});


// ================================
// BOTÃO "INICIAR MISSÃO"
// ================================

const missionButton = document.getElementById("mission-button");

missionButton.addEventListener("click", () => {

    alert(
        "🚀 MISSÃO INICIADA!\n\n" +
        "Destino: Marte 🔴\n" +
        "Objetivo: Construir uma nova casa para a humanidade!"
    );

});


// ================================
// EFEITO PARALLAX NO MARTE
// ================================

const mars = document.querySelector(".mars");

window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY;

    if (window.innerWidth > 900) {

        mars.style.transform =
            `translateY(${scrollPosition * 0.08}px)`;

    }

});


// ================================
// DESTAQUE DO MENU
// ================================

const pageSections = document.querySelectorAll("main section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    pageSections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    links.forEach(link => {

        link.classList.remove("current");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("current");
        }

    });

});
