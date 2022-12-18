import React, { useState } from "react";
import { Link } from "react-router-dom";

import source from "../../source.json";
import Button from "../../styles/Button";
import Wrapper from "../../styles/Wrapper";
import Select from "../../styles/Select";

function Topics() {
    const topics = source.map((topic) => topic.name);
    const [topic, setTopic] = useState(topics[0]);
    return (
        <Wrapper>
            <Button
                as={Link}
                to="/"
            >
                Home
            </Button>
            <Select
                onChange={(e) => {
                    setTopic(e.target.value);
                }}
            >
                {topics.map((topic) => (
                    <option
                        key={topic}
                        value={topic}
                    >
                        {topic}
                    </option>
                ))}
            </Select>
            <Button
                as={Link}
                to={`/topics/${topic}`}
            >
                Start
            </Button>
        </Wrapper>
    );
}

export default Topics;
