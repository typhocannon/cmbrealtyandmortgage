import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation'

import "./Slider.css"

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
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
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        spaceBetween={100}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
        >
        <SwiperSlide>
            <FadeInSection>
                <div className="span-head">Dan Tran</div>
            </FadeInSection>
            <FadeInSection>
                <img src="https://www.cmbrealtymortgage.com/images/DanTran1.jpg" alt="Dan H. Tran"/>
            </FadeInSection>
                <span>Operation Manager / Real Estate Agent</span>
        </SwiperSlide>
        <SwiperSlide>
          <FadeInSection>
          <div className="span-head">Diana Tran</div>
          </FadeInSection>
          <FadeInSection>
          <img src="https://www.cmbrealtymortgage.com/images/DianaTran.jpg" alt="Diana Thanh Thuy Tran"/>
          </FadeInSection>
          <span>Realtor / Mortgage Loan Originator</span>
        </SwiperSlide>
        <SwiperSlide>
          <FadeInSection>
          <div className="span-head">Michael Yoshihara</div>
          </FadeInSection>
        <FadeInSection>
          <img src="https://www.cmbrealtymortgage.com/images/Michael03.jpg" alt="Michael Manabu Yoshihara"/>
        </FadeInSection>
          <span>Realtor</span>
        </SwiperSlide>
        <SwiperSlide>
          <FadeInSection>
          <div className="span-head">Catherina Wong</div>
          </FadeInSection>
          <FadeInSection>
          <img src="https://www.cmbrealtymortgage.com/images/Catherina-Wong.jpg" alt="Catherina Wong"/>
          </FadeInSection>
          
          <span>Realtor</span>
        </SwiperSlide>
        <SwiperSlide>
          <FadeInSection>
              <div className="span-head">Tuong Bui</div>
          </FadeInSection>
          <FadeInSection>
              <img src="https://www.cmbrealtymortgage.com/images/TuongBui.jpg" alt="Tuong Bui"/>
          </FadeInSection>
          
          <span>Realtor</span>
        </SwiperSlide>
        <SwiperSlide>
          <FadeInSection>
              <div className="span-head">Annabelle Golden</div>
          </FadeInSection>
          <FadeInSection>
              <img src="https://www.cmbrealtymortgage.com/images/AnnabelleGoldenSmall.jpg" alt="Annabelle Golden"/>
          </FadeInSection>
          <span>Realtor / Mortgage Loan Originator</span>
        </SwiperSlide>
        <SwiperSlide>
          <FadeInSection>
            <div className="span-head">Janet Tran</div>
          </FadeInSection>
          <FadeInSection>
            <img src="https://www.cmbrealtymortgage.com/images/BlankPhoto.gif" alt="Janet Tran"/>
          </FadeInSection>
          <span>Realtor</span>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
