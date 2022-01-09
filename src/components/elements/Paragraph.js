import styled from 'styled-components';

export const P = styled.p`
    font-family: 'Alata', sans-serif;
    color: ${(props) => props.theme.colors.darkGray};
    line-height: 1.75;
`;

export const CopyrightText = styled(P)`
    color: ${(props) => props.theme.colors.veryDarkGray};
`;
