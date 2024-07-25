import React, { useState } from "react";
import "./BestSellingProducts.css";
import MostCommonHeader from "../Flash Sales Section/MostCommonHeader";
import AppCard from "../Flash Sales Section/AppCard";
import { BestSellingProduct } from "../../../utlis/bestSellingProducts";

const BestSellingProducts = () => {
  const [viewAllProducts, setViewAllProducts] = useState(false);

  const viewAllProduct = () => {
    setViewAllProducts(true);
  };

  return (
    <div className="section4-div">
      <div className="productHeader">
        <div className="category-header">
          <MostCommonHeader
            heading="This Month"
            title="Best Selling Products"
            showTimer={false}
            iconSlider={false}
            commonButton={true}
            Click={viewAllProduct}
            salesbtn={false}
          />
        </div>
      </div>
      {/* Card Section */}
      <AppCard
        products={
          viewAllProducts
            ? BestSellingProduct.slice(0, 7)
            : BestSellingProduct.slice(0, 4)
        }
        showDiscount={false}
      />
    </div>
  );
};

export default BestSellingProducts;
