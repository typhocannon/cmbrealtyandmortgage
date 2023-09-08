import React from "react";
import CustomButton from "../custom_button/Custom_Button";
import FadeInSection from "../fadeinsection/FadeInSection";

function ServiceBox(props) {
    return(
        <div className="service-box">
            <FadeInSection animationClassName="fade-in-section">
                {props.materialUI}
                <h1>{props.header}</h1>
                <p>{props.desc}</p>
                <CustomButton navigationLink={props.navLink} title="Read More"></CustomButton>
            </FadeInSection>
        </div>
    )
}

export default ServiceBox;