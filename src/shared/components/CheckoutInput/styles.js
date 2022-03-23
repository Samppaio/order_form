import styled from "styled-components";

export const Label = styled.label`
  font-size: 1.6rem;
`;

export const Input = styled.input`
  border: none;
  border-radius: 0.8rem;
  width: 45rem;
  height: 4rem;
  margin-bottom: 4rem;
  padding: 0 2rem;
  font-size: 1.6rem;
  border: 0.1rem solid var(--dark-gray);

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  :focus {
    outline: none;
  }
`;