import React from "react";
import FadeInSection from "../fadeinsection/FadeInSection";

function SliderItem(props) {
    return(
        <>
            <FadeInSection animationClassName="fade-in-section">
                <div className="span-head">{props.name}</div>
            </FadeInSection>
            <FadeInSection animationClassName="fade-in-section">
                <img src={props.imgSrc} alt={props.name}/>
            </FadeInSection>
            <div className="slider-body">
                <span>{props.title}</span>
                <span>{props.mortId}</span>
                <span>{props.contact}</span>
            </div>
        </>
    )
}

export default SliderItem