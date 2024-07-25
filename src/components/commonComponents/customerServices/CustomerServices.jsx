import React from "react";
import "./CustomerServices.css";
import FreeDelivery from "../../../assets/images/Services.png";
import CustomerService from "../../../assets/images/Services (1).png";
import ReturnGuarantee from "../../../assets/images/Services (2).png";

const CustomerServices = () => {
  return (
    <div className="mainContainer">
      <div className="fastDelivery">
        <img src={FreeDelivery} alt="free-delivery" className="imagesSection" />
        <p className="titleHeading">FREE AND FAST DELIVERY</p>
        <p className="discription">Free delivery for all orders over $140</p>
      </div>

      <div className="customerService">
        <img
          src={CustomerService}
          alt="customer-service"
          className="imagesSection"
        />
        <p className="titleHeading">24/7 CUSTOMER SERVICE</p>
        <p className="discription">Friendly 24/7 customer support</p>
      </div>

      <div className="moneyBackGuarantee">
        <img
          src={ReturnGuarantee}
          alt="ReturnGuarantee"
          className="imagesSection"
        />
        <p className="titleHeading">MONEY BACK GUARANTEE</p>
        <p className="discription">We reurn money within 30 days</p>
      </div>
    </div>
  );
};

export default CustomerServices;
