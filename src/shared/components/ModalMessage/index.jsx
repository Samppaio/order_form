import React from "react";
import  Modal from "react-modal";
import { Button } from "../Button";
import { Container } from "./styles";

Modal.setAppElement("#root");

export function ModalMessage({isOpen, onRequestClose, children}) {
  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modal-overlay"
      className="modal-container"
      data-testId="modal"
      ariaHideApp={false}
    >
      <Container>
        {children}
        <Button type="button" onClick={onRequestClose}>Ok</Button>
      </Container>
    </Modal>
  )
}