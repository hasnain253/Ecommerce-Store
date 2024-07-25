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
    <div class="grid-container">
      <div class="sidebar-item">
        <Sidebar />
      </div>
      <div class="image-slider">
        <ImageSlider />
      </div>
      <div class="sections-container">
        <div class="section1">
          <FlashSales />
        </div>
        <div class="section2">
          <Category />
        </div>
        <div class="section3">
          <BestSellingProducts />
        </div>
        <div class="categories-banner">
          <CategoryBanner />
        </div>
        <div class="our-products">
          <OurProduct />
        </div>
        <div class="newArrival">
          <NewArrivals />
        </div>
        <div class="custome-service">
          <CustomerServices />
        </div>
      </div>
    </div>
  );
};

export default Home;
