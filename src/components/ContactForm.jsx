import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Box, TextField, Button, Typography, Snackbar, Alert } from "@mui/material";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_zejtc6y",
                "template_mo1jfsk",
                formData,           // Form verisi
                "I5ClY4uP2a2ilH_uN"
            )
            .then(
                (result) => {
                    console.log("E-posta başarıyla gönderildi:", result.text);
                    setSnackbarOpen(true);
                    setFormData({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    console.error("E-posta gönderim hatası:", error.text);
                    alert("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
                }
            );
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <div id="contact">

            <Box
                sx={{
                    backgroundColor: "#1e1e2f",
                    paddingBottom: "150px",
                }}
            >
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        maxWidth: 400,
                        margin: "auto",
                        p: 3,
                        backgroundColor: "#1e1e2f",
                        borderRadius: 2,
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                        color: "#ffffff",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            mb: 3,
                            textAlign: "center",
                            color: "#ffffff",
                        }}
                    >
                        Contact Me
                        <Typography
                            variant="body2"
                            sx={{
                                marginTop: 2,
                                color: "#d1d1e9",
                            }}
                        >
                            akdumanmuhammet34@gmail.com
                        </Typography>
                    </Typography>
                    <TextField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        fullWidth
                        required
                        sx={{
                            mb: 2,
                            "& .MuiInputBase-root": {
                                backgroundColor: "#3e3e5e",
                                color: "#ffffff",
                            },
                            "& .MuiInputLabel-root": {
                                color: "#d1d1e9",
                            },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#E8B931",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#8585ff",
                                },
                            },
                        }}
                    />
                    <TextField
                        label="E-mail Adress"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        required
                        type="email"
                        sx={{
                            mb: 2,
                            "& .MuiInputBase-root": {
                                backgroundColor: "#3e3e5e",
                                color: "#ffffff",
                            },
                            "& .MuiInputLabel-root": {
                                color: "#d1d1e9",
                            },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#E8B931",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#8585ff",
                                },
                            },
                        }}
                    />
                    <TextField
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        fullWidth
                        required
                        multiline
                        rows={4}
                        sx={{
                            mb: 2,
                            "& .MuiInputBase-root": {
                                backgroundColor: "#3e3e5e",
                                color: "#ffffff",
                            },
                            "& .MuiInputLabel-root": {
                                color: "#d1d1e9",
                            },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#E8B931",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#8585ff",
                                },
                            },
                        }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            backgroundColor: "#5c5cff",
                            color: "#ffffff",
                            "&:hover": {
                                backgroundColor: "#3333ff",
                            },
                        }}
                        fullWidth
                    >SEND

                    </Button>

                    <Snackbar
                        open={snackbarOpen}
                        autoHideDuration={4000}
                        onClose={handleSnackbarClose}
                    >
                        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: "100%" }}>
                            Mesajınız başarıyla gönderildi!
                        </Alert>
                    </Snackbar>
                </Box>
            </Box>
        </div>
    );
}

export default ContactForm;
