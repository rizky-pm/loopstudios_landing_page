import { keyframes } from 'styled-components';

export const hoverAnimation = keyframes`
    0% {
        width: 0;
    }

    100% {
        width: 1.5625rem;

    }
`;

export const reverseHoverAnimation = keyframes`
    0% {
        width: 1.5625rem;
    }

    100% {
        width: 0;

    }
`;
