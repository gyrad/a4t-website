import { createGlobalStyle } from "styled-components"
import { normalize } from "./normalize"
import "react-image-gallery/styles/css/image-gallery.css"

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css");

${normalize}

html, body {
  box-sizing: border-box;
  font-family: "Noto Sans", sans-serif;
  line-height: 1.6;
  width: 100vw
}
*,
*::before,
*::after {
  box-sizing: inherit;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
p {
  margin: 0.5rem 0;
}
a {
  color: rgb(28, 116, 204);
  text-decoration: none;
  transition: color 0.3s;
  &:hover {
    color: rgb(92, 167, 241);
    text-decoration: underline;
  }
}
img {
  max-width: 100%;
}
input {
  border: 1px solid #DDD;
  border-radius: 3px;
  padding: 0rem .75rem;
  height: 36px;
  background-color: white;
  :focus {
    outline: none;
    box-shadow: 0 0 0px 3px rgba(34, 193, 195, .3);
    border: 1px solid #6FCDF5;
  }
  ::placeholder {
    color: #BBB;
  }
}

button, input[type="submit"], input[type="button"] {
  padding: .5rem 1rem;
  border-radius: 3px;
  background: #FFF;
  color: #666;
  border: 1px solid #DDD;
  transition: border .3s, color .3s, transform .4s, box-shadow .4s;
  cursor: pointer;
  :hover {
    border-color: #CCC;
    color: #444;
    transform: translateY(-3px);
    box-shadow: 0 2px 8px rgba(0,0,0,.1);
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0px 3px rgba(34, 193, 195, .3);
    border: 1px solid #6FCDF5;
  }
}

select {
  height: 2rem;
  font-size: 1rem;
  border-radius: 3px;
  background: #FFF;
  color: #666;
  border: 1px solid #DDD;
  :focus {
    outline: none;
    box-shadow: 0 0 0px 3px rgba(34, 193, 195, .3);
    border: 1px solid #6FCDF5;
  }
}
  `
