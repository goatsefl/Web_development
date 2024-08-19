// JavaScript is a single threaded because it can only look after running one line of JS code.

// What happens when something takes a long time?

// EG : const newTodo = input.value;
// saveToDatabase(newTodo);
// input.value = '';

// callbacks, fortunately we have a workaround

console.log("I print first");
setTimeout(() => {
	console.log("I'll be printed after 3 seconds");
}, 3000);
console.log("I'll be second");

// Output : I print first
// I'll be second
// I'll be printed after 3 seconds

// JavaScript will not stop for 3 seconds and continue running from the next line, instead the browser will do the work.

// JavaScript will do the function calls of setTimeout(), a WEB API rather, the other 2 lines of code will be executed from JS.

// Steps of execution, call stack:

// 1st insertion stack console.log('some print statement') popped right away;
// setTimeout() is an api, browser take cares of it, after 3 seconds , 3rd insertion in stack and pops console.log right away.
// 2nd insertion in stack console.log('some print statement') popped right away;

// JavaScript call stack will recognize the WEB API functions like setTimeout or making requests and hand that execution over to the browser. After that waiting, then they are handed over to the call stack and resumed it.
