import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  position: relative;
  background: var(--blue);
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  border-bottom-right-radius: 20rem;
  padding: 4rem;
  margin-bottom: 4rem;

  p {
    color: var(--white);
    font-size: 2.5rem;
    font-weight: 200;

    span {
      font-weight: 600;
    }
  }

  .icon {
    position: absolute;
    width: 20rem;
    height: 20rem;
    color: var(--light-gray);
    left: 45rem;
  }
`;