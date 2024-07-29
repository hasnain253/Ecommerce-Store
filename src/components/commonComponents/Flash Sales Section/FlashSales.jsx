import React, { useEffect, useState } from "react";
import "./FlashSales.css";
import BaseButton from "../BaseButton";
import MostCommonHeader from "./MostCommonHeader";
import AppCard from "./AppCard";
import { fetchProducts } from "../../../features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";

const FlashSales = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [viewAllProducts, setViewAllProducts] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [timerData, setTimerData] = useState({
    days: 3,
    hours: 23,
    minutes: 2,
    seconds: 59,
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const updateTimer = () => {
    setTimerData((prevTimerData) => {
      let { days, hours, minutes, seconds } = prevTimerData;
      if (seconds > 0) {
        seconds -= 1;
      } else if (minutes > 0) {
        minutes -= 1;
        seconds = 59;
      } else if (hours > 0) {
        hours -= 1;
        minutes = 59;
        seconds = 59;
      } else if (days > 0) {
        days -= 1;
        hours = 23;
        minutes = 59;
        seconds = 59;
      }
      return { days, hours, minutes, seconds };
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateTimer();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const SalesAgain = () => {
    setTimerData({ days: 3, hours: 23, minutes: 2, seconds: 59 });
  };

  const cardsToShow = 8;

  const handleViewAllProducts = () => {
    setViewAllProducts(true);
    setStartIndex(0);
  };

  const handlePrevious = () => {
    setStartIndex(
      (prev) => (prev - cardsToShow + products.length) % products.length
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + cardsToShow) % products.length);
  };

  return (
    <div className="Section1-div">
      {/* Header */}
      <MostCommonHeader
        heading="Today’s"
        title="Flash Sales"
        showTimer={true}
        iconSlider={true}
        commonButton={false}
        previousCard={handlePrevious}
        nextCard={handleNext}
        salesbtn={true}
        setTimerData={setTimerData}
        timerData={timerData}
        updateTimer={updateTimer}
      />

      {/* Card-sections */}
      {timerData.minutes === 0 && timerData.seconds === 0 ? (
        <BaseButton
          text="Start Sales"
          classNameProp="FlasSales"
          onClick={SalesAgain}
        />
      ) : (
        <>
          <AppCard
            products={
              viewAllProducts
                ? products
                : products?.slice(startIndex, startIndex + cardsToShow)
            }
            showDiscount={true}
            isDelete={false}
          />

          {!viewAllProducts && (
            <div className="viewProduct">
              <BaseButton
                text="View All Products"
                classNameProp="FlasSales"
                onClick={handleViewAllProducts}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FlashSales;
