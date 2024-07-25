import React from "react";
import "./About.css";
import AboutSideImage from "../../assets/images/aboutsideimage.png";
import { cardData } from "../../utlis/WebsiteRevenu";
import { teamData } from "../../utlis/TeamMembersData";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CustomerServices from "../commonComponents/customerServices/CustomerServices";

const About = () => {
  return (
    <div className="gridContainer">
      <div className="aboutContent">
        <div className="contentContainer">
          <p className="title">Our Story</p>
          <p className="introductionParagraph">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands, serving 3 million
            customers across the region.
          </p>
          <p className="introductionParagraph">
            Exclusive has more than 1 Million products to offer, growing very
            fast. Exclusive offers a diverse assortment in categories ranging
            from consumer goods.
          </p>
        </div>
      </div>
      <div className="sideImage">
        <img src={AboutSideImage} alt="" />
      </div>
      <div className="sections-container">
        <div className="aboutGrowingSection">
          {cardData.map((card) => (
            <div className="companySales" key={card.id}>
              <div className="activeSeller">
                <img src={card.image} alt="" />
                <p className="numbering">{card.number}</p>
                <p className="details">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mainTeamSection">
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="myTeamSwiper"
            slidesPerView={3}
            spaceBetween={60}
          >
            {teamData.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="teamMember">
                  <img src={member.image} alt={member.name} />
                  <p>{member.name}</p>
                  <p className="member-title">{member.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="servicesSection">
          <CustomerServices />
        </div>
      </div>
    </div>
  );
};

export default About;
