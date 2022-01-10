import React from 'react';
import styled from 'styled-components';

import { UL, LI } from './elements/List';
import { Link } from './elements/Link';

import { Logo } from '../images/svg/BrandLogo';
import { IconHamburger } from '../images/svg/IconHamburger';
import { IconClose } from '../images/svg/IconClose';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.8125rem 1.25rem;
    position: relative;
    z-index: 10;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        padding: 2.8125rem 3.75rem;
    }

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        padding: 3.75rem 10rem;
    }
`;

const SvgContainer = styled.div`
    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        display: ${(props) => (props.iconHamburger ? 'none' : 'block')};
    }

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
    }
`;

const LeftSide = styled.div``;

const RightSide = styled.div``;

const RowUl = styled(UL)`
    display: none;
    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        display: flex;
        list-style: none;
    }
`;

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
                <SvgContainer iconHamburger onClick={HamburgerIconHandler}>
                    <IconHamburger showMenuOverlay={showMenuOverlay} />
                    <IconClose showMenuOverlay={showMenuOverlay} />
                </SvgContainer>
                <RowUl>
                    <LI>
                        <Link href='#'>About</Link>
                    </LI>
                    <LI>
                        <Link href='#'>Careers</Link>
                    </LI>
                    <LI>
                        <Link href='#'>Events</Link>
                    </LI>
                    <LI>
                        <Link href='#'>Products</Link>
                    </LI>
                    <LI lastLi>
                        <Link href='#'>Support</Link>
                    </LI>
                </RowUl>
            </RightSide>
        </Nav>
    );
};

export default Navbar;
