import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      navigate("/home");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
    let initialError = { ...error };

    if (!inputData.email) {
      initialError.email = "Email is required";
      hasError = true;
    } else if (!emailRegex.test(inputData.email)) {
      initialError.email = "Invalid email format";
      hasError = true;
    }

    if (!inputData.password) {
      initialError.password = "Password is required";
      hasError = true;
    } else if (!passwordRegex.test(inputData.password)) {
      initialError.password =
        "Minimum eight characters, at least one letter, one number, and one special character";
      hasError = true;
    }

    setError(initialError);

    if (hasError) {
      return;
    }

    const user = userData.find((user) => user.email === inputData.email);
    if (!user) {
      setError({ email: "User not found", password: "" });
      return;
    }

    if (user.password !== inputData.password) {
      setError({ email: "", password: "Invalid password" });
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    navigate("/home");
    setInputData({ email: "", password: "" });
  };

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="login-dataInput">
        <h1>LOGIN</h1>
        <p>Sign up for access any of our products.</p>
        <form onSubmit={handleSubmit}>
          <BaseInput
            type="email"
            name="email"
            placeHolder="Username"
            value={inputData.email}
            handleChange={handleChange}
          />
          <br />
          {error.email && <p style={{ color: "red" }}>{error.email}</p>}

          <BaseInput
            type="password"
            name="password"
            placeHolder="Password"
            value={inputData.password}
            handleChange={handleChange}
          />
          {error.password && <p style={{ color: "red" }}>{error.password}</p>}

          <BaseButton
            text="Login Now"
            classNameProp="submit-btn"
            type="submit"
          />
          <br />
          <p className="paragraphL">
            <span>Login</span>
            {""} with Others
          </p>
          <div className="socialmediaIcons">
            <BaseButton
              classNameProp="icons"
              img={true}
              src={google}
              alt="google-icon"
              text="Login in with"
              showSpan={<span>Google</span>}
            />
            <BaseButton
              classNameProp="icons"
              img={true}
              src={facebook}
              alt="fb-img"
              text="Login in with"
              showSpan={<span>Facebook</span>}
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
