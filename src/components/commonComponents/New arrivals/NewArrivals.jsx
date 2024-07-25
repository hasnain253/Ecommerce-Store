import React from "react";
import "./NewArrivals.css";
import MostCommonHeader from "../Flash Sales Section/MostCommonHeader";
import NewArrival1 from "../../../assets/images/newArrival1.png";
import NewArrival2 from "../../../assets/images/newArrival2.png";
import NewArrival3 from "../../../assets/images/newArrival3.png";
import NewArrival4 from "../../../assets/images/newArrival4.png";
import BaseButton from "../BaseButton";

const NewArrivals = () => {
  return (
    <div className="section7-div">
      <div className="arrivalContainer">
        <div className="headerSection">
          <MostCommonHeader
            showTimer={false}
            iconSlider={false}
            heading="Featured"
            title="New Arrival"
            commonButton={false}
          />
        </div>
        <div className="imageLayoutSection">
          <div className="leftsideLayout">
            <div className="left-img">
              <img src={NewArrival1} alt="" />
            </div>
            <div className="arrival-content">
              <span className="playStation">PlayStation 5</span>
              <p className="ps5P">
                Black and White version of the PS5 coming out on sale.
              </p>
              <BaseButton
                type="submit"
                classNameProp="shopNowbtn"
                text="Shop Now"
              />
            </div>
          </div>
          {/* Right side */}
          <div className="rightSideLayout">
            <div className="upperCard">
              <img src={NewArrival2} alt="" className="uppercard-img" />
              <div className="upperCard-content">
                <span className="playStation">Women’s Collections</span>
                <p className="ps5P">
                  Featured woman collections that give you another vibe.
                </p>
                <BaseButton
                  type="submit"
                  classNameProp="shopNowbtn"
                  text="Shop Now"
                />
              </div>
            </div>
            <div className="lowerCard">
              <div className="lowerCardparts">
                <div className="firstone">
                  <div className="firstOne-img">
                    <img src={NewArrival4} alt="" />
                  </div>
                  <div className="loweOne-content">
                    <span className="playStation">Speakers</span>
                    <p className="ps5P">Amazon wireless speakers</p>
                    <BaseButton
                      type="submit"
                      classNameProp="shopNowbtn"
                      text="Shop Now"
                    />
                  </div>
                </div>
                <div className="second">
                  <div className="secondOne-img">
                    <img src={NewArrival3} alt="" />
                  </div>
                  <div className="secondOne-content">
                    <span className="playStation"> Perfume</span>
                    <p className="ps5P">GUCCI INTENSE OUD EDP</p>
                    <BaseButton
                      type="submit"
                      classNameProp="shopNowbtn"
                      text="Shop Now"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
