modalEvents = document.querySelector(".modal-events");
modalToggle = document.querySelector(".modal-toggle");
modalClose = document.querySelector(".modal-close");
sliderImages = document.querySelector(".sliderImages");
sliderControls = document.querySelectorAll(".slider-control");

modalClose.addEventListener("click", () => {
	modalClose.classList.remove("visible");
	modalEvents.classList.remove("visible");
	sliderImages.forEach((image) => {
		image.classList.remove("visible");
	});
	sliderControls.forEach((sliderControl) => {
		sliderControl.classList.remove("visible");
	});
});

modalToggle.addEventListener("click", () => {
	modalClose.classList.add("visible");
	modalEvents.classList.add("visible");
	sliderImages[0].classList.add("visible");
	sliderControls.forEach((sliderControl) => {
		sliderControl.classList.add("visible");
	});
});
