import styled from "styled-components";

const StyledSelect = styled.select`
    display: inline-block;
    padding: ${({ theme }) => theme.padding};
    margin: ${({ theme }) => theme.margin};
    border: 2px solid ${({ theme }) => theme.text};
    border-radius: ${({ theme }) => theme.borderRadius};
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.body};
    transition: all 0.3s ease-in-out;
    outline: none;
    max-width: 80%;
`;

export default StyledSelect;
