import React from "react";
import FadeInSection from "../fadeinsection/FadeInSection";
function BuyerItem(props) {
    return(
        <FadeInSection animationClassName="fade-in-section">
            <div className="col-item">
                {props.materialUIAsset}
                <p>{props.description}</p>
            </div>
        </FadeInSection>
    )
}

export default BuyerItem