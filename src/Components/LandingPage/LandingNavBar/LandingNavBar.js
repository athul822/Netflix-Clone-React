import React from "react";
import "./LandingNavBar.css";
import { useNavigate } from "react-router-dom";

export const LangDropDown = () => {
    return (
        <select className="dropdown-bar"  name="lang" id="lang">
            <option value="">English</option>
            <option value="">Hindi</option>
        </select>
    );
};

function LandingNavBar() {
    const navigate = useNavigate();
    return (
        <nav className="nav position-absolute justify-content-between align-items-start p-2 ml-2 mt-2" id="navbar">
            <div className="col-3 col-md-1">
                <img
                    className="ml-3 mt-3 ml-md-6"
                    id="netflix-logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                    alt="netflix-logo"
                />
            </div>
            <div className="right-nav-el col-md-2 justify-self-end">
                <LangDropDown />
                <button
                    className="sign-in-btn btn btn-dangerous"
                    onClick={() => {
                        navigate("/login");
                    }}
                >
                    Sign In
                </button>
            </div>
        </nav>
    );
}

export default LandingNavBar;
