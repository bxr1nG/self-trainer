import styled from "styled-components";

const StyledContainer = styled.div<{
    horizontal?: boolean;
}>`
    display: flex;
    flex-direction: ${({ horizontal }) => (horizontal ? "row" : "column")};
    justify-content: center;
    align-items: center;
`;

export default StyledContainer;
