import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

export const theme = {
    colors: {
        white: 'rgb(255, 255, 255)',
        black: 'rgb(0, 0, 0)',
        darkGray: 'rgb(140, 140, 140)',
        veryDarkGray: 'rgb(105, 105, 105)',
    },
    breakpoints: {
        xsDevices: 'max-width: 575px',
        sDevices: 'min-width: 576px',
        mDevices: 'min-width: 768px',
        lDevices: 'min-width: 992px',
        xlDevices: 'min-width: 1200px',
    },
};

const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
