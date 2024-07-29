import React from "react";
import BaseButton from "../../components/commonComponents/BaseButton";
import "./Page404.css";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="errorContainer">
      <p className="pagenotFound">404 Not Found</p>
      <p className="errorText">
        Your visited page not found. You may go home page.
      </p>
      <Link to="/home">
        <BaseButton text="Back to homepage" classNameProp="backtohomepage" />
      </Link>
    </div>
  );
};

export default Page404;
