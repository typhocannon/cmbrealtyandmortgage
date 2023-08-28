import React from "react";

import { Parallax } from "react-parallax";
import { BsBank, BsHouses, BsBuildings, BsCreditCard2Front } from "react-icons/bs";
import "./Buyer.css"
import FadeInSection from "../../components/fadeinsection/FadeInSection";

import sunset from "../../images/cottoncandy_sunset.jpg";

const Buyer = () => {
    return (
        <>
        <Parallax strength='600' bgImage={sunset}>
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

        </>
    )
}

export default Buyer;