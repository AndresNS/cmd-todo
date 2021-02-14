## Installation

Add the following alias and function to your `.bashrc`.

```sh
alias todo='todo'

todo () {
  if [ "$1" == "a" ]
  then
    node ../Desarrollo/cmd-todo/app.js add --title "$2" --description "$3"
  elif [ "$1" == "d" ]
  then
    node ../Desarrollo/cmd-todo/app.js remove --index $2
  elif [ "$1" == "l" ]
  then
    node ../Desarrollo/cmd-todo/app.js list
  elif [ "$1" == "c" ]
  then
    node ../Desarrollo/cmd-todo/app.js clear
  elif [ "$1" == "h" ]
  then
    node ../Desarrollo/cmd-todo/app.js hlp
  else
    node ../Desarrollo/cmd-todo/app.js 404
  fi
}
```

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
