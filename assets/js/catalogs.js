const catalogs = document.querySelectorAll(".catalog");

catalogs.forEach((catalog) => {
	catalog.addEventListener("click", () => {
		catalog.classList.toggle("open");
	});
});
