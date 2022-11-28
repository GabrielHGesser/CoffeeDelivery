import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif; 
  }

  body {
    background: ${(props) => props.theme["background"]};
  }


  /* font-family: 'Baloo 2', cursive;
  font-family: 'Roboto', sans-serif; */

  body, input, button, select, textarea{
    font-size: 1rem;
    line-height: 130%;
    font-weight: 400;
  }
`;
