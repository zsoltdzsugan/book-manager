import { Box, Typography, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Logo from '../components/logo/Logo';
import WelcomeMessage from "../components/other/WelcomeMessage";
import { alpha } from '@mui/system';

export default function LandingPage() {
    const theme = useTheme();

    return (
        <Box sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: theme.palette.background.main,
        }}>
            {/* Header with Logo */}
            <Box sx={{
                position: "relative",
                width: "50%",
                height: "10vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Logo iconSize={20} hasTitle={true} isLink={true} />
            </Box>

            {/* Main Content Area */}
            <Box
                sx={{
                    position: "relative",
                    height: "35vh",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
                    backgroundImage: 'url("/_06cc4f58-7948-45f7-9db3-cc9dac048dab.jpeg")',
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                }}
            >
                {/* Content with backdrop blur and centered text */}
                <Box
                    sx={{
                        position: "relative",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: alpha(theme.palette.secondary.dark, 0.65),
                        zIndex: 10,
                    }}
                >
                    <Box
                        sx={{
                            width: "45vw",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            paddingLeft: "1rem", // Adjust padding as necessary
                        }}
                    >
                        <WelcomeMessage />
                    </Box>

                    {/* SignIn component */}
                    <Paper
                        elevation={3}
                        sx={{
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            zIndex: 20,
                            marginTop: "-4rem",
                            justifyContent: "center",
                            borderRadius: "8px",
                            border: "2px solid rgba(0, 0, 0, 0.25)", // Border color
                            background: alpha(theme.palette.background.main, 0.90),
                            height: "70ch",
                            width: "55ch",
                        }}
                    >
                        {/* Replace with your SignIn component */}
                        <Typography variant="h5">SignIn placeholder</Typography>
                    </Paper>
                </Box>
            </Box>

            {/* Additional Space/Content */}
            <Box sx={{
                width: "100%",
                height: "55vh",
            }}>
                <Typography variant="h3" sx={{
                    fontWeight: "bold",
                    color: "green",
                }}>
                    Something something!
                </Typography>
                <Typography variant="p" sx={{
                    fontWeight: "bold",
                    color: "green",
                }}>
                    Additional content goes here!
                </Typography>
            </Box>
        </Box>
    );
}
