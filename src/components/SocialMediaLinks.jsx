import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const SocialMediaLinks = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (!isMobile) {

            setIsVisible(true);
            return;
        }


        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isMobile]);

    const socialLinks = [
        { name: "LinkedIn", icon: <LinkedInIcon />, url: "https://www.linkedin.com/in/muhammetakduman/" },
        { name: "GitHub", icon: <GitHubIcon />, url: "https://github.com/muhammetakduman" },
        { name: "Instagram", icon: <InstagramIcon />, url: "https://www.instagram.com/mamiakdmn/" },
        { name: "Email", icon: <MailOutlineIcon />, url: "mailto:akdumanmuhammet34@gmail.com" },
    ];

    return (
        <Box
            sx={{
                position: "fixed",
                left: 0,
                top: "20%",
                display: isVisible ? "flex" : "none",
                flexDirection: "column",
                gap: 2,
                padding: 1,
            }}
        >
            {socialLinks.map((link) => (
                <Button
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    sx={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#f5f5f5",
                        color: "#333",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "transform 0.3s ease,background-color 0.3s ease",
                        "&:hover": {
                            transform: "scale(1.2)",
                            backgroundColor: "#e0e0e0",
                        },
                    }}
                >
                    {link.icon}
                </Button>
            ))}
        </Box>
    );
};

export default SocialMediaLinks;
