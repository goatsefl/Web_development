// Node.js is the same as javaScript but, can run without the need of browser, with nodejs a user can create
// a standard application just like any other programming language using cpp/java/python and other programming languages.
// nodejs is used in various applications to build cross platform apps.


// Installation : 
// Open terminal and type "node" 
// It will provide with the installation command if it's not installed.
// or type this "sudo apt install nodejs" to install.
// [Note : if you want to update the version, type 'sudo apt install npm']
// [The above command will install the Node Package Manager(It's a package manager for javaScript which allows developers to share and maintain code packages.)]
// [Type 'sudo npm install -g n' to install version manager then sudo n 'version_number' or 'stable'(to install the latest stable release from Node.js website.)]


// Running the REPL(READ,EVALUATE,PRINT & LOOP)
// type 'node' after installation is complete.
// ">" this will appear and you can write javaScript code just like the one on the browser.


// Running a specific script :
// Terminal based commands:
// type 'node filename.js'

// Process : It's a global scope object that provides information about, also, control over the current node.js process.  

console.log(process.argv);
// In the process.argv, we can send in arguments while we execute a script.
// Arguments after node tutorial.js.
// Example : node tutorial.js watcher voucher waucjer
// Output :[ by default process.argv will print the executable path for the Node.js executable and the path of the current file executable.]
// '/usr/local/bin/node',
// '/home/job_required/Documents/Work/Web_development/nodeJs/tutorial.js',
// 'watcher',
// 'voucher',
// 'waucjer'

// process.argv[0] = executable path of Node.js.
// process.argv[1] = executable path of script.

// We're gonna use module.exports as it is used to export data, which we may want to provide it to a local file or some server.




module.exports.square = function square(x) { return x * x }
module.exports.cube = function cube(x) { return x * x * x }
// exports = {
//     multiply: (a, b) => a * b
// }
// console.dir(exports);
// exports = {
//     add: a => a + a
// }
console.log(exports.square)
console.log(exports.cube)
console.log(module.exports.square)
console.log(module.exports.cube)
console.log(Object.is(exports, module.exports)); // Object.is(object1, object2) is a method to check 2 objects or values are pointing to the same object reference or value reference.