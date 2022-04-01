import React from "react";
import "../Fontawsome";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function NavBar() {
    return (
        <nav className="navbar row">
            <img 
                className="netflix-logo col-1"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                alt="netflix-logo"
            />
            <div className="nav-bar-avatar col-10">
                <div className="navigation-bar ">
                    <ul className="nav-lists">
                        <li className="nav-list-item">
                            <a className="nav-list-link active-nav-link" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-list-item">
                            <a className="nav-list-link" href="#">
                                TV Shows
                            </a>
                        </li>
                        <li className="nav-list-item" id="item">
                            <a className="nav-list-link" href="#">
                                Movies
                            </a>
                        </li>
                        <li className="nav-list-item">
                            <a className="nav-list-link" href="#">
                                New & Popular
                            </a>
                        </li>
                        <li className="nav-list-item">
                            <a className="nav-list-link" href="#">
                                My list
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="right-navbar">
                    <span className="fa-icons">
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="icon" />
                    </span>
                    <span className="fa-icons">
                        <FontAwesomeIcon icon="bell" className="icon" />
                    </span>
                    <img
                        className="avatar-image"
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt="avatar-image"
                    />
                    <span className="fa-icons">
                        <FontAwesomeIcon icon="fa-solid fa-caret-down" />
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
