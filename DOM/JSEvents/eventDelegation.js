const form = document.querySelector("form");
const user = document.querySelector("#user");
const tweet = document.querySelector("#tweet");
const uList = document.querySelector("ul");
form.addEventListener("submit", (event) => {
	event.preventDefault();
	const li = document.createElement("li");
	const strong = document.createElement("strong");
	li.appendChild(strong);
	strong.textContent = user.value;
	li.append(`: "${tweet.value}"`);
	if (tweet.value === "" && user.value === "") {
		alert("Fill the Necessary");
	} else if (tweet.value === "") {
		alert("You're tweet cannot be empty");
	} else if (user.value === "") {
		alert("Provide Username");
	} else {
		uList.appendChild(li);
		user.value = "";
		tweet.value = "";
	}
});

uList.addEventListener("click", (event) => {
	if (event.target.tagName === "LI") {
		event.target.remove();
	}
});
