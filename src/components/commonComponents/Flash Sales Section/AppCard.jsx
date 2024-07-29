import React, { useState } from "react";
import BaseButton from "../BaseButton";
import heartIcon from "../../../assets/images/Fill Heart (1).png";
import eyeIcon from "../../../assets/images/Fill Eye.png";
import deleteIcon from "../../../assets/images/deleteIcon.png";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  removeProduct,
} from "../../../features/whishlist/wishlistSlice";
import RedHeart from "../../../assets/images/peace-7868.png";
import StarRating from "./StarRating";
import { addToCart } from "../../../features/addcart/addtoCart";

const AppCard = ({
  products,
  showBadge = false,
  showDiscount = false,
  gridLayout = false,
  isDelete = false,
  heartEyeIcon = true,
  isRating = true,
}) => {
  const selectedProducts = useSelector((state) => state.wishlist.products);
  const dispatch = useDispatch();

  const isProductSelected = (productId) => {
    return selectedProducts.some((product) => product.id === productId);
  };
  const handleRatingChange = (productId, rating) => {
    dispatch(updateRating({ productId, rating }));
  };

  return (
    <div className={`cards-parent ${gridLayout ? "grid-layout" : ""}`}>
      {products?.map((item) => (
        <div className="cards" key={item.id}>
          <div className="icons-image-section">
            <div className="icons-text">
              {showBadge && item.badge && (
                <div className="badge">
                  <span>{item.badge}</span>
                </div>
              )}
              {showDiscount && item.discount && (
                <div className="discountText">
                  <span>{item.discount}</span>
                </div>
              )}

              {isDelete && (
                <div
                  className="deleteIcon"
                  onClick={() => dispatch(removeProduct(item.id))}
                >
                  <img src={deleteIcon} alt="delete-icon" />
                </div>
              )}

              {heartEyeIcon && (
                <div className="heart-eye-icons">
                  {isProductSelected(item.id) ? (
                    <img
                      src={RedHeart}
                      alt="red-heart"
                      className="redHeart"
                      onClick={() => dispatch(removeProduct(item.id))}
                    />
                  ) : (
                    <img
                      src={heartIcon}
                      alt="heart-icon"
                      onClick={() => dispatch(addProduct(item))}
                      className="heart-icon"
                    />
                  )}
                  <img src={eyeIcon} alt="eye-icon" />
                </div>
              )}
            </div>
            <div className="main-img">
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                src={item.image}
                alt={item.title}
              />
            </div>
            <BaseButton
              text="Add To Cart"
              classNameProp="addToCart"
              onClick={() => dispatch(addToCart(item))}
            />
          </div>
          <div className="outside-card">
            <div className="card-heading">
              <p>{item.title.slice(0, 25)}</p>
            </div>
            <div className="discounted-price">
              <span>${item.price}</span>
              {item.oldPrice && (
                <span className="old-price">${item.oldPrice}</span>
              )}
            </div>
            {isRating && (
              <div className="stars">
                <StarRating
                  initialRating={item.rating || 0}
                  onRatingChange={(rating) =>
                    handleRatingChange(item.id, rating)
                  }
                />
              </div>
            )}
            <div className="radio-button">
              {item.radio && (
                <span>
                  <input className="colors" type="radio" name="colored-input" />{" "}
                  <input className="filledColor" type="radio" name="constant" />
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppCard;
