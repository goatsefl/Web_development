// Decisions to make the code complete the user's objective.

// Comparison Operators ::

// Types of Comparison Operators
// Equality Operators
// == (Equal to): Checks if the operands are equal after type coercion.
// === (Strict equal to): Checks if the operands are equal without type coercion.
// != (Not equal to): Checks if the operands are not equal after type coercion.
// !== (Strict not equal to): Checks if the operands are not equal without type coercion.
// Relational Operators
// > (Greater than): Checks if the left operand is greater than the right operand.
// < (Less than): Checks if the left operand is less than the right operand.
// >= (Greater than or equal to): Checks if the left operand is greater than or equal to the right operand.
// <= (Less than or equal to): Checks if the left operand is less than or equal to the right operand.

let x = 10;
let y = "10";

console.log(x == y); // Output: true (loose equality, type coercion)
console.log(x === y); // Output: false (strict equality, different types)

console.log(x != y); // Output: false (loose inequality)
console.log(x !== y); // Output: true (strict inequality)

console.log(x > 5); // Output: true
console.log(x < 5); // Output: false
console.log(x >= 10); // Output: true
console.log(x <= 10); // Output: true

console.log(`Comparing ASCII character's values" + ${A > a}`); // Comparing value of ASCII characters

/*
Console: Logs messages for developers (e.g., console.log("Hello")).
Alert: Displays a simple message to the user (e.g., alert("Welcome")).
Prompt: Gets user input in string(e.g., let name = prompt("Your name?")).
*/

// Browser console uses REPL : Read, Evaluate, Print and Loop.(The user gets the evaluation printed with continuous loop).

// console is an object which has many methods like log, error and warn etc.

// Eg :

console.log("System is safe");
console.error(
	"Stack Pointer Error : pointing to 0X00ECD6FF with type mismatch"
);
console.warn(
	"Do it on your own risk, changing binary files can adversely affect system performance"
);

// Usage of prompt :

let userInput = prompt("Provide a number");

// A prompt will appear on top middle of the browser's search area for input Provide a number.

parseInt(userInput);

// To run javascript file in Editor, we create .html file and involve script at the end of body tag.

// The current file is included in interactions.html and can be run where the output can be seen in browser's console.

/*
    if: Executes code if a condition is true.
    else: Executes code if the if condition is false.
    else if: Checks additional conditions if the previous if and else if conditions are false.
 */

// if statement usage EG :
let age = 18;

if (age >= 18) {
	console.log("You are an adult.");
}

// if - else if statement usage EG :

let grade = 90;

if (grade >= 90) {
	console.log("Excellent");
} else if (grade >= 80) {
	console.log("Good");
} else if (grade >= 70) {
	console.log("Average");
} else {
	console.log("Needs improvement");
}

// else statement usage EG:

age = 28;

if (age >= 28) {
	console.log("You are an uncle.");
} else {
	console.log("You are a bacha.");
}

// Nested Logic statement EG:

age = 25;
let citizenship = "US";

if (age >= 18) {
	if (citizenship === "US") {
		console.log("Eligible to vote in the US.");
	} else {
		console.log("Eligible to vote, but not in the US.");
	}
} else {
	console.log("Not eligible to vote.");
}

// **Truthy and Falsy Values**

// Values that are converted to `true` in a Boolean context are **truthy**, while those converted to `false` are **falsy**.

// **Falsy values:**
// * `false`
// * `0`
// * `-0`
// * `""` (empty string)
// * `null`
// * `undefined`
// * `NaN`

// **Truthy values:**
// * All other values, including:
//   * Non-empty strings ("hello", " ")
//   * Non-zero numbers (1, -5, 9.8)
//   * Arrays ([])
//   * Objects ({})
//   * Functions (function() {})

// **Example:**

if (0) {
	console.log("This won't run"); // 0 is falsy
} else {
	console.log("This will run");
}

if ("hello") {
	console.log("This will run"); // "hello" is truthy
}

// Logical AND,OR and NOT eg :
// AND (&&)
// Returns true if all conditions are true, returns false even if one condition is false.

age = prompt("Type your Password");

if (age.length >= 6 && age.indexOf(" ") === -1) {
	console.log("Valid Password");
}

/*
Logical OR (||)

Returns `true` if at least one condition is true.
*/
let isLoggedIn = true;
let hasGuestAccess = false;

if (isLoggedIn || hasGuestAccess) {
	console.log("Access granted");
}

/*
Logical NOT (!)

Reverses the logical state of its operand.
 */
let isUserActive = false;

if (!isUserActive) {
	console.log("User is inactive");
}
