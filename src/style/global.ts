import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root{

    --background: #0E0F19;


  }

    *{
      margin: 0 ;
      padding: 0 ;
    }

    body{
      background-color: var(--background);
      font-family:sans-serif ;
    }






`