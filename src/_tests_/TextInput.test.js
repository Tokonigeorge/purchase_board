/**
 * @jest-environment jsdom
 */
import * as React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TextInput from "../components/TextInput";

describe("<TextInput/>", () => {
  test("render text input", () => {
    render(<TextInput />);

    const inputEl = screen.getByTestId("text-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });
  test("pass value", () => {
    render(<TextInput />);

    const inputEl = screen.getByTestId("text-input");
    userEvent.type(inputEl, "Hello World");

    expect(screen.getByTestId("text-input")).toHaveValue("Hello World");
  });
});
