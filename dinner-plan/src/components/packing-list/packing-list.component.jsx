import React from "react";
import Item from "../item/item.component";
import "../item/item.style.scss";
function ItemList({ items, onDeleteItem, onToggleItems }) {
  return (
    <ul className="item-container">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDeleteItem={onDeleteItem}
          onToggleItems={onToggleItems}
        />
      ))}
    </ul>
  );
}

export default ItemList;
