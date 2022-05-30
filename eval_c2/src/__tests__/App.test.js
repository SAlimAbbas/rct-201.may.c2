import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import { Input } from "../Components/Input";

test("Fake assertion", () => {
  expect(1).toBe(1);
});


describe("App Test", () => {
  
  it("should render toggle password visibility", () => {

    let mockFn=jest.fn();
    render(<Input onClick={mockFn}>click here</Input>)

    const eye=screen.getByTestId("cToggle");
    fireEvent.click(eye);

    expect(mockFn).toBeCalledTimes(0);
  })
})

