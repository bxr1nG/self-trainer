import styled from "styled-components";

const StyledContainer = styled.div<{
    horizontal?: boolean;
    notCentered?: boolean;
}>`
    display: flex;
    flex-direction: ${({ horizontal }) => (horizontal ? "row" : "column")};
    justify-content: ${({ notCentered }) =>
        notCentered ? "flex-start" : "center"};
    align-items: ${({ notCentered }) =>
        notCentered ? "flex-start" : "center"};
`;

export default StyledContainer;
