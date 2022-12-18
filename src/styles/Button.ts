import styled from "styled-components";

export default styled.button<{
    disabled?: boolean;
    green?: boolean;
    red?: boolean;
}>`
    display: inline-block;
    padding: ${({ theme }) => theme.padding};
    margin: ${({ theme }) => theme.margin};
    border: 2px solid
        ${({ theme, disabled, green, red }) =>
            disabled
                ? theme.gray
                : green
                ? theme.green
                : red
                ? theme.red
                : theme.text};
    border-radius: ${({ theme }) => theme.borderRadius};
    text-decoration: none;
    color: ${({ theme, disabled, green, red }) =>
        disabled
            ? theme.gray
            : green
            ? theme.green
            : red
            ? theme.red
            : theme.text};
    background-color: ${({ theme }) => theme.body};
    transition: all 0.3s ease-in-out;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    outline: none;
    &:hover {
        border: 2px solid
            ${({ theme, disabled, green, red }) =>
                !disabled &&
                (green ? theme.green : red ? theme.red : theme.text)};
        background-color: ${({ theme, disabled, green, red }) =>
            !disabled && (green ? theme.green : red ? theme.red : theme.text)};
        color: ${({ theme, disabled }) => !disabled && theme.body};
    }
`;
