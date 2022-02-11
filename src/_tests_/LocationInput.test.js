import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import LocationInput from "../components/personalInfo/LocationInput";

it("checks value changes when user chooses a new size", () => {
  render(<SelectSizeAndShowSelectedSize />);
  const selectSizeAndShowSelectedSize = screen.getByRole("combobox", {
    name: /choose a size/i,
  });
  expect(selectSizeAndShowSelectedSize).toHaveValue("36");
  userEvent.selectOptions(selectSizeAndShowSelectedSize, "45");
  expect(selectSizeAndShowSelectedSize).toHaveValue("45");
});

describe("<LocationInput/>", () => {
  test("Checks if value changes on user select", () => {
    render(<LocationInput />);
    const inputEl = screen.getByTestId("select-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveValue("Lagos");
    userEvent.selectOptions(inputEl, "Adamawa");
    expect(inputEl).toHaveValue("Adamawa");
  });
});
