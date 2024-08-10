function guessGame() {
	let count = 5;
	let firstNumber = Math.floor(Math.random() * 10) + 1;
	let secondNumber = Math.floor(Math.random() * 100) + 1;
	let thirdNumber = Math.floor(Math.random() * 1000) + 1;
	alert(
		"Welcome to the guess game, your difficulty will increase if you guess the right number, there are 3 levels to this game with exactly 5 lives.You will gain a 10 lives if you guess the right number and loose one if you get it wrong."
	);
	while (count > 0) {
		let levelOne = Number(
			prompt(`Level 1 : Guess from 1 to 10 :: Lives left ${count}`)
		);
		if (isNaN(levelOne)) {
			alert("Please enter a valid number.");
			continue;
		}
		if (levelOne === firstNumber) {
			alert(
				"Congratulations on clearing the 1st level, The possibility of you guessing one chance will go down from 1 in 10 to 1 in 100"
			);
			count += 10;
			while (count > 0) {
				let levelTwo = Number(
					prompt(`Level 2 : Guess from 1 to 100 :: Lives left ${count}`)
				);
				if (isNaN(levelTwo)) {
					alert("Please enter a valid number.");
					continue;
				}
				if (levelTwo === secondNumber) {
					alert(
						"Congratulations with your 1 in a 100 guess. I'm going to avenge you with my next number."
					);
					count += 20;
					alert(
						"For this round, the probability of guessing the number is too less, 20 extra lives are rewarded."
					);
					while (count > 0) {
						let levelThree = Number(
							prompt(`You have ${count} lives left, Guess from 1 to 1000.`)
						);
						if (isNaN(levelThree)) {
							alert("Please enter a valid number.");
							continue;
						}
						if (levelThree === thirdNumber) {
							alert(
								"Thanks for guessing with 1% chance of winning, thank you for proving that you're a fortune teller"
							);
							count = 0;
						} else if (levelThree < thirdNumber) {
							alert("Guess better, I can't give you extra guesses");
						} else {
							alert("You're thinking too much tone down.");
						}
						count--;
					}
				} else if (levelTwo < secondNumber) {
					alert("Level 2 is hard bruh, more impact is needed");
				} else {
					alert("You're not gonna get paid for more impact.");
				}
				count--;
			}
		} else if (levelOne < firstNumber) {
			alert(
				"You've lost a life, be thoughtful of your guess. You have to think bigger than that."
			);
		} else {
			alert(
				"You've lost a life, be thoughtful of your guess. You have to think smaller than that."
			);
		}
		count--;
	}
	alert("Game Over, WOMP WOMP:");
	window.location.reload(true);
}

guessGame();
