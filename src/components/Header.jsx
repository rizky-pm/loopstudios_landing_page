import React, { useState } from 'react';
import styled from 'styled-components';

import HeroBackgroundMobile from '../images/mobile/image-hero.jpg';
import HeroBackgroundDesktop from '../images/desktop/image-hero.jpg';

import { HeaderText } from './blocks/HeaderText';
import MenuOverlay from './MenuOverlay';
import Navbar from './Navbar';

const Container = styled.header`
    background: url(${HeroBackgroundMobile});
    background-repeat: no-repeat;
    background-size: contain;
    min-height: 48rem;
    /* width: 100%; */
    position: relative;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        background: url(${HeroBackgroundDesktop});
        background-repeat: no-repeat;
    }
`;

const Header = () => {
    const [showMenuOverlay, setShowMenuOverlay] = useState(false);

    return (
        <Container>
            <Navbar
                showMenuOverlay={showMenuOverlay}
                setShowMenuOverlay={setShowMenuOverlay}
            />
            <HeaderText>IMMERSIVE EXPERIENCES THAT DELIVER</HeaderText>
            <MenuOverlay showMenuOverlay={showMenuOverlay} />
        </Container>
    );
};

export default Header;
