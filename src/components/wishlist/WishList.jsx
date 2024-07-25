import React from "react";
import "./WishList.css";
import { useSelector } from "react-redux";
import BaseButton from "../commonComponents/BaseButton";
import AppCard from "../commonComponents/Flash Sales Section/AppCard";

const WishList = () => {
  const wishlists = useSelector((state) => state.wishlist.products);
  const products = useSelector((state) => state.products.products);

  return (
    <div className="wishlistContainer">
      <div className="counter">
        <p>wishlist ({wishlists.length})</p>
        <BaseButton text="Move All To Bag" classNameProp="movebag" />
      </div>
      <AppCard
        products={wishlists}
        showBadge={true}
        heartEyeIcon={false}
        isDelete={true}
        isRating={false}
      />
    </div>
  );
};

export default WishList;
