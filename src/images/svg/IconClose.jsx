import React from 'react';
import styled from 'styled-components/macro';
import SvgHeader from '../../customsvg';

const Svg = styled(SvgHeader)`
    width: 20px;
    height: 20px;
    display: ${(props) => (props.showMenuOverlay ? 'block' : 'none')};
`;

export const IconClose = ({ className, showMenuOverlay }) => (
    <Svg
        showMenuOverlay={showMenuOverlay}
        viewBox='0 0 20 20'
        className={className}
    >
        <path
            d='M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z'
            fill='#FFF'
            fillRule='evenodd'
        />
    </Svg>
);
