// Array Methods

// forEach method :forEach() is a higher-order function that iterates over each element in an array, executing a provided callback function once for each element.

// Eg :

const newArray = [1, 2, 3, 4, 5, 6];

newArray.forEach(
	(
		number,
		index // Alternatively, it's called an arrow function which allows single expression callbacks.
	) => console.log(`These are the indices ${index} of the element ${number}`)
);

const secondArray = [11, 12, 13, 14, 15, 16];
secondArray.forEach(function (
	number,
	index // With this syntax, we can do much more by adding new lines and encapsulating in curly braces.
) {
	console.log(`These are the indices ${index} of the element ${number}`);
});

// map() : Applies operation to each element of the array, returns a new array.

// Eg :

const fullNames = [
	{ first: "Albus", last: "Dumbledore" },
	{ first: "Harry", last: "Potter" },
	{ first: "Hermione", last: "Granger" },
	{ first: "Ron", last: "Weasley" },
	{ first: "Rubeus", last: "Hagrid" },
	{ first: "Minerva", last: "McGonagall" },
	{ first: "Severus", last: "Snape" },
];

const firstNames = fullNames.map(
	(elements, index, fullNames) => `${fullNames[index].first}`
);
firstNames.forEach((names) =>
	console.log(`First name of harry Potter characters ${names}`)
);

// Output :
// First Name of Harry Potter characters :" Albus "
// First Name of Harry Potter characters :" Harry "
// First Name of Harry Potter characters :" Hermione "
// First Name of Harry Potter characters :" Ron "
// First Name of Harry Potter characters :" Rubeus "
// First Name of Harry Potter characters :" Minerva "
// First Name of Harry Potter characters :" Severus "

// Arrow Functions : Simpler way to execute functions by assigning it to a variable, with/without providing name.

// Eg :

const greet = (value) => `Hey ${value}!`;

// if we do greet(Swaroop), Output : Hey Swaroop!. So, it acts as an easy way to right functions and access.

// Implicit way to return in arrow function. It works only one expression is present, or else we need to use '{}'.

const returningNumber = () => Math.floor(Math.random() * 10);
returningNumber();

// Prints a random number with range from 0 to 9.

// The methods setTimeout() and setInterval() are not related to arrays, these are good to have methods of global window object.

// setTimeout() : Executes a code snippet once after a specified delay.
// Useful for creating timeouts, delays, or scheduling code execution.

// Syntax :

// setTimeout(() => {
// 	console.log("This will be logged after 2 seconds");
// }, 2000);

// Eg :

setTimeout(() => console.log("I'm gonna appear a bit delayed."), 3000);

// setInterval() = Executes a code snippet repeatedly at specified intervals.
// Useful for creating timers, animations, or polling data.

// Syntax : same as setTimeout()
// EG :

const count = 5;
setInterval(() => {
	if (count > 0) {
		console.log("I'm gonna appear a every 3 seconds");
		count--;
	} else {
		clearInterval(intervalId); // clearInterval() takes the id of the each interval getting created from setInterval(). Used to stop setInterval().
	}
}, 3000);

// filter() : filters the content in the array and creates a new array.

const usernames = [
	"Nebulae",
	"Sylvanus",
	"AbyssalDweller",
	"Aerion",
	"Ignis",
	"Terrakin",
	"Celeste",
	"ShadowStalker",
	"DreamWeaver",
	"VoidWalker",
];

const otherWorldly = () => usernames.filter((elements) => elements.length <= 8);

// some() : An array method tests returns a boolean and used to test if some of the elements pass the test.
