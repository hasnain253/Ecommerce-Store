import React, { useState } from "react";
import "./Login.css";
import { userData } from "./jsonData";
import facebook from "../../assets/images/facebook 1.png";
import google from "../../assets/images/google 1.png";
import women from "../../assets/images/women.png";
import thunder from "../../assets/images/thunderbolt.png";
import BaseButton from "../commonComponents/BaseButton";
import BaseInput from "../commonComponents/BaseInput";
import { useNavigate } from "react-router-dom";
import { emailRegex, passwordRegex } from "../../utlis/validations";

const Login = () => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });
  const [role, setRole] = useState("");

  const validateInput = () => {
    const newError = { email: "", password: "" };
    let isValid = true;

    if (!inputData.email) {
      newError.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(inputData.email)) {
      newError.email = "Invalid email format";
      isValid = false;
    }

    if (!inputData.password) {
      newError.password = "Password is required";
      isValid = false;
    } else if (!passwordRegex.test(inputData.password)) {
      newError.password =
        "Minimum eight characters, at least one letter, one number, and one special character";
      isValid = false;
    }

    setError(newError);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateInput()) return;

    const user = userData.find((user) => user.email === inputData.email);
    if (!user) {
      setError({ email: "User not found", password: "" });
      return;
    }

    if (user.password !== inputData.password) {
      setError({ email: "", password: "Invalid password" });
      return;
    }

    if (role === "user" && user.role === "user") {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/home");
    } else if (role === "admin" && user.role === "admin") {
      localStorage.setItem("admin", JSON.stringify(user));
      navigate("/admin-dashboard/orders");
    } else {
      setError({ email: "", password: "Role does not match" });
    }

    setInputData({ email: "", password: "" });
  };

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div className="container">
      <div className="login-dataInput">
        <h1 className="LoginHeading">LOGIN</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <p className="accessProducts">
            Sign up for access any of our products.
          </p>
          <br />
          <BaseInput
            type="email"
            name="email"
            placeHolder="Username"
            className="login-input"
            value={inputData.email}
            onChange={handleChange}
          />
          <br />
          {error.email && <p style={{ color: "red" }}>{error.email}</p>}

          <BaseInput
            type="password"
            name="password"
            placeHolder="Password"
            value={inputData.password}
            className="login-input"
            onChange={handleChange}
          />
          {error.password && <p style={{ color: "red" }}>{error.password}</p>}
          <br />
          <div className="conditional-login">
            <div className="user-admin">
              <BaseInput
                type="radio"
                name="role"
                value="user"
                className="checking-login"
                onChange={handleRoleChange}
              />
              <p>User</p>
            </div>
            <div className="user-admin">
              <BaseInput
                type="radio"
                name="role"
                value="admin"
                className="checking-login"
                onChange={handleRoleChange}
              />
              <p>Admin</p>
            </div>
          </div>
          <BaseButton
            text="Login Now"
            classNameProp="submit-btn"
            type="submit"
          />
          <br />
          <p className="paragraphL">
            <span className="login-heading">Login</span> with Others
          </p>
          <div className="socialmediaIcons">
            <BaseButton
              classNameProp="icons"
              img={true}
              src={google}
              alt="google-icon"
              text="Login in with"
              showSpan={<span className="login-heading">Google</span>}
            />
            <BaseButton
              classNameProp="icons"
              img={true}
              src={facebook}
              alt="fb-img"
              text="Login in with"
              showSpan={<span className="login-heading">Facebook</span>}
            />
          </div>
        </form>
      </div>

      <div className="image">
        <div className="card">
          <p className="paragraphR">
            Very good works are waiting for your Login Now!!!
          </p>
          <img className="login-img" src={women} alt="login" />
          <img className="thunder" src={thunder} alt="thunder" />
        </div>
      </div>
    </div>
  );
};

export default Login;
