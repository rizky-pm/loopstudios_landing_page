import React from 'react';
import styled from 'styled-components';

import { Logo } from '../images/svg/BrandLogo';
import { IconFacebook } from '../images/svg/IconFacebook';
import { IconInstagram } from '../images/svg/IconInstagram';
import { IconPinterest } from '../images/svg/IconPinterest';
import { IconTwitter } from '../images/svg/IconTwitter';
import { CopyrightText } from './elements/Paragraph';

const Container = styled.footer`
    padding: 70px 0;
    background-color: ${(props) => props.theme.colors.black};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SvgContainer = styled.div``;

const UL = styled.ul`
    margin-top: 35px;
`;

const LI = styled.li`
    text-align: center;
    &:not(:last-of-type) {
        margin-bottom: 20px;
    }
`;

const Link = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
    font-family: 'Alata', sans-serif;
`;

const SocialMediaContainer = styled.div`
    width: 150px;
    margin-top: 45px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Footer = () => {
    return (
        <Container>
            <SvgContainer>
                <Logo />
            </SvgContainer>
            <UL>
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
                <LI>
                    <Link href='#'>Support</Link>
                </LI>
            </UL>
            <SocialMediaContainer>
                <IconFacebook />
                <IconTwitter />
                <IconPinterest />
                <IconInstagram />
            </SocialMediaContainer>
            <CopyrightText>
                &copy; Loopstudios.All rights reserved.
            </CopyrightText>
        </Container>
    );
};

export default Footer;
