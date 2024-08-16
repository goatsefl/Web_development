// Events are used to respond user's input and actions.

// List inputs and actions entail

/*
 *) clicks
 *) drags
 *) drops
 *) hovers
 *) scrolls
 *) form Submission
 *) key presses
 *) focus/blur
 *) mouse wheel
 *) double click
 *) copying
 *) pasting
 *) audio start
 *) screen resize
 *) printing
 */

// Inline - Events (Inside html tag we can use it)
// First Way
// <!DOCTYPE html>

// <head>
//     <title>Inline Events</title>
//     <!--LEAVE THESE LINES ALONE, PLEASE! THEY MAKE THE LIVE PREVIEW WORK!-->
//     <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
//     <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

// </head>

// <body>
//     <h1 onclick="console.log('boo')">Inline Events Suck...</h1>
//     <button id="btn" onclick="console.log('clicked')">Click Me</button>
// </body>

// </html>

// Second Way
// onclick and onmouseenter : These are 2 events that happen when a user clicks on an element to provide a feedback with any of the developer tools.

const button = document.createElement("button");
const h1 = document.querySelector("h1");
h1.innerText = `These are some events that are good.`;
document.body.appendChild(button);
button.innerText = `Don't touch me boy`;
button.onclick = () => alert("You Can't touch me, that's inappropriate");
button.onmouseenter = () => console.warn("I'll scream like the devil");
let count = 10;
h1.onclick = () => {
	console.log("Leave me alone, stop poking me!!");
};
h1.onmouseenter = () => {
	console.log("you're doing it on my skin now!!");
};

// Third Way

// This is the best way to use react to an event in a simple way.

const button1 = document.createElement("button");

document.body.appendChild(button1);
button1.innerText = "Lord will Bless you";

// addEventListener will do all the things required without remembering each property. Also, the 2nd way is simple assignment, where as addEventListener literally runs regardless how many copies of addEventListeners are there.

// There are also options to addEventListeners where it will try to set specific parameters
button1.addEventListener("click", () => {
	alert("Are you ready for a miracle?");
});

// button.addEventListener('click', handleClick, { once: true, capture: true }); the one's inside the curly brackets are options.

// Event object, that is automatically passed in as an argument in addEventListener callback function.

const button2 = document.createElement("button");

button2.append("click to LIKE");

document.body.appendChild(button2);

button2.addEventListener("click", (evt) => {
	console.log(evt);
});
// evt is an event object that contains multiple properties of each event listener.

const input = document.querySelector("input");

// Event object, this object contains the properties of the let say click, keyup, keydown or anything else.

input.addEventListener("keydown", function (e) {
	// again, that e is a random argument i've passed, in general it's always passed without even providing one, so the argument can be named anything.
	console.log(e.key); // provides a general description of the key-logged.
	console.log(e.code); // provides you with the exact keyword for each keypress(useful for games which take input).
});

window.addEventListener("keydown", function (e) {
	// console.log(e.code); // this will work on the window level, that means, irrespective of selection or not, if you're on browser and typing keys, then the logging is automatically done.
	// We can restrict some keys, will be useful for some games.
	switch (e.code) {
		case "KeyW":
			console.log("Accelerate");
			break;
		case "KeyA":
			console.log("Turn Left");
			break;
		case "KeyS":
			console.log("Brake");
			break;
		case "KeyD":
			console.log("Turn Right");
			break;
		default:
			console.log("Invalid input");
			break;
	}
});

// Form Events : The form eventObject properties that are useful while submitting and collecting data.

//element.preventDefault() : Stops the default behavior of the form to not redirect to a new source provided in action.

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
	event.preventDefault();
	console.log("Thanks for not redirecting"); // Thanks for not redirecting
});
