import styled from 'styled-components';

import { H1 } from '../elements/Headings';

export const HeaderText = styled(H1)`
    display: inline-block;
    font-size: 2.75rem;
    font-weight: 300;
    border: 0.1875rem solid ${(props) => props.theme.colors.white};
    padding: 1.5625rem 1.875rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        padding: 2.5rem;
        font-size: 4.5rem;
        width: 45%;
        left: 10rem;
        transform: translate(0, -45%);
    }
`;
