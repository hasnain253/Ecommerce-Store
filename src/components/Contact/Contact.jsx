import React from "react";
import "./Contact.css";
import phoneIcon from "../../assets/images/icons-phone.png";
import MailIcon from "../../assets/images/icons-mail.png";
import BaseInput from "../commonComponents/BaseInput";
import BaseButton from "../commonComponents/BaseButton";

const Contact = () => {
  return (
    <div className="Contactcontainer">
      <div className="contact-left-side">
        <div className="call-to-us">
          <p className="call-us">
            <img src={phoneIcon} alt="icons-phone" /> Call To Us
          </p>
          <p className="available-phone">
            We are available 24/7, 7 days a week.
          </p>
          <p className="available-phone">Phone: +8801611112222</p>
        </div>

        <hr className="line" />

        <div className="write-to-us">
          <p className="call-us">
            <img src={MailIcon} alt="icon-email" />
            Write To US
          </p>
          <p className="available-phone">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="available-phone">Emails: customer@exclusive.com</p>
          <p className="available-phone">Emails: support@exclusive.com</p>
        </div>
      </div>
      {/* right side */}

      <div className="contact-right-side">
        <div className="inputs-row">
          <BaseInput
            type="text"
            placeHolder="Your Name *"
            className="contact-input"
          />
          <BaseInput
            type="email"
            placeHolder="Your Email *"
            className="contact-input"
          />
          <BaseInput
            type="phone"
            placeHolder="Your Phone"
            className="contact-input"
          />
        </div>
        <textarea
          name="textspace"
          placeholder="Your Message"
          className="text-area"
        ></textarea>
        <div className="sendbtn">
          <BaseButton text="Send Massage" classNameProp="send-message" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
