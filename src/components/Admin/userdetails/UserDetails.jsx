import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usersDetails } from "../../../utlis/users";
import { userOrders } from "../../../utlis/userOrders";
import "./UserDetails.css";
import StatusButton from "./StatusButton";
import Page404 from "../../../pages/Page404/Page404";
import { useDispatch, useSelector } from "react-redux";
import {
  setOrders,
  updateOrderStatus,
} from "../../../features/orders/ordersSlice";

const UserDetails = () => {
  const { userId } = useParams();
  const user = usersDetails.find((user) => user.userId === userId);
  const allOrders = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  const orders = allOrders.filter((order) => order.userId === userId);

  if (!user) return <Page404 />;

  const getNextStatus = (currentStatus) => {
    const statusOrder = ["Pending", "Processing", "Shipped", "Delivered"];
    const currentIndex = statusOrder.indexOf(currentStatus);
    return currentIndex < statusOrder.length - 1
      ? statusOrder[currentIndex + 1]
      : null;
  };

  return (
    <div className="user-details-page">
      <div className="userDetails">
        <h1 className="user-detail-h1">User Details</h1>
        <div className="user-info">
          <img
            src={user.image}
            alt={user.name}
            className="user-image"
            style={{
              width: "250px",
              height: "250px",
              margin: "auto",
              objectFit: "cover",
            }}
          />
          <p>
            <strong>Name:</strong>
            <span>{user.name}</span>
          </p>
          <p>
            <strong>Email:</strong>
            <span>{user.email}</span>
          </p>
          <p>
            <strong>Phone:</strong>
            <span>{user.phone}</span>
          </p>
        </div>
      </div>
      <div className="oderDetails">
        <h2 className="order-history">Order History</h2>
        {orders.map((order) => (
          <div key={order.orderId} className="order-item">
            <div>
              <strong>Order ID: </strong>
              <span>{order.orderId}</span>
            </div>
            <div>
              <strong>Date: </strong>
              <span>{order.date}</span>
            </div>
            <div>
              <strong>Total Amount: </strong>
              <span>${order.totalAmount.toFixed(2)}</span>
            </div>
            <div>
              <strong>Status: </strong>
              <span>{order.status}</span>
            </div>
            <div>
              <strong>Items: </strong>
              <ul>
                {order.items.map((item, index) => (
                  <li key={index} className="order-item-detail">
                    <img
                      src={item.image}
                      alt={item.productName}
                      className="item-image"
                      style={{
                        width: "100px",
                        height: "70px",
                        marginRight: "10px",
                      }}
                    />
                    {item.productName} (x{item.quantity}) - $
                    {item.price.toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Quantity: </strong>
              <span>
                {order.items.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </div>
            <div className="actions-button">
              {order.status === "Pending" && (
                <StatusButton
                  onClick={() =>
                    dispatch(
                      updateOrderStatus({
                        orderId: order.orderId,
                        status: getNextStatus(order.status),
                      })
                    )
                  }
                  status="order processed"
                  className="actions-button inProcessing"
                />
              )}
              {order.status === "Processing" && (
                <StatusButton
                  onClick={() =>
                    dispatch(
                      updateOrderStatus({
                        orderId: order.orderId,
                        status: getNextStatus(order.status),
                      })
                    )
                  }
                  status="ready to ship"
                  className="actions-button readytoShip"
                />
              )}
              {order.status === "Shipped" && (
                <StatusButton
                  onClick={() =>
                    dispatch(
                      updateOrderStatus({
                        orderId: order.orderId,
                        status: getNextStatus(order.status),
                      })
                    )
                  }
                  status="ready to deliver"
                  className="actions-button delivered"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetails;
