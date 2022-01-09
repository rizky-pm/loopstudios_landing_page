import React from 'react';
import styled from 'styled-components';

import { H2 } from './elements/Headings';
import { H3 } from './elements/Headings';
import { ImageWithText } from './blocks/ImageWithText';
import { GhostButton } from './blocks/Buttons';

import { ImagesData } from '../data';

const Container = styled.article`
    padding: 0 30px 100px 30px;
    text-align: center;
`;

const ImagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    row-gap: 30px;
`;

const AbsoluteH3 = styled(H3)`
    position: absolute;
    top: 45%;
    left: 5%;
    text-align: left;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 26px;
    opacity: 0.75;
    width: ${(props) => (props.width ? `${props.width}` : '150px')};
`;

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0);
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.7) 0%,
        rgba(255, 255, 255, 0) 60%
    );
    overflow: hidden;
    position: relative;
`;

const Creations = () => {
    return (
        <Container>
            <H2>OUR CREATIONS</H2>
            <ImagesContainer>
                {ImagesData.map((data) => {
                    return (
                        <ImageWithText key={data.key} url={data.url}>
                            <Overlay>
                                <AbsoluteH3 width={data.width}>
                                    {data.text}
                                </AbsoluteH3>
                            </Overlay>
                        </ImageWithText>
                    );
                })}
            </ImagesContainer>

            <GhostButton marginTop='40px'>See All</GhostButton>
        </Container>
    );
};

export default Creations;
