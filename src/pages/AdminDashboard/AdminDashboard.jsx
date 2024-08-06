import React from "react";
import "./AdminDashboard.css";
import OrdersTable from "../../components/Admin/adminuser/OrdersTable";

const AdminDashboard = () => {
  return (
    <div className="Admin-Dashboar-section">
      <OrdersTable />
    </div>
  );
};

export default AdminDashboard;
