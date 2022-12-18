import React from "react";

import type ThemeMode from "../../types/ThemeMode";
import Button from "../../styles/Button";

import Moon from "./Moon";
import Sun from "./Sun";

const Toggle: React.FC<ToggleProps> = ({ theme, toggleTheme }) => {
    return (
        <Button onClick={toggleTheme}>
            {theme === "light" ? <Moon /> : <Sun />}
        </Button>
    );
};

type ToggleProps = {
    theme: ThemeMode;
    toggleTheme: () => void;
};

export default Toggle;
