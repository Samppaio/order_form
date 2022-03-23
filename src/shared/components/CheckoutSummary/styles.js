import styled from "styled-components";

export const Container = styled.div`
  border-radius: 0.8rem;
  padding: 4rem;
  max-width: 70rem;
  width: 100%;

  h2 {
    color: var(--light-black);
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

export const Table = styled.table`
  font-size: 1.6rem;
  text-align: center;
  width: 100%;
  table-layout: fixed;
`;

export const THeader = styled.th`
  color: var(--white);
  background: var(--blue);
  border-radius: 2rem;
`;