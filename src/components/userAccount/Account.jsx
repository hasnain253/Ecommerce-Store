import React from "react";
import "./Account.css";
import BaseInput from "../commonComponents/BaseInput";
import BaseButton from "../commonComponents/BaseButton";

const Account = () => {
  return (
    <div className="AccountContainer">
      <div className="account-sidebar">
        <p className="common-heading">Manage My Account</p>
        <div className="account-manage">
          <p>My Profile</p>
          <p>Address Book</p>
          <p>My Payment Options</p>
        </div>
        <div className="order">
          <p className="common-heading">My Orders</p>
          <div className="account-manage">
            <p>My Returns</p>
            <p>My Cancellations</p>
          </div>
        </div>
        <p className="common-heading">My WishList</p>
      </div>
      {/* right side */}
      <div className="EditProfile">
        <form action="">
          <p className="profile-name">Edit Your Profile</p>
          <div className="names-input">
            <div>
              <label htmlFor="">First Name</label>
              <BaseInput placeHolder="Md" type="text" className="form-Inputs" />
            </div>
            <div>
              <label htmlFor="">Last Name</label>
              <BaseInput
                placeHolder="Rimel"
                type="text"
                className="form-Inputs"
              />
            </div>
          </div>
          <div className="names-input">
            <div>
              <label htmlFor="">Email</label>
              <BaseInput
                placeHolder="rimel1111@gmail.com"
                type="email"
                className="form-Inputs"
              />
            </div>
            <div>
              <label htmlFor="">Address</label>
              <BaseInput
                placeHolder="Kingston, 5236, United State"
                type="text"
                className="form-Inputs"
              />
            </div>
          </div>
          <div className="passwordChange">
            <div>
              <p className="passwordText">Password Change</p>
            </div>
            <div className="password-section-input">
              <BaseInput
                type="password"
                placeHolder="Current Passwod"
                className="password-inputs"
              />
              <BaseInput
                type="password"
                placeHolder="New Passwod"
                className="password-inputs"
              />
              <BaseInput
                type="password"
                placeHolder="Confirm New Passwod"
                className="password-inputs"
              />
            </div>
          </div>
          <div className="saveChanges">
            <BaseButton text="Cancel" classNameProp="cancel-btn" />
            <BaseButton text="Save Changes" classNameProp="save-changes" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;
