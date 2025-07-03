import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("<Async /> Component:", () => {
  test("Renders posts if request succeeds", async () => {
    // ! 1. Arrange
    window.fetch = jest.fn(); // overriding the fetch fn with dummy Mock fn (only in testing code!!)
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post!" }], // ^ simulating the success of the Promise, the resData
      // ! we are NOT actually sending an HTTP Request!!
    });
    render(<Async />);

    // ! 2. Act
    // ... nothing

    // ! 3. Assert
    // * findAllByRole(item, { exact: ..., etc... }, { timeoutPeriod (default - 1s) })
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0); // * checks if it's not empty (length !== 0) - one of many ways to get this expectation
  });
});
