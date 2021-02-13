"use strict";
const fs = require("fs");
// const chalk = require("chalk");

const add = ({ title, description }) => {
  const tasks = loadTasks();
  tasks.push({ title, description });
  saveTasks(tasks);
  console.log(`Task '${title}' added to the list.`);
};

const remove = (taskIndex) => {
  const tasks = loadTasks();
  const updatedTasks = tasks.filter((task, id) => taskIndex - 1 !== id);

  saveTasks(updatedTasks);
  console.log(`Task '${tasks[taskIndex - 1].title}' removed from the list.`);
};

const list = () => {
  const tasks = loadTasks();

  if (tasks.length === 0) {
    console.log("* The list is empty. *");
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
  console.log("All tasks have been deleted.");
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
};
