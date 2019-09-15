import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css");

html {
  box-sizing: border-box;
  font-family: "Noto Sans", sans-serif;
  line-height: 1.6;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
  width: 100vw;
}

p {
  margin: 0.5rem 0;
}

.container {
  margin: 0 auto;
  width: 100%;
  max-width: $containerWidth;
  padding: 1rem;
  @include breakpoint(tablet) {
    padding: 1.5rem;
  }

  &--novpadding {
    padding-top: 0;
    padding-bottom: 0;
  }

  &--nohpadding {
    padding-left: 0;
    padding-right: 0;
  }

  &--nopadding {
    padding: 0;
  }
}

a {
  color: rgb(28, 116, 204);
  text-decoration: none;
  transition: color 0.3s;
  &:hover {
    color: rgb(92, 167, 241);
  }
}

img {
  max-width: 100%;
}

#hhdl-quote {
  font-size: 1.4rem;
  @include breakpoint(tablet) {
    font-size: 2.2rem;
  }
}

#hero-wrapper {
  padding: 0.75rem;
  @include breakpoint(tablet) {
    padding: 1rem;
  }
}

/**** UTIL STYLES ****/
.pos-rel {
  position: relative;
}
  `
