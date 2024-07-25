import React, { useEffect, useState } from "react";
import "./CategoryBanner.css";
import BaseButton from "../BaseButton";
import JBL from "../../../assets/images/Jblspeaker.png";

const CategoryBanner = () => {
  const [timerData, setTimerData] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      updateTimer();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const updateTimer = () => {
    setTimerData((timerData) => {
      let { days, hours, minutes, seconds } = timerData;
      if (seconds > 0) {
        seconds -= 1;
      } else if (minutes > 0) {
        minutes -= 1;
        seconds = 59;
      } else if (hours > 0) {
        hours -= 1;
        minutes = 59;
        seconds = 59;
      } else if (days > 0) {
        days -= 1;
        hours = 23;
        minutes = 59;
        seconds = 59;
      }
      return { days, hours, minutes, seconds };
    });
  };

  return (
    <div className="section5-div">
      <div className="banner-main">
        <div className="left-side">
          <div className="beforeButton">
            <span className="bannerSpan">Categories</span>
            <p className="bannerP">Enhance Your Music Experience</p>
            <div className="category-timer">
              <div className="round-time-design">
                <div>
                  <p>{timerData.days}</p>
                  <label>Days</label>
                </div>
                <div>
                  <p>{timerData.hours}</p>
                  <label>Hours</label>
                </div>
                <div>
                  <p>{timerData.minutes}</p>
                  <label>Minutes</label>
                </div>
                <div>
                  <p>{timerData.seconds}</p>
                  <label>Seconds</label>
                </div>
              </div>
            </div>
            <BaseButton classNameProp="banner-btn" text="Buy Now!" />
          </div>
        </div>
        <div className="right-side">
          <img src={JBL} alt="jbl-speaker" />
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
