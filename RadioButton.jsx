import React from "react";

const RadioButton = ({ options, selectedOption, onOptionChange }) => {
  const handleChange = (event) => {
    onOptionChange(event.target.value);
  };

  return (
    <div className="radiobutton">
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
