import { useEffect, useState } from "react";
import { Box, Collapse } from "@mui/material";
import Logo from "../logo/Logo";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import ProfileDropDown from "../profile/ProfileDropDown";
import Searchbar from "../search/Searchbar";
import ExpandMoreButton from "../button/ExpandMoreButton";
import navItems from "./navItems";
import PropTypes from "prop-types";
import Switch from "@mui/material/Switch";

export default function Navbar({ onHeightChange }) {
    const [expanded, setExpanded] = useState(true); // Start expanded

    // Function to toggle collapse state of the search bar
    const toggleSearchBar = () => {
        setExpanded(prev => !prev);
    };

    useEffect(() => {
        const navbarHeight = expanded ? "8rem" : "5rem"; // Adjust height based on expanded state
        onHeightChange(navbarHeight);
    }, [expanded, onHeightChange]);

    return (
        <Box sx={{
            zIndex: 40,
            position: "fixed",
            width: "100%",
            height: { xs: "5rem", lg: expanded ? "8rem" : "5rem" },
            transition: "all 200ms ease-in-out",
            background: "linear-gradient(to bottom, #ccd5aeff, #7D9A6B)",
            borderBottomLeftRadius: "0.375rem",
            borderBottomRightRadius: "0.375rem",
        }}>
            {/* <Announcement /> */}
            <Box sx={{
                zIndex: 40,
                position: "relative",
                display: "block",
                width: "100%",
                borderBottomRightRadius: "9999px",
                borderBottomLeftRadius: "9999px",
                // borderRadius: "9999px",
                backgroundColor: "black",
                paddingX: "2rem",
                paddingY: ".5rem",
                // height: "2.5rem",
                alignContent: "center",
            }}>
                <Box sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "transparent",
                    width: "80%",
                    margin: "auto",
                    height: "2.5rem",
                }}>
                    {/* Logo */}
                    <Logo iconSize={6} strokeSize={1} hasTitle={true} isLink={true} />
                    {/* Mobile Menu */}
                    <MobileMenu navItems={navItems} />
                    {/* Desktop Menu */}
                    <DesktopMenu navItems={navItems} />
                    {/* Profile Dropdown */}
                    <ProfileDropDown />
                    {/* <Switch
                        checked={isDarkMode}
                        onChange={() => setIsDarkMode(!isDarkMode)}
                        aria-label="Toggle dark mode"
                    /> */}
                </Box>
            </Box>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Box sx={{
                    zIndex: 30,
                    position: "relative",
                    display: { xs: "none", lg: "block" }, // Display on large screens only
                    width: "48rem",
                    marginTop: "1rem",
                    marginX: "auto",
                    transition: "transform 500ms ease-in-out, opacity 500ms ease-in-out",
                    opacity: expanded ? 1 : 0, // Set opacity based on expanded state
                }}>
                    <Searchbar />
                </Box>
            </Collapse>
            {/* ExpandMore Icon */}
            <ExpandMoreButton
                expanded={expanded}
                toggleSearchBar={toggleSearchBar}
            />
        </Box>
    );
};

Navbar.propTypes = {
    onHeightChange: PropTypes.func.isRequired,
}