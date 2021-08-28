const menuArea = document.querySelector(".menu-area");
const burgerMenu = document.querySelector(".burger-menu");
const navMenu = document.querySelector(".nav-menu");

menuArea.addEventListener("click", () => {
	burgerMenu.classList.toggle("open");
	navMenu.classList.toggle("open");
});
