import React from "react";
import { Link } from "react-router-dom";

import Button from "../../styles/Button";
import Wrapper from "../../styles/Wrapper";
import Toggle from "../../components/Toggle";
import ThemeMode from "../../types/ThemeMode";

const Home: React.FC<HomeProps> = ({ theme, toggleTheme }) => {
    return (
        <Wrapper>
            <Toggle
                theme={theme}
                toggleTheme={toggleTheme}
            />
            <Button
                as={Link}
                to="/topics"
            >
                Темы
            </Button>
            <Button
                as={Link}
                to="/training"
            >
                Рандом
            </Button>
        </Wrapper>
    );
};

type HomeProps = {
    theme: ThemeMode;
    toggleTheme: () => void;
};

export default Home;
