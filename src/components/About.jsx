import React from 'react';
import styled from 'styled-components';

import { H2 } from './elements/Headings';
import { P } from './elements/Paragraph';
import { DesktopImage, MobileImage } from './elements/Image';

import ImageInteractiveMobile from '../images/mobile/image-interactive.jpg';
import ImageInteractiveDesktop from '../images/desktop/image-interactive.jpg';

const Container = styled.article`
    padding: 6.25rem 1.875rem;
    text-align: center;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        padding: 6.25rem 10rem;
        position: relative;
        text-align: left;
    }
`;

const Description = styled.div`
    margin-top: 3.125rem;
    padding: 0 1.5625rem;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        margin-top: 3.75rem;
        width: 40.625rem;
        padding: 5.625rem 6.25rem;
        background-color: ${(props) => props.theme.colors.white};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-30%);
    }
`;

const About = () => {
    return (
        <Container>
            <MobileImage src={ImageInteractiveMobile} alt='Interactive' />
            <DesktopImage src={ImageInteractiveDesktop} alt='Interactive' />
            <Description>
                <H2 marginBottom aboutDesc='2.5rem'>
                    THE LEADER IN INTERACTIVE VR
                </H2>
                <P>
                    Founded in 2011, Loopstudios has been producing world-class
                    virtual reality projects for some of the best companies
                    around the globe. Our award-winning creations have
                    transformed businesses through digital experiences that bind
                    to their brand.
                </P>
            </Description>
        </Container>
    );
};

export default About;
