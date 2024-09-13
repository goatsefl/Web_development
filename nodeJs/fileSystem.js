// All file system operations have synchronous, callback, and promise-based forms, and are accessible using both CommonJS syntax and ES6 Modules (ESM).

const fs = require('fs');
console.log(fs);
// console.log(fs); // Outputs all the fs object's properties, methods and functions.

// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("Created Dog")
//     if (err) throw err;
// });

//
// try {
const folderName = process.argv[2] || 'Empty_Folder';
console.log(folderName + "created!!");
//     if (!folderName) {
//         throw new error("Provide the folder, it's mandatory");
//     }
fs.mkdirSync(folderName);
// writeFileSync(name,data,options) : data takes in the information the user want to preload with. 'name' is the NAME of the folder need to be created.
// mkdir is to create a file which is empty, the Sync in most of the functions define the synchronous nature.
fs.writeFileSync(`${folderName}/index.html`, "hello")
fs.writeFileSync(`${folderName}/app.css`, "hello")
fs.writeFileSync(`${folderName}/app.js`, "hello")
// These files will be created whenever we run fileSystem.js from any part of the location. 
// Meaning, it will create those 3 files, with template data. It's easy and better to use scripts.
// }
// catch (e) {
//     console.log(e);
// }