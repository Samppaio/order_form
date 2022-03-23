import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  background: var(--gray);
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;

  button {
    cursor: pointer;
    border: none;
    border-radius: 1rem;
    background: linear-gradient(90deg, var(--aquamarine), var(--blue));
    color: var(--white);
    font-size: 1.8rem;
    font-weight: 600;
    padding: 1rem 0;
    width: 15rem;
    letter-spacing: 0.1rem;
    transition: 0.3s;

    :hover {
      filter: brightness(0.9);
    }
  }
`;