import React from "react";

import { Parallax } from "react-parallax";
import "./Seller.css"
import FadeInSection from "../../components/fadeinsection/FadeInSection";

import mtsummit from "../../images/GOPR0260.jpg";


import Footer from "../../components/footer/Footer";
const Seller = () => {
    return (
        <>
        <Parallax strength='600' bgImage={mtsummit}>
                <div className="content3">
                    <div className="title-list2">
                        <FadeInSection animationClassName="fade-in-section">
                            <h1>For Our Sellers</h1>
                        </FadeInSection>
                    </div>
                    <div className="subtitle-buyer">
                        <FadeInSection animationClassName="fade-in-section">
                            <h2>Benefit from our extensive experience where we act as your Seller's agent, committed to the successful sale of your property</h2>
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
                            <h2>Top 10 Reasons to List Your Home With Us</h2>
                            <p>Highlighting our strengths in services for sellers:</p>
                        </div>
                    </FadeInSection>
                    <FadeInSection animationClassName="fade-in-section">
                    <ul className="reasons-list">
                        <li>We negotiate the best deals for our clients.</li>
                        <li>We list the best homes for sale.</li>
                        <li>We sell homes quicker.</li>
                        <li>We sell homes for a higher percentage of the asking price.</li>
                        <li>We have the biggest network of buyers looking for homes.</li>
                        <li>We market properties more effectively, both on the web and off.</li>
                        <li>We embrace new technologies like the Internet - that are proven to help buyers and sellers.</li>
                        <li>We sell our homes as a team effort</li>
                        <li>We utilize open houses to promote the sale of our homes.</li>
                        <li>We offer our sellers specialists with specific real estate skills who are knowledgeable about the various processes.</li>
                    </ul>
                    </FadeInSection>
                    </div>
                </div>
            </div>
        </Parallax>

        <Parallax>
        <div className='list-page-color'>
            <div className="content">
            <div className='bs-box2'>
              
              <div className='bs-box-text'>
                <div className='bs-box-header'>
                  <FadeInSection animationClassName='fade-in-section'>
                      <h1>A complete marketing plan geared to net you the best price including:</h1>
                    </FadeInSection>
                </div>
                <ul className='bs-box-desc'>
                  <FadeInSection animationClassName='fade-in-section'>
                    <li>Comprehensive Market Analysis</li>
                    <li>Submission of property to three Multiple Listing Services</li>
                    <li>Submission of Property to three Internet Sites</li>
                    <li>Complete Information Packet on home, including interior and exterior photos, town facts, local school report and mortgage information</li>
                    <li>Mass Mailing of information to potential buyers</li>
                  </FadeInSection>
                </ul>
              </div>

              <div className='bs-img-box'>
                  <img src='https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="sell" width='100%' height='100%'></img>
              </div>
            </div>
            </div>
        </div>
        </Parallax>
        <Footer></Footer>
        </>
    )
}

export default Seller;