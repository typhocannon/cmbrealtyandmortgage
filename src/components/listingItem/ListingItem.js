import React from "react";
import FadeInSection from "../fadeinsection/FadeInSection";
import ImageBoard2 from "../imageBoard2/imageBoard2";

function ListingItem(props) {
    return(
        <>
        <div className="list-img">
            <FadeInSection animationClassName="fade-in-section2">
                <ImageBoard2 images={props.imgs}/>
            </FadeInSection>
        </div>

        <div className="list-desc">
            <FadeInSection animationClassName="fade-in-section2">
            <h1>{props.name}</h1>
            <h1>{props.price}</h1>
            </FadeInSection>
            <div className="list-desc-row">
            <FadeInSection animationClassName="fade-in-section2">
                <p>MLS #:  
                {props.MLSlink !== 'n/a' ? (
                    <a href={props.MLSlink}>{props.MLSnum}</a>) : 
                    (props.MLSnum)}
                </p>
                <p>Sq Ft: {props.size}</p>
                <p>Status: {props.status === "Sale Pending" ? <em>{props.status}</em> : props.status}</p>
            </FadeInSection>
            </div>
            <div className="list-desc-row">
            <FadeInSection animationClassName="fade-in-section2">
                <p>Bedroom: {props.bed}</p>
                <p>Bathroom: {props.bath}</p>
                <p>Year Built: {props.year}</p>
            </FadeInSection>
            </div>
            <FadeInSection animationClassName="fade-in-section2">
                <h2>Listed by CMB Realty & Mortgage</h2>
            </FadeInSection>
        </div>
        </>
    )
}

export default ListingItem