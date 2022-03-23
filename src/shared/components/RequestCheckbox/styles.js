import styled from 'styled-components';

export const Input = styled.input`
  cursor: pointer;
  appearance: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--dark-gray);
  background: white;
  margin-right: 6rem;
  position: relative;
  top: 0.5rem;

  :before {
    content: "";
    position: absolute;
    opacity: 0;
  }

  :checked:before {
    background: none;
    width: 0.7rem;
    height: 1.5rem;
    border-right: 0.4rem solid var(--blue);
    border-bottom: 0.4rem solid var(--blue);
    transform: rotate(40deg);
    opacity: 1;
    transition: 0.1s;
    bottom: 0.5rem;
    left: 0.5rem;
  }
`;

export const Label = styled.label`
  cursor: pointer;
  position: relative;
`;