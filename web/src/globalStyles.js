import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Ubuntu", sans-serif;
    }

    html {
        font-size: 62.5%;
    }

    body {
        min-height: 100vh;
    }
`;
