import styled from 'styled-components';

export const H1 = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    color: ${(props) => props.theme.colors.white};
`;

export const H2 = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    color: ${(props) => props.theme.colors.black};
    font-size: 32px;
    font-weight: 300;

    margin-bottom: ${(props) => (props.marginBottom ? '20px' : '0')};
`;

export const H3 = styled.h3`
    font-family: 'Josefin Sans', sans-serif;
    color: ${(props) => props.theme.colors.white};
`;
