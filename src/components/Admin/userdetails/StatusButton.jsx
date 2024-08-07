import React from "react";

const StatusButton = ({ onClick, status, orderId, className }) => {
  return (
    <button
      type="submit"
      className={className}
      onClick={() => onClick(orderId, status)}
    >
      {status}
    </button>
  );
};

export default StatusButton;
