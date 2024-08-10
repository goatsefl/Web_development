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
// for of : same as for loop, doesn't require index.

// Syntax :for (variable of iterables) Note : cannot be used for objects, as they're not iterables.

// EG :

const bag = [
	"capsicum",
	"okra",
	"onion",
	"potato",
	"spinach",
	"mustard",
	"cauliflower",
];

for (let items of bag) {
	console.log(items);
}

// Multi-Dimensional usage :

bag = [
	["capsicum", "okra", "onion", "potato", "spinach", "mustard", "cauliflower"],
	["pencil", "sharpener", "eraser"],
];

for (let purchase of bag) {
	for (let item of purchase) {
		console.log(item);
	}
}

// For in : Used to loop through values in objects.

// Syntax : for(values in keys)

// EG :

const percent = {
	Alice: 85,
	Bob: 67,
	Charlie: 92,
	David: 78,
	Emily: 54,
	Frank: 95,
	Grace: 42,
	Henry: 71,
	Isabella: 89,
	Jack: 63,
};

for (let values in percent) {
	console.log(percent[values]);
}
