import React from 'react';
import styled from 'styled-components';

import { H2 } from './elements/Headings';
import { H3 } from './elements/Headings';
import { ImageWithText } from './blocks/ImageWithText';
import { GhostButton } from './blocks/Buttons';

import { ImagesData } from '../data';

const Container = styled.article`
    padding: 0 1.875rem 6.25rem 1.875rem;
    text-align: center;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 0.1fr 1.9fr;
        gap: 0rem 0rem;
        grid-template-areas:
            'title button'
            'images images';

        padding: 6.25rem 10rem;
        place-items: center;
    }
`;

const ImagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3.125rem;
    row-gap: 1.875rem;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        grid-area: images;
        justify-content: space-between;
        flex-direction: row;
        row-gap: 1.5625rem;
        flex-wrap: wrap;
    }

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        row-gap: 2.8125rem;
    }
`;

const AbsoluteH3 = styled(H3)`
    position: absolute;
    top: 45%;
    left: 5%;
    text-align: left;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 1.625rem;
    opacity: 0.85;
    width: ${(props) => (props.width ? `${props.width}` : '9.375rem')};

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        top: 80%;
        left: 2.8125rem;
        font-size: 1.75rem;
    }
`;

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    color: ${(props) => props.theme.colors.white};
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.7) 0%,
        rgba(255, 255, 255, 0) 60%
    );
    overflow: hidden;
    position: relative;
    transition: all 0.2s ease;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(255, 255, 255, 0) 60%
        );

        &:hover {
            background: rgba(255, 255, 255, 0.75);
            cursor: pointer;
            color: ${(props) => props.theme.colors.black};
        }
    }
`;

const Creations = () => {
    return (
        <Container>
            <H2 gridArea='title'>OUR CREATIONS</H2>
            <ImagesContainer>
                {ImagesData.map((data) => {
                    return (
                        <ImageWithText
                            key={data.key}
                            mobileUrl={data.mobileUrl}
                            desktopUrl={data.desktopUrl}
                        >
                            <Overlay>
                                <AbsoluteH3 width={data.width}>
                                    {data.text}
                                </AbsoluteH3>
                            </Overlay>
                        </ImageWithText>
                    );
                })}
            </ImagesContainer>

            <GhostButton marginTop='2.5rem'>See All</GhostButton>
        </Container>
    );
};

export default Creations;
