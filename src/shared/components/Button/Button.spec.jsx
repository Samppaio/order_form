import { render, screen, fireEvent} from "@testing-library/react";
import { Button } from ".";

it("should be able to render a Button", () => {
  render(
    <Button />
  )

  const button = screen.getByTestId("button");
  expect(button).toBeTruthy()
})

it("should be able to click the Button", () => {
  
  const onClick = jest.fn()
  
  render(
    <Button onClick={onClick}/>
  )


  const button = screen.getByTestId("button");
  fireEvent.click(button)
  expect(onClick).toBeCalled()
})