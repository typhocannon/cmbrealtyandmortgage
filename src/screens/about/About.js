import React from "react";
import { Parallax } from "react-parallax";
import {MdKeyboardArrowDown} from "react-icons/md";
import {PiLightbulb, PiPinwheel, PiCubeTransparent, PiPersonArmsSpread, PiShieldPlus, PiMagnifyingGlass, PiCompass, PiStarFour} from "react-icons/pi"
import { TbHomeDollar, TbHome, TbCoins, TbExposure } from "react-icons/tb"
import FadeInSection from "../../components/fadeinsection/FadeInSection";
import CustomButton from "../../components/custom_button/Custom_Button";

import './About.css';

import candy from '../../images/cottoncandy_sunset.jpg'

const About = () => {

    return (
        <div className="about-page">
            <Parallax strength={600}>
              <div className="page-2-color">
                
              </div>
                <div className="content">
                    <div className="box2"></div>
                    <div className="box">
                      <FadeInSection animationClassName="fade-in-section">
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
                <div className="content">
                    <div className="page-h1">
                      <FadeInSection animationClassName="fade-in-section">
                        <h1>Our Value Proposition</h1>
                      </FadeInSection>
                    </div>
                    <div className="container">
                        <div className="container-row">
                          <FadeInSection animationClassName="fade-in-section2">
                            <PiLightbulb size={75} color="goldenrod"/>
                          </FadeInSection>
                          <div className="container-textbox">
                            <FadeInSection animationClassName="fade-in-section2">
                              <h2>Expertise</h2>
                              <p>Seasoned professionals with extensive experience in mortgages, loans, and realty solutions.</p>
                            </FadeInSection>
                          </div>
                        </div>
                        <div className="container-row">
                          <FadeInSection animationClassName="fade-in-section2">
                            <PiPinwheel size={75} color="goldenrod"/>
                          </FadeInSection>
                          <div className="container-textbox">
                          <FadeInSection animationClassName="fade-in-section2">
                            <h2>Effortless Solutions</h2>
                            <p>Dedicated to providing hassle-free mortgage and realty services.</p>
                          </FadeInSection>
                          </div>
                        </div>
                        <div className="container-row">
                          <FadeInSection animationClassName="fade-in-section2">
                            <PiCubeTransparent size={75} color="goldenrod"/>
                          </FadeInSection>
                          <div className="container-textbox">
                          <FadeInSection animationClassName="fade-in-section2">
                            <h2>Comprehensive Services</h2>
                            <p>Offers a wide range of real estate services, from mortgages to loans.</p>
                          </FadeInSection>
                          </div>
                        </div>
                        <div className="container-row">
                          <FadeInSection animationClassName="fade-in-section2">
                            <PiPersonArmsSpread size={75} color="goldenrod"/>
                          </FadeInSection>
                          <div className="container-textbox">
                          <FadeInSection animationClassName="fade-in-section2">
                            <h2>Customer-Centric</h2>
                            <p>Prioritizes customer satisfaction and tailors solutions to individual needs.</p>
                          </FadeInSection>
                          </div>
                        </div>
                        <div className="container-row">
                          <FadeInSection animationClassName="fade-in-section2">
                            <PiShieldPlus size={75} color="goldenrod"/>
                          </FadeInSection>
                          <div className="container-textbox">
                          <FadeInSection animationClassName="fade-in-section2">
                            <h2>Trusted Professionals</h2>
                            <p>Team of trusted experts known for their reliability and professionalism.</p>
                            </FadeInSection>
                          </div>
                        </div>
                        <div className="container-row">
                          <FadeInSection animationClassName="fade-in-section2">
                            <PiMagnifyingGlass size={75} color="goldenrod"/>
                          </FadeInSection>
                          <div className="container-textbox">
                          <FadeInSection animationClassName="fade-in-section2">
                            <h2>Transparent Process</h2>
                            <p>Clear and transparent communication throughout the entire process.</p>
                          </FadeInSection>
                          </div>
                        </div>
                        <div className="container-row">
                          <FadeInSection animationClassName="fade-in-section22">
                            <PiCompass size={75} color="goldenrod"/>
                          </FadeInSection>
                          <div className="container-textbox">
                          <FadeInSection animationClassName="fade-in-section2">
                              <h2>Personalized Guidance</h2>
                              </FadeInSection>
                            <FadeInSection animationClassName="fade-in-section2">
                              <p>Offers personalized guidance to navigate the complex real estate market.</p>
                            </FadeInSection>
                          </div>
                        </div>
                        <div className="container-row">
                          <FadeInSection animationClassName="fade-in-section2">
                            <PiStarFour size={75} color="goldenrod"/>
                          </FadeInSection>
                          <div className="container-textbox">
                          <FadeInSection animationClassName="fade-in-section2">
                            <h2>Commitment to Quality</h2>
                            </FadeInSection>
                            <FadeInSection animationClassName="fade-in-section2">
                              <p>Committed to providing high-quality services that exceed expectations.</p>
                            </FadeInSection>
                          
                          </div>
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
                    <div className="service-box">
                  <FadeInSection animationClassName="fade-in-section">
                      <TbHome size={100}/>
                      <h1>Property Listings</h1>
                      <p>selling houses</p>
                      <CustomButton navigationLink="/sellers" title="Read More"></CustomButton>
                    </FadeInSection>
                    </div>

                    <div className="service-box">
                    <FadeInSection animationClassName="fade-in-section">
                      <TbHomeDollar size={100}/>
                      <h1>Property Buying</h1>
                      <p>buying houses</p>
                      <CustomButton navigationLink="/buyers" title="Read More"></CustomButton>
                      </FadeInSection>
                    </div>
                    <div className="service-box">
                    <FadeInSection animationClassName="fade-in-section">
                      <TbCoins size={100}/>
                      <h1>Finance</h1>
                      <p>purchase loans</p>
                      <CustomButton navigationLink="/mortgage" title="Read More"></CustomButton>
                      </FadeInSection>
                    </div>
                    <div className="service-box">
                    <FadeInSection animationClassName="fade-in-section">
                      <TbExposure size={100}/>
                      <h1>Refinance</h1>
                      <p>Providing various types of mortgage loans for purchasing or refinancing homes.</p>
                      <CustomButton navigationLink="/mortgage" title="Read More"></CustomButton>
                      </FadeInSection>
                    </div>
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
        </div>
    )
}

export default About;