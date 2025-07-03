import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("Renders 'Hello World' as a text", () => {
  // ! 1. Arrange
  render(<Greeting />);

  // ! 2. Act
  // ... nothing

  // ! 3. Assert
  // ^ { exact: true } - (by default)
  const helloWorldElement = screen.getByText("Hello World");
  expect(helloWorldElement).toBeInTheDocument();
});
