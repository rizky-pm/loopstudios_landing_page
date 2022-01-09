import styled from 'styled-components';

import { H1 } from '../elements/Headings';

export const HeaderText = styled(H1)`
    display: inline-block;
    font-size: 44px;
    font-weight: 300;
    border: 3px solid ${(props) => props.theme.colors.white};
    padding: 25px 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
`;
