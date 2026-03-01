const mobileNavbar = document.getElementById("navbar-mobile");

const burgerMenu = document.getElementById("burger-menu")
burgerMenu.addEventListener("click", () => {
    if (mobileNavbar.style.display = "none") {
        mobileNavbar.style.display = "block";
    } else {
        mobileNavbar.style.display = "none";
    }
})