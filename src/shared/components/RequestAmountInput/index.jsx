import { RiAddFill, RiSubtractFill } from "react-icons/ri";
import { Button, Input } from "./styles";

export function RequestAmountInput({subFunction, sumFunction, value, disabled}) {
  return (
    <>
      <Button data-testid="subButton" onClick={subFunction}>
        <RiSubtractFill className="amount-icon" />
      </Button>
      <label>
        <Input
          name="amount" 
          type="number"
          value={value}
          disabled
        />
      </label>
      <Button data-testid="sumButton" onClick={sumFunction} disabled={disabled}>
        <RiAddFill className="amount-icon" />
      </Button>
    </>
  )
};