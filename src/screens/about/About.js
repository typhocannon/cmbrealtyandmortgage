import React from "react";
import { Parallax } from "react-parallax";
import {MdKeyboardArrowDown} from "react-icons/md";
import {PiLightbulb, PiPinwheel, PiPersonArmsSpread, PiShieldPlus, PiCompass, PiStarFour} from "react-icons/pi"
import { TbHomeDollar, TbHome, TbCoins, TbExposure } from "react-icons/tb"
import FadeInSection from "../../components/fadeinsection/FadeInSection";
import CustomButton from "../../components/custom_button/Custom_Button";
import Footer from "../../components/footer/Footer";
import AboutUsContainer from "../../components/aboutUsContainer/AboutUsContainer";
import ServiceBox from "../../components/serviceBox/ServiceBox";
import './About.css';

import candy from '../../images/cottoncandy_sunset.jpg'

const About = () => {
    const reasons = [
      {header:"Expertise", materialUI:<PiLightbulb size={75} color="goldenrod"/>, desc:"Seasoned professionals with extensive experience in mortgages, loans, and realty solutions."},
      {header:"Effortless Solutions", materialUI:<PiPinwheel size={75} color="goldenrod"/>, desc:"Dedicated to providing hassle-free mortgage and realty services."},
      {header:"Customer-Centric", materialUI:<PiPersonArmsSpread size={75} color="goldenrod"/>, desc:"Prioritizes customer satisfaction and tailors solutions to individual needs."},
      {header:"Trusted Professionals", materialUI:<PiShieldPlus size={75} color="goldenrod"/>, desc:"Team of trusted experts known for their reliability and professionalism."},
      {header:"Personalized Guidance", materialUI:<PiCompass size={75} color="goldenrod"/>, desc:"Offers personalized guidance to navigate the complex real estate market."},
      {header:"Commitment to Quality", materialUI:<PiStarFour size={75} color="goldenrod"/>, desc:"Committed to providing high-quality services that exceed expectations."},
    ]

    const reasonsList = reasons.map((reason) => (
        <AboutUsContainer
          header={reason.header}
          materialUI={reason.materialUI}
          desc={reason.desc}
          key={reason.header}
        />
    ));

    const services = [
      {header:"Property Listings", materialUI:<TbHome size={100}/>, desc:"We provide professional services to facilitate the listing of your property, ensuring a seamless and efficient selling process.", navLink:"/sellers"},
      {header:"Property Buying", materialUI:<TbHomeDollar size={100}/>, desc:"We offer a diverse range of homes for sale, helping you find your perfect property.", navLink:"/buyers"},
      {header:"Finance", materialUI:<TbCoins size={100}/>, desc:"We offer a wide variety of loan programs to meet your specific needs.", navLink:"/mortgage"},
      {header:"Refinance", materialUI:<TbExposure size={100}/>, desc:"Providing various types of mortgage loans for purchasing or refinancing homes.", navLink:"/mortgage"},
    ]

    const serviceList = services.map((service) => (
      <ServiceBox
        header={service.header}
        materialUI={service.materialUI}
        desc={service.desc}
        key={service.key}
      />
    ))

    return (
        <div className="about-page">
            <Parallax strength={600}>
              <div className="page-2-color">
                
              </div>
                <div className="content">
                    <div className="box2"></div>
                    <div className="box">
                      <FadeInSection animationClassName="fade-in-section">
                        {/* comment to be deleted just this comment */}
                        <h1>Our Mission</h1>
                      </FadeInSection>
                      <FadeInSection animationClassName="fade-in-section2">
                        <span>We're dedicated to providing customers with effortless mortgage, loan, and realty solutions, delivered by a team of seasoned professionals.</span>
                      </FadeInSection>
                    </div>
                    <div className="arrow">
                        <MdKeyboardArrowDown size={50}/>
                    </div>
                </div>
            </Parallax>
            <Parallax>
              <div className="page-color">
                <div className="content">
                    <div className="page-h1">
                      <FadeInSection animationClassName="fade-in-section">
                        <h1>Our Value Proposition</h1>
                      </FadeInSection>
                    </div>
                    <div className="container">
                        {reasonsList}
                    </div>
                </div>
              </div>
            </Parallax>
            <Parallax>
              <div className="content">
              <div className="page-h1">
                      <FadeInSection animationClassName="fade-in-section">
                        <h1>Our Services</h1>
                      </FadeInSection>
                    </div>
                  <div className="container-service">
                    {serviceList}
                  </div>
              </div>
            </Parallax>
            <Parallax strength={300} bgImage={candy}>
              <div className="content">
                <div className="q-box">
                <FadeInSection animationClassName="fade-in-section">
                    <h1>Any Questions?</h1>
                    <CustomButton navigationLink="/contact" title="Contact Us"></CustomButton>
                </FadeInSection>
                </div>
              </div>
            </Parallax>
          <Footer></Footer>
        </div>
    )
}

export default About;