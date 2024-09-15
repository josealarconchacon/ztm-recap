import React from "react";
import "./bagel-item.styles.scss";

function BagelItem({ bagel }) {
  return (
    <div className="bagel-item">
      <img src={bagel.photo} alt={bagel.name} />
      <h2>{bagel.name}</h2>
      <p>{bagel.ingredient}</p>
      <p>${bagel.price.toFixed(2)}</p>
      <p>{bagel.soldout ? "Sold Out" : "Available"}</p>
    </div>
  );
}

export default BagelItem;
