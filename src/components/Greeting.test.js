import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Greeting from "./Greeting";

// * describe(descOfThe'Category', testFn)
describe("<Greeting /> Component:", () => {
  test("Renders 'Hello World!' as a text", () => {
    // ! 1. Arrange
    render(<Greeting />);

    // ! 2. Act
    // ... nothing

    // ! 3. Assert
    // ^ { exact: true } - (by default)
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("Renders 'good to see you!' if the button was NOT clicked", () => {
    // ! 1. Arrange
    render(<Greeting />);

    // ! 2. Act
    // ... nothing

    // ! 3. Assert
    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("Renders 'Changed!' if the button WAS clicked", async () => {
    // ! 1. Arrange
    render(<Greeting />);

    // ! 2. Act
    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);

    // ! 3. Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("Does not render 'good to see you!' if the button was clicked", async () => {
    // ! 1. Arrange
    render(<Greeting />);

    // ! 2. Act
    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);

    // ! 3. Assert
    const outputElement = screen.queryByText("good to see you!", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
