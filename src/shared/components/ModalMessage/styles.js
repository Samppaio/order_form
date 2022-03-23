import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  justify-items: center;
  background: var(--gray);
  width: 70rem;
  height: 20rem;
  padding: 4rem;
  position: relative;
  border-radius: 1rem;

  h1 {
    color: var(--light-black);
  }
`;