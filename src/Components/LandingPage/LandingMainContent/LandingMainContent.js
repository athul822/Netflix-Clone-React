import React from "react";
import GetStarted from "../GetStartedForm/GetStarted";
import "./LandingMainContent.css";
function LandingMainContent() {
  return (
    <div id="landing-pg-mc">
      <div className="our-story-card-text">
        <h1 className="our-story-card-title">
          Unlimited movies, TV shows and more.
        </h1>
        <h2 className="our-story-card-subtitle">
          {" "}
          Watch anywhere. Cancel anytime.
        </h2>
        <GetStarted />
      
      </div>
    </div>
  );
}

export default LandingMainContent;
