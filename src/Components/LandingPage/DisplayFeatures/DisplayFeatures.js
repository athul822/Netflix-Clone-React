import React from "react";
import "./DisplayFeatures.css";
const DisplayFeatText = (props) => {
    return (
        <div className="feat-card-text-container col-12 col-md-6 text-center mt-3">
            <h1 className="feat-card-title">{props.title}</h1>
            <h3>{props.sub_title}</h3>
        </div>
    );
};
const DisplayFeatImg = (props) => {
    return (
        <div
            className="feat-card-img-container col-12 col-md-6 mt-1 "
            style={props.felx ? { justifyContent: "start" } : { justifyContent: "end" }}
        >
            <img className="feat-card-img" src={props.img} alt="" />
        </div>
    );
};

const DisplayFeatures = ({ title, subtitle, img, isRev }) => {
    //console.log(isRev)
    return (
        <div className="feat-card-section">
            <div className="row container">
                <div className={isRev ? `row feat-card-container flex-reverse` : `row feat-card-container`}>
                    <DisplayFeatText title={title} sub_title={subtitle} />
                    <DisplayFeatImg img={img} felx={isRev ? true : false} />
                </div>
            </div>
        </div>
    );
};

export default DisplayFeatures;
