const burgerMenu = document.querySelector(".burger-menu");
const navMenu = document.querySelector(".nav-menu");

burgerMenu.addEventListener("click", () => {
	burgerMenu.classList.toggle("open");
	navMenu.classList.toggle("open");
});
