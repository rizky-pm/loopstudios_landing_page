import styled from 'styled-components';
import { hoverAnimation, reverseHoverAnimation } from '../Keyframes';

export const Link = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
    font-family: 'Alata', sans-serif;

    position: relative;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        &:after {
            content: '';
            position: absolute;
            top: ${(props) => (props.twitter ? 'calc(150% + .25rem)' : '150%')};
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0.125rem;
            background-color: white;
            animation: ${reverseHoverAnimation} 0.25s ease;
        }

        &:hover {
            &:after {
                content: '';
                position: absolute;
                top: ${(props) =>
                    props.twitter ? 'calc(150% + .25rem)' : '150%'};
                left: 50%;
                transform: translateX(-50%);
                width: 1.5625rem;
                height: 0.125rem;
                background-color: white;
                animation: ${hoverAnimation} 0.25s ease;
            }
        }
    }
`;
