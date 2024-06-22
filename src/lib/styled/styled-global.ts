import { createGlobalStyle } from 'styled-components'

export const StyledGlobal = createGlobalStyle`
    :root {
      --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

      @media (prefers-reduced-motion: no-preference) {
        scroll-behavior: smooth;
      }
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body,
    html {
      height: 100%;
      position: relative;
    }

    body, .font-family {
        font-family:  var(--font-fira);
    }

    img {
      object-fit: cover;
    }
`
