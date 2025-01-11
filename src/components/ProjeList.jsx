import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"; // Material-UI Grid
import ProjectCard from "./ProjectCard";
import projects from "../data/ProjeData";

function ProjectList() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 650); // Ekran genişliği 600px'den küçükse mobil duruma geç
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])
    return (
        <Box sx={{ flexGrow: 1, padding: { xs: 2, sm: 4, md: 6 }, backgroundColor: "#1e1e2f" }}>
            <h1 style={{
                textAlign: "center", color: "white", marginBottom: "20px", marginTop: isMobile ? "600px" : "20px"
            }}>Works</h1>
            <Grid
                container
                spacing={4} // Kartlar arasındaki boşluk
                justifyContent="center"
                sx={{
                    maxWidth: "1200px", // Ekranın genişliğini sınırla
                    margin: "0 auto", // Ortala
                }}
            >
                {projects.map((project) => (
                    <Grid
                        item
                        xs={12} // Mobilde tam genişlik (tek sütun)
                        sm={6} // Tabletlerde iki sütun
                        md={4} // Masaüstünde üç sütun
                        key={project.id}
                    >
                        <ProjectCard project={project} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProjectList;
