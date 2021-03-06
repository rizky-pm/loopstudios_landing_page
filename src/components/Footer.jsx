import React from 'react';
import styled from 'styled-components';

import { UL, LI } from './elements/List';
import { Link } from './elements/Link';

import { Logo } from '../images/svg/BrandLogo';
import { IconFacebook } from '../images/svg/IconFacebook';
import { IconInstagram } from '../images/svg/IconInstagram';
import { IconPinterest } from '../images/svg/IconPinterest';
import { IconTwitter } from '../images/svg/IconTwitter';
import { CopyrightText } from './elements/Paragraph';

const Container = styled.footer`
    padding: 4.375rem 0;
    background-color: ${(props) => props.theme.colors.black};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        height: 12.5rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        /* gap: 0rem 0rem; */
        row-gap: 1.25rem;
        grid-template-areas:
            'brand social-media'
            'links copyright'
            'attribution attribution';

        padding: 2.5rem 10rem;
    }
`;

const SvgContainer = styled.div`
    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        grid-area: brand;
        justify-self: flex-start;
    }
`;

const SocialMediaContainer = styled.div`
    width: 9.375rem;
    margin-top: 2.8125rem;
    margin-bottom: 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        grid-area: social-media;
        justify-self: flex-end;
        margin: 0;
    }
`;

const FooterUL = styled(UL)`
    margin-top: 2.1875rem;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        display: flex;
        margin-top: 0;
    }
`;

const Attribution = styled.div`
    grid-area: attribution;
    margin-top: 1.875rem;
    width: 65%;
    text-align: center;
    color: ${(props) => props.theme.colors.darkGray};
    font-family: 'Alata', sans-serif;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        text-align: left;
        margin-top: 0;
        width: auto;
        justify-self: flex-end;
    }
`;

const AttributionLink = styled(Link)`
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
        color: ${(props) => props.theme.colors.white};
    }
`;

const Footer = () => {
    return (
        <Container>
            <SvgContainer>
                <Logo footer />
            </SvgContainer>
            <FooterUL footer>
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
            </FooterUL>
            <SocialMediaContainer>
                <Link href='#'>
                    <IconFacebook />
                </Link>
                <Link twitter href='#'>
                    <IconTwitter />
                </Link>
                <Link href='#'>
                    <IconPinterest />
                </Link>
                <Link href='#'>
                    <IconInstagram />
                </Link>
            </SocialMediaContainer>
            <CopyrightText>
                &copy; Loopstudios. All rights reserved.
            </CopyrightText>
            <Attribution>
                Challenge by{' '}
                <AttributionLink
                    href='https://www.frontendmentor.io?ref=challenge'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Frontend Mentor
                </AttributionLink>
                . Coded by{' '}
                <AttributionLink href='https://github.com/rizky-pm'>
                    Rizky Putra Mahendra
                </AttributionLink>
                ????
            </Attribution>
        </Container>
    );
};

export default Footer;
