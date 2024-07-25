import React from "react";
import "./Sidebar.css";
import NextArrow from "../../../assets/images/nextArrow.png";

const Sidebar = () => {
  return (
    <div className="main">
      <div className="sidebar">
        <ul className="sidebar-ul">
          <li className="category-icon">
            Woman’s Fashion <img src={NextArrow} alt="women's category" />
          </li>
          <li className="category-icon">
            Men’s Fashion <img src={NextArrow} alt="men's category" />
          </li>

          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby’s & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
