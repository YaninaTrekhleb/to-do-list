import React from 'react';

export const ToDoItem = (props) => {
  const {toDoItem, onDelete} = props;
  return (
    <div>
      <input type="checkbox" checked={toDoItem.done}></input>
      {toDoItem.name} 
      <button onClick={(event) => onDelete()}>X</button>
    </div>
  )
}
