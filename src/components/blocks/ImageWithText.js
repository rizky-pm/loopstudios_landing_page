import styled from 'styled-components';

export const ImageWithText = styled.div`
    background: ${(props) => `url(${props.url})`},
        linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(255, 255, 255, 0) 60%
        );
    background-size: cover;
    background-repeat: no-repeat;

    max-width: 100%;
    height: 125px;
`;
