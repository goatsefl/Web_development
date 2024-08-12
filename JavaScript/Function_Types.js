// Function Scope : Anything outside the function scope will be considered in of lower rank if there exists the same naming scheme inside the scope of a function.

function greet(name) {
	let message = "Hello, " + name + "!"; // Local variable
	console.log(message);
}

greet("Alice"); // Output: Hello, Alice!

console.log(message); // Error: message is not defined

// Lexical scoping means that the accessibility of variables and functions is determined by their position in the code (their lexical context), rather than the runtime behavior.
// In simpler terms, where a variable is declared dictates where it can be accessed.

// Inner functions have access to variables in their outer scope.
// Outer functions do not have access to variables in their inner scope.
// The scope chain determines the order in which variables are searched.
// In the hierarchy, the access to parent function is possible, not the other way around.

// Eg:

let globalVar = "I'm global";

function outerFunction() {
	let outerVar = "I'm outer";

	function innerFunction() {
		let innerVar = "I'm inner";
		console.log(globalVar); // Accessible
		console.log(outerVar); // Accessible
		console.log(innerVar); // Accessible
	}

	innerFunction();
	console.log(innerVar); // Error: innerVar is not defined
}

outerFunction();
console.log(outerVar); // Error: outerVar is not defined

// Function Expressions : Storing a function and defining & declaring the logic at the same time in a variable is known as function expression.

// Eg :
message = "Hello, world!"; // Defining the variable 'message'
function greet() {
	console.log("Hello!"); // Defining the function body
}

// Higher-Order Functions : These are functions that take a function as argument or return the function.

// Eg :

function newOne(willTake) {
	willTake(x);
	willTake(x);
}

function adder(newNumberOne) {
	let count = 10;
	while (count > 0) {
		console.log(newNumberOne++);
		count--;
	}
	return newNumberOne;
}
let x = 50;
newOne(adder, x); // The newOne(takes in adder(),argument for adder i.e. newNumberOne).

// Might be confusing but, it's logical.

// Returning Function : Returns a function that is inside another function using return keyword.
// Also called as factory functions, returning function as a value.
// Eg :

function createGreeter(greeting) {
	return function (name) {
		console.log(greeting + ", " + name + "!");
	};
}

const greetHello = createGreeter("Hello");
greetHello("Alice"); // Output: Hello, Alice!

// Another example, a bit confusing.
function rangeMaxMin(min, max) {
	return function (num) {
		return num >= min && num <= max;
	};
}
const maximum = rangeMaxMin(13, 19);
maximum(55);

// Methods : Methods can be defined as property of object

// Eg :

const myMath = {
	power: function (x, y) {
		return x ** y;
	},
	square(x) {
		// short-hand syntax.
		return x * x;
	},
};

myMath.power(3, 3); // Output : 27.

myMath.square(4); // Output : 16.

// "this" : It is a special keyword in JavaScript that refers to the object that is currently executing a function or method. Its value depends on how the function is called.

// Eg :
const person = {
	firstName: "John",
	lastName: "Doe",
	fullName: function () {
		console.log(this);
		return `${this.firstName} ${this.lastName} is very funny.`;
	},
};

person.firstName = "Halwa";
person.lastName = "Raj";
console.log(person.fullName());

// If we assign a variable person.firstName to observe the new behavior of "this".

const confusedRef = person.fullName;

confusedRef();

// 'this' refers to the main global window object, which has all the properties of main web-page area.

// All the methods used till now are inside the window object.

// We can use window.console.log(), that's entirely equal to console.log() as the prefix is compiled automatically every-time a method is invoked.

// try/catch exception : if there's an error by an unintended input by the user.

// Eg : division by zero

let input1 = Number(prompt("Type in the first number for division"));
let input2 = Number(prompt("Type in the second number for division"));
try {
	if (input2 == 0) {
		throw new Error("Cannot divide by zero, provide a non zero number."); // This will be printed if catch block is not present.
	}
} catch {
	console.error("Please don't divide by zero, it's useless division");
	do {
		input2 = Number(prompt("Enter non zero number:"));
	} while (input2 === 0);
}
console.log(input1 / input2);
