import React from "react";
import Item from "../item/item.component";
import "../item/item.style.scss";

const items = [
  {
    id: 1,
    description: "Item 1 Description",
    quantity: 10,
    packed: false,
  },
  {
    id: 2,
    description: "Item 2 Description",
    quantity: 5,
    packed: true,
  },
];

function ItemList() {
  return (
    <ul className="item-container">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default ItemList;
