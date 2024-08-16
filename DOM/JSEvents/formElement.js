// Form event object : The action of form behaviors.

const input = document.querySelector("#formInput");

const form = document.querySelector("form");

const h2 = document.createElement("h2");

h2.append("Think of some good cat names ");
form.after(h2);
const uList = document.createElement("ul");
h2.after(uList);

form.addEventListener("submit", function (event) {
	event.preventDefault();
	const li = document.createElement("li");
	li.append(`${input.value}`);
	uList.appendChild(li);
	input.value = "";
});
