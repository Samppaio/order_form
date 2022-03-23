import styled from 'styled-components';

export const Input = styled.input`
  
  font-size: 1.6rem;
  font-weight: 500;
  width: 3.5rem;
  text-align: center;
  height: 2.3rem;
  border: 0.1rem solid var(--blue);
  background: var(--white);
  border-radius: 0.5rem;
  margin: 0 1rem;
  top: 0.6rem;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  :focus {
    outline: none;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  position: relative;
  appearance: none;
  width: 2rem;
  height: 2rem;
  border: none;
  background: var(--blue);
  border-radius: 0.5rem;
  margin: 1.5rem 0;
  transition: 0.3s;
  bottom: 0.5rem;

  :hover {
    filter: brightness(0.9);
  }

  .amount-icon {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: var(--white);
    width: 2rem;
    height: 2rem;
  }
`;
