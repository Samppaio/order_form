import { render, screen, fireEvent} from "@testing-library/react";
import { RequestAmountInput } from ".";

it("should be able to render a subtraction button", () => {
  render(
    <RequestAmountInput />
  )

  const subButton = screen.getByTestId("subButton");
  expect(subButton).toBeTruthy()
})

it("should be able to render a sum button", () => {
  render(
    <RequestAmountInput />
  )

  const sumButton = screen.getByTestId("sumButton");
  expect(sumButton).toBeTruthy()
})

it("should be able to decrease the amount", () => {

  const onClick = jest.fn()

  render(
    <RequestAmountInput subFunction={onClick}/>
  )

  const subButton = screen.getByTestId("subButton");
  fireEvent.click(subButton)
  expect(onClick).toBeCalled()
})

it("should be able to increase the amount", () => {

  const onClick = jest.fn()

  render(
    <RequestAmountInput sumFunction={onClick}/>
  )

  const sumButton = screen.getByTestId("sumButton");
  fireEvent.click(sumButton)
  expect(onClick).toBeCalled()
})