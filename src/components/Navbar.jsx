import React, { useState } from "react";
import { Link } from "react-scroll";
import "../css/Navbar.css";
import mylogo from "../assets/mylogo.jpg";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();

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
                        {t.navbar.home}
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500} onClick={toggleMenu}>
                        {t.navbar.work}
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500} onClick={toggleMenu}>
                        {t.navbar.skills}
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
                        <button className="contact-btn">{t.navbar.contact}</button>
                    </Link>
                </li>
                <li>
                    <button
                        onClick={toggleLanguage}
                        style={{
                            background: 'transparent',
                            border: '1px solid white',
                            color: 'white',
                            padding: '5px 10px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            marginLeft: '10px',
                            fontWeight: 'bold'
                        }}
                    >
                        {language === 'en' ? 'TR' : 'EN'}
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
