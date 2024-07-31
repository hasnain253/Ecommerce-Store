import React, { useEffect, useState } from "react";
import "./BillingCheckout.css";
import BaseInput from "../commonComponents/BaseInput";
import { useSelector } from "react-redux";
import Bkash from "../../assets/images/Bkash.png";
import Visa from "../../assets/images/Visa.png";
import MasterCard from "../../assets/images/Mastercard.png";
import Nagad from "../../assets/images/Nagad.png";
import BaseButton from "../commonComponents/BaseButton";
import CheckOutForm from "../Stripe/CheckOutForm";

const BillingCheckout = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [showForm, setShowForm] = useState(false);

  const inputFields = [
    { label: "First Name *", type: "text" },
    { label: "Company Name *", type: "text" },
    { label: "Street Address *", type: "text" },
    { label: "Apartment, floor, etc. (optional)", type: "text" },
    { label: "Town/City *", type: "text" },
    { label: "Phone Number *", type: "number" },
    { label: "Email Address *", type: "email" },
  ];

  const carts = useSelector((state) => state.cart.products);

  const [cartDetails, setCartDetails] = useState([
    { label: "Subtotal:", value: "$0" },
    { label: "Shipping:", value: "Free" },
    { label: "Total:", value: "$0" },
  ]);

  const calculateSubtotal = () => {
    return carts.reduce((acc, product) => acc + product.price, 0);
  };

  useEffect(() => {
    const subtotal = calculateSubtotal();
    const shipping = 0;
    const total = subtotal + shipping;
    setCartDetails([
      { label: "Subtotal:", value: `$${subtotal.toFixed(2)}` },
      {
        label: "Shipping:",
        value: shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`,
      },
      { label: "Total:", value: `$${total.toFixed(2)}` },
    ]);
  }, [carts]);

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);

    event.target.value = "cashonDelivery" && setShowForm(false);
  };

  const handlePlaceOrder = () => {
    selectedPaymentMethod === "bank" ? setShowForm(true) : setShowForm(false);
  };

  return (
    <div className="BillingContainer">
      <div className="Billing-heading">Billing Details</div>
      <div className="input-and-billing">
        <div className="BillingDetails">
          {inputFields.map((field, index) => (
            <div className="inputs-div" key={index}>
              <label>{field.label}</label>
              <BaseInput className="forAllInputs" type={field.type} />
            </div>
          ))}
          <div className="saveInformation">
            <BaseInput type="checkbox" className="checkbox-input" />
            <p className="information">
              Save this information for faster check-out next time
            </p>
          </div>
        </div>
        {/* card item payment */}
        <div className="paymentMethod">
          <div className="selected-items">
            {carts.map((product, index) => (
              <div key={index} className="product-detail">
                <div>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-image-checkout"
                  />
                </div>
                <div>
                  <span className="product-title">
                    {product.title.slice(0, 20)}
                  </span>
                </div>
                <div className="pricing">{`$${product.price} `}</div>
              </div>
            ))}
            {cartDetails.map((detail, index) => (
              <div key={index} className="cartdetail">
                <p>{detail.label}</p>
                <p>{detail.value}</p>
              </div>
            ))}
            <div className="debatCards">
              <div className="bankoption">
                <BaseInput
                  type="radio"
                  className="radio-input"
                  value="bank"
                  name="payment"
                  onChange={handlePaymentMethodChange}
                />
                <p>Bank</p>
              </div>
              <div className="debatCardimage">
                <img src={Bkash} alt="" />
                <img src={Visa} alt="" />
                <img src={MasterCard} alt="" />
                <img src={Nagad} alt="" />
              </div>
            </div>
            <div className="cashonDelivery">
              <BaseInput
                type="radio"
                className="radio-input"
                value="cashonDelivery"
                name="payment"
                onChange={handlePaymentMethodChange}
              />
              <p>Cash on delivery</p>
            </div>
            {showForm && (
              <div className="showPayment">
                <CheckOutForm />
              </div>
            )}
            <div className="apply-coupan-billing">
              <BaseInput
                className="coup-input"
                placeHolder="Coupon Code"
                name="coupan"
                type="text"
              />
              <BaseButton text="Apply Coupon" classNameProp="coup-btn " />
            </div>
            <BaseButton
              text="Place Order"
              classNameProp="placeOrder"
              onClick={handlePlaceOrder}
            />
          </div>
        </div>
      </div>
      <div className="extraspace"></div>
    </div>
  );
};

export default BillingCheckout;
