import React from "react";
import FadeInSection from "../fadeinsection/FadeInSection";

function AgentContact(props) {
    return(
        <FadeInSection animationClassName="fade-in-section">
            <div className="agent-box">
                <div className="agent-img">
                    <img src={props.imgSrc} alt={props.name} width="200px"></img>
                    <div className="agent-texts">
                        <h2>{props.name}</h2>
                        <p>{props.title}</p>
                        <br></br>
                        <p>{props.office}</p>
                        <p>{props.fax}</p>
                        <p>{props.cell}</p>
                        <p>{props.email}</p>
                    </div>
                </div>
            </div>
        </FadeInSection>
    )
}

export default AgentContact