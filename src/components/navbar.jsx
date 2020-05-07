
import React, { Component } from "react";
// import logo from '../assets/images/logo-ap.gif'

class NavBar extends Component {
    render() {
        return (
            <header className="darkContainer" id="ap-navbar">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top nav-sec ap-fixed-nav nav-strict">
                    <div className="container">
                        {/* Brand */}
                        <span className="ap-logo">ap</span>

                        {/* Toggler/collapsibe Button */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Navbar links */}
                        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#ap-header">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#ap-about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#ap-skills">Skills</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#ap-timeline">Timeline</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#ap-testimonials">Testimonials</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#ap-extras">Extras</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

        );
    }
}

export default NavBar;