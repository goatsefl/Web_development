// We can nest the delays instead of creating a mind mapping of timing instead of separating setTimeout().
// These are all web api's calling
// setTimeout(() => {
// 	document.body.style.backgroundColor = "green";
// 	setTimeout(() => {
// 		document.body.style.backgroundColor = "red";
// 		setTimeout(() => {
// 			document.body.style.backgroundColor = "yellow";
// 			setTimeout(() => {
// 				document.body.style.backgroundColor = "purple";
// 			}, 1000);
// 		}, 1000);
// 	}, 1000);
// }, 1000);

// Or we can create a new variable and send in another constraint.

const changeColor = (color, delay, nextF) => {
	setTimeout(() => {
		document.body.style.backgroundColor = color;
		nextF && nextF();
	}, delay);
};

// The callbacks when nested and sometimes the callbacks nested are completely different can make the code very difficult.
// One way to handle the asynchronous nature of javaScript is to provide some callbacks, but, callbacks can be pretty exhausting.
changeColor("green", 1000, () => {
	changeColor("red", 1000, () => {
		changeColor("blue", 1000, () => {
			changeColor("pink", 1000, () => {
				changeColor("grey", 1000, () => {
					changeColor("purple", 1000, () => {});
				});
			});
		});
	});
});

// One way to overcome this is, promise and async functions.
