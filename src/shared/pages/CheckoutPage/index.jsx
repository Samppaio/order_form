import React, { useState, useMemo } from "react";
import { CheckoutForm } from "../../components/CheckoutForm";
import { CheckoutSummary } from "../../components/CheckoutSummary";
import { Container, ButtonContainer} from "./styles";
import { Button } from "../../components/Button"
import { useNavigate } from "react-router-dom";
import { useAmountContext } from "../../../context/AmountContext";
import { ModalMessage } from "../../components/ModalMessage";

export function CheckoutPage() {
  const navigation = useNavigate();
  const { handleFinish } = useAmountContext();
  const [ openModal, setOpenModal ] = useState(false);
  const [ cardData, setCardData ] = useState({
    cardNumber: "",
    cardCode: "",
    cardValidity: "",
    name: "",
    cpf: "",
  })

  function closeModal() {
    setOpenModal(false)
    if(isValid) {
      navigation('/')
      handleFinish();
    } 
  }

  const isValid = useMemo(() => {
    return !!cardData.cardNumber && !!cardData.cardCode && !!cardData.cardValidity && !!cardData.name && !!cardData.cpf;
  }, [cardData])

  return(
    <Container>
      <ModalMessage isOpen={openModal} onRequestClose={closeModal}>
        {!isValid ? <h1>Por favor, informe os dados para pagamento.</h1> : <h1>Compra concluída com sucesso!</h1>}
      </ModalMessage>
      <CheckoutSummary />
    
        <CheckoutForm cardData={cardData} setCardData={setCardData}/>
        <ButtonContainer>
          <p>Powered by
            <a 
              href="https://www.bempaggo.com.br/" 
              rel="noreferrer" 
              target="_blank"
            ><img 
              className="logo" 
              src="images/logo.png" 
              alt="Logo BemPaggo" 
            /></a>
          </p>
          <Button 
            onClick={() => {setOpenModal(true)}}
          >
            FINALIZAR
          </Button>
        </ButtonContainer>
      
    </Container>
  )
};