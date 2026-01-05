import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Box, TextField, Button, Typography, Snackbar, Alert } from "@mui/material";
import { useLanguage } from "../context/LanguageContext";

function ContactForm() {
    const { t } = useLanguage();
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
                    setSnackbar({ open: true, message: t.contact.success, severity: "success" });
                    setFormData({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    console.error("E-posta gönderim hatası:", error.text);
                    setSnackbar({ open: true, message: t.contact.error, severity: "error" });
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
                            textAlign: "center",
                            mb: 2,
                            color: "#ffffff",
                            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                        }}
                    >
                        {t.contact.title}
                    </Typography>
                    <TextField
                        fullWidth
                        label={t.contact.name}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        margin="normal"
                        required
                        sx={{
                            input: { color: "#ffffff" },
                            label: { color: "#aaaaaa" },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "#aaaaaa" },
                                "&:hover fieldset": { borderColor: "#ffffff" },
                                "&.Mui-focused fieldset": { borderColor: "#ffffff" },
                            },
                        }}
                    />
                    <TextField
                        fullWidth
                        label={t.contact.email}
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        margin="normal"
                        required
                        sx={{
                            input: { color: "#ffffff" },
                            label: { color: "#aaaaaa" },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "#aaaaaa" },
                                "&:hover fieldset": { borderColor: "#ffffff" },
                                "&.Mui-focused fieldset": { borderColor: "#ffffff" },
                            },
                        }}
                    />
                    <TextField
                        fullWidth
                        label={t.contact.message}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        margin="normal"
                        multiline
                        rows={4}
                        required
                        sx={{
                            textarea: { color: "#ffffff" },
                            label: { color: "#aaaaaa" },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "#aaaaaa" },
                                "&:hover fieldset": { borderColor: "#ffffff" },
                                "&.Mui-focused fieldset": { borderColor: "#ffffff" },
                            },
                        }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        disabled={isDisabled}
                        sx={{
                            mt: 2,
                            backgroundColor: isDisabled ? "#555" : "#ffffff",
                            color: "#1e1e2f",
                            fontWeight: "bold",
                            "&:hover": {
                                backgroundColor: isDisabled ? "#555" : "#dddddd",
                            },
                        }}
                    >
                        {isDisabled ? `Bekleyiniz (${countDown}s)` : t.contact.send}
                    </Button>
                </Box>
            </Box>
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: "100%" }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default ContactForm;
