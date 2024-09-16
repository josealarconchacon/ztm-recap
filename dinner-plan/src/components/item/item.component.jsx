import React from "react";
import "./item.style.scss";

function Item({ item }) {
  return (
    <li className="item-card">
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

export default Item;
