function ToDo() {
	let data = [];
	while (true) {
		let userInput = prompt(
			"Please enter any of the keywords below displayed on the page."
		)
			.toLowerCase()
			.trim();
		if (userInput === "new") {
			let add = prompt("Please create a new ToDo :");
			data.push(add);
			alert(
				`Successfully added **${add}** to your ToDo List. Proceed to perform preferred options.`
			);
		} else if (userInput === "list") {
			console.log("**********************************");
			for (let i = 0; i < data.length; i++) {
				console.log(`${i}: ${data[i]}`);
			}
			alert(
				`The List can be seen by inspecting the browser and navigating to console`
			);
			console.log("**********************************");
		} else if (userInput === "delete") {
			let removeValue = Number(
				prompt("Type the index of the list to delete :")
			);
			alert(
				`Removed **${data[removeValue]}** from your ToDo List. Proceed to perform preferred options.`
			);
			data.splice(removeValue, 1);
		} else if (userInput == "q") {
			break;
		}
	}
}

ToDo();
