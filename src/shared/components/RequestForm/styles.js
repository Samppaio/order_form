import styled from "styled-components";

export const Container = styled.form`
  font-size: 1.8rem;
  font-weight: 500;
  padding: 0 4rem;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 3rem;
    color: var(--light-black);
  }

  textarea {
    border: 0.1rem solid var(--blue);
    background: var(--gray);
    border-radius: 1rem;
    width: 100%;
    height: 18rem;
    padding: 1.5rem;
    margin-bottom: 5rem;
    font-family: "Source Code Pro", sans-serif;
    font-size: 1.6rem;
    resize: none;
    transition: 0.9s;

    ::placeholder {
      font-size: 1.6rem;
      font-family: "Source Code Pro", sans-serif;
      font-weight: 500;
    }

    :focus {
      outline: 0.1rem solid var(--blue);
      filter: brightness(0.93)
    }
  }
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: 20rem 20rem;
  grid-column-gap: 11rem;
  grid-row-gap: 3rem;
  margin: 0 0 1.5rem 1rem;

  .sticker-icon {
    position: absolute;
    left: 4rem;
    width: 3rem;
    height: 3rem;
    color: var(--blue);
    margin-right: 1rem;
  }
`;