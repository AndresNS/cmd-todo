## Installation

Add the following alias and function to your `.bashrc`.

```sh
alias todo='todo'

todo () {
  if [ "$1" == "-a" ]
  then
    node ./relative/path/to/app.js add --title $2 --description $3
  elif [ "$1" == "-d" ]
  then
    node ./relative/path/to/app.js remove --id $2
  elif [ "$1" == "-l" ]
  then
    node ./relative/path/to/app.js list
  elif [ "$1" == "-c" ]
  then
    node ./relative/path/to/app.js clear
  fi
}
```

## Usage

### Add task

Add a task to the list. If the task title or description have more than one word it must be typed in quotes.

```sh
todo -a {task_title} {task_description}
```

### Delete task

Delete a task from the list by Id.

```sh
todo -d {task_id}
```

### List tasks

List all tasks saved.

```sh
todo -l
```

### Clear tasks

Delete all tasks from the list.

```sh
todo -c
```
