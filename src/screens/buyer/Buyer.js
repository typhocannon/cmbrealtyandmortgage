import React from "react";

import { Parallax } from "react-parallax";
import { BsBank, BsHouses, BsBuildings, BsCreditCard2Front } from "react-icons/bs";
import "./Buyer.css"
import FadeInSection from "../../components/fadeinsection/FadeInSection";
import Footer from "../../components/footer/Footer";
import sunset from "../../images/cottoncandy_sunset.jpg";
import mtsummit from "../../images/GOPR0260.jpg";


const Buyer = () => {
    return (
        <>
        <Parallax strength='600' bgImage={mtsummit}>
                <div className="content3">
                    <div className="title-list2">
                        <FadeInSection animationClassName="fade-in-section">
                            <h1>For Our Buyers</h1>
                        </FadeInSection>
                    </div>
                    <div className="subtitle-buyer">
                        <FadeInSection animationClassName="fade-in-section">
                            <h2>We offer years of experience in the marketing and sales of real estate and mortgage.</h2>
                        </FadeInSection>
                    </div>
                </div>
        </Parallax>

        <Parallax>
            <div className="list-page">
                <div className="content">
                    <div className="columns">
                    <FadeInSection animationClassName="fade-in-section">
                        <div className="col-title">
                            <h2>Our Services</h2>
                            <p>Highlighting our strengths in services for buyers:</p>
                        </div>
                        
                    </FadeInSection>
                        <div className="col-container">
                            <FadeInSection animationClassName="fade-in-section">
                                <div className="col-item">
                                    <BsHouses size="142" color="goldenrod"></BsHouses>
                                    <p>Residential and Commercial</p>
                                </div>
                            </FadeInSection>    

                            <FadeInSection animationClassName="fade-in-section">
                                <div className="col-item">
                                    <BsBuildings size="142" color="goldenrod"></BsBuildings>
                                    <p>New Construction and Land Sales</p>
                                </div>
                            </FadeInSection>    
                        </div>

                        <div className="col-container">
                            <FadeInSection animationClassName="fade-in-section">
                            <div className="col-item">
                                <BsBank size="142" color="goldenrod"></BsBank>
                                <p>Bank-Owned Properties / Estate Sales</p>
                            </div>
                            </FadeInSection>    
                            <FadeInSection animationClassName="fade-in-section">
                            <div className="col-item">    
                                <BsCreditCard2Front size="142" color="goldenrod"></BsCreditCard2Front>
                                <p>Finance and Re-finance</p>
                            </div>
                            </FadeInSection>    
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>

        <Parallax>
        <div className='list-page-color'>
            <div className="content">
            <div className='bs-box2'>
              <div className='bs-img-box'>
                  <img src='https://images.pexels.com/photos/8297652/pexels-photo-8297652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' width='100%' height='100%'></img>
              </div>
              <div className='bs-box-text'>
                <div className='bs-box-header'>
                  <FadeInSection animationClassName='fade-in-section'>
                      <h1>We Will Represent You As A Buyer's Agent</h1>
                    </FadeInSection>
                </div>
                <ul className='bs-box-desc'>
                  <FadeInSection animationClassName='fade-in-section'>
                    <li>Initial no-obligation consultation to establish your needs including: neighborhood, schools, style and size of home, amenities, price and financing</li>
                    <li>Daily updates to you (via fax, e-mail or phone) with all properties new on the market fitting your criteria</li>
                    <li>We can arrange financing at very competitive mortgage rates, with the program that fits your needs, with a local lender.</li>
                    <li>Complete school report from National School Reporting System</li>
                    <li>Town information from "Know Your Neighborhood"</li>
                    <li>Negotiate the lowest price and best terms for your purchase</li>
                    <li>Flexible Schedule</li>
                  </FadeInSection>
                </ul>
                <FadeInSection animationClassName='fade-in-section'>
                <p>Thinking of buying? Let us supply you with a complimentary school & town report. Just contact us!</p>
                </FadeInSection>
              </div>
            </div>
            </div>
        </div>
        </Parallax>
        <Footer></Footer>
        </>
    )
}

export default Buyer;