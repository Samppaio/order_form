import React from "react";
import { Input, Label } from "./styles";

export function CheckoutInput({value, type, onChange, children}) {
  return(
    <Label data-testid="checkoutInput">
      {children}<Input value={value || ""} type={type} onChange={(e) => onChange(e.target.value)}/>
    </Label>
  )
};