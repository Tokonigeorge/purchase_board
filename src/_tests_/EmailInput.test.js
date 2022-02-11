/**
 * @jest-environment jsdom
 */
import * as React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import EmailInput from "../components/personalInfo/EmailInput";

describe("<TextInput/>", () => {
  test("render email input", () => {
    render(<EmailInput />);

    const inputEl = screen.getByTestId("email-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "email");
  });
  test("pass valid email", () => {
    render(<EmailInput />);

    const inputEl = screen.getByTestId("email-input");
    userEvent.type(inputEl, "test@gmail.com");

    expect(screen.getByTestId("email-input")).toHaveValue("test@gmail.com");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });
  test("pass invalid email to test input value", () => {
    render(<EmailInput />);

    const inputEl = screen.getByTestId("email-input");
    userEvent.type(inputEl, "test");

    expect(screen.getByTestId("email-input")).toHaveValue("test");
    expect(screen.queryByTestId("error-msg")).toBeInTheDocument();
    expect(screen.queryByTestId("error-msg").textContent).toEqual(
      "Please enter a valid email."
    );
  });
});
