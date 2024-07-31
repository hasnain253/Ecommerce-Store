import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import "./FlashSales.css";

const StarRating = ({ initialRating = 0, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    setRating(initialRating);
  }, [initialRating]);

  const handleClick = (rate) => {
    setRating(rate);
    if (onRatingChange) {
      onRatingChange(rate);
    }
  };

  return (
    <div className="stars">
      {Array.from({ length: 5 }, (_, index) => {
        const rate = index + 1;
        return (
          <FaStar
            key={index}
            className={`star ${rate <= (hover || rating) ? "filled" : ""}`}
            onClick={() => handleClick(rate)}
            onMouseEnter={() => setHover(rate)}
            onMouseLeave={() => setHover(null)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
