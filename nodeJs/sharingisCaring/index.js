const small = require('./small');
const medium = require('./medium');
const big = require('./big');

const allSizes = [small, medium, big];

// console.log(allSizes);

module.exports = allSizes;
// if we're using exports, then we need to attach a new property and assign it, while calling it in the app.js, the file needs to be called with the property that's defined here.
// Because, it might cause issues, we simply use module.exports = allSizes, to avoid remembering different property names.
// If we want to export this file as a template whenever a directory is used in terms of require(directory);
// require(./sharingisCaring) will call index.js and use exports.
