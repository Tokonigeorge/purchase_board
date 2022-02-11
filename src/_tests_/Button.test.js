import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  test("eventHandler called on click", () => {
    const handleClick = jest.fn();
    render(
      <button onClick={handleClick} type="button">
        Click Me
      </button>
    );

    userEvent.click(screen.getByRole("button"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
