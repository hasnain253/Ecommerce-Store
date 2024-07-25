import React, { useState } from "react";
import "./Category.css";
import MostCommonHeader from "../Flash Sales Section/MostCommonHeader";
import { categoryCard } from "../../../utlis/categoryCard";

const Category = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const cardsToShow = 5;

  const handlePrevious = () => {
    setCardIndex((prevIndex) =>
      prevIndex > 0
        ? prevIndex - cardsToShow
        : categoryCard.length - cardsToShow
    );
  };

  const handleNext = () => {
    setCardIndex((prevIndex) =>
      prevIndex + cardsToShow < categoryCard.length
        ? prevIndex + cardsToShow
        : 0
    );
  };

  return (
    <div className="section2-div">
      <div className="category-header">
        <MostCommonHeader
          title="Browse By Category"
          heading="Categories"
          showTimer={false}
          iconSlider={true}
          commonButton={false}
          previousCard={handlePrevious}
          nextCard={handleNext}
        />
      </div>

      <div className="miniCard">
        {categoryCard
          .slice(cardIndex, cardIndex + cardsToShow)
          .map((category) => (
            <div className="categoryCard" key={category.id}>
              <img src={category.icon} alt="category-phone" />
              <p>{category.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Category;
