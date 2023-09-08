import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation'

import "./Slider.css"
import SliderItem from '../SliderItem/SliderItem';

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
  const DATA = [
    {name:"Christine Bui", imgSrc:Christine, title:"Real Estate Agent / Mortgage Broker", mortId:"BRE #: 01334386 | NMLS #: 256327", contact:"Cell: (510) 674-5708"},
    {name:"Dan Tran", imgSrc:Dan, title:"Operation Manager / Real Estate Agent", mortId:"BRE #: 01901911", contact:"Cell: (408) 560-6695"},
    {name:"Diana Tran", imgSrc:Diana, title:"Broker Associate", mortId:"BRE #: 01332809 | NMLS #: 338600", contact:"Cell: (510) 827-7872"},
    {name:"Michael Yoshihara", imgSrc:Michael, title:"Sr. Realtor", mortId:"BRE #:01396017", contact:"Cell: (408) 712-9259"},
    {name:"Catherina Wong", imgSrc:Catherina, title:"Realtor", mortId:"BRE #:01933002", contact:"Cell: (916) 337-0591"},
    {name: "Tuong Bui", imgSrc:Tuong, title:"Realtor", mortId: "BRE #:00926516", contact:"Cell: (408) 425-2619"},
    {name: "Annabelle Golden", imgSrc:Annabelle, title:"Realtor / Mortgage Loan Originator", mortId:"BRE #: 02051093 | NMLS #: 968010", contact:"Cell: (408) 334-8388"},
    {name: "Janet Tran", imgSrc:Janet, title:"Sr. Realtor / Mortgage Loan Originator", mortId: "BRE #: 01503182 | NMLS #: 633079", contact:"(408) 858-8718"},
    {name:"Angela Nguyen", imgSrc:Blank, title:"Broker Associate", mortId:"BRE #: 01396020 | NMLS #: 333918", contact:"Cell: (916) 833-0321"},
  ]

  const agentList = DATA.map((agent) => (
    <SwiperSlide key={agent.name}>
      <SliderItem
        name={agent.name}
        imgSrc={agent.imgSrc}
        title={agent.title}
        mortId={agent.mortId}
        contact={agent.contact}
        key={agent.name}
      />
    </SwiperSlide>
  ));

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
          {agentList}
      </Swiper>
    </>
  );
}

export default Slider;