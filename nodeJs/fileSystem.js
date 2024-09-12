// All file system operations have synchronous, callback, and promise-based forms, and are accessible using both CommonJS syntax and ES6 Modules (ESM).

const fs = require('fs');

// console.log(fs);

fs.mkdir('Dogs', { recursive: true }, (err) => {
    console.log("Created Dog")
    if (err) throw err;
});