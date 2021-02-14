## Installation

1. Add the following alias and function to your `.bashrc`.

```sh
alias todo='todo'

todo () {
  if [ "$1" == "a" ]
  then
    node /absolute/path/to/app.js add --title "$2" --description "$3"
  elif [ "$1" == "d" ]
  then
    node /absolute/path/to/app.js remove --index $2
  elif [ "$1" == "l" ]
  then
    node /absolute/path/to/app.js list
  elif [ "$1" == "c" ]
  then
    node /absolute/path/to/app.js clear
  elif [ "$1" == "h" ]
  then
    node /absolute/path/to/app.js hlp
  else
    node /absolute/path/to/app.js 404
  fi
}
```

2. The application uses a JSON file to store the tasks list, so you need to specify its path in the config file. In order to do so, rename the file `config.example.js` to `config.js` and change the value of the variable `TASKS_LIST_FILE` to an absolute path of your choice.

## Usage

### Add task

Add a task to the list. If the task title or description have more than one word it must be typed in quotes.

```sh
todo a [task_title] [task_description]
```

### Delete task

Delete a task from the list by Index.

```sh
todo d [task_index]
```

### List tasks

List all tasks saved.

```sh
todo l
```

### Clear tasks

Delete all tasks from the list.

```sh
todo c
```

### Show help

Show all commands available.

```sh
todo h
```
