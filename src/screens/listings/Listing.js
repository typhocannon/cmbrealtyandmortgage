import React from "react";
import { Parallax } from "react-parallax";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import ImageBoard2 from "../../components/imageBoard2/imageBoard2";
import FadeInSection from "../../components/fadeinsection/FadeInSection";
import CustomButton from "../../components/custom_button/Custom_Button";
import Footer from "../../components/footer/Footer";
import ListingItem from "../../components/listingItem/ListingItem";
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

    const houses = [
        {imgs: house1_imgs, name: "2338 Shade Tree Lane, San Jose, CA 95131", price: "$1,148,000", MLSlink: 'https://www.mlslistings.com/property/ml81773783/2338-shade-tree-ln-san-jose-ca-95131', MLSnum: "ML81773783", status: "Sale Pending", size: "1,769", bed: "4", bath: "2", year: "1974"},
        {imgs: house2_imgs, name: "4374 Ribera St., Fremont, CA 94536", price: "$959,999", MLSlink: 'https://www.mlslistings.com/Property/ML81771188/4374-ribera-st-fremont-ca-94536', MLSnum: "ML81773783", status: "Sale Pending", size: "1,256", bed: "3", bath: "2", year:"1967"},
        {imgs: house3_imgs, name: "1919 Perrone Cir, San Jose, CA 95116", price: "$725,000", MLSlink: 'n/a', MLSnum: 'ML81738746', status: 'Sold', size: '1,306', bed: '3', bath: '2', year: '1982'},
        {imgs: house4_imgs, name: "480 Dempsey Rd #182, Milpitas, CA 95035", price: "$420,000", MLSlink: 'n/a', MLSnum: 'ML81717062', status: 'Sold', size: '676', bed: '1', bath: '1', year: '2007'},
        {imgs: house5_imgs, name: "4619 Capay Dr #1, San Jose, CA 95118", price: "$460,000", MLSlink: 'n/a', MLSnum: 'ML81759095', status: 'Sold', size: '810', bed: '2', bath: '1', year:'1970' },
        {imgs: house6_imgs, name: "97 Alexander Ct, San Jose, CA 95116", price: "$725,000", MLSlink: 'n/a', MLSnum: 'ML81748847', status: 'Sold', size: '1,240', bed: '3', bath: '1', year: '1946'},
         
    ]

    const houseList = houses.map((house) => (
        <SwiperSlide key={house.name}>
          <ListingItem
            name={house.name}
            imgs={house.imgs}
            MLSlink={house.MLSlink}
            MLSnum={house.MLSnum}
            status={house.status}
            size={house.size}
            bed={house.bed}
            bath={house.bath}
            year={house.year}
            key={house.name}
          />
        </SwiperSlide>
      ));
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
                    {houseList}
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