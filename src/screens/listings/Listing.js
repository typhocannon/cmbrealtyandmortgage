import React from "react";
import { Parallax } from "react-parallax";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import ImageBoard2 from "../../components/imageBoard2/imageBoard2";
import FadeInSection from "../../components/fadeinsection/FadeInSection";
import CustomButton from "../../components/custom_button/Custom_Button";
import Footer from "../../components/footer/Footer";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Listing.css'

import house1_f from '../../images/houses/house1/front.jpg';
import house1_k from '../../images/houses/house1/kitchen.jpg';
import house1_lv from '../../images/houses/house1/livingroom.jpg';

import house2_f from '../../images/houses/house2/fronth2.jpg';
import house2_k from '../../images/houses/house2/kitchenh2.jpg';
import house2_b from '../../images/houses/house2/backyardh2.jpg';

import house3_f from '../../images/houses/house3/house3f.jpg';
import house3_b from '../../images/houses/house3/bedroomh3.png';
import house3_lv from '../../images/houses/house3/livingroomh3.png';

import house4_f from '../../images/houses/house4/fronth4.jpg';
import house4_b from '../../images/houses/house4/outh4.jpg';
import house4_m from '../../images/houses/house4/maph4.png';

import house5_f from '../../images/houses/house5/fronth5.jpg';
import house5_l from '../../images/houses/house5/kitchenh5.jpg';
import house5_k from '../../images/houses/house5/kitchenfrh5.jpg';

import house6_f from '../../images/houses/house6/fronth6.png';
import house6_k from '../../images/houses/house6/kitchenh6.png';
import house6_b from '../../images/houses/house6/backh6.png';

