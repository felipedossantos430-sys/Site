// === Animação ao rolar a página ===
const sections = document.querySelectorAll(".fade-scroll");

function checkSections() {
    sections.forEach(sec => {
        const pos = sec.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            sec.classList.add("visible");
        }
    });
}
window.addEventListener("scroll", checkSections);
checkSections();


// === Destaque automático no menu ===
const menuLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const top = section.offsetTop - 150;
        if (pageYOffset >= top) current = section.getAttribute("id");
    });

    menuLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
