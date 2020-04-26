import React, { useState } from 'react';
import { ToDoItem } from './ToDoItem';

export const ToDoList = () => {
  const [toDoItems, setToDoItems] = useState([
    {
      name: 'Walk dog',
      done: false,
    },
    {
      name: 'Poo',
      done: true,
    },
    {
      name: 'Eat',
      done: true,
    },
  ]);
  const deleteItem = (itemIndex) => {
    const itemAfterDeletion = [...toDoItems];
    itemAfterDeletion.splice(itemIndex, 1);
    setToDoItems(itemAfterDeletion);
  };
  const toDoItemsElements = toDoItems.map((toDoItem, toDoItemIndex) => {
    return (
      <ToDoItem 
        key={toDoItemIndex} 
        toDoItem={toDoItem} 
        onDelete={(event) => deleteItem(toDoItemIndex)} 
      />
    );
  });
  return ( 
    <div>
      {toDoItemsElements}
    </div>
  );
};