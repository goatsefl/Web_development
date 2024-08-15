// Objective, align the h1 to middle and create a button that changes the bg-color and outputs the color in rgb() format.

const container = document.querySelector(".container");

document.body.style.width = "auto";
container.style.textAlign = "center";
const h1 = document.querySelector("h1");
const button = document.querySelector("button");

function colorizeBody() {
	document.body.style.backgroundColor = randomColor();
	h1.innerText = randomColor();
}
const randomColor = () => {
	let first = Math.floor(Math.random() * 256);
	let second = Math.floor(Math.random() * 256);
	let third = Math.floor(Math.random() * 256);
	return `rgb(${first},${second},${third})`;
};

button.addEventListener("click", colorizeBody);
