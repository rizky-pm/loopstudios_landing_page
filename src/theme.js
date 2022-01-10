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
        xsDevices: 'max-width: 35.9375rem',
        sDevices: 'min-width: 36rem',
        mDevices: 'min-width: 48rem',
        lDevices: 'min-width: 62rem',
        xlDevices: 'min-width: 75rem',
    },
};

const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
