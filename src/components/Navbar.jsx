import React, { useState } from "react";
import "../css/Navbar.css";
import mylogo from "../assets/mylogo.jpg";

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
                    <a href="#home" onClick={toggleMenu}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#work" onClick={toggleMenu}>
                        Work
                    </a>
                </li>
                <li>
                    <a href="#skills" onClick={toggleMenu}>
                        Skills
                    </a>
                </li>
                <li>
                    <a href="#contact" onClick={toggleMenu}>
                        <button className="contact-btn">Contact</button>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
