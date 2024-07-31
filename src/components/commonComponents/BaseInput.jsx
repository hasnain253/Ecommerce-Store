import React from "react";

const BaseInput = ({ type, name, placeHolder, value, onChange, className }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeHolder}
        onChange={onChange}
        value={value}
        className={className}
      />
    </div>
  );
};

export default BaseInput;
