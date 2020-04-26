import React, {useState} from 'react';

export const AddToDoItemForm = (props) => {
  const [newTask, setNewTask] = useState({
    name: '',
    done: false,
  });

  const {onAddNewItem} = props;

  const onSubmit = (event) => {
    event.preventDefault();
    onAddNewItem(newTask);
    setNewTask({
      name: '',
      done: false,
    });
  };

  const onTaskNameChange = (event) => {
    const newName = event.target.value;
    const newToDoTask = {...newTask};
    newToDoTask.name = newName;
    setNewTask(newToDoTask);
  };

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        onChange={onTaskNameChange} 
        value={newTask.name}
        required
      />
      <input type="submit" value="Add new task" />
    </form>
  )
};
