const sliderImages = document.querySelectorAll(".slider-image");

const leftControl = document.getElementById("left");
const rightControl = document.getElementById("right");

var count = 0;
const RIGHT = 1;
const LEFT = -1;

function moveSlider(direction) {
	if (direction == LEFT) {
		count--;
	} else {
		count++;
	}

	if (count == sliderImages.length) {
		count = 0;
	} else if (count == -1) {
		count = sliderImages.length - 1;
	}
	sliderImages.forEach((image) => {
		image.classList.remove("visible");
	});
	sliderImages[count].classList.add("visible");
	sliderImages.forEach((image) => {});
}

leftControl.addEventListener("click", () => {
	moveSlider(LEFT);
});
rightControl.addEventListener("click", () => {
	moveSlider(RIGHT);
});
