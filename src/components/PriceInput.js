import React from "react";

const PriceInput = ({ onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <input
        type="number"
        min="0"
        step="0.1"
        placeholder="Input price"
        onChange={handleChange}
      />
    </div>
  );
};

export default PriceInput;
