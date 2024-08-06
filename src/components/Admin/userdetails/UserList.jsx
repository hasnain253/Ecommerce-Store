import React from "react";
import { Link } from "react-router-dom";
import { usersDetails } from "../../../utlis/users";
import "./UserList.css";

const UserList = () => {
  return (
    <div className="user-list-page">
      <h1 className="user-list-h1">User List</h1>
      <table className="user-list-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {usersDetails.map((user) => (
            <tr key={user.userId}>
              <td>
                <img
                  src={user.image || "default-user-image.jpg"}
                  alt={user.name}
                  className="user-image"
                />
              </td>
              <td>{user.userId}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <Link to={`/user/${user.userId}`}>View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
