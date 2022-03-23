import React from "react";
import { Container } from "./styles";

export function Button({type, onClick, disabled, children}) {

  return(
    <Container>
      <button type={type} data-testid="button" onClick={onClick} disabled={disabled}>{children}</button>
    </Container>
  )
}