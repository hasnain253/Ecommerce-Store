import React from "react";
import "./Footer.css";
import SendIcon from "../../../assets/images/icon-send.png";
import InstagramIcon from "../../../assets/images/instagramFooter.png";
import TwitterIcon from "../../../assets/images/twitterFooter.png";
import FacebookIcon from "../../../assets/images/facebookFooter.png";
import DownloadApp from "../../../assets/images/download-appstore.png";
import GooglePlayStore from "../../../assets/images/googlePlayStore.png";
import LinkedInIcon from "../../../assets/images/linkedInFooter.png";
import QrCode from "../../../assets/images/Qr Code.png";

const Footer = () => {
  const isUser = JSON.parse(localStorage.getItem("user"));
  return isUser?.role === "user" ? (
    <div className="Container">
      <div className="mainDiv">
        <div className="logoSection">
          {/* Logo-section */}
          <div className="logoHeadings">
            <h2>Exclusive</h2>
            <h3>Subscribe</h3>
            <p className="logoP">Get 10% off your first order</p>
          </div>
          <div className="searchdiv">
            <input type="search" placeholder="Enter your email" />
            <img src={SendIcon} alt="send-icon" />
          </div>
        </div>
        {/* Support-section */}
        <div className="support">
          <h3>Support</h3>
          <p className="supportP">
            111 Bijoy sarani, Dhaka,
            <br /> DH 1515, Bangladesh.
          </p>
          <p className="supportP">exclusive@gmail.com</p>
          <p className="supportP">+88015-88888-9999</p>
        </div>
        {/* Account section */}
        <div className="accounts">
          <h3>Account</h3>
          <ul>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>
        {/* Quick Link */}
        <div className="quickLink">
          <h3>Quick Link</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        {/* Download App */}
        <div className="downloadApp">
          <h3>Download App</h3>
          <div className="imagesMain">
            <p>Save $3 with App New User Only</p>
            <div className="images">
              <div className="leftSideimg">
                <img src={QrCode} alt="qr-code" />
              </div>
              <div className="rightSideimg">
                <img src={GooglePlayStore} alt="Google Play Store" />
                <img src={DownloadApp} alt="App Store" />
              </div>
            </div>
          </div>
          <div className="socialIcons">
            <img src={FacebookIcon} alt="Facebook" />
            <img src={TwitterIcon} alt="Twitter" />
            <img src={InstagramIcon} alt="Instagram" />
            <img src={LinkedInIcon} alt="LinkedIn" />
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; Copyright Rimel 2022. All rights reserved.</p>
      </div>
    </div>
  ) : null;
};

export default Footer;
