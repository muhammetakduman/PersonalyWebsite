import React from "react";
import { TypeAnimation } from "react-type-animation";
import "../css/Home.css";
import myPhoto from "../assets/myfoto.jpg";

function Home() {
    return (
        <div id="home" className="hero-section">
            <div className="hero-image">
                <img src={myPhoto} alt="Muhammet Akduman" className="my-photo"></img>
                <div className="image-placeholder"></div>
            </div>
            <div className="hero-text">
                <h1>
                    <TypeAnimation
                        sequence={[
                            "I am a Full-Stack Developer",
                            2000,
                            "I love building innovative projects!",
                            2000,
                            "I strive for excellence in coding!",
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
                <p>
                    <br />
                    I am a passionate developer with hands-on experience in various web technologies, including HTML, CSS, Tailwind, Material-UI, Bootstrap, JavaScript, React, Next.js, and Redux. Through numerous projects, I have honed my skills and continually strive to push my boundaries in frontend development. On the backend, I have worked extensively with Python frameworks such as Django and Flask, building robust and efficient applications. Additionally, I am exploring Java and expanding my expertise in Spring Boot technology.
                    <br />
                    <br />
                    In terms of databases, I have utilized MSSQL, MySQL, and SQLite in my projects, ensuring seamless data management and integration. My journey in programming began during my studies in Geomatics Engineering at Gebze Technical University, where I was introduced to software development through Geographic Information Systems (GIS) courses. This foundation sparked my interest in coding, which has now become a significant part of my career aspirations.
                    <br />
                    <br />
                    I am eager to continue learning and contributing to innovative projects that leverage my skills and drive for technological excellence.
                </p>
            </div>
        </div>
    );
}

export default Home;
