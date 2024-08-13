// Default Parameters

// If any of the values are not declared and you don't want to think of parameters every-time.

// default parameters are useful in this scenario.

const randoms = (elements = 6) => Math.floor(Math.random() * elements) + 1;

randoms(); // if you don't give any value, it will by default make it 6.

randoms(8); // Now, you can send new values or just leave it empty and let the default.

// Spread : It's a concept of disintegrating iterables like strings and arrays by values.
// Usage : "..." is the spread operator, we can use that on any array or string to get individual values of the iterables.

// Syntax :

const nums = [11, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 9];

Math.max(...nums); // Output : 11.

// It can be used to print each character in a string like this.

console.log(..."Hello");

// You can copy 1 array to another and the same goes for objects.

const copiesOne = [...nums];

console.log(...copiesOne);

const smithObj = { First: "Rick", Partner: "Morty", Family_Name: "Smith" };

const harlowObj = { First: "Glen", Partner: "Gwen", Family_Name: "Harlow" };

const newObj = {
	...harlowObj,
	...smithObj,
	Grand_Kids: 8,
	Sons: 5,
	Daughter: 3,
};
// In this case, the order matters, as ...smithObj is added after ...harlowObj, it's going to copy smithObj to newObj.

console.log(newObj);

// arguments object : Available inside every regular function, have array like object with length property.
// contains all the arguments passed to function. Not available in arrow functions.

// Eg :

const summer = [1, 2, 3, 4, 5, 5, 4, 3, 1, 2];

const totals = function () {
	let total = 0;
	for (let i = 0; i < arguments.length; i++) {
		console.log(typeof arguments);
		total += arguments[i];
	}
	return total;
};

console.log(totals(...summer)); // Works with anonymous and regular functions.

// rest : It uses the same concept like spread, but works for rest of the arguments are taken and converted into an array.

// EG :

const results = (...nums) => {
	return nums.reduce((total, nextVal) => total + nextVal);
};

console.log(results(2, 1, 3, 4, 1, 5, 6, 7, 8, 2));

// We can specify certain arguments, and the rest of the arguments can be taken by the rest operation.

// Destructuring : disintegrating arrays or object properties by assigning it to distinct variables.

// Eg : For Arrays

const relay = [123123, 14241, 5215, 421, 441, 53, 42, 12, 9];

const [first, second, third] = relay;

console.log(`${first} ${second} ${third}`); // output 123123 14241 5215

// first, second and third are variables assigned the values of the starting 3 index values of the array relay.

// Eg : For Objects

const human = {
	hair: "long",
	eye_color: "brown",
	height: 182,
	weight: 82,
	noOfSiblings: 2,
};
// Assigning new values doesn't work for the above object, instead, we can rename the variables with ':' and refer them.
const {
	hair: hairLength, // when you use console.log(hair) it will be undefined as we have renamed it to hairLength.
	relationship_status = "UnMarried", //This will not modify the object, we're creating a variable with string value assignment.
	weight: weightInKgs,
	height: verticalLength,
} = human;

console.log(`${hairLength} ${relationship_status} ${weightInKgs}`);

console.log(human);

// Destructuring Params  : these can be used as we can in an object, we destructure them and use this keyword even in arrow function.

const newUser = ({ weight, height }) => {
	console.log(`${weight} ${height}`);
};

newUser(human);

// You can map and use destructured params to access object properties in a much simpler way using arrow functions.

const movies = [
	{
		title: "Inception",
		yearOfRelease: 2010,
		score: 92,
	},
	{
		title: "The Dark Knight",
		yearOfRelease: 2008,
		score: 94,
	},
	{
		title: "Parasite",
		yearOfRelease: 2019,
		score: 98,
	},
	{
		title: "The Matrix",
		yearOfRelease: 1999,
		score: 87,
	},
	{
		title: "Pulp Fiction",
		yearOfRelease: 1994,
		score: 94,
	},
];
// Destructured params :
movies.map((movie) =>
	console.log(
		`Title :${movie.title}\nMovie Score : ${movie.score}\nRelease Date: ${movie.yearOfRelease}`
	)
);
