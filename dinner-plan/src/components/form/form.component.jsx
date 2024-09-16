import React, { useState } from "react";
import QuantitySelect from "./quantity-select";
import DescriptionInput from "./description-input";
import SubmitButton from "./submit-button";
import "./form.style.scss";

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();
    // validate form
    if (description.trim() === "" || quantity <= 0) {
      alert("Please fill in all fields");
      return;
    }

    const addNewItem = { description, quantity, packed: false, id: Date.now() };
    console.log(addNewItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <div className="form">
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your next meal?</h3>
        <QuantitySelect
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <DescriptionInput
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <SubmitButton />
      </form>
    </div>
  );
}

export default Form;
