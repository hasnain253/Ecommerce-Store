import React from "react";
import "./home.css";
import ImageSlider from "../commonComponents/Imagesslider/ImageSlider";
import Sidebar from "../commonComponents/bannerSection/Sidebar";
import FlashSales from "../commonComponents/Flash Sales Section/FlashSales";
import Category from "../commonComponents/category/Category";
import BestSellingProducts from "../commonComponents/best selling products/BestSellingProducts";
import CategoryBanner from "../commonComponents/CategoryBanner/CategoryBanner";
import OurProduct from "../commonComponents/Our Products/OurProduct";
import NewArrivals from "../commonComponents/New arrivals/NewArrivals";
import CustomerServices from "../commonComponents/customerServices/CustomerServices";

const Home = () => {
  return (
    <div className="grid-container">
      <div className="image-slider">
        <ImageSlider />
      </div>
      <div className="sections-container">
        <div className="section1">
          <FlashSales />
        </div>
        <div className="section2">
          <Category />
        </div>
        <div className="section3">
          <BestSellingProducts />
        </div>
        <div className="categories-banner">
          <CategoryBanner />
        </div>
        <div className="our-products">
          <OurProduct />
        </div>
        <div className="newArrival">
          <NewArrivals />
        </div>
        <div className="custome-service">
          <CustomerServices />
        </div>
      </div>
    </div>
  );
};

export default Home;
