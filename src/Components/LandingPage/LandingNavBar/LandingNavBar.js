import React from "react";
import "./LandingNavBar.css";
function LandingNavBar() {
  return (
    <div id="navbar">
      <img
        id="netflix-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="netflix-logo"
      />
      <div className="right-nav-el">
        <select className="dropdown-bar" name="lang" id="lang">
          <option value="">English</option>
          <option value="">Hindi</option>
        </select>
        <button className="sign-in-btn">Sign In</button>
      </div>
    </div>
  );
}

export default LandingNavBar;
