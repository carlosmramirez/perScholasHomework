const GroceryListItem = (props) => {

  return (
    props.isGroceryList ?

    <div id={`${props.index}`} key={props.item.item + props.index}>
      <p>
        Item: {props.item.item} || Units: {props.item.units} || Quantity: {props.item.quantity}
      </p>
      <button onClick={props.removeGroceryItem}>Mark Item as Purchased</button>
      <button onClick={props.removeGroceryItemFromList}>Remove Item from List</button>
    </div>

    :

    <div id={`${props.index}`} key={props.item.item + props.index}>
      <p>
        Item: {props.item.item} || Units: {props.item.units} || Quantity: {props.item.quantity}
      </p>
      <button onClick={props.removeGroceryItem}>Add to Grocery List</button>
      <button onClick={props.removeGroceryItemFromList}>Remove Item from List</button>
    </div>

  )
};

export default GroceryListItem;