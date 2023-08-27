import React from 'react';

import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { Button, Fade } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider, ImageList, ImageListItem } from '@mui/material';
import Typed from 'typed.js'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Home.css';

import ImageBoard from '../imgBoard/ImgBoard';
import Slider from '../slider/Slider';
import Ham_Button from '../ham_button/Ham_Button';

import MilpitasSunset from '../../images/milpitas-sunset.png';
import Mother from '../../images/christine-placeholder.jpg';
import milpitas from '../../images/milpitas.png';

function Home() {

  function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
      // return () => observer.unobserve(domRef.current);
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }

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

  const navigate = useNavigate();

  const theme = createTheme({
    typography: {
      fontFamily: "Cambria, Cochin, Georgia, 'Times New Roman', Times, serif",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
      <div className="App">
        <Ham_Button/>
      <Parallax strength={-300}  bgImage={MilpitasSunset} backgroundSize="contain">
          <div className="firstpage">
            <div className="content">
              <div className="text-container">
                <FadeInSection>
                  <motion.div
                    className="front-text"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    >
                    <span className="capital"> C</span>hristine <span className='capital'>M</span>inh <span className='capital'>B</span>ui
                  </motion.div>
                </FadeInSection>

                <FadeInSection>
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
                  <FadeInSection>
                    <img src={Mother} width="650" height="750"></img>
                  </FadeInSection>
                  </div>
                  <div className="text-box">
                    <div className="header">
                      <FadeInSection>
                        <span>Meet the <span ref={el}></span></span>
                      </FadeInSection>
                    </div>
                    <div className="text-box-body">
                      <FadeInSection>
                        <span>Hello! Thanks for visiting.</span>
                        <br></br>
                        <br></br>
                        <span>My name is Christine Bui and let me be the first to introduce you to CMB Realty & Mortgage. We are a full service real estate and mortgage brokerage firm where Buyers and Sellers are represented fairly, professionally and with attention to detail.</span>
                        <br></br>
                        <br></br>
                        <span>This website is designed to be your complete Real Estate resource. It has been built to assist you with all your needs. Our agents are always available to offer you personal and one-on-one assistant throughout the whole process. Our goal is to provide you the best service possible, and to help you make the right choices in your real estate transactions.</span>
                      </FadeInSection>
                    </div>
                    <FadeInSection>
                      <Button variant="outlined" sx={{':hover': { bgcolor:  'rgb(194, 161, 63)', color:'white',},}} color="inherit" size="large" onClick={() => {window.scrollTo(0, 0); return navigate('/about');}}>Read More</Button> 
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
                  <FadeInSection>
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
            <FadeInSection>
              <span>Featured Listing</span>
            </FadeInSection>
            </div>
            <div className='house'>
              <div className='img-box'>
                <FadeInSection>
                  <ImageBoard></ImageBoard>
                </FadeInSection>
              </div>
              <div className='img-d'>
                <FadeInSection>
                  <span>97 E Saint James St #47 </span>
                  <br></br>
                  <span>San Jose, CA 95112</span>
                </FadeInSection>
                <FadeInSection>
                  <div className='mls-box'>
                    <p>MLS#: <a href='https://www.mlslistings.com/property/ml81773572/97-e-saint-james-st-47-san-jose-ca-95112'>ML81773572</a> | SqFt: 1,203 | Bedrooms: 2 | Bathrooms: 2</p>
                  </div>
                </FadeInSection>
                <div className='desc-b'>
                  <FadeInSection>
                    <p>Experience downtown living at its finest in this sleek end unit. Spacious rooms, recent remodeling, and easy access to the heart of the city and the Light Rail station. Thriving community, great neighbors, and exciting growth on the horizon. Your urban oasis awaits!</p>
                  </FadeInSection>
                </div>
                <FadeInSection>
                  <Button variant="outlined" sx={{ ':hover': { bgcolor:  'rgb(194, 161, 63)', color:'white',},}} color="inherit" size="large" onClick={() => {window.scrollTo(0, 0); return navigate('/listings');}}>View More Listings</Button> 
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
                  <span>Buyers</span>
                </div>
              </div>

              </div>
              <div className='buyer-behind'>
                <div className='buyer-box'>
                  <div className='title-bs'>
                      <span>Sellers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Parallax>


        <Parallax stength={600}>
          <div className='content'>
            <div className='contact-pg'>
              <div className='contact-title'>
                <FadeInSection>
                  <span>Contact Us!</span>
                </FadeInSection>
              </div>
              <FadeInSection>
                <p>Exploring real estate opportunities?</p>
                <p>Whether you're considering selling, listing, mortgage options, or seeking general advice, we've got you covered.</p>
                <Button variant="outlined" sx={{':hover': { bgcolor:  'rgb(194, 161, 63)', color:'white',},}} color="inherit" size="large" onClick={() => {window.scrollTo(0, 0); return navigate('/contact');}}>Click Here</Button> 
              </FadeInSection>
            </div>
              <div className='behind-box'></div>
          </div>
        </Parallax>
      </div>
      </ThemeProvider>
    </>
  );
}

export default Home;
