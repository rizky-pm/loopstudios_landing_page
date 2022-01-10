import styled from 'styled-components';

export const MobileImage = styled.img`
    max-width: 100%;
    height: 100%;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        display: none;
    }
`;

export const DesktopImage = styled.img`
    max-width: 100%;
    height: 100%;
    display: none;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        display: block;
    }
`;