import map from '../../images/googlemaps.png';
const Listing = () => {
    
    const house1_imgs = [
        {src: house1_f},
        {src: house1_k},
        {src: house1_lv}
    ]
    const house2_imgs = [
        {src: house2_f},
        {src: house2_k},
        {src: house2_b}
    ]
    const house3_imgs = [
        {src: house3_f},
        {src: house3_lv},
        {src: house3_b}
    ]
    const house4_imgs = [
        {src: house4_f},
        {src: house4_b},
        {src: house4_m}
    ]
    const house5_imgs = [
        {src: house5_f},
        {src: house5_k},
        {src: house5_l}
    ]
    const house6_imgs = [
        {src: house6_f},
        {src: house6_k},
        {src: house6_b}
    ]

    return (
        <>
        <Parallax>
            <div className="list-page">
                <div className="content">
                    <div className="title-list">
                        <FadeInSection animationClassName="fade-in-section">
                            <h1>Current Listings</h1>
                        </FadeInSection>
                    </div>
            
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    navigation={true}
                    pagination={true}
                    className="listingSwiper"
                    >
                    <SwiperSlide>
                        <div className="list-img">
                            <FadeInSection animationClassName="fade-in-section2">
                                <ImageBoard2 images={house1_imgs}/>
                            </FadeInSection>
                        </div>
                        <div className="list-desc">
                            <FadeInSection animationClassName="fade-in-section2">
                            <h1>2338 Shade Tree Lane, San Jose, CA 95131</h1>
                            <h1>$1,148,000</h1>
                            </FadeInSection>
                            <div className="list-desc-row">
                            <FadeInSection animationClassName="fade-in-section2">
                                <p>MLS #:<a href='https://www.mlslistings.com/property/ml81773783/2338-shade-tree-ln-san-jose-ca-95131'>ML81773783</a></p>
                                <p>Sq Ft: 1,769</p>
                                <p>Status: <em>Sale Pending</em> </p>
                            </FadeInSection>
                            </div>
                            <div className="list-desc-row">
                            <FadeInSection animationClassName="fade-in-section2">
                                <p>Bedroom: 4</p>
                                <p>Bathroom: 2</p>
                                <p>Year Built: 1974</p>
                            </FadeInSection>
                            </div>
                            <FadeInSection animationClassName="fade-in-section2">
                                <h2>Listed by CMB Realty & Mortgage</h2>
                            </FadeInSection>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="list-img">
                        <FadeInSection animationClassName="fade-in-section2">
                            <ImageBoard2 images={house2_imgs}/>
                        </FadeInSection>
                        </div>
                        <div className="list-desc">
                        <FadeInSection animationClassName="fade-in-section2">
                            <h1>4374 Ribera St., Fremont, CA 94536</h1>
                            <h1>$959,999</h1>
                        </FadeInSection>
                            <div className="list-desc-row">                        
                        <FadeInSection animationClassName="fade-in-section2">
                                <p>MLS #:<a href='https://www.mlslistings.com/Property/ML81771188/4374-ribera-st-fremont-ca-94536'>ML81773783</a></p>
                                <p>Sq Ft: 1,256</p>
                                <p>Status: <em>Sale Pending</em> </p>
                            </FadeInSection>
                            </div>
                            <div className="list-desc-row">
                            <FadeInSection animationClassName="fade-in-section2">
                                <p>Bedroom: 3</p>
                                <p>Bathroom: 2</p>
                                <p>Year Built: 1967</p>
                            </FadeInSection>
                            </div>
                        <FadeInSection animationClassName="fade-in-section2">
                            <h2>Listed by CMB Realty & Mortgage</h2>
                        </FadeInSection>
                        
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="list-img">
                        <FadeInSection animationClassName="fade-in-section2">
                            <ImageBoard2 images={house3_imgs}/>
                        </FadeInSection>
                        </div>
                        <div className="list-desc">
                        <FadeInSection animationClassName="fade-in-section2">
                            <h1>1919 Perrone Cir, San Jose, CA 95116</h1>
                            <h1>$725,000</h1>
                        </FadeInSection>
                            <div className="list-desc-row">
                            <FadeInSection animationClassName="fade-in-section2">
                                <p>MLS #: ML81738746</p>
                                <p>Sq Ft: 1,306</p>
                                <p>Status: Sold</p>
                            </FadeInSection>
                            </div>
                            <div className="list-desc-row">
                            <FadeInSection animationClassName="fade-in-section2">
                                <p>Bedroom: 3</p>
                                <p>Bathroom: 2</p>
                                <p>Year Built: 1982</p>
                            </FadeInSection>
                            </div>
                        <FadeInSection animationClassName="fade-in-section2">
                            <h2>Listed by CMB Realty & Mortgage</h2>
                        </FadeInSection>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="list-img">
                        <FadeInSection animationClassName="fade-in-section2">
                            <ImageBoard2 images={house4_imgs}/>
                        </FadeInSection>
                        </div>
                        <div className="list-desc">
                        <FadeInSection animationClassName="fade-in-section2">
                            <h1>480 Dempsey Rd #182, Milpitas, CA 95035</h1>
                            <h1>$420,000</h1>
                        </FadeInSection>
                            <div className="list-desc-row">
                            <FadeInSection animationClassName="fade-in-section2">
                                <p>MLS #: ML81717062</p>
                                <p>Sq Ft: 676</p>
                                <p>Status: Sold</p>
                            </FadeInSection>
                            </div>
                            <div className="list-desc-row">
                            <FadeInSection animationClassName="fade-in-section2">
                                <p>Bedroom: 1</p>
                                <p>Bathroom: 1</p>
                                <p>Year Built: 2007</p>
                            </FadeInSection>
                            </div>
                            <FadeInSection animationClassName="fade-in-section2">
                                <h2>Listed by CMB Realty & Mortgage</h2>
                            </FadeInSection>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="list-img">
                        <FadeInSection animationClassName="fade-in-section2">
                            <ImageBoard2 images={house5_imgs}/>
                        </FadeInSection>
                        </div>
                        <div className="list-desc">
                        <FadeInSection animationClassName="fade-in-section2">
                            <h1>4619 Capay Dr #1, San Jose, CA 95118</h1>
                            <h1>$460,000</h1>
                        </FadeInSection>
                            <div className="list-desc-row">
                            <FadeInSection animationClassName="fade-in-section2">
                                <p>MLS #: ML81759095</p>
                                <p>Sq Ft: 810</p>
                                <p>Status: Sold</p>
                            </FadeInSection>
                            </div>
                            <div className="list-desc-row">
                            <FadeInSection animationClassName="fade-in-section2">
                                <p>Bedroom: 2</p>
                                <p>Bathroom: 1</p>
                                <p>Year Built: 1970</p>
                            </FadeInSection>
                            </div>
                            <FadeInSection animationClassName="fade-in-section2">
                                <h2>Listed by CMB Realty & Mortgage</h2>
                            </FadeInSection>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="list-img">
                        <FadeInSection animationClassName="fade-in-section2">
                            <ImageBoard2 images={house6_imgs}/>
                         </FadeInSection>
                        </div>
                        <div className="list-desc">
                        <FadeInSection animationClassName="fade-in-section2">
                            <h1>97 Alexander Ct, San Jose, CA 95116</h1>
                            <h1>$725,000</h1>
                        </FadeInSection>
                            <div className="list-desc-row">
                            <FadeInSection animationClassName="fade-in-section2">
                                <p>MLS #: ML81748847</p>
                                <p>Sq Ft: 1,240</p>
                                <p>Status: Sold</p>
                            </FadeInSection>
                            </div>
                            <div className="list-desc-row">
                            <FadeInSection animationClassName="fade-in-section2">
                                <p>Bedroom: 3</p>
                                <p>Bathroom: 1</p>
                                <p>Year Built: 1946</p>
                            </FadeInSection>
                            </div>
                            <FadeInSection animationClassName="fade-in-section2">
                                <h2>Listed by CMB Realty & Mortgage</h2>
                            </FadeInSection>
                        
                        </div>
                    </SwiperSlide>
                </Swiper>
                </div>
            </div>
        </Parallax>
        
        <Parallax strength={600} bgImage={map}>
            <div className="content">
                <div className="q-box2">
                    <FadeInSection animationClassName="fade-in-section">
                        <h1>Exploring different housing options?</h1>
                        <p>Browse the diverse range of listings on the <a href='https://www.mlslistings.com/'>MLS Listings Site</a> and then reach out to us!</p>
                        <CustomButton navigationLink="/contact" title='Contact Us'/>
                    </FadeInSection>
                </div>
            </div>
        </Parallax>
        <Footer/>
        </>
    )
}

export default Listing;