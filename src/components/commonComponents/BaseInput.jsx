import React from "react";

const BaseInput = ({
  type,
  name,
  placeHolder,
  value,
  handleChange,
  className,
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeHolder}
        onChange={handleChange}
        value={value}
        className={className}
      />
    </div>
  );
};

export default BaseInput;
