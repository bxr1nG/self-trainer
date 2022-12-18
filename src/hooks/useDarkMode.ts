import { useEffect, useState } from "react";

import Mode from "../types/ThemeMode";

const useDarkMode = () => {
    const [theme, setTheme] = useState<Mode>("light" as Mode);
    const [mountedComponent, setMountedComponent] = useState(false);
    const setMode = (mode: Mode) => {
        window.localStorage.setItem("theme", mode);
        setTheme(mode);
    };

    const themeToggler = () => {
        theme === "light" ? setMode("dark" as Mode) : setMode("light" as Mode);
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        localTheme ? setTheme(localTheme as Mode) : setMode("light" as Mode);
        setMountedComponent(true);
    }, []);

    return { theme, themeToggler, mountedComponent };
};

export default useDarkMode;
