import { useState } from 'react';

export default function NewItemForm(props) {
  const [newName, setNewName] = useState('');
  const [newUnits, setNewUnits] = useState('');
  const [newQuantity, setNewQuantity] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleUnitsChange = (event) => {
    setNewUnits(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setNewQuantity(event.target.value);
  };

  return (
    <div>
      <form onSubmit={(e) => props.handleSubmit(e,newName, newUnits, newQuantity)}>
        <label>
          Item name:
          <input type="text" value={newName} onChange={handleNameChange} />
        </label>
        <label>
          Item units:
          <input type="text" value={newUnits} onChange={handleUnitsChange} />
        </label>
        <label>
          Item quantity:
          <input type="text" value={newQuantity} onChange={handleQuantityChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {/* <button onClick={() => props.handleSubmit(newName, newUnits, newQuantity)}>Submit</button> */}
    </div>
  )
}