import React from "react";
import { useState } from "react";

import "./form.style.scss";

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted", event);
  }

  return (
    <div className="form" onSubmit={handleSubmit}>
      <form className="add-form">
        <h3>What do you need for your next meal?</h3>
        <select
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        >
          {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Enter your name..."
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button>Add Item</button>
      </form>
    </div>
  );
}

export default Form;
