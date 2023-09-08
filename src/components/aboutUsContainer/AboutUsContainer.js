import React from "react";
import FadeInSection from "../fadeinsection/FadeInSection";

function AboutUsContainer(props) {
    return(
        <div className="container-row">
            <FadeInSection animationClassName="fade-in-section2">
            {props.materialUI}
            </FadeInSection>
            <div className="container-textbox">
            <FadeInSection animationClassName="fade-in-section2">
                <h2>{props.header}</h2>
                <p>{props.desc}</p>
            </FadeInSection>
            </div>
        </div>
    )
}

export default AboutUsContainer;