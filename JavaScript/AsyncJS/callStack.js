// Call Stack : JavaScript interpreter will take in the function, if a function is called and store the functions in a call stack.
// Right after the function execution is complete, it returns to the next call of functions.

const multiply = (x, y) => x * y;

const square = (x) => multiply(x, x);

const isRightTriangle = (a, b, c) => square(a) + square(b) === square(c);

// In the above code, if isRightTriangle(3,4,5) is called with the given arguments.

/*
|                      |
|a * a                 |
|multiply(a,a)         |
|square(a)             |
|isRightTriangle(3,4,5)| 
|**********************|


Steps of Execution :

1.) multiply(a,a); (first pop) last push 
2.) square(a) (second pop) middle push
3.) isRightTriangle(3,4,5) (third pop) first push 

Empty Stack : 1st time 

4.) multiply(a,a) (first pop) last push.
5.) square(b) (second pop) middle push.
6.) isRightTriangle(3,4,5)(third pop) first push.

Empty Stack : 2nd time

7.) multiply(a,a) (first pop) last push.
8.) square(b) (second pop) middle push.
9.) isRightTriangle(3,4,5)(third pop) first push.

returns true if isRightTriangle has arguments as 3,4,5.

returns false if values are 1,2,3 as it 1 + 4 != 9.

The call stack can be viewed in the source by inspecting the browser.
In source , choose the required JS

*/
