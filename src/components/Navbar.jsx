import React, { useState } from "react";
import { Link } from "react-scroll";
import "../css/Navbar.css";
import mylogo from "../assets/mylogo.jpg"
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navbar">
            <a href="#home" className="logo">
                <img src={mylogo} alt="Logo" className="navbar-logo" />
            </a>
            <div className="menu-icon" onClick={toggleMenu}>
                ☰
            </div>
            <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
                <li>
                    <Link to="home" smooth={true} duration={500} onClick={toggleMenu}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500} onClick={toggleMenu}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
                        <button className="contact-btn">Contact</button>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
