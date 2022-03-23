import styled from "styled-components";

export const Container = styled.div`
  background: var(--light-gray);
  border-radius: 0.8rem;
  width: 70rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background: var(--gray);
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
  padding: 4rem;
  width:100%;

  p {
    font-weight: 500;
    font-size: 1.2rem;
  }

  .logo {
    position: absolute;
    width: 20rem;
    bottom: 4.8rem;
    left: 12.5rem;
  }
`;