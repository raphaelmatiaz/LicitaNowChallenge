const mobileNavbar = document.getElementById("navbar-mobile");
const burgerMenu = document.getElementById("burger-menu");
const closeBtn = document.getElementById("close-menu");

function openMenu() {
    mobileNavbar.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    mobileNavbar.classList.remove("open");
    document.body.style.overflow = "";
}

burgerMenu.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

// Close when any mobile nav link is tapped
document.querySelectorAll("#navbar-options-mobile a").forEach(link => {
    link.addEventListener("click", closeMenu);
});