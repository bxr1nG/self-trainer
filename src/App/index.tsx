import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Home from "./Home";
import Topics from "./Topics";
import Training from "./Training";
import Topic from "./Topic";
import Statistics from "./Statistics";
import useDarkMode from "../hooks/useDarkMode";
import { darkTheme, lightTheme } from "../styles/Themes";
import GlobalStyles from "../styles/GlobalStyles";
import Issues from "../types/Issues";

function App() {
    const { theme, themeToggler, mountedComponent } = useDarkMode();

    const [mistakes, setMistakes] = useState<Issues>([]);
    const themeMode = theme === "light" ? lightTheme : darkTheme;
    if (!mountedComponent) return <div />;

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            theme={theme}
                            toggleTheme={themeToggler}
                        />
                    }
                />
                <Route
                    path="/topics"
                    element={<Topics />}
                />
                <Route
                    path="/topics/:topic"
                    element={<Topic setMistakes={setMistakes} />}
                />
                <Route
                    path="/training"
                    element={<Training setMistakes={setMistakes} />}
                />
                <Route
                    path="/statistics"
                    element={<Statistics mistakes={mistakes} />}
                />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
