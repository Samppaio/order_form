import React from "react";
import { Container } from "./styles";
import { BsBoxSeam } from "react-icons/bs";

export function RequestHeader() {
  return(
    <Container>
      <p>Formulario<br/>para compra de<br/><span>Pacotes de adesivos</span></p>
      <BsBoxSeam className="icon"/>
    </Container>
  )
}