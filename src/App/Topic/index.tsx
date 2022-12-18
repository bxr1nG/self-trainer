import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Issues from "../../types/Issues";
import Game from "../../components/Game";
import shuffle from "../../helpers/Shuffle";
import source from "../../source.json";

const Topic: React.FC<TopicProps> = ({ setMistakes }) => {
    const { topic } = useParams();
    const [issues] = useState<Issues>(
        shuffle(
            source
                .map((currentTopic) =>
                    topic === currentTopic.name
                        ? currentTopic.issues.map((issue) => ({
                              topic: currentTopic.name,
                              question: issue.question,
                              answer: issue.answer
                          }))
                        : []
                )
                .flat(1)
        )
    );

    return (
        <Game
            issues={issues}
            setMistakes={setMistakes}
        />
    );
};

type TopicProps = {
    setMistakes: (mistakes: Issues) => void;
};

export default Topic;
