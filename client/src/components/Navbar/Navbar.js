import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">TSL</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link
                        to="/"
                        className={ 
                            window.location.pathname === "/" 
                            ? "nav-link active" : "nav-link" }
                    >
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/course"
                        className={ 
                            window.location.pathname === "/course" 
                            ? "nav-link active" : "nav-link" }
                    >
                        The Course (1L)
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/enroll"
                        className={ 
                            window.location.pathname === "/" 
                            ? "nav-link active" : "nav-link" }
                    >
                        Enroll
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;
