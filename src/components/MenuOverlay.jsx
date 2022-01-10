import React from 'react';
import styled from 'styled-components';

import { Link } from './elements/Link';

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: ${(props) => props.theme.colors.black};
    transition: all 1s ease;
    -webkit-transform: ${(props) =>
        props.showMenuOverlay ? 'translateX(0)' : 'translateX(100%)'};
    -moz-transform: ${(props) =>
        props.showMenuOverlay ? 'translateX(0)' : 'translateX(100%)'};
    -ms-transform: ${(props) =>
        props.showMenuOverlay ? 'translateX(0)' : 'translateX(100%)'};
    -o-transform: ${(props) =>
        props.showMenuOverlay ? 'translateX(0)' : 'translateX(100%)'};
    transform: ${(props) =>
        props.showMenuOverlay ? 'translateX(0)' : 'translateX(100%)'};
`;

const UL = styled.ul`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 1.875rem;
    list-style: none;
`;

const LI = styled.li`
    color: ${(props) => props.theme.colors.white};
    font-family: 'Josefin Sans', sans-serif;
    font-size: 2rem;
    font-weight: 300;
    line-height: 1.75;
`;

const MenuLink = styled(Link)`
    color: ${(props) => props.theme.colors.white};
    font-family: 'Josefin Sans', sans-serif;
    font-size: 2rem;
    font-weight: 300;
    line-height: 1.75;
`;

const MenuOverlay = ({ showMenuOverlay }) => {
    return (
        <Container showMenuOverlay={showMenuOverlay}>
            <UL>
                <LI>
                    <MenuLink>ABOUT</MenuLink>
                </LI>
                <LI>
                    <MenuLink>CAREERS</MenuLink>
                </LI>
                <LI>
                    <MenuLink>EVENTS</MenuLink>
                </LI>
                <LI>
                    <MenuLink>PRODUCTS</MenuLink>
                </LI>
                <LI>
                    <MenuLink>SUPPORT</MenuLink>
                </LI>
            </UL>
        </Container>
    );
};

export default MenuOverlay;
