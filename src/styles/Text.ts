import styled from "styled-components";

const StyledContainer = styled.div<{
    bold?: boolean;
    thin?: boolean;
}>`
    padding: ${({ theme }) => theme.padding};
    font-weight: ${({ bold, thin }) => {
        if (bold) return "600";
        if (thin) return "300";
        return "400";
    }};
`;

export default StyledContainer;
