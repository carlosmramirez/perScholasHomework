import { useState } from 'react';

import GroceryListItem from './GroceryListItem.js';
import NewItemForm from './NewItemForm.js';

import './GroceryList.css'

export default function GroceryList() {
  const [groceryList, setGroceryList] = useState(
    [
      {
        item: 'Rice',
        units: 'Sack',
        quantity: 1,
        isPurchased: false
      },
      {
        item: 'Tortillas',
        units: 'Package',
        quantity: 10,
        isPurchased: false
      },
      {
        item: 'Fruit',
        units: 'Pieces',
        quantity: 5,
        isPurchased: true
      }
    ]
  );
  
  const handleSubmit = (e, newName, newUnits, newQuantity) => {
    e.preventDefault();
    const currentList = groceryList.slice();
    const newItem = {
      item: newName,
      units: newUnits,
      quantity: newQuantity,
      isPurchased: false
    }
    currentList.push(newItem)
    setGroceryList(currentList);
  }

  const removeGroceryItem = (event) => {
    const currentList = groceryList.slice();
    const itemIndex = event.target.parentNode.id;
    const tempItem = currentList[itemIndex];
    tempItem.isPurchased = !tempItem.isPurchased;
    currentList[itemIndex] = tempItem;
    setGroceryList(currentList);
  }

  const removeGroceryItemFromList = (event) => {
    const currentList = groceryList.slice();
    const itemIndex = event.target.parentNode.id;
    currentList.splice(itemIndex, 1);
    setGroceryList(currentList);
  }

  const sortAlphabetically = () => {
    const currentList = groceryList.slice();
    currentList.sort((a,b) => {
      return (a.item).localeCompare(b.item)
    });    
    setGroceryList(currentList);
  }

  const sortByQuantity = () => {
    const currentList = groceryList.slice();
    currentList.sort((a, b) => {
      return (b.quantity) - (a.quantity);
    })
    setGroceryList(currentList);
  }

  return (
    <div className='list-container'>
      <div>
        <button onClick={sortAlphabetically}>Sort Alphabetically</button>
      </div>
      <div>
        <button onClick={sortByQuantity}>Sort By Quantity</button>
      </div>
      <div className='list'>
        <h3>Items Needed:</h3>
        {groceryList.map(item => {
          if (!item.isPurchased) {
            return (
              <GroceryListItem
                key={item.item + groceryList.indexOf(item)} 
                index={groceryList.indexOf(item)} 
                item={item}
                removeGroceryItem={removeGroceryItem}
                removeGroceryItemFromList={removeGroceryItemFromList}
                isGroceryList={true} />
            )
          }
          return null;
        })}
      </div>
      <div className='form-container'>
        <NewItemForm handleSubmit={handleSubmit}/>
      </div>
      <div className='list'>
        <h3>Items Purchased</h3>
        {groceryList.map(item => {
          if (item.isPurchased) {
            return (
              <GroceryListItem 
                key={item.item + groceryList.indexOf(item)} 
                index={groceryList.indexOf(item)} 
                item={item}
                removeGroceryItem={removeGroceryItem}
                removeGroceryItemFromList={removeGroceryItemFromList}
                isGroceryList={false} />
            )
          }
          return null;
        })}
      </div>
    </div>
  )
}