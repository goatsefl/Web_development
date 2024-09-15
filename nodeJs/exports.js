// module.exports : It is an object which exports it to where the require() is used.
// require() : Used to import modules and local files.
// In our case we can use require to import some local files for the usage purpose. 

const { cube, square } = require('./tutorial');
// One of the ways to use destructured properties.
// Or use const nameOf = require('./something.js')
// const additionOfCubeAndSquare = (nameOf.cube(10) + nameOf.square(20))
// console.log(additionOfCubeAndSquare) // output : 1400.
console.log(cube(10) + square(20));

// Output = 1400
// 