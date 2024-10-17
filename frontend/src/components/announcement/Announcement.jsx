import { Box, IconButton, Typography, Link } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState, useEffect } from "react";

const slides = [
    {
        id: 1,
        link: "#",
        content: "Check out this new book1!"
    },
    {
        id: 2,
        link: "#",
        content: "Check out this new book2!",
    },
    {
        id: 3,
        link: "#",
        content: "Check out this new book3!",
    },
];

const Announcement = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const loopSlides = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    useEffect(() => {
        const intervalId = setInterval(loopSlides, 5000)
        return () => clearInterval(intervalId)
    }, [])

    return (
        <Box
            sx={{
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                position: "relative",
                paddingY: ".125rem",
            }}
        >
            <Box sx={{ width: "100%", maxWidth: "768px" }}>
                <Typography variant="body2" textAlign="center">
                    <Link href={slides[currentSlide].link} underline="hover" sx={{ display: "block", color: "black", "&:hover": { color: "black" } }}>
                        {slides[currentSlide].content}
                    </Link>
                </Typography>
            </Box>
        </Box>
    );
};

export default Announcement;
