import React from 'react';
import styled from 'styled-components';

import { Logo } from '../images/svg/BrandLogo';
import { IconHamburger } from '../images/svg/IconHamburger';
import { IconClose } from '../images/svg/IconClose';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 45px 30px;
    position: relative;
    z-index: 10;
`;

const SvgContainer = styled.div``;

const LeftSide = styled.div``;

const RightSide = styled.div``;

const Navbar = ({ showMenuOverlay, setShowMenuOverlay }) => {
    const HamburgerIconHandler = (e) => {
        setShowMenuOverlay((prevstate) => !prevstate);
    };

    return (
        <Nav>
            <LeftSide>
                <SvgContainer>
                    <Logo />
                </SvgContainer>
            </LeftSide>
            <RightSide>
                <SvgContainer onClick={HamburgerIconHandler}>
                    <IconHamburger showMenuOverlay={showMenuOverlay} />
                    <IconClose showMenuOverlay={showMenuOverlay} />
                </SvgContainer>
            </RightSide>
        </Nav>
    );
};

export default Navbar;
