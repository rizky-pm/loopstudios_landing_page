import React from 'react';
import styled from 'styled-components';

import { H2 } from './elements/Headings';
import { P } from './elements/Paragraph';
import { Image } from './elements/Image';

import ImageInteractive from '../images/mobile/image-interactive.jpg';

const Container = styled.article`
    padding: 100px 30px;
    text-align: center;
`;

const Description = styled.div`
    margin-top: 50px;
    padding: 0 25px;
`;

const About = () => {
    return (
        <Container>
            <Image src={ImageInteractive} alt='Interactive' />
            <Description>
                <H2 marginBottom>THE LEADER IN INTERACTIVE VR</H2>
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
