import React, { useState } from "react";
import BagelItem from "../bagel-item/bagel-item.component";
import "./bagel-list.styles.scss";

const initialBagels = [
  {
    id: 1,
    name: "Classic",
    ingredient: "Plain bagel with sesame seeds",
    price: 2.5,
    photo:
      "https://www.shutterstock.com/image-vector/drawing-bagel-600nw-47405866.jpg",
    soldout: false,
  },
  {
    id: 2,
    name: "Everything",
    ingredient: "With poppy seeds, sesame seeds, onion, garlic, and salt",
    price: 3.0,
    photo:
      "https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/bagel-csa-images.jpg",
    soldout: false,
  },
  {
    id: 3,
    name: "Cinnamon",
    ingredient: "Bagel with cinnamon and raisins",
    price: 2.75,
    photo:
      "https://us.123rf.com/450wm/susiepart1/susiepart12405/susiepart1240500199/229703306-bagel-pretzel-and-cinnamon-roll-bun-bakery-goods-from-wheat-vector-illustration-linear-isolated.jpg?ver=6",
    soldout: true,
  },
  {
    id: 6,
    name: "Garlic",
    ingredient: "Bagel with garlic seasoning",
    price: 3.0,
    photo:
      "https://www.shutterstock.com/image-vector/drawing-bagel-hand-sketch-food-600w-2423339535.jpg",
    soldout: true,
  },
  {
    id: 4,
    name: "Blueberry",
    ingredient: "Bagel with blueberries",
    price: 3.25,
    photo:
      "https://www.shutterstock.com/image-vector/drawing-bagel-hand-sketch-food-600w-2423339535.jpg",
    soldout: false,
  },
  {
    id: 5,
    name: "Whole Wheat",
    ingredient: "Bagel made with whole wheat flour",
    price: 2.85,
    photo:
      "https://www.shutterstock.com/image-vector/bagel-sandwich-smoked-salmon-600nw-2152592537.jpg",
    soldout: false,
  },
];

function BagelList() {
  const [bagels] = useState(initialBagels);

  return (
    <div className="bagel-list">
      {bagels.map((bagel) => (
        <BagelItem key={bagel.id} bagel={bagel} />
      ))}
    </div>
  );
}

export default BagelList;
