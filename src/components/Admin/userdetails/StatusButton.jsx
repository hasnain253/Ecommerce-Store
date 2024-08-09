import React from "react";

const StatusButton = ({ onClick, status, className }) => {
  return (
    <button type="button" className={className} onClick={() => onClick()}>
      {status}
    </button>
  );
};

export default StatusButton;
