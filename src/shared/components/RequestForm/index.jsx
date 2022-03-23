import React, {useEffect } from "react";
import { FaReact, FaVuejs, FaAngular } from "react-icons/fa";
import { Container, Ul } from "./styles";
import { RequestCheckbox } from "../RequestCheckbox";
import { useAmountContext } from "../../../context/AmountContext";
import { RequestAmountInput } from "../RequestAmountInput";

export function RequestForm({checked, setChecked}) {
  const { 
    reactAmount,
    vueAmount,
    angularAmount,
    setReactAmount,
    setVueAmount,
    setAngularAmount,
    handleSubAmount,
    handleSumAmount
 } = useAmountContext();

useEffect(() => {
  if(!checked.react) {
    setReactAmount(0)
  }
}, [checked.react, setReactAmount])

useEffect(() => {
  if(!checked.vue) {
    setVueAmount(0)
  }
}, [checked.vue, setVueAmount])

useEffect(() => {
  if(!checked.angular) {
    setAngularAmount(0)
  }
}, [checked.angular, setAngularAmount])

  return(
    <Container>
      <h2>Qual adesivo e quantidade?</h2>
      <Ul>
        <li>
        <RequestCheckbox id="react" checked={checked.react} onChange={() => setChecked(prev => ({...prev, react: !prev.react}))}>
            <FaReact className="sticker-icon" />React
          </RequestCheckbox>
        </li>
        <li>
          <RequestAmountInput 
            subFunction={(e) => handleSubAmount(e, 'react')} 
            sumFunction={(e) => handleSumAmount(e, 'react')} 
            value={reactAmount}
            disabled={!checked.react}
          />
        </li>
        <li>
          <RequestCheckbox id="vue" checked={checked.vue} onChange={() => setChecked(prev => ({...prev, vue: !prev.vue}))}>
            <FaVuejs className="sticker-icon" />Vue
          </RequestCheckbox>
        </li>
        <li>
          <RequestAmountInput
            subFunction={(e) => handleSubAmount(e, 'vue')} 
            sumFunction={(e) => handleSumAmount(e, 'vue')} 
            value={vueAmount}
            disabled={!checked.vue}
          />
        </li>
        <li>
          <RequestCheckbox id="angular" checked={checked.angular} onChange={() => setChecked(prev => ({...prev, angular: !prev.angular}))}>
            <FaAngular className="sticker-icon" />Angular
          </RequestCheckbox>
        </li>
        <li>
          <RequestAmountInput
            subFunction={(e) => handleSubAmount(e, 'angular')} 
            sumFunction={(e) => handleSumAmount(e, 'angular')} 
            value={angularAmount}
            disabled={!checked.angular}
          />
        </li>
      </Ul>
      <h2>Observações:</h2>
        <textarea placeholder="Alguma dúvida? Recado?"></textarea>
    </Container>
  )
}