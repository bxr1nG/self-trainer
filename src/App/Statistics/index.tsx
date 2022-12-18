import React from "react";
import { Link } from "react-router-dom";

import Button from "../../styles/Button";
import Wrapper from "../../styles/Wrapper";
import Issues from "../../types/Issues";
import Text from "../../styles/Text";
import Container from "../../styles/Container";

const Statistics: React.FC<StatisticsProps> = ({ mistakes }) => {
    console.log(mistakes);
    return (
        <Wrapper>
            <Button
                as={Link}
                to="/"
            >
                Домой
            </Button>
            {mistakes.length > 0 ? (
                <>
                    <Text as="h2">Ваши ошибки</Text>
                    {mistakes.map((issue) => (
                        <Container key={issue.question}>
                            <Text>
                                {issue.topic} - {issue.question}
                            </Text>
                            <Text as="div">{issue.answer}</Text>
                        </Container>
                    ))}
                </>
            ) : (
                <Text>Вы не сделали ни одной ошибки</Text>
            )}
        </Wrapper>
    );
};

type StatisticsProps = {
    mistakes: Issues;
};

export default Statistics;
