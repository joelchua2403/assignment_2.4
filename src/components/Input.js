import React from "react";

const Input = ({ label, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div>
      <label>{label}</label>
      <br />
      <input placeholder="Input Product" onChange={handleChange} />
    </div>
  );
};

export default Input;
