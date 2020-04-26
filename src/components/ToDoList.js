import React, { useState } from 'react';
import { ToDoItem } from './ToDoItem';
import { AddToDoItemForm } from './AddToDoItemForm';

export const ToDoList = () => {
  const [toDoItems, setToDoItems] = useState([]);

  const deleteItem = (itemIndex) => {
    const itemAfterDeletion = [...toDoItems];
    itemAfterDeletion.splice(itemIndex, 1);
    setToDoItems(itemAfterDeletion);
  };

  const addNewItem = (toDoItem) => {
    const itemAfterAddition = [...toDoItems];
    itemAfterAddition.push(toDoItem);
    setToDoItems(itemAfterAddition);
  };

  const checkItem = (toDoItemIndex) => {
    const newItems = [...toDoItems];
    newItems[toDoItemIndex].done = true;
    setToDoItems(newItems);
  };

  const uncheckItem = (toDoItemIndex) => {
    const newItems = [...toDoItems];
    newItems[toDoItemIndex].done = false;
    setToDoItems(newItems);
  };

  const toDoItemsElements = toDoItems.map((toDoItem, toDoItemIndex) => {
    return (
      <ToDoItem 
        key={toDoItemIndex} 
        toDoItem={toDoItem} 
        onDelete={(event) => deleteItem(toDoItemIndex)} 
        onCheck={() => checkItem(toDoItemIndex)}
        onUncheck={() => uncheckItem(toDoItemIndex)}
      />
    );
  });
  return ( 
    <div>
      {toDoItemsElements}
      <AddToDoItemForm onAddNewItem={addNewItem} />
    </div>
  );
};