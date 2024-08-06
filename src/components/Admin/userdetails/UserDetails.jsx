import React from "react";
import { useParams } from "react-router-dom";
import { usersDetails } from "../../../utlis/users";
import { userOrders } from "../../../utlis/userOrders";
import "./UserDetails.css";

const UserDetails = () => {
  const { userId } = useParams();
  const user = usersDetails.find((user) => user.userId === userId);
  const orders = userOrders.filter((order) => order.userId === userId);

  if (!user) return <div>User not found</div>;

  return (
    <div className="user-details-page">
      <h1 className="user-detail-h1">User Details</h1>
      <div className="user-info">
        <img src={user.image} alt={user.name} className="user-image" />
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
      </div>
      <h2 className="order-history">Order Details</h2>
      <table className="order-details-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Items</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.date}</td>
              <td>${order.totalAmount.toFixed(2)}</td>
              <td>{order.status}</td>
              <td>
                <ul>
                  {order.items.map((item, index) => (
                    <li key={index}>
                      {item.productName} (x{item.quantity}) - $
                      {item.price.toFixed(2)}
                    </li>
                  ))}
                </ul>
              </td>
              <td>
                {order.items.reduce((acc, item) => acc + item.quantity, 0)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;
