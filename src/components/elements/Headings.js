import styled from 'styled-components';

export const H1 = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    color: ${(props) => props.theme.colors.white};
`;

export const H2 = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    color: ${(props) => props.theme.colors.black};
    font-size: 2.375rem;
    font-weight: 300;

    margin-bottom: ${(props) => (props.marginBottom ? '1.25rem' : '0')};
    font-size: ${(props) => props.aboutDesc};

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        grid-area: title;
        justify-self: flex-start;
        font-size: 3.125rem;
    }
`;

export const H3 = styled.h3`
    font-family: 'Josefin Sans', sans-serif;
    /* color: ${(props) => props.theme.colors.white}; */
`;
