import { createGlobalStyle } from "styled-components";

import colors from "./colors";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: none;

        text-decoration: none;
        font-family: 'Poppins', sans-serif;

        box-sizing: border-box;
    }

    body::-webkit-scrollbar {
        min-height: 100vh;
        display: none;
    }
`;