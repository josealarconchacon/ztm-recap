import React from "react";
import "./stats.style.scss";
function Stats({ items }) {
  // Ensure items array exists and has elements
  const numOfItems = items.length;
  const numOfPacked = items.filter((item) => item.packed).length;
  const percentage =
    numOfItems === 0 ? 0 : Math.round((numOfPacked / numOfItems) * 100);

  return (
    <div className="stats">
      <footer>
        <p>
          🛍️ You have {numOfItems} item{numOfItems !== 1 ? "s" : ""} in your
          list, and you already packed {numOfPacked} item
          {numOfPacked !== 1 ? "s" : ""} ({percentage}% packed)
        </p>
        <p>📊 2024 Your Next Meal</p>
      </footer>
    </div>
  );
}

export default Stats;
