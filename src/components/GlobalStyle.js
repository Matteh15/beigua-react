import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,400;1,600&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;400&display=swap');

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Poppins, sans-serif !important;
        overflow-x: hidden;
    }

    .raleway {
        font-weight: 100 !important;
        font-family: Raleway, sans-serif !important;
    }

    a {
        svg {
            color: white;
        }

        &:visited { 
            color: white;
        }

    }
    }
    
`;

export default GlobalStyle;
