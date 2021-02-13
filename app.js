const yargs = require("yargs");
const task = require("./task");

// Add Task
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

// Add Task
yargs.command({
  command: "clear",
  describe: "Removes all tasks from the list.",
  handler(argv) {
    task.clear();
  },
});

yargs.argv;
