import styled from 'styled-components';

export const ImageWithText = styled.div`
    background: ${(props) => `url(${props.mobileUrl})`},
        linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(255, 255, 255, 0) 60%
        );
    background-size: cover;
    background-repeat: no-repeat;

    max-width: 100%;
    height: 7.8125rem;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        background: ${(props) => `url(${props.desktopUrl})`},
            linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.7) 0%,
                rgba(255, 255, 255, 0) 60%
            );
        background-size: contain;
        background-repeat: no-repeat;
        max-width: 100%;

        width: 15.9375rem;
        height: 28.125rem;
    }
`;
