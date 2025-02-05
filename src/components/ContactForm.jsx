import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Box, TextField, Button, Typography, Snackbar, Alert } from "@mui/material";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isDisabled, setIsDisabled] = useState(false);
    const [countDown, setCountDown] = useState(0);
    const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "info" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.message.length < 10) {
            setSnackbar({ open: true, message: "Mesajınız en az 10 karakter uzunluğunda olmalıdır!", severity: "error" });
            return;
        }

        setIsDisabled(true);
        setCountDown(60);

        emailjs
            .send(
                "service_zejtc6y",
                "template_mo1jfsk",
                formData,
                // import.meta.env.VITE_EMAILJS_USER_ID
                "I5ClY4uP2a2ilH_uN"
            )
            .then(
                () => {
                    setSnackbar({ open: true, message: "Mesajınız başarıyla gönderildi!", severity: "success" });
                    setFormData({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    console.error("E-posta gönderim hatası:", error.text);
                    setSnackbar({ open: true, message: "Mesaj gönderilemedi. Lütfen tekrar deneyin.", severity: "error" });
                    setIsDisabled(false);
                }
            );
    };

    // Geri sayım sürecini yönetiyoruz
    useEffect(() => {
        if (countDown > 0) {
            const timer = setTimeout(() => {
                setCountDown((prev) => prev - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else if (countDown === 0 && isDisabled) {
            setIsDisabled(false);
            setSnackbar({ open: true, message: "Buton tekrar aktif oldu. Yeni bir mesaj gönderebilirsiniz.", severity: "info" });
        }
    }, [countDown, isDisabled]);

    const handleSnackbarClose = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    return (
        <div id="contact" style={{ backgroundColor: '#1e1e2f' }}>
            <Box
                sx={{
                    backgroundColor: "#1e1e2f",
                    paddingBottom: "150px",
                    mt: 28,
                }}>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        maxWidth: { xs: 300, sm: 600 },
                        margin: "auto",
                        p: 3,
                        backgroundColor: "#1e1e2f",
                        borderRadius: 2,
                        boxShadow: "0px 4px 10px rgba(177, 183, 61, 0.5)",
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
                        disabled={isDisabled}
                        sx={{
                            backgroundColor: isDisabled ? "#cccccc" : "#5c5cff",
                            color: isDisabled ? "#ffffff" : "#ffffff",
                            "&:hover": {
                                backgroundColor: isDisabled ? "#cccccc" : "#3333ff",
                            },
                        }}
                        fullWidth
                    >
                        {isDisabled ? <h3 style={{ color: 'white', fontSize: '13px' }}>Please wait {countDown} seconds for a new mail</h3> : "SEND"}
                    </Button>

                    <Snackbar
                        open={snackbar.open}
                        autoHideDuration={4000}
                        onClose={handleSnackbarClose}
                    >
                        <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: "100%" }}>
                            {snackbar.message}
                        </Alert>
                    </Snackbar>
                </Box>
            </Box>
        </div>
    );
}

export default ContactForm;
