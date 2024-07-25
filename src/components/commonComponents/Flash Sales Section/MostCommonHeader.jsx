import React from "react";
import moveRight from "../../../assets/images/Fill with Right Arrow.png";
import moveLeft from "../../../assets/images/Fill With Left Arrow.png";
import BaseButton from "../BaseButton";

const MostCommonHeader = ({
  title,
  heading,
  showTimer = true,
  iconSlider = true,
  commonButton = true,
  previousCard,
  nextCard,
  Click,
  timerData,
}) => {
  return (
    <div>
      <div className="vertical">
        <div className="vl"></div>
        <span>{heading}</span>
      </div>
      <div className="sales-timer">
        <p className="sales-text">{title}</p>

        {showTimer && (
          <div className="timer">
            <div>
              <label>Days</label>
              <p>{timerData.days}</p>
            </div>
            <div>
              <label>Hours</label>
              <p>{timerData.hours}</p>
            </div>
            <div>
              <label>Minutes</label>
              <p>{timerData.minutes}</p>
            </div>
            <div>
              <label>Seconds</label>
              <p>{timerData.seconds}</p>
            </div>
          </div>
        )}
        {iconSlider && (
          <div className="pagination-icon">
            <img src={moveLeft} alt="left-arrow" onClick={previousCard} />
            <img src={moveRight} alt="right-arrow" onClick={nextCard} />
          </div>
        )}
        {commonButton && (
          <div className="commonbtn">
            <BaseButton
              text="View All"
              classNameProp="sectionCommonbtn"
              onClick={Click}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MostCommonHeader;
