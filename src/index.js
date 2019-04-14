#!/usr/bin/env node

const program = require("commander");

program
    .version("0.1.0")
    .command(
        "create",
        "create a new p5 project inside the current directory (create a folder)"
    );

program.command("start", "Start a live server and host the files");

program.parse(process.argv);
