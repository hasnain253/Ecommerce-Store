import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchIcon from "../../../assets/images/searchIcon.png";
import CartIcon from "../../../assets/images/Cart.png";
import HeartIcon from "../../../assets/images/heart.png";
import BaseInput from "../../commonComponents/BaseInput";
import UserIcon from "./userIcon/UserIcon";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  const wishlists = useSelector((state) => state.wishlist.products);
  const carts = useSelector((state) => state.cart.products);

  const navItems = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "contact", path: "/contact" },
    { name: "signup", path: "/signup" },
  ];

  const navItem = ({ name, path }) => (
    <li key={name} onClick={() => setActiveMenu(name)}>
      <Link to={path}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
        {activeMenu === name && <hr />}
      </Link>
    </li>
  );

  return (
    <div className="main-section">
      <div className="logo">
        <h2>Exclusive</h2>
      </div>
      <div className="navlinks">
        <ul className="link-list">{navItems.map(navItem)}</ul>
      </div>
      <div className="searchBar">
        <BaseInput type="search" placeHolder="What are you looking for?" />
        <img src={SearchIcon} alt="search-icon" />
      </div>
      <div className="site-icons">
        <Link to="/wishlist" className="wishlist-link">
          <div className="wishlist-container">
            <img src={HeartIcon} alt="heart-icon" />
            <div className="nav-cart-count">{wishlists.length}</div>
          </div>
        </Link>
        <Link to="/addtocart" className="wishlist-link">
          <div className="wishlist-container">
            <img src={CartIcon} alt="cart-icon" />
            <div className="nav-cart-count">{carts.length}</div>
          </div>
        </Link>
        <UserIcon />
      </div>
    </div>
  );
};

export default Navbar;
