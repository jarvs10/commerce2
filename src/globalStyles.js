import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { Theme } from './themes/theme';

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    } 

    body {
        margin: 0;
        padding: 0;
        font-family: 'Lato';
    }

    /* .contenedor {
        width: 97%;
        max-width: 1200px;
        margin: 0 auto;
    } */

    img {
        max-width: 100%;
        display: block;
    }
`;

export const FormControl = styled.section `
  display: flex;
  flex-direction: column;
  span {
    color: red;
    font-weight: bold;
    font-size: 1em;
  }
`;

export const FormControlLabel = styled.label `
  font-size: 1.3em;
  //color: ${Theme.primary_text};
  color: black;
  font-weight: bold;
`;

export const FormControlInput = styled.input `
  outline-color: none;
  font-family: 'Lato';
  font-size: 1.1em;
  //color: ${Theme.primary_text};
  color: black;
  padding: 10px 8px;
  width: 100%;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  border: 2px solid black;
`;

export const FormControlAction = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 100%;
  text-transform: uppercase;
  border: 1px solid black;
  border-radius: 6px;
  padding: 10px 10px;
  font-family: 'Lato';
  color: ${ props => props.textColor || '#f6f6f6'};
  background-color: ${ props => props.bgColor || Theme.primary};
  cursor: pointer;
  font-weight: bold;
  opacity: 0.9;
  &:hover {
    background-color: ${ props => props.bgColor || Theme.primary_intense};
    opacity: 1;
  }
  &:disabled {
    opacity: 50%;
    cursor: not-allowed;
  }
`