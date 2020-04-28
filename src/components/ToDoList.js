import React, { useState } from 'react';
import { ToDoItem } from './ToDoItem';
import { AddToDoItemForm } from './AddToDoItemForm';

const maxAllowedItems = 10;

export const ToDoList = () => {
  const [toDoItems, setToDoItems] = useState([]);

  const deleteItem = (itemIndex) => {
    const itemAfterDeletion = [...toDoItems];
    itemAfterDeletion.splice(itemIndex, 1);
    setToDoItems(itemAfterDeletion);
  };

  const addNewItem = (toDoItem) => {
    if (toDoItems.length >= maxAllowedItems) {
      return;
    }
    const itemAfterAddition = [...toDoItems];
    itemAfterAddition.push(toDoItem);
    setToDoItems(itemAfterAddition);
  };

  const sortItems = (items) => {
    return items.sort((itemA, itemB) => {
      if (itemA.done === true && itemB.done === true) {
        return 0;
      }
      if (itemA.done === false && itemB.done === false) {
        return 0;
      }
      if (itemA.done === true && itemB.done === false) {
        return 1;
      }
      return -1;
    });
  };

  const checkItem = (toDoItemIndex) => {
    const newItems = [...toDoItems];
    newItems[toDoItemIndex].done = true;
    setToDoItems(sortItems(newItems));
  };

  const uncheckItem = (toDoItemIndex) => {
    const newItems = [...toDoItems];
    newItems[toDoItemIndex].done = false;
    setToDoItems(sortItems(newItems));
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
      <AddToDoItemForm 
        onAddNewItem={addNewItem} 
        disabled={toDoItems.length >= maxAllowedItems}
      />
    </div>
  );
};