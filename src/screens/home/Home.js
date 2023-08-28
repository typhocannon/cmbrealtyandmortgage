import React from 'react';

import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import Typed from 'typed.js'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Home.css';

import ImageBoard from '../../components/imgBoard/ImgBoard';
import Slider from '../../components/slider/Slider';
import Ham_Button from '../../components/ham_button/Ham_Button';
import FadeInSection from '../../components/fadeinsection/FadeInSection';
import CustomButton from '../../components/custom_button/Custom_Button';

import MilpitasSunset from '../../images/milpitas-sunset.png';
import Mother from '../../images/christine-placeholder.jpg';

function Home() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['President', 'Realtor', 'Broker'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="App">
        <Ham_Button/>
      <Parallax strength={-300}  bgImage={MilpitasSunset} backgroundSize="contain">
          <div className="firstpage">
            <div className="content">
              <div className="text-container">
                <FadeInSection animationClassName='fade-in-section'>
                  <motion.div
                    className="front-text"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    >
                    <span className="capital"> C</span>hristine <span className='capital'>M</span>inh <span className='capital'>B</span>ui
                  </motion.div>
                </FadeInSection>

                <FadeInSection animationClassName='fade-in-section'>
                  <motion.div
                    className="front-text2"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    >
                    <span>Realty & Mortgage Inc.</span>
                  </motion.div>
                </FadeInSection>
              </div>
            </div>
          </div>
        </Parallax>


        <Parallax strength={600}>
          <div className="secondpage-bg">
            <div className="content">
              <div className="secondpage-content">

                <div className = "mum-img">
                  <div className="gold-box"></div>
                  <FadeInSection animationClassName='fade-in-section'>
                    <img src={Mother} width="650" height="750"></img>
                  </FadeInSection>
                  </div>
                  <div className="text-box">
                    <div className="header">
                      <FadeInSection animationClassName='fade-in-section'>
                        <span>Meet the <span ref={el}></span></span>
                      </FadeInSection>
                    </div>
                    <div className="text-box-body">
                      <FadeInSection animationClassName='fade-in-section'>
                        <span>Hello! Thanks for visiting.</span>
                        <br></br>
                        <br></br>
                        <span>My name is Christine Bui and let me be the first to introduce you to CMB Realty & Mortgage. We are a full service real estate and mortgage brokerage firm where Buyers and Sellers are represented fairly, professionally and with attention to detail.</span>
                        <br></br>
                        <br></br>
                        <span>This website is designed to be your complete Real Estate resource. It has been built to assist you with all your needs. Our agents are always available to offer you personal and one-on-one assistant throughout the whole process. Our goal is to provide you the best service possible, and to help you make the right choices in your real estate transactions.</span>
                      </FadeInSection>
                    </div>
                    <FadeInSection animationClassName='fade-in-section'>
                      <CustomButton navigationLink='/about' title='Read More'/>
                    </FadeInSection>
                  </div>
              </div>
            </div>
          </div>
        </Parallax>


      <div className='spacing'></div>

          <Parallax strength={600}>
              <div className="thirdpage-bg">
                <div className='content-2'>
                <div className="header">
                  <FadeInSection animationClassName='fade-in-section'>
                  <span>Our Agents</span>
                  </FadeInSection>
                </div>
                <Slider></Slider>
                </div>
              </div>
          </Parallax>

      <div className='spacing'></div>


        <Parallax strength={600}>
          <div className='content'>
            <div className="page-title">
            <FadeInSection animationClassName='fade-in-section'>
              <span>Featured Listing</span>
            </FadeInSection>
            </div>
            <div className='house'>
              <div className='img-box'>
                <FadeInSection animationClassName='fade-in-section'>
                  <ImageBoard></ImageBoard>
                </FadeInSection>
              </div>
              <div className='img-d'>
                <FadeInSection animationClassName='fade-in-section'>
                  <span>97 E Saint James St #47 </span>
                  <br></br>
                  <span>San Jose, CA 95112</span>
                </FadeInSection>
                <FadeInSection animationClassName='fade-in-section'>
                  <div className='mls-box'>
                    <p>MLS#: <a href='https://www.mlslistings.com/property/ml81773572/97-e-saint-james-st-47-san-jose-ca-95112'>ML81773572</a> | SqFt: 1,203 | Bedrooms: 2 | Bathrooms: 2</p>
                  </div>
                </FadeInSection>
                <div className='desc-b'>
                  <FadeInSection animationClassName='fade-in-section'>
                    <p>Experience downtown living at its finest in this sleek end unit. Spacious rooms, recent remodeling, and easy access to the heart of the city and the Light Rail station. Thriving community, great neighbors, and exciting growth on the horizon. Your urban oasis awaits!</p>
                  </FadeInSection>
                </div>
                <FadeInSection animationClassName='fade-in-section'>
                  <CustomButton navigationLink='/listings' title='View More Listings'></CustomButton>
                </FadeInSection>
              </div>
            </div>
          </div>

        </Parallax>

        <Parallax strength={600}>
          <div className='content'>
            <div className='buysell'>
              
              <div className='buyer-behind'>
                <div className='buyer-box'>
                  <div className='title-bs'>
                    <FadeInSection animationClassName='fade-in-section'>
                      <span>For Buyers</span>
                    </FadeInSection>
                  </div>
                  <div className='desc-bs'>
                    <FadeInSection animationClassName='fade-in-section'>
                      <p>At CMB Realty & Mortgage, we recognize that not only is buying a home one of the largest investments you will make in your life, but it is also one of the most stressful. We will take you through the whole buying process from the first preview of your dream home through close of escrow.</p>
                    </FadeInSection>
                  </div>
                  <FadeInSection animationClassName='fade-in-section'>
                    <CustomButton navigationLink='/buyers' title='Read More'></CustomButton>
                  </FadeInSection>
                </div>
              </div>

              <div className='buyer-behind'>
                <div className='buyer-box'>
                  <div className='title-bs'>
                    <FadeInSection animationClassName='fade-in-section'>
                      <span>For Sellers</span>
                    </FadeInSection>
                  </div>
                  <div className='desc-bs'>
                  <FadeInSection animationClassName='fade-in-section'>
                    <p>Selling your home is a big decision with its own unique challenges. At CMB Realty & Mortgage, we're here to simplify the process for you. Our experienced team will support you from assessing your property's value to closing the deal. Trust us to make your home selling journey smooth and stress-free.</p>
                  </FadeInSection>
                  </div>
                  <FadeInSection animationClassName='fade-in-section'>
                    <CustomButton navigationLink='/sellers' title='Read More'></CustomButton>
                  </FadeInSection>
                </div>

              </div>
            </div>
          </div>
        </Parallax>


        <Parallax stength={600}>
          <div className='content'>
            <div className='contact-pg'>
              <div className='contact-title'>
                <FadeInSection animationClassName='fade-in-section'>
                  <span>Contact Us!</span>
                </FadeInSection>
              </div>
              <FadeInSection animationClassName='fade-in-section'>
                <p>Exploring real estate opportunities?</p>
                <p>Whether you're considering selling, listing, mortgage options, or seeking general advice, we've got you covered.</p>
                <CustomButton navigationLink='contact' title='Click Here'></CustomButton>
              </FadeInSection>
            </div>
              <div className='behind-box'></div>
          </div>
        </Parallax>
      </div>
    </>
  );
}

export default Home;
