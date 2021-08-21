import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

   :root{
        --background: #FFFFFF;
        --gray: #202023;
        --green: #56a05e;
        --purple: #876ce6;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, textarea, button, select {
        font: 400 1rem 'Poppins', sans-serif;
    }

    button {
        cursor: pointer;
        border: none;
    }

    a, ul, li {
        color: inherit;
        text-decoration: none;
    }

    @media (max-width: 1080px){
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px){
        html {
            font-size: 87.5%;
        }
    }

    @media (max-width: 600px){
        html {
            font-size: 80.5%;
        }
    }

    @media (max-width: 500px){
        html {
            font-size: 70.5%;
        }
    }

`;