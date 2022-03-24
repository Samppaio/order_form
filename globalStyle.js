import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --light-black:#3b494c;
    --blue: #0055a5;
    --aquamarine: #23a8c1;
    --dark-blue: #191847;
    --light-gray: #f2f2f2;
    --gray: #dde3e8;
    --dark-gray: #a9abc3;
    --white: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  @media (max-width: 768px) {
    html {
      font-size: 60%;
    }
  }

  @media (max-width: 670px) {
    html {
      font-size: 50%;
    }
  }

  @media (max-width: 560px) {
    html {
      font-size: 40%;
    }
  }

  @media (max-width: 425px) {
    html {
      font-size: 35%;
    }
  }

  @media (max-width: 375px) {
    html {
      font-size: 30%;
    }
  }

  @media (max-width: 320px) {
    html {
      font-size: 25%;
    }
  }

  body {
    height: 100vh;
    background: linear-gradient(90deg, var(--blue), var(--aquamarine));
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.1rem;
  }

  li {
    list-style: none;
  }

  .modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
`;