"use strict";
const fs = require("fs");
const chalk = require("chalk");

const add = ({ title, description }) => {
  const tasks = loadTasks();
  tasks.push({ title, description });
  saveTasks(tasks);
  console.log(chalk.black.bgGreen(`Task '${title}' added to the list.`));
};

const remove = (taskIndex) => {
  try {
    const tasks = loadTasks();
    const updatedTasks = tasks.filter((task, id) => taskIndex - 1 !== id);

    saveTasks(updatedTasks);
    console.log(
      chalk.black.bgGreen(
        `Task '${tasks[taskIndex - 1].title}' removed from the list.`
      )
    );
  } catch (e) {
    console.log(
      chalk.red(
        "There was an error while trying to delete the task. Please make sure the index is correct."
      )
    );
    console.log("");
    help();
  }
};

const list = () => {
  const tasks = loadTasks();

  if (tasks.length === 0) {
    console.log(chalk.black.bgYellow("The list is empty."));
    return;
  }

  const tasksTable = {};

  tasks.map(
    (task, id) =>
      (tasksTable[id + 1] = new Task(
        task.title,
        task.description ? task.description : "---"
      ))
  );

  console.table(tasksTable);
};

const clear = () => {
  saveTasks([]);
  console.log(chalk.black.bgGreen("All tasks have been deleted."));
};

const help = () => {
  console.log(chalk.underline("Commands:"));
  console.log(
    "  todo a [task_title] [task_description]    Add a task to the list."
  );
  console.log(
    "  todo d [task_index]                       Delete a task by index."
  );
  console.log("  todo l                                    List all tasks.");
  console.log(
    "  todo c                                    Delete all tasks from the list."
  );
};

const notFound = () => {
  console.log(chalk.red("Invalid command."));
  console.log("");
  help();
};

const saveTasks = (tasks) => {
  const tasksJSON = JSON.stringify(tasks);
  fs.writeFileSync("./tasks.json", tasksJSON);
};

const loadTasks = () => {
  try {
    const tasks = fs.readFileSync("./tasks.json");
    return JSON.parse(tasks.toString());
  } catch (e) {
    return [];
  }
};

class Task {
  constructor(title, description) {
    this.Title = title;
    this.Description = description;
  }
}

module.exports = {
  add,
  remove,
  list,
  clear,
  help,
  notFound,
};
