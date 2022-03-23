import { Input, Label } from "./styles";

export function RequestCheckbox({id, value, checked, onChange, onClick, children}) {
  return (
    <Label>
      <Input
        id={id}
        value={value}
        type="checkbox"
        data-testid="checkbox"
        checked={checked}
        onChange={onChange}
        onClick={onClick}
      />
        {children}
    </Label>
  )
}