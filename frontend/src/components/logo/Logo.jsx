import { useTheme } from "@mui/material/styles";
import { Typography, Link, Box } from "@mui/material";
import { MdAutoStories } from "react-icons/md";

export default function Logo({ iconSize, strokeSize, hasTitle, isLink }) {
    const theme = useTheme()
    const icon = iconSize * 3 || "";

    return (
        <Box sx={{
            position: "relative",
            display: "flex",
        }}>

            {isLink ? (
                <Link
                    href="your-link-here" // Replace with your actual link
                    sx={{
                        textDecoration: 'none', // Remove the default underline
                        display: 'inline-flex', // Keep the icon and text aligned
                        alignItems: 'center',
                        '&:hover h4': {
                            color: theme.palette.secondary.main, // Change text color on hover
                        },
                    }}
                >
                    <MdAutoStories
                        className="logo-icon"
                        style={{
                            width: icon,
                            height: icon,
                            color: theme.palette.primary.main,
                            transition: 'color 0.3s ease-in-out', // Smooth transition for hover effect
                        }}
                    />
                    {hasTitle && (
                        <Typography
                            variant="h4"
                            sx={{
                                borderBottom: "3px solid",
                                borderBottomLeftRadius: "3px",
                                fontWeight: "bold",
                                display: "inline-block",
                                color: theme.palette.primary.main,
                                transition: 'color 0.3s ease', // Smooth transition for hover effect
                            }}
                        >
                            bestReads
                        </Typography>
                    )}
                </Link>

            ) : (
                <>
                    <MdAutoStories style={{ width: icon, height: icon }} />
                    {hasTitle && (
                        <Typography
                            variant="h4"
                            sx={{
                                borderBottom: "3px solid",
                                borderBottomLeftRadius: "3px",
                                fontWeight: "bold",
                                display: "inline-block",
                                color: theme.palette.primary.main,
                                transition: 'color 0.3s ease', // Smooth transition for hover effect
                            }}
                        >
                            bestReads
                        </Typography>
                    )}
                </>
            )}
        </Box>
    )
}
