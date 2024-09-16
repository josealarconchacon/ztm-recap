import React from "react";

function DescriptionInput({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Enter your name..."
      value={value}
      onChange={onChange}
    />
  );
}

export default DescriptionInput;
