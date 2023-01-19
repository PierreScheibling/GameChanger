import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.App{
  height: calc(var(--vh, 1vh) * 100);
}

html {
  font-size: 16px;
  &::-webkit-scrollbar{
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
  }
}

body {
  font-family: 'Montserrat', sans-serif;
  width: 100%;
}

h1 {
  font-size: clamp(2rem, 3.5vw, 8rem);
  font-family: 'Abril Fatface', cursive;
  font-weight: lighter;
  color: #333;
}

h2 {
  font-size: clamp(1.5rem, 2vw, 6rem);
  font-family: 'Abril Fatface', cursive;
  font-weight: lighter;
  color: #333;
}

h3 {
  font-size: clamp(1rem, 1.3vw, 5rem);
  color: #333;
  padding-top: clamp(1rem, 1vw, 4rem);
  padding-bottom: clamp(0.2rem, 0.4vw, 2rem);
}
p {
  font-size: clamp(1rem, 1vw, 2rem);
  color: #696969;
}

a {
  text-decoration: none;
  color: #333;
}

img {
  display: block;
}

input {
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
}

`;

export default GlobalStyles;
