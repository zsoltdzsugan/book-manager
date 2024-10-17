import MainLayout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import MyBooksPage from "./pages/MyBooksPage";
import ReadingChallengePage from "./pages/ReadingChallengePage";
import ProfilePage from "./pages/ProfilePage";
// import NotFoundPage from "./pages/NotFoundPage"; // Add your NotFoundPage component
import { ThemeProvider, createTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { themeOptionLight, themeOptionDark } from "./themes/muiTheme";
import { useState, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = useMemo(() => createTheme(isDarkMode ? themeOptionDark : themeOptionLight), [isDarkMode]);
  const isLoggedIn = false; // Replace this with actual authentication logic

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box id="main" sx={{ width: "100vw", height: "100vh" }}>
          {isLoggedIn ? (
            <MainLayout>
              <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/books" element={<MyBooksPage />}></Route>
                <Route path="/rc" element={<ReadingChallengePage />}></Route>
                <Route path="/profile" element={<ProfilePage />}></Route>
              </Routes>
            </MainLayout>
          ) : (
            <Routes>
              <Route path="/" element={<LandingPage />}></Route>
            </Routes>
          )}
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}
