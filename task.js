const fs = require("fs");

const add = ({ title, description }) => {
  const tasks = loadTasks();
  tasks.push({ title, description });
  saveTasks(tasks);
};

const remove = (taskId) => {};
const list = () => {};
const clear = () => {
  saveTasks([]);
  console.log("All tasks have been removed.");
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

module.exports = {
  add,
  remove,
  list,
  clear,
};
