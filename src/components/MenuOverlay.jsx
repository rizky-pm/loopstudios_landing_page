import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: ${(props) => props.theme.colors.black};
    transition: all 1s ease;
    transform: ${(props) =>
        props.showMenuOverlay ? 'translateY(0)' : 'translateY(-100vh)'};
`;

const UL = styled.ul`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 30px;
    list-style: none;
`;

const LI = styled.li`
    color: ${(props) => props.theme.colors.white};
    font-family: 'Josefin Sans', sans-serif;
    font-size: 32px;
    font-weight: 300;
    line-height: 1.75;
`;

const MenuOverlay = ({ showMenuOverlay }) => {
    return (
        <Container showMenuOverlay={showMenuOverlay}>
            <UL>
                <LI>ABOUT</LI>
                <LI>CAREERS</LI>
                <LI>EVENTS</LI>
                <LI>PRODUCTS</LI>
                <LI>SUPPORT</LI>
            </UL>
        </Container>
    );
};

export default MenuOverlay;
