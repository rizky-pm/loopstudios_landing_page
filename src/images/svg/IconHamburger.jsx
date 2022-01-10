import React from 'react';
import styled from 'styled-components/macro';
import SvgHeader from '../../customsvg';

const Svg = styled(SvgHeader)`
    width: 1.5rem;
    height: 1rem;
    display: ${(props) => (props.showMenuOverlay ? 'none' : 'block')};
`;

export const IconHamburger = ({ className, showMenuOverlay }) => (
    <Svg
        showMenuOverlay={showMenuOverlay}
        viewBox='0 0 24 16'
        className={className}
    >
        <g fill='#FFF' fillRule='evenodd'>
            <path d='M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z' />
        </g>
    </Svg>
);
