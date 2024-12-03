import React from "react";

{/*
  const ItemList = ({ items }) => { ... }:
  Defines a functional component named ItemList that takes items as a prop. The items prop is expected to be an array of objects.

  <ul>:
  Renders an unordered list (<ul>).

  {items.map(item => ( ... ))}:
  Iterates over the items array using the map method. For each item in the array:

  A <li> element is created with item.name as its content.
  key={item.id}:
  The key attribute uniquely identifies each list item, which helps React efficiently update and re-render the list when changes occur. The item.id is used as the unique identifier.
*/}
const ItemList = ({ ItemNames }) => {
  return (
    <ul>
      {ItemNames.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}

{/*
  const App = () => { ... }:
  Defines a functional component named App.

  const items = [ ... ]:
  Declares an items array of objects, where each object has:

  An id property (unique identifier).
  A name property (descriptive name).
  return <ItemList items={items} />:
  Renders the ItemList component, passing the items array as a prop.
*/}
const App = () => {
  const ItemNames = [
    { id: 1, name: "DSA" },
    { id: 2, name: "Web3" },
    { id: 3, name: "DevOps" },
    { id: 4, name: "Web Development" },
  ]
  return <ItemList ItemNames={ItemNames} />
}

export default App;