import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation'

import "./Slider.css"

import Christine from "../../images/christine-placeholder.jpg";
import Dan from "../../images/agents/DanTran1.jpg";
import Diana from "../../images/agents/DianaTran.jpg";
import Michael from "../../images/agents/Michael03.jpg";
import Tuong from "../../images/agents/TuongBui.jpg";
import Catherina from "../../images/agents/Catherina-Wong.jpg";
import Blank from "../../images/agents/BlankPhoto.gif";
import Annabelle from "../../images/agents/AnnabelleGoldenSmall.jpg";
import Janet from "../../images/agents/janet.jpg";

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
                <div className="span-head">Christine Bui</div>
            </FadeInSection>
            <FadeInSection>
                <img src={Christine} alt="Christine Minh Bui"/>
            </FadeInSection>
                <span>Real Estate Agent / Mortgage Broker</span>
                <span>BRE #: 01334386 | NMLS #: 256327</span>
                <span>Cell: (510) 673-5708</span>
        </SwiperSlide>
        <SwiperSlide>
            <FadeInSection>
                <div className="span-head">Dan Tran</div>
            </FadeInSection>
            <FadeInSection>
                <img src={Dan} alt="Dan H. Tran"/>
            </FadeInSection>
                <span>Operation Manager / Real Estate Agent</span>
                <span>BRE #: 01901911</span>
                <span>Cell: (408) 560-6695</span>
        </SwiperSlide>
        <SwiperSlide>
          <FadeInSection>
          <div className="span-head">Diana Tran</div>
          </FadeInSection>
          <FadeInSection>
          <img src={Diana} alt="Diana Thanh Thuy Tran"/>
          </FadeInSection>
          <span>Broker Associate</span>
          <span>BRE #: 01332809 | NMLS #: 338600</span>
          <span>Cell: (510) 827-7872</span>
        </SwiperSlide>
        <SwiperSlide>
          <FadeInSection>
          <div className="span-head">Michael Yoshihara</div>
          </FadeInSection>
        <FadeInSection>
          <img src={Michael} alt="Michael Manabu Yoshihara"/>
        </FadeInSection>
          <span>Sr. Realtor</span>
          <span>BRE #:01396017</span>
          <span>Cell: (408) 712-9259</span>
        </SwiperSlide>
        <SwiperSlide>
          <FadeInSection>
          <div className="span-head">Catherina Wong</div>
          </FadeInSection>
          <FadeInSection>
          <img src={Catherina} alt="Catherina Wong"/>
          </FadeInSection>
          <span>Realtor</span>
          <span>BRE #:01933002</span>
          <span>Cell: (916) 337-0591</span>
        </SwiperSlide>
        <SwiperSlide>
          <FadeInSection>
              <div className="span-head">Tuong Bui</div>
          </FadeInSection>
          <FadeInSection>
              <img src={Tuong} alt="Tuong Bui"/>
          </FadeInSection>
          
          <span>Realtor</span>
          <span>BRE #:00926516</span>
          <span>Cell: (408) 425-2619</span>
        </SwiperSlide>
        <SwiperSlide>
          <FadeInSection>
              <div className="span-head">Annabelle Golden</div>
          </FadeInSection>
          <FadeInSection>
              <img src={Annabelle} alt="Annabelle Golden"/>
          </FadeInSection>
          <span>Realtor / Mortgage Loan Originator</span>
          <span>BRE #: 02051093 | NMLS #: 968010</span>
          <span>Cell: (408) 334-8388  </span>
        </SwiperSlide>
        <SwiperSlide>
          <FadeInSection>
            <div className="span-head">Janet Tran</div>
          </FadeInSection>
          <FadeInSection>
            <img src={Janet} alt="Janet Tran"/>
          </FadeInSection>
          <span>Sr. Realtor / Mortgage Loan Originator</span>
          <span>BRE #: 01503182 | NMLS #: 633079</span>
          <span>(408) 858-8718</span>
        </SwiperSlide>
        <SwiperSlide>
          <FadeInSection>
            <div className="span-head">Angela Nguyen</div>
          </FadeInSection>
          <FadeInSection>
            <img src={Blank} alt="Angela"/>
          </FadeInSection>
          <span>Broker Associate</span>
          <span>BRE #: 01396020 | NMLS #: 333918</span>
          <span>Cell: (916) 833-0321</span>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
