import React from "react";
import { CheckoutInput } from "../CheckoutInput";
import { Container, Content } from "./styles";

export function CheckoutForm({ cardData, setCardData }) {

  return(
    <Container>
      <h2>Informações de pagamento</h2>
      <p>Aceitamos: 
        <img 
          className="logo" 
          src="images/credit-card-logos.png" 
          alt="credit card logos"
        /></p>
      <Content>
        <CheckoutInput 
          value={cardData.cardNumber} 
          type="number" 
          onChange={(value) => setCardData(prev => ({...prev, cardNumber: value}))}
        >Número do cartão </CheckoutInput>
        <CheckoutInput 
          value={cardData.cardCode} 
          type="number" 
          onChange={(value) => setCardData(prev => ({...prev, cardCode: value}))}
        >Código do cartão </CheckoutInput>
        <CheckoutInput 
          value={cardData.cardValidity} 
          type="month" 
          onChange={(value) => setCardData(prev => ({...prev, cardValidity: value}))}
        >Validade </CheckoutInput>
        <CheckoutInput 
          value={cardData.name} 
          type="text" 
          onChange={(value) => setCardData(prev => ({...prev, name: value}))}
        >Nome do titular </CheckoutInput>
        <CheckoutInput 
          value={cardData.cpf} 
          type="number" 
          onChange={(value) => setCardData(prev => ({...prev, cpf: value}))}
        >CPF </CheckoutInput>
      </Content>
    </Container>
  )
};