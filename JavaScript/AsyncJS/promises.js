// A promise is an object representing the eventual completion or failure of an asynchronous operation.
// In simple words, it either tells an event has failed or successfully completed.

// Just before we start promise, we're going to look at the downsides with an example of callback.

const takeRequest = (url, success, failure) => {
	const delay = Math.floor(Math.random() * 4000) + 500;
	setTimeout(() => {
		if (delay > 3000) {
			failure(`Connection Timeout: ${url}`);
		} else {
			success(`Successfully Loaded : ${url}`);
		}
	}, delay);
};

takeRequest(
	"AmazingCats.com",
	function (data) {
		console.log("It works, the website is running!!" + data);
		takeRequest(
			"AmazingCats.com/product",
			function (data) {
				console.log("You're in Product category!!" + data);
			},
			function (err) {
				console.log("Failed loading product category" + err);
			}
		);
	},
	function (err) {
		console.log(`Failed loading website : TRY RELOADING THE PAGE ${err}`);
	}
);
