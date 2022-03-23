import React from "react";
import { Container, Table, THeader} from "./styles";
import { useAmountContext } from "../../../context/AmountContext";

export function CheckoutSummary() {
  const { reactAmount, vueAmount, angularAmount} = useAmountContext();
  const total = reactAmount + vueAmount + angularAmount;

  return(
    <Container>
      <h2>Detalhes do pedido</h2>
      <Table>
        <tbody>
          <tr>
            <THeader>Adesivo</THeader>
            <THeader>Quantidade</THeader>
          </tr>
          <tr>
            <td>React</td>
            <td>{reactAmount}</td>
          </tr>
          <tr>
            <td>Vue</td>
            <td>{vueAmount}</td>
          </tr>
          <tr>
            <td>Angular</td>
            <td>{angularAmount}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td><strong>Total</strong></td>
            <td><strong>{total}</strong></td>
          </tr> 
        </tfoot>
        </Table>
    </Container>
  )
}