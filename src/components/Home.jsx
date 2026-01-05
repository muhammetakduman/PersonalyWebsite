import React, { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import "../css/Home.css";
import myPhoto from "../assets/myfoto.jpg";
import { useLanguage } from "../context/LanguageContext";
import gsap from "gsap";

function Home() {
    const { t } = useLanguage();
    const imageRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(imageRef.current,
            { opacity: 0, scale: 0.5, rotation: -10 },
            { opacity: 1, scale: 1, rotation: 0, duration: 1.5, ease: "elastic.out(1, 0.5)" }
        );
    }, []);

    return (
        <div id="home" className="hero-section">
            <div className="hero-image">
                <img ref={imageRef} src={myPhoto} alt="Muhammet Akduman" className="my-photo"></img>
            </div>
            <div className="hero-text">
                <h1>
                    <TypeAnimation
                        key={t.home.typeAnimation[0]} // Force re-render on language change
                        sequence={[
                            t.home.typeAnimation[0],
                            2000,
                            t.home.typeAnimation[1],
                            2000,
                            t.home.typeAnimation[2],
                            2000,
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{
                            fontSize: "2rem",
                            fontWeight: "bold",
                            display: "inline-block",
                        }}
                    />
                </h1>
                <p className="textId">
                    <br />
                    {t.home.description}
                </p>
            </div>
        </div>
    );
}

export default Home;