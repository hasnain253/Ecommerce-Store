import React from "react";

const BaseButton = ({
  type,
  classNameProp,
  text,
  img,
  src,
  alt,
  showSpan,
  onClick,
}) => {
  return (
    <div>
      <button className={classNameProp} type={type} onClick={onClick}>
        {img == true && <img src={src} alt={alt} />}
        {text}
        {showSpan}
      </button>
    </div>
  );
};

export default BaseButton;
