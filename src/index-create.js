#!/usr/bin/env node

const program = require("commander");

program.option("-n, --name [name]", "Choose name").action(name => {
    try {
        if (typeof name === "object") throw Error("Name must be provided");
        console.log("Creating new project with name: " + name);
    } catch (error) {
        console.log("Error: " + error.message);
    }
});

program.parse(process.argv);
