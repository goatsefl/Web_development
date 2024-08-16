// When events are nested, they're bubble up if even of them are invoked from the middle.

// To stop this behavior we have to use stopPropagation() using event.

const random = () => {
	let first = Math.floor(Math.random() * 256);
	let second = Math.floor(Math.random() * 256);
	let third = Math.floor(Math.random() * 256);
	return `rgb(${first},${second},${third})`;
};

const button = document.querySelector("button");
const paragraph = document.querySelector("p");
button.addEventListener("click", function (event) {
	event.stopPropagation(); // Comment this line out to check the behavior of bubbling.
	button.innerText = "to Change color";
	paragraph.style.backgroundColor = random();
});
