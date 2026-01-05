import React, { useEffect, useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import gsap from "gsap";
import { useLanguage } from "../context/LanguageContext";

function ProjectCard({ project }) {
    const cardRef = useRef(null);
    const { t } = useLanguage();

    useEffect(() => {
        gsap.fromTo(cardRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        );
    }, []);

    const handleMouseEnter = () => {
        gsap.to(cardRef.current, { scale: 1.05, duration: 0.3, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
        gsap.to(cardRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
    };

    return (
        <Card
            ref={cardRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
                maxWidth: 300,
                width: '100%', // Ensure it takes full width of grid item
                margin: 2,
                backgroundColor: '',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 450, // Increased minHeight for better consistency with longer content
                height: '100%', // Fill the flex container
                borderRadius: '20px',
                boxShadow: '0px 4px 10px rgba(141, 163, 91, 0.5)',
                color: '#ffffff',
                cursor: 'pointer'
            }}
        >
            <CardMedia
                sx={{ backgroundColor: 'black', color: 'white' }}
                component="img"
                height="150"
                image={project.image}
                alt={project.name}
            />
            <CardContent
                sx={{
                    backgroundColor: '#1e1e2f',
                    color: 'white',
                    flexGrow: 1,
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                }}
            >
                <Typography variant="h6" sx={{ fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', fontWeight: 'bold' }}>
                    {project.name}
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', marginTop: 2 }}>
                    {project.description}
                </Typography>
                {project.additionalInfo && (
                    <Typography variant="body2" sx={{ fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', marginTop: 1, fontStyle: 'italic', opacity: 0.8 }}>
                        {project.additionalInfo}
                    </Typography>
                )}
                <Typography variant="body2" sx={{ fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', marginTop: 1 }}>
                    <b>{t.work.techUsed}</b> {project.techologies}
                </Typography>
            </CardContent>
            <CardActions sx={{ backgroundColor: '#1e1e2f' }}>
                <Button
                    size="small"
                    color="info"
                    href={project.domain}
                    variant="outlined"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        marginTop: 0,
                        backgroundColor: '#1e1e2f',
                        color: 'white',
                        '&:hover': { backgroundColor: '#333', color: 'white' },
                        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    }}
                >
                    {t.work.seeProject}
                </Button>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;
