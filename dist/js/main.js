let showMenu = false;

const elements = getDomElements();

elements.menuBtn.addEventListener("click", toggleMenu);

function getDomElements() {
    const elements = {
        menuBtn: document.querySelector(".menu-btn"),
        menu: document.querySelector(".menu"),
        menuNav: document.querySelector(".menu-nav"),
        navItems: document.querySelectorAll(".nav-items")
    }
    return elements;
}

function toggleMenu() {
    if (!showMenu) {
        elements.menuBtn.classList.add("close");
        elements.menu.classList.add("show");
        elements.menuNav.classList.add("show");
        elements.navItems.forEach(item => item.classList.add("show"));
        showMenu = true;
    } else {
        elements.menuBtn.classList.remove("close");
        elements.menu.classList.remove("show");
        elements.menuNav.classList.remove("show");
        elements.navItems.forEach(item => item.classList.remove("show"))
        showMenu = false;
    }
}