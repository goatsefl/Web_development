// Objects : Unordered collection of key-value pairs.

// Creating an object :
let objectName = { key1: "value1", key2: "value2" };

// Dot notation
console.log(objectName.key1);
// Bracket notation
console.log(objectName["key2"]);
// Output : value1

// All keys are intrinsically converted to strings.

// We can create new keys by using dot or bracket notation

objectName.key3 = "value3";
objectName["key4"] = "value4";

// Output : {key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4'}

// Nested Array Objects

const school = {
	name: "Wonderland High",
	classes: [
		{
			subject: "Math",
			students: ["Alice", "Bob", "Charlie"],
		},
		{
			subject: "Science",
			students: ["David", "Eva", "Frank"],
		},
	],
};

console.log(classroom[0][1]); // Outputs: Bob (second student in the first group)
console.log(classroom[2][0]); // Outputs: Grace (first student in the third group)

// We use index notation and dot notation to get access to different values in objects in arrays and vice versa.

// Objects.key(ObjectName) and Object.value(ObjectName) returns it in the array format.
// works for both keys and values as shown above.

let ObjToArrKey = Object.keys(objectName);
let ObjToArrVal = Object.values(objectName);

console.log(ObjToArrKey); // Output : ['key1','key2','key3','key4']
console.log(ObjToArrVal); // Output : ['value1','value2','value3','value4']
