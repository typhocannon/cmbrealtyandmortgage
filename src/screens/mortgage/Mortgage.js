import React from "react";

import { Parallax } from "react-parallax";
import FadeInSection from "../../components/fadeinsection/FadeInSection";
import sunset from "../../images/cottoncandy_sunset.jpg";
import Footer from "../../components/footer/Footer";

import "./Mortgage.css"

const Mortgage = () => {
    return (
        <>
        <Parallax strength='600' bgImage={sunset}>
                <div className="content4">
                    <div className="title-list2">
                        <FadeInSection animationClassName="fade-in-section">
                            <h1>Mortgage</h1>
                        </FadeInSection>
                    </div>
                </div>
        </Parallax>

        <Parallax>
            <div className="list-page">
                <div className="content">
                    <div className="mort-row">

                    <div className="mort-container">
                    <FadeInSection animationClassName="fade-in-section">
                        <div className="mort-title">
                            <h1>General Mortgage Information</h1>
                        </div>
                    </FadeInSection>
                    
                        <div className="mort-desc">
                            <FadeInSection animationClassName="fade-in-section">
                                <h2>Types of Mortgages</h2>
                            </FadeInSection>
                        
                            <FadeInSection animationClassName="fade-in-section">
                                <p>There are many types of mortgages you can choose from. Which type you choose usually depends on the length of time you think you'll be in your home or the other financial obligations you have. If you think you'll be there for the long haul, then you may want a fixed rate mortgage with the lowest interest rate you can get.
    There may be other considerations, however. What if you have kids who are going to be entering college in 10 years? In that case, you might consider getting an adjustable rate mortgage or a mortgage with a balloon payment so you can keep your payments low for the first few years in order to save for college. Once the kids are out of college, you can refinance at the current rate. If you don't think you'll be in your home for that long, then you may also want to look at other options.</p>
                            </FadeInSection>

                        </div>

                    </div>
                    <div className="mort-img">
                        <img src="https://images.pexels.com/photos/8292793/pexels-photo-8292793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width='75%' height='50%'></img>
                    </div>
                    </div>
                </div>
            </div>
        </Parallax>

        <Parallax>
        <div className='list-page-color'>
            <div className="content">

            </div>
        </div>
        </Parallax>
        <Footer></Footer>
        </>
    )
}

export default Mortgage;