// ALL THE ARITHMETIC OPERATIONS CAN BE DONE IN THE BROWSER'S CONSOLE FOR THE USER TO TEST.

// [] = "Executable in browser console".
// () = "Additional Information regarding the context".
// : = "Output of the Executable".

// Primitives in a language are called anything which can store data of different types
// JS has number,string,boolean,NUll, Undefined and there are technical one's called Symbol and BigInt.
// Starting with numbers
// Numbers are either positive and negative (or) whole and decimal.

// 2 , -1, 9.1

// Math Operations (* , + , - , / , % , **) :
// Multiply : [2 * 3] : 6, Exponentiation : [2 ** 3]: 8 (2 raised to the power of 3).
// Addition : [2 + 3] : 5, Subtraction : [2 - 3] : -1, Modulo : [3 % 2] : 1 (Remainder of the division).

// These basics can be put to use in the chrome browser by inspecting and going through console and dry running with the primitives and math operations.
// NaN : Not a number, in general this is a number but, it's also not a number in terms of arithmetic operation.
// For eg : 0/0 is not a number, Nan * 3 is also Nan. In that context, we can understand NaN.

// typeof will provide the type of any variable.
// operator precedence is also present in JS Eg 1 : [4 + 3 * 4/2] = [4 + 12/2] = [4+6] : 10.
// Eg 2 : [(45 % 10) ** 3] = [5 raised to the power 3] : 125.
// Eg 3 : [200 + 0/0] = [200 + NaN] : NaN.

// let is a keyword used to declare block scoped variables.
// Eg : [let year = 1985;] <-- (In JS, Automatic SemiColon Insertion is provided)
// We use manual semi colon for clear statement termination and clean understanding of the code.

// [year]:1985 (Whenever we use year again, we'll see 1985 , we can change the value of year.)
// [let newyear = 1;] = [newyear + year;]:1986.

// const is also another keyword used to store values, but, the value cannot be re-assigned again.
// the value remains constant.

// var is the oldest keyword to store data, there is a difference between let, var and const.

// In terms of post/pre -> increment/decrement we can do use them in JS.
// Eg : year++ & ++year = year + 1, year-- & --year = year - 1.

// The difference is, post increment will increase after the line is executed, pre-increment increases while executing the line.

// Also, short hand assignment notations in JS : year += 1(year = year + 1).
// These assignments can be used for every pre-defined arithmetic operator available in JS.

// Boolean decides whether something is true/false.(Good for making comparisons, flags and etc.

// Naming convention : camelCasing (variableName), snake_casing(variable_name)
