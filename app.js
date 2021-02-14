"use strict";
const yargs = require("yargs");
const task = require("./task");

// Add task
yargs.command({
  command: "add",
  describe: "Add new task to the list.",
  builder: {
    title: {
      describe: "Task title",
      demandOption: true,
      type: "string",
    },
    description: {
      describe: "Task description",
      demandOption: false,
      type: "string",
    },
  },
  handler(argv) {
    task.add({ title: argv.title, description: argv.description });
  },
});

// Remove task
yargs.command({
  command: "remove",
  describe: "Remove a task from the list.",
  builder: {
    index: {
      describe: "Task Index",
      demandOption: true,
      type: "number",
    },
  },
  handler(argv) {
    task.remove(argv.index);
  },
});

// List tasks
yargs.command({
  command: "list",
  describe: "List all tasks.",
  handler(argv) {
    task.list();
  },
});

// Clear tasks
yargs.command({
  command: "clear",
  describe: "Removes all tasks from the list.",
  handler(argv) {
    task.clear();
  },
});

// Show help
yargs.command({
  command: "hlp",
  describe: "Show help.",
  handler(argv) {
    task.help();
  },
});

// Invalid command
yargs.command({
  command: "404",
  describe: "Invalid command.",
  handler(argv) {
    task.notFound();
  },
});

yargs.argv;
