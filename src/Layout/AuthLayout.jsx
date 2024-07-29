import React from "react";
import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <div className="Auoth">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
