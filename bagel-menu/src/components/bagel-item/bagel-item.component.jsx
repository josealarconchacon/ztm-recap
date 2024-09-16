import React from "react";
import "./bagel-item.styles.scss";

function BagelItem({ bagel }) {
  return (
    <div className="bagel-item">
      <img src={bagel.photo} alt={bagel.name} />
      <div className="bagel-details">
        <h2>{bagel.name}</h2>
        <p>{bagel.ingredient}</p>
        <p className="price">${bagel.price.toFixed(2)}</p>
        <p className={bagel.soldout ? "soldout" : "available"}>
          {bagel.soldout ? "Sold Out" : "Available"}
        </p>
      </div>
    </div>
  );
}

export default BagelItem;
