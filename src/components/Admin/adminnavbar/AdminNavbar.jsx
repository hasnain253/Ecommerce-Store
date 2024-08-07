import React from "react";
import { Link } from "react-router-dom";
import "./AdminNavbar.css";
import UserIcon from "../../commonComponents/navbar/userIcon/UserIcon";

const AdminNavbar = () => {
  return (
    <div className="Admin-navbar-section">
      <div className="admin-logo">
        <h2>Admin Dashboard</h2>
      </div>
      <div className="adminnav-links">
        <ul className="admin-nav-list ">
          <li>
            <Link to="/admin-dashboard/orders ">Orders</Link>
          </li>
          <li>
            <Link to="/admin-dashboard/userlist">User List </Link>
          </li>
        </ul>
      </div>
      <div className="userIcon">
        <UserIcon />
      </div>
    </div>
  );
};

export default AdminNavbar;
