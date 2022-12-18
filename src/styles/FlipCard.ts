import styled from "styled-components";

const FlipCard = styled.div<{
    flipped: boolean;
}>`
    background-color: transparent;
    width: 20rem;
    height: 12rem;
    perspective: 1000px;
    margin: ${({ theme }) => theme.margin};

    & .inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transform-style: preserve-3d;

        cursor: ${({ flipped }) => (flipped ? "default" : "pointer")};

        ${({ flipped }) => (flipped ? "transition: transform 0.5s" : "")};
        transform: ${({ flipped }) =>
            flipped ? "rotateY(180deg)" : "rotateY(0)"};
    }

    & .face {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        color: white;
        font-weight: 400;
        backface-visibility: hidden;
        border-radius: 1.5rem;
        padding: ${({ theme }) => theme.padding};
    }

    & .front {
        background: crimson;
    }

    & .back {
        background: slateblue;
        transform: rotateY(180deg);
    }
`;

export default FlipCard;
