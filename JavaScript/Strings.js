// String : String of characters(Textual script).

// [] = "Executable in browser console".
// () = "Additional Information regarding the context".
// : = "Output of the Executable".

// Single or Double Quotes are used to declare string, EG : let state = "Telangana";
// Everything enclosed in a double or single quotes is a string including empty spaces.

// Each position of the character can be accessed, the positional indicator of each character is called index.
// Start from 0(By default, it's 0 based indexing).
// 0 - T , 1 - e, 2 - l , 3 - a, 4 - n, 5 - g, 6 - a, 7 - n, 8 - a. (Because it is 0 based, you can see the index ends at 8).

// We can print each character individually if we would like to.

// EG : state[3] : "a".
// stringOne = "one"; stringTwo = "two"
// String concatenation is adding strings together = stringOne + stringTwo
// if you do state[35] it will output as undefined.
// you can use properties to strings Eg : state.length : O/P = 9.
// Q.) What if we concatenate something like a number with string?
// A.) Eg : 99 + "welcome" : 99welcome(type coercion).

// Type Coercion : This happens when the functions expect same data type in an operation, but, the user provides
// a different type that can result to a different output.
// 1.) If "+"" is used with string and a number, the resultant of that operation will be a string.
// 2.) Values like 0, null, undefined, NaN, ['' (empty string)], and "false" are coerced to false.
// 3.) Loose equality will also follow type coercion, whereas strictly equals doesn't follow coercion.

// String methods : Powerful properties that can be used to make changes to strings like, uppercase,lowercase,repeat,trim and etc.

// Eg : .trim(), toUpperCase().
