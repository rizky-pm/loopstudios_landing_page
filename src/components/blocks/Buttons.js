import styled from 'styled-components';

export const GhostButton = styled.button`
    font-family: 'Alata', sans-serif;
    text-transform: uppercase;
    letter-spacing: 5px;
    background: none;
    border: 1px solid ${(props) => props.theme.colors.black};
    padding: 15px 50px;

    margin-top: ${(props) => props.marginTop};
`;
