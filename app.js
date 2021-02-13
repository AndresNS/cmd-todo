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
    id: {
      describe: "Task ID",
      demandOption: true,
      type: "number",
    },
  },
  handler(argv) {
    task.remove(argv.id);
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

yargs.argv;
