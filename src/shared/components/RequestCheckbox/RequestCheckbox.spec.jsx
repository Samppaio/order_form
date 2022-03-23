import { render, screen, fireEvent} from "@testing-library/react";
import { RequestCheckbox } from ".";

it("should be able to checked", () => {
  render(
    <RequestCheckbox value={true}/>
  )

  const checkbox = screen.getByTestId("checkbox");
  expect(checkbox).toHaveProperty("value", "true")
})

it("should be able to uncheck", () => {

  const onChange = jest.fn()

  render(
    <RequestCheckbox value={true} onChange={onChange}/>
  )

  const checkbox = screen.getByTestId("checkbox");
  fireEvent.click(checkbox)
  expect(onChange).toBeCalled()
})