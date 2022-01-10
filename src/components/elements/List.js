import styled from 'styled-components';

export const UL = styled.ul`
    text-align: center;
    list-style: none;
`;

export const LI = styled.li`
    margin-bottom: ${(props) => (props.lastLi ? '0' : '1.25rem')};

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        margin-bottom: 0;
        margin-right: ${(props) => (props.lastLi ? '0' : '2.1875rem')};
    }

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        margin-bottom: 0;
        margin-right: ${(props) => (props.lastLi ? '0' : '2.1875rem')};
    }
`;
