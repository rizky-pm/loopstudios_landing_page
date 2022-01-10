import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 93.75%;

        ::-webkit-scrollbar {
            display: none;
        }
    }

    body {
        /* font-family: 'Alata', sans-serif; */
        /* font-family: 'Josefin Sans', sans-serif; */
    }
`;

export default GlobalStyles;
