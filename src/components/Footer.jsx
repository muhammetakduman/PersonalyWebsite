import React from 'react'
import { Box, Container, Typography } from "@mui/material"
import { useLanguage } from "../context/LanguageContext";

function Footer() {
    const { t } = useLanguage();
    return (
        <div>
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: "auto",
                    backgroundColor: "#1e1e2f",
                    color: "white",
                    textAlign: "center",
                }}>
                <Container maxWidth="lg" sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 2,
                    mb: 2,
                }}>
                    <Typography variant="body2" color="white" >
                        &copy; {new Date().getFullYear()} My Website. {t.footer.rights}
                    </Typography>
                    <Typography variant="body2" color="white" >
                        Designed by Hilal Meriç
                    </Typography>
                </Container>
            </Box>
        </div>
    )
}

export default Footer
