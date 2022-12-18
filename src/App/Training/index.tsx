import React, { useState } from "react";

import source from "../../source.json";
import shuffle from "../../helpers/Shuffle";
import Game from "../../components/Game";
import Issues from "../../types/Issues";

const Training: React.FC<TrainingProps> = ({ setMistakes }) => {
    const [issues] = useState<Issues>(
        shuffle(
            source
                .map((topic) =>
                    topic.issues.map((issue) => ({
                        topic: topic.name,
                        question: issue.question,
                        answer: issue.answer
                    }))
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

type TrainingProps = {
    setMistakes: (mistakes: Issues) => void;
};

export default Training;
