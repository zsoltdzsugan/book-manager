import { createContext, useContext, useState } from "react";
import Navbar from "../navbar/Navbar";
import Box from "@mui/material/Box";

const NavbarHeightContext = createContext();

export const useNavbarHeight = () => {
    return useContext(NavbarHeightContext);
}

export default function MainLayout({ children }) {
    const [navbarHeight, setNavbarHeight] = useState("8rem");

    const handleNavbarHeightChange = (height) => {
        setNavbarHeight(height);
    }

    return (
        <NavbarHeightContext.Provider value={navbarHeight}>
            <Box sx={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                jutifyContent: "center",
                alignItems: "center",
                backgroundColor: "cornsilk",
            }}>
                <Navbar onHeightChange={handleNavbarHeightChange} />
                {/* Main Content */}
                <Box sx={{
                    marginTop: navbarHeight,
                    padding: "1rem",
                    position: "relative",
                    display: "flex",
                    width: "100%",
                    flex: "1 1 auto",
                    overflow: "hidden",
                    transition: "all 500ms ease-in-out",
                    transitionDelay: navbarHeight === "9rem" ? "150ms" : "300ms",
                }}>
                </Box>
            </Box>
        </NavbarHeightContext.Provider>
    );
}
