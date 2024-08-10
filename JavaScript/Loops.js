// Loops : Repeats a block of code for a specific number of times.

// Syntax : for( initialization ; comparison ; post-increment ){block of code}.

// EG:

for (let i = 0; i < 5; i++) {
	console.log(i);
}

// while : Repeats a block of code as long as a condition is true.

// Syntax : while(condition){block of code}, breaks if the condition is false.

// EG :
let count = 0;
while (count < 5) {
	console.log(count);
	count++;
}

// do-while

// Executes at-least once and checks the condition.

// Syntax : do{block of code} while(condition).

// EG :
let counter = 0;
do {
	console.log(counter);
	counter++;
} while (counter < 5);

// Looping in arrays :

// One dimensional :
const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

// Two dimensional :

const stones = [
	["Diamond", "Ruby", "Emerald"],
	["Sapphire", "Amethyst", "Topaz", "Garnet", "Opal", "Quartz", "Granite"],
];

for (let i = 0; i < stones.length; i++) {
	for (let j = 0; j < stones[i].length; j++) {
		console.log(stones[j] + "\n");
	}
}
