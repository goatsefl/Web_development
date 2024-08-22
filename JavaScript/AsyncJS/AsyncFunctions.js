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
	// throw "I'm using throw as a reject";
	return "I'm the real promise that is full-filled"; //
	// ^^ This is the same as "resolve('I'm the real promise that is full-filled');".
};

// We can use .then() and pass in details.

anotherAsync()
	.then((data) => {
		console.log(`Here is the data : ${data}`);
	})
	.catch((err) => {
		console.log(`Not working: ${err}`);
	});

// The return value of anotherAsync() will be passed on to ${data}.

anotherAsync();

// Output for anotherAsync():

// Promise {<fulfilled>: "I'm the real promise that is full-filled"}
// [[Prototype]]: Promise
// [[PromiseState]]:"fulfilled"
// [[PromiseResult]]:"I'm the real promise that is full-filled"

// To see how to use catch we can throw an error by using "throw" or "throw new Error()".
// For all the reasons, the above methods will work but, also, if there is a syntax error, that will also be taken care as reject.

// Simple login example using async.

const login = async (user, pass) => {
	if (!user && !pass) throw new Error("Type the UserName and Password");
	else if (!user && pass) throw new Error("Empty UserName detected");
	else if (user && !pass) throw new Error("Empty Password detected");
	else {
		return "Enjoy the Services";
	}
};

login("kjk", "")
	.then((data) => {
		console.log(`Logged in Successfully : ${data}`);
	})
	.catch((err) => {
		console.log("Type in correct credentials : ", err);
	});

// await() : We can only use this keyword inside async declared functions.
// await will pause the execution of the function waiting for promise to be resolved.

// Let's use an example of await to understand.

const randomColors = () => {
	const first = Math.floor(Math.random() * 256);
	const second = Math.floor(Math.random() * 256);
	const third = Math.floor(Math.random() * 256);
	const alpha = Math.random();
	return `rgba(${first},${second},${third},${alpha})`;
};

const randomTransitions = () => {
	const x1 = Math.random();
	const y1 = Math.random();
	const x2 = Math.random();
	const y2 = Math.random();
	return `1.5s background-color cubic-bezier(${x1},${y1},${x2},${y2})`;
};

const changer = (delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (delay < 800) {
				document.body.style.backgroundColor = randomColors();
				document.body.style.transition = randomTransitions();
				resolve(`Random color added`);
			} else {
				reject(`Connection Timed Out`);
			}
		}, delay);
	});
};
let bool = false;
const randomColorChanger = async (bool) => {
	while (bool) {
		let data = await changer(Math.floor(Math.random() * 1500));
	}
	console.log(data1);
};
randomColorChanger();

// If our await is throwing an error, we can store it in a variable and use the try catch block to catch some error that is stored in the data.

async function great() {
	try {
		await console.log("gagagaga");
		afl;
		akjsdfkljaksdjfk;
		lj;
	} catch (e) {
		console.error("Relax boss, it's completely fine, it's a ", e);
	}
}

// Output : gagagaga
// Relax boss, it's completely fine, it's a Reference error afl is not defined at great.
