// Change is used in an input tag, as input tag takes in input if, the input is out of focus, the console.log event inside change event is triggered.

const input = document.querySelector("input");
input.addEventListener("change", function (event) {
	console.log("It's out of focus after writing something :");
});
const h1 = document.querySelector("h1");
input.addEventListener("input", function (event) {
	h1.innerText = input.value;
});
