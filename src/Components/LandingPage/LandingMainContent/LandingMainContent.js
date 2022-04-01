import React from "react";
import GetStarted from "../GetStartedForm/GetStarted";
import "./LandingMainContent.css";
function LandingMainContent() {
  return (
   <div id="landing-pg-mc">
      <div className="our-story-card-text container">
        <h1 className="our-story-card-title col-10 col-md-6">
          Unlimited movies, TV shows and more.
        </h1>
        <h3 className="our-story-card-subtitle col-12 col-md-6 text-center ">
          {" "}
          Watch anywhere. Cancel anytime.
        </h3>
        <GetStarted />
      </div>
      </div>
  );
}

export default LandingMainContent;
