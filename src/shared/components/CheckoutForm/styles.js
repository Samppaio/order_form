import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 0 4rem;

  h2 {
    font-size: 2rem;
    color: var(--light-black);
    margin-bottom: 4rem;
  }

  p {
    font-size: 1.6rem;
    margin-bottom: 6rem;

    .logo {
      position: absolute;
      width: 50rem;
      height: 7rem;
      left: 16rem;
      top: 4.5rem;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  justify-items: end;
`;