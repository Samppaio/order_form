import React, { useMemo, useState } from "react";
import { Button } from "../../components/Button";
import { RequestForm } from "../../components/RequestForm";
import { RequestHeader } from "../../components/RequestHeader";
import { ButtonContainer, Container } from "./styles";
import { useNavigate } from 'react-router-dom';
import { ModalMessage } from "../../components/ModalMessage";

export function RequestPage() {
  const navigation = useNavigate();
  const [ openModal, setOpenModal ] = useState()

  const [ checked, setChecked] = useState({
    react: false,
    vue: false,
    angular: false,
  });

  const isChecked = useMemo(() => {
    return checked.react || checked.vue || checked.angular;
  }, [checked]);

  function closeModal() {
    setOpenModal(false)
  }

  console.log(isChecked)
  console.log(openModal)

  return (
    <Container>
      <ModalMessage isOpen={openModal} onRequestClose={closeModal}>
        <h1>Por favor, selecione ao menos uma opção.</h1>
      </ModalMessage>
      <RequestHeader />
      <RequestForm checked={checked} setChecked={setChecked}/>
      <ButtonContainer>
        <Button 
        type="button" 
        onClick={() => {
          if(!isChecked) {
            setOpenModal(true)
          } else {navigation("/checkout")}
        }} 
        >
          CONFIRMAR
      </Button>
      </ButtonContainer>
    </Container>
  )
};