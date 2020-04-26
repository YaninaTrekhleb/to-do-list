import React from 'react';

export const ToDoItem = (props) => {
  const {toDoItem, onDelete, onCheck, onUncheck} = props;
  const onChange = (event) => {
    if (event.target.checked) {
      onCheck();
    } else {
      onUncheck();
    }
  };

  const style = {};
  if (toDoItem.done) {
    style['textDecoration'] = 'line-through';
  }

  return (
    <div>
      <input 
        type="checkbox"
        checked={toDoItem.done}
        onChange={onChange} 
      />
      <span style={style}>{toDoItem.name}</span>
      <button onClick={(event) => onDelete()}>X</button>
    </div>
  )
};
