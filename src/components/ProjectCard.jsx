import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

function ProjectCard({ project }) {
    return (
        <Card
            sx={{
                maxWidth: 300,
                margin: 2,
                backgroundColor: '',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 370,
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
                    fontFamily: 'Times New Roman, serif',
                }}
            >
                <Typography variant="h7" sx={{ fontFamily: 'Times New Roman, serif' }}>
                    {project.name}
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: 'Times New Roman, serif', marginTop: 2 }}>
                    {project.additionalInfo}
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: 'Times New Roman, serif', marginTop: 1 }}>
                    <b>Technologies used:</b> {project.techologies}
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
                        fontFamily: 'Times New Roman, serif',
                    }}
                >
                    SEE Project
                </Button>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;
