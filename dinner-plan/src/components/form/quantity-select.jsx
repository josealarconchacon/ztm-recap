import React from "react";

function QuantitySelect({ value, onChange }) {
  return (
    <select value={value} onChange={onChange}>
      {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
        <option key={num} value={num}>
          {num}
        </option>
      ))}
    </select>
  );
}

export default QuantitySelect;
