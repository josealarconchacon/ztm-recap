// import React from "react";
// import "./item.style.scss";

// function Item({ item, onDeleteItem, onToggleItems }) {
//   return (
//     <li className="item-card">
//       <input
//         type="checkbox"
//         value={item.packed}
//         onChange={() => onToggleItems(item.id)}
//       />
//       <span style={item.packed ? { textDecoration: "line-through" } : {}}>
//         {item.quantity} {item.description}
//       </span>
//       <button onClick={() => onDeleteItem(item.id)}>❌</button>
//     </li>
//   );
// }

// export default Item;
import React from "react";
import "./item.style.scss";

function Item({ item, onDeleteItem, onToggleItems }) {
  return (
    <li className="item-card">
      <div className="item-details">
        <input
          type="checkbox"
          className="checkbox"
          checked={item.packed}
          onChange={() => onToggleItems(item.id)}
        />
        <span className={`description ${item.packed ? "packed" : ""}`}>
          {item.quantity} {item.description}
        </span>
      </div>
      <button className="delete-btn" onClick={() => onDeleteItem(item.id)}>
        &#10060;
      </button>
    </li>
  );
}

export default Item;
