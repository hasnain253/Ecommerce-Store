import React, { useState } from "react";
import "./OurProduct.css";
import MostCommonHeader from "../Flash Sales Section/MostCommonHeader";
import { ourProductCard } from "../../../utlis/ourProducts";
import BaseButton from "../BaseButton";
import AppCard from "../Flash Sales Section/AppCard";

const OurProduct = () => {
  const [viewAllProducts, setViewAllProducts] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const showCard = 8;

  const handlePrevious = () => {
    setCardIndex(
      (prev) =>
        (prev - showCard + ourProductCard.length) % ourProductCard.length
    );
  };

  const handleNext = () => {
    setCardIndex((prev) => (prev + showCard) % ourProductCard.length);
  };

  const viewProducts = () => {
    setViewAllProducts(true);
    setCardIndex(0);
  };

  return (
    <div className="section6-div">
      <div className="our-mainProducts">
        <div className="products-header">
          <MostCommonHeader
            showTimer={false}
            commonButton={false}
            title="Explore Our Products"
            heading="Our Products"
            previousCard={handlePrevious}
            nextCard={handleNext}
          />
        </div>
        {/* card */}
        <AppCard
          products={
            viewAllProducts
              ? ourProductCard
              : ourProductCard.slice(cardIndex, cardIndex + showCard)
          }
          showBadge={true}
          gridLayout={true}
        />
        {!viewAllProducts && (
          <div className="viewProduct">
            <BaseButton
              text="View All Products"
              classNameProp="FlasSales"
              onClick={viewProducts}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default OurProduct;
