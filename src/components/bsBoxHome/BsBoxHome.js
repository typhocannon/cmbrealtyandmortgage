import React from "react";
import FadeInSection from "../fadeinsection/FadeInSection";
import CustomButton from "../custom_button/Custom_Button";

function BsBoxHome(props) {
    return(
        <div className='bs-box'>
            <div className='bs-img-box'>
                <img src={props.imgSrc} alt='key-door' width='100%' height='100%'></img>
            </div>
            <div className='bs-box-text'>
            <div className='bs-box-header'>
                <FadeInSection animationClassName='fade-in-section'>
                    <span>{props.title}</span>
                </FadeInSection>
            </div>
            <div className='bs-box-desc'>
                <FadeInSection animationClassName='fade-in-section'>
                <p>{props.desc}</p>
                </FadeInSection>
                <CustomButton navigationLink={props.navLink} title='Read More'></CustomButton>
            </div>
            </div>
        </div>
    )
}

export default BsBoxHome