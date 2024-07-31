import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  Header,
  Body,
  Row,
  Cell,
} from "@table-library/react-table-library/table";
import { useTheme } from "@table-library/react-table-library/theme";
import cancelIcon from "../../assets/images/icon-cancel.png";
import { removeCart } from "../../features/addcart/addtoCart";
import "./ProductCart.css";
import BaseButton from "../commonComponents/BaseButton";
import BaseInput from "../commonComponents/BaseInput";
import { Link } from "react-router-dom";

const ProductCart = () => {
  const carts = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const [quantities, setQuantities] = useState(
    carts.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {})
  );

  const [cartDetails, setCartDetails] = useState([
    { label: "Subtotal:", value: "$0" },
    { label: "Shipping:", value: "Free" },
    { label: "Total:", value: "$0" },
  ]);

  const quantityOptions = Array.from({ length: 10 }, (_, index) => index + 1);

  const calculateSubtotal = () => {
    return carts.reduce((acc, product) => {
      if (product.price) {
        return acc + product.price * (quantities[product.id] || 1);
      }
      return acc;
    }, 0);
  };
  const handleQuantityChange = (id, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: parseInt(quantity, 10),
    }));
  };

  useEffect(() => {
    const subtotal = calculateSubtotal();
    const shipping = 200;
    const total = subtotal + shipping;
    setCartDetails([
      { label: "Subtotal:", value: `$${subtotal.toFixed(2)}` },
      {
        label: "Shipping:",
        value: shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`,
      },
      { label: "Total:", value: `$${total.toFixed(2)}` },
    ]);
  }, [quantities, carts]);

  const data = {
    nodes: carts.map((product) => ({
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price,
      quantity: quantities[product.id] || 1,
      subtotal: product.price * (quantities[product.id] || 1),
    })),
  };

  const theme = useTheme({
    Table: `
      --data-table-library_grid-template-columns: 1fr 1fr 1fr 1fr;
      width: 1200px;
      margin: auto;
      margin-top: 70px;
      background-color: #ffff;
    `,
    HeaderRow: `
      background-color: #ffffff;
      box-shadow: 0px 1px 13px 0px #0000000D;
    `,
    Row: `
      background-color: #ffffff;
      box-shadow: 0px 1px 13px 0px #0000000D;
    `,
    Cell: `
      background-color: #ffffff;
      box-shadow: 0px 1px 13px 0px #0000000D;
    `,
  });

  return (
    <div className="cartContainer">
      <Table data={data} theme={theme} className="table">
        {(tableList) => (
          <>
            <Header>
              <Row className="header-row">
                <Cell className="cell">Product</Cell>
                <Cell className="cell">Price</Cell>
                <Cell className="cell">Quantity</Cell>
                <Cell className="cell">Subtotal</Cell>
              </Row>
            </Header>
            <Body>
              {tableList.map((item) => (
                <Row key={item.id} className="data-row">
                  <Cell className="cell">
                    <div>
                      <img
                        src={cancelIcon}
                        alt="cancel-icon"
                        className="Cancel-Icon"
                        onClick={() => dispatch(removeCart(item.id))}
                      />
                      <img
                        src={item.image}
                        alt={item.title}
                        className="product-image"
                      />
                      <span className="product-title">
                        {item.title.slice(0, 20)}
                      </span>
                    </div>
                  </Cell>
                  <Cell className="cell">
                    {item.price ? `$${item.price}` : "Out of stock"}
                  </Cell>

                  <Cell className="cell">
                    {item.price ? (
                      <select
                        value={quantities[item.id] || 1}
                        onChange={(event) =>
                          handleQuantityChange(item.id, event.target.value)
                        }
                      >
                        {quantityOptions.map((quantity) => (
                          <option key={quantity} value={quantity}>
                            {quantity}
                          </option>
                        ))}
                      </select>
                    ) : (
                      "Out of stock"
                    )}
                  </Cell>

                  <Cell className="cell">
                    {item.price
                      ? `$${item.price * (quantities[item.id] || 1).toFixed(2)}`
                      : "Out of stock"}
                  </Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
      <div className="addTOcartButton">
        <BaseButton text="Return To Shop" classNameProp="cartButtons" />
        <BaseButton text="Update Cart" classNameProp="cartButtons" />
      </div>
      <div className="coupan-cart">
        <div className="apply-coupan">
          <div>
            <BaseInput
              className="coupan-input"
              placeHolder="Coupon Code"
              name="coupan"
              type="text"
            />
          </div>
          <BaseButton text="Apply Coupon" classNameProp="coupan-btn" />
        </div>
        <div className="cart-total">
          <span>Cart Total</span>
          {cartDetails.map((detail, index) => (
            <div key={index} className="cartdetail">
              <p>{detail.label}</p>
              <p>{detail.value}</p>
            </div>
          ))}
          <Link to="/checkout">
            <BaseButton
              text="Proceed to checkout"
              classNameProp="checkout-btn"
            />
          </Link>
        </div>
      </div>
      <div className="spacing"></div>
    </div>
  );
};

export default ProductCart;
