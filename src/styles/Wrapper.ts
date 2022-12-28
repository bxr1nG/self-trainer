import styled from "styled-components";

const Wrapper = styled.div<{
    notCentered?: boolean;
}>`
    display: flex;
    flex-direction: column;
    justify-content: ${({ notCentered }) =>
        notCentered ? "flex-start" : "center"};
    align-items: ${({ notCentered }) =>
        notCentered ? "flex-start" : "center"};
    width: 100%;
    height: 100%;
`;

export default Wrapper;
