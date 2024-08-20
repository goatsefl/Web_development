// const myObject = (data) =>
// 	new Promise((resolve, reject) => {
// 		if (data < 10) resolve(`I've been resolved`);
// 		else reject(`I've been rejected`);
// 	});

// myObject(10);

/*
Output for both the async function invocation.
[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: "Hello"
AsyncFunctions.js:17 Uncaught (in promise) Error: Oh no!
    at OhNo (AsyncFunctions.js:17:8)
    at AsyncFunctions.js:20:1Understand this error
async.html:38 Live reload enabled.
 */

// Cleaner and newer syntax for writing asynchronous code, like a little make up for promises.

// There are 2 keywords:
// async and await

// async functions always return a promise
// if the function returns a value, then promise will be resolved with that value.
// if the function throws an exception, then the promise will be rejected.

// Syntax :
async function hello() {
	return "Hello";
}
// in this case , we will get our promise to be full-filled,
console.log(hello());

async function OhNo() {
	throw new Error("Oh no!");
}

OhNo();

// You can use arrow functions as well with async like this :

const newAsync = async () => console.log("Hello");

// Here in the above function we didn't use return. So, it will be marked as undefined.
// if we do return, then it will be full-filled and not undefined.

const anotherAsync = async () => {
	return "I'm the real promise that is full-filled"; //
	// ^^ This is the same as "resolve('I'm the real promise that is full-filled');".
};

// We can use .then() and pass in details.

anotherAsync().then((data) => {
	console.log(`Here is the data : ${data}`);
});
