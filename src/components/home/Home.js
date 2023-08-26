import React from 'react';

import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { Button, Fade } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import Typed from 'typed.js'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Home.css';

import { Pagination, Navigation } from 'swiper/modules';
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
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
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
                <img src={milpitas}></img>
              </div>
              <div className='img-d'>
                <span>Hello</span>
              </div>
            </div>
          </div>

        </Parallax>

        <Parallax strength={600}>
          <div className='content'>Buyers | Sellers</div>
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
                <Button variant="outlined" sx={{':hover': { bgcolor:  'rgb(194, 161, 63)', color:'white',},}} color="inherit" size="large" onClick={() => {window.scrollTo(0, 0); return navigate('/about');}}>Click Here</Button> 
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
