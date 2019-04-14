#!/usr/bin/env node

const program = require("commander");

program
    .option("-p, --port <port>", "Choose Port Number (default 8081)", "8081")
    .action(port => {
        if (typeof port === "object") port = 8081;
        else port = parseInt(port);
        console.log("Starting on port: " + port);
    });

program.parse(process.argv);
