import React, { useState, useEffect, useRef } from "react";
import "./userIcon.css";
import UserIcons from "../../../../assets/images/user.png";
import userProfile from "../../../../assets/images/userCard.png";
import userOrders from "../../../../assets/images/orders.png";
import userCancelletation from "../../../../assets/images/cancelletion.png";
import userReviews from "../../../../assets/images/Reviews.png";
import userLogOut from "../../../../assets/images/logout.png";

const UserIcon = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const cardRef = useRef(null);

  const openCard = () => {
    setIsCardOpen(true);
  };

  const handleClickOutside = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      setIsCardOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="userIconContainer">
      <img
        src={UserIcons}
        alt="User Icon"
        onClick={openCard}
        className={isCardOpen ? "userIcon active" : "userIcon"}
      />

      {isCardOpen && (
        <div className="cardSection" ref={cardRef}>
          <ul>
            <li onClick={() => setIsCardOpen(false)}>
              <img src={userProfile} alt="Manage My Account" />
              Manage My Account
            </li>
            <li onClick={() => setIsCardOpen(false)}>
              <img src={userOrders} alt="My Order" />
              My Order
            </li>
            <li onClick={() => setIsCardOpen(false)}>
              <img src={userCancelletation} alt="My Cancellations" />
              My Cancellations
            </li>
            <li onClick={() => setIsCardOpen(false)}>
              <img src={userReviews} alt="My Reviews" />
              My Reviews
            </li>
            <li onClick={() => setIsCardOpen(false)}>
              <img src={userLogOut} alt="Logout" />
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserIcon;
