// A promise is an object representing the eventual completion or failure of an asynchronous operation.
// In simple words, it either tells an event has failed or successfully completed.

// Just before we start promise, we're going to look at the downsides with an example of callback.

// const takeRequest = (url, success, failure) => {
// 	const delay = Math.floor(Math.random() * 4000) + 500;
// 	setTimeout(() => {
// 		if (delay > 3000) {
// 			failure(`Connection Timeout: ${url}`);
// 		} else {
// 			success(`Successfully Loaded : ${url}`);
// 		}
// 	}, delay);
// };

// takeRequest(
// 	"AmazingCats.com",
// 	function (data) {
// 		console.log("It works, the website is running!!" + data);
// 		takeRequest(
// 			"AmazingCats.com/product",
// 			function (data) {
// 				console.log("You're in Product category!!" + data);
// 			},
// 			function (err) {
// 				console.log("Failed loading product category" + err);
// 			}
// 		);
// 	},
// 	function (err) {
// 		console.log(`Failed loading website : TRY RELOADING THE PAGE ${err}`);
// 	}
// );

// The above code represents the success and failure response is in a nested way.
// Often extra nesting can cause a lot of problems if the code base is huge and complex.

// Promise is an object which provides, whether an event was successful or not by presenting a value.
// Syntax :

const myPromise = (url) => {
	return new Promise((resolve, reject) => {
		const delay = Math.floor(Math.random() * 5000) + 500;
		setTimeout(() => {
			if (delay < 4500) {
				resolve("Connection Successful");
			} else {
				reject("Connection Failed");
			}
		}, delay);
	});
};
const noCallback = myPromise("amazon.com")
	.then((data) => {
		console.log(`Main Page`);
		console.log(data);
		return myPromise("amazon.com/page1");
	})
	.then((data) => {
		console.log(`Currently in Page 1`);
		console.log(data);
		return myPromise("amazon.com/page2");
	})
	.then((data) => {
		console.log(`Currently in Page 2`);
		console.log(data);
		return myPromise("amazon.com/page3");
	})
	.then((data) => {
		console.log(`Currently in Page 3`);
		console.log(data);
		return myPromise("amazon.com/page4");
	})
	.then((data) => {
		console.log(`Currently in Page 4`);
		console.log(data);
		return myPromise("amazon.com/page5");
	})
	.then((data) => {
		console.log(`Last Page Loaded Successfully :) `);
		console.log(data);
	})
	.catch((err) => {
		console.log(`Your requested does not exist!!!`);
		console.log(err);
	});
