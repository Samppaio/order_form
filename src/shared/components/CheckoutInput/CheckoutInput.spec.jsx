import { render, screen} from "@testing-library/react";
import { CheckoutInput } from ".";

it("should be able to render a checkout input", () => {
  render(
    <CheckoutInput />
  )

  const checkoutInput = screen.getByTestId("checkoutInput")
  expect(checkoutInput).toBeTruthy()
})