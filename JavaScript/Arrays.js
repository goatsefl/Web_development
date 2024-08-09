// Array is a data structure that can store data in an indexed structure.

// Arrays in JavaScript can store multiple types of data while other languages allow only similar type of data.

// EG :

const myArray = [1, "hello", true, null];

const mixedArray = [10, "apple", true, { name: "John" }];

// That's a key: value pair inside the mixedArray with key being name and value being a string John.

// Array Methods: push, pop, shift, unshift

// push()
// Adds one or more elements to the end of an array.**
// Returns the new length of the array.

const fruits = ["apple", "banana"];
fruits.push("orange", "grape");
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']

// pop()
// Removes the last element from an array.**
// Returns the removed element.

const fruitsOne = ["apple", "banana", "orange"];
const removedFruit = fruits.pop();
console.log(fruitsOne); // Output: ['apple', 'banana']
console.log(removedFruit); // Output: 'orange'

// shift()
// Removes the first element from an array.**
// Returns the removed element.

const fruitsTwo = ["apple", "banana", "orange"];
const removedFruitTwo = fruitsTwo.shift();
console.log(fruitsTwo); // Output: ['banana', 'orange']
console.log(removedFruitTwo); // Output: 'apple'

// unshift()
// Adds one or more elements to the beginning of an array.**
// Returns the new length of the array.

const fruitsThree = ["banana", "orange"];
fruitsThree.unshift("apple", "kiwi");
console.log(fruits.Three);
// Output: ['apple', 'kiwi', 'banana', 'orange']

// Array Methods: concat(), includes(), indexOf(), reverse()

// concat()
// Combines two or more arrays into a new array.**
// Does not modify the original arrays.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = array1.concat(array2);
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// includes()
// Checks if an array contains a specific element.**
// Returns a boolean value (true or false).

const season = ["apple", "banana", "orange"];
console.log(seasonal.includes("banana")); // Output: true
console.log(seasonal.includes("kiwi")); // Output: false

// indexOf()
// Returns the index of the first occurrence of a specified element in an array.**
// Returns -1 if the element is not found.

const numbers = [2, 5, 9, 2];
console.log(numbers.indexOf(5)); // Output: 1
console.log(numbers.indexOf(7)); // Output: -1

// reverse()
// Reverses the order of elements in an array.**
// Modifies the original array

const letters = ["a", "b", "c"];
letters.reverse();
console.log(letters); // Output: ['c', 'b', 'a']

/* 
slice()
Creates a new array containing a portion of an existing array.**
Does not modify the original array.
*/
const originalArray = [1, 2, 3, 4, 5];
const newArray = originalArray.slice(1, 4); // Extracts elements from index 1 to 3 (exclusive)
console.log(newArray); // Output: [2, 3, 4]
console.log(originalArray); // Output: [1, 2, 3, 4, 5] (unchanged)

/* 
splice()
Modifies an array by adding, removing, or replacing elements.**
Returns an array containing the removed elements.
*/
const originalNumbers = [10, 20, 30, 40, 50];
const removedNumbers = originalNumbers.splice(2, 2, 60, 70); // Removes 2 elements from index 2 and inserts 60, 70
console.log(originalNumbers); // Output: [10, 20, 60, 70, 50]
console.log(removedNumbers); // Output: [30, 40]

// JavaScript has a very unique sort method which takes in a basic comparison function to sort it according to the preference of user.

const tropicals = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); // Output: ['apple', 'banana', 'cherry']

// In this example, the fruits are sorted in ascending alphabetical order because sort() by default compares elements as strings.

// Same way for numbers but, there's a trick to it.

let numBers = [1, 91, 15, 111, 233, 54421, 1122];
console.log(numBers.sort());

// Output : (7) [1, 111, 1122, 15, 233, 54421, 91]

// It's because it sorts lexicographically by default. It will sort single digit numbers instantly.

// To sort we use comparison functions with any 2 arguments like shown below.

console.log(numBers.sort((a, b) => a - b));

// Output :[1, 15, 91, 111, 233, 1122, 54421] Ascending order.

console.log(numBers.sort((a, b) => b - a));

// Output :[54421, 1122, 111, 91, 233,15 ,1] Descending order.

// We can use sort function to customize our sorting style, that makes the javascript sort powerful and useful for different scenarios.

// Multi-Dimensional Arrays Eg:

// Creating Multi-Dimensional array :
let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

let element = matrix[1][2]; // Accesses the element at row 1, column 2 (which is 6)

matrix.push(10, 11, 12);

// Adding new inner array.
