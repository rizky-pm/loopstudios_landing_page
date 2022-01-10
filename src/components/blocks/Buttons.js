import styled from 'styled-components';

export const GhostButton = styled.button`
    font-family: 'Alata', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.3125rem;
    background: none;
    border: 0.0625rem solid ${(props) => props.theme.colors.black};
    padding: 0.9375rem 3.125rem;
    transition: all 0.2s ease;

    margin-top: ${(props) => props.marginTop};

    &:hover {
        border: none;
        color: ${(props) => props.theme.colors.white};
        background: ${(props) => props.theme.colors.black};
        cursor: pointer;
    }

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        grid-area: button;
        width: 10rem;
        height: 2.8125rem;
        padding: 0;
        justify-self: flex-end;

        margin-top: 0;
    }
`;
