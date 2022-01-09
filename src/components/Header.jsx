import React, { useState } from 'react';
import styled from 'styled-components';

import HeroBackgroundMobile from '../images/mobile/image-hero.jpg';

import { HeaderText } from './blocks/HeaderText';
import MenuOverlay from './MenuOverlay';
import Navbar from './Navbar';

const Container = styled.header`
    background: url(${HeroBackgroundMobile});
    background-repeat: no-repeat;
    background-size: contain;
    min-height: 720px;
    /* padding: 0 25px; */
    position: relative;
`;

const Header = () => {
    const [showMenuOverlay, setShowMenuOverlay] = useState(false);

    return (
        <Container>
            <Navbar
                showMenuOverlay={showMenuOverlay}
                setShowMenuOverlay={setShowMenuOverlay}
            />
            <HeaderText>
                IMMERSIVE <br />
                EXPERIENCES <br /> THAT <br />
                DELIVER
            </HeaderText>
            <MenuOverlay showMenuOverlay={showMenuOverlay} />
        </Container>
    );
};

export default Header;
