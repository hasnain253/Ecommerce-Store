import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/commonComponents/navbar/Navbar";
import Footer from "../components/commonComponents/footer/Footer";

const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
