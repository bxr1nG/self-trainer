import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import type Issues from "../../types/Issues";
import Button from "../../styles/Button";
import Wrapper from "../../styles/Wrapper";
import FlipCard from "../../styles/FlipCard";
import Container from "../../styles/Container";
import Text from "../../styles/Text";

const Game: React.FC<GameProps> = ({ issues, setMistakes }) => {
    const navigate = useNavigate();
    const [flipped, setFlipped] = useState(false);
    const iterator = useRef(0);
    const [issue, setIssue] = useState(issues[iterator.current]);
    const [localMistakes, setLocalMistakes] = useState<Issues>([]);

    useEffect(() => {
        if (iterator.current === issues.length) {
            setMistakes(localMistakes);
            navigate("/statistics");
        }
    }, [iterator.current]);

    function flip() {
        setFlipped(false);
        if (iterator.current < issues.length - 1) {
            iterator.current++;
            setIssue(issues[iterator.current]);
        } else {
            iterator.current++;
        }
    }
    return (
        <Wrapper>
            <Button
                as={Link}
                to="/"
            >
                Home
            </Button>
            <Text>
                Question {iterator.current + 1}/{issues.length}
            </Text>
            <FlipCard
                flipped={flipped}
                onClick={() => {
                    setFlipped(true);
                }}
            >
                <div className="inner">
                    <div className="face front">{issue.question}</div>
                    <div className="face back">{issue.answer}</div>
                </div>
            </FlipCard>
            <Container horizontal>
                <Button
                    green
                    disabled={!flipped}
                    onClick={() => {
                        flip();
                    }}
                >
                    Right
                </Button>
                <Button
                    red
                    disabled={!flipped}
                    onClick={() => {
                        setLocalMistakes([...localMistakes, issue]);
                        flip();
                    }}
                >
                    Wrong
                </Button>
            </Container>
            <Button
                onClick={() => {
                    setMistakes(localMistakes);
                    navigate("/statistics");
                }}
            >
                Statistics
            </Button>
        </Wrapper>
    );
};

type GameProps = {
    issues: Issues;
    setMistakes: (mistakes: Issues) => void;
};

export default Game;
