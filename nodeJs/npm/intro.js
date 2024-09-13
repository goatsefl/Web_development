// NPM : It's called node package manager, it's a library of packages made by other developers, that can be used for free.
// Also, a command line tool to install and configure other packages in our node projects.

// Package : it's just code that someone else has written, easier for programmers to use predefined tools to make use of packages.

// Typing npm on terminal will provide you with information regarding usage and commands.

// npm 
// Output :
// npm<command>
// Usage:

// npm install        install all the dependencies in your project
// npm install < foo > add the < foo > dependency to your project
// npm test           run this project's tests
// npm run < foo > run the script named < foo >
//     npm < command > -h   quick help on < command >
//         npm - l             display usage info for all commands
// npm help < term > search for help on < term >
//     npm help npm       more involved overview

// All commands:

// access, adduser, audit, bugs, cache, ci, completion,
//     config, dedupe, deprecate, diff, dist - tag, docs, doctor,
//     edit, exec, explain, explore, find - dupes, fund, get, help,
//     help - search, hook, init, install, install - ci - test,
//     install - test, link, ll, login, logout, ls, org, outdated,
//     owner, pack, ping, pkg, prefix, profile, prune, publish,
//     query, rebuild, repo, restart, root, run - script, sbom,
//     search, set, shrinkwrap, star, stars, start, stop, team,
//     test, token, uninstall, unpublish, unstar, update, version,
//     view, whoami

// Specify configs in the ini - formatted file:
// /home/job_required /.npmrc
// or on the command line via: npm < command > --key=value

// More configuration info: npm help config
// Configuration fields: npm help 7 config

// npm @10.8.2 / usr / local / lib / node_modules / npm


// When we use npm install <package_name>, it will install all the dependencies, 3 files will be created

// node_modules : Has all the packages required for the pertaining project. why node_modules? because, when you run, node looks for this specific directory to use require('packageName') to retrieve the packageData.
// package.json : Has metadata about the current working project,version and, has dependencies[packages that are used in your project], alias a configuration file for your project.
// package-lock.json : Locks the exact version of the installed packages and their dependencies, used when multiple people work on the same project. Also, all the dependencies of node_modules reside here.


// While installing the same package in different machine, package.json might provide version ranges and package-lock.json will provide exact version.

// By that definition, it's more comprehensive in its nature. It's recommended not to manually change the package-lock.json without prior knowledge.

