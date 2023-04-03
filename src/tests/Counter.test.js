import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter.js";

beforeEach(() => {});

test("renders counter message", () => {
  render(<Counter />);
  const message = screen.getByText("Counter");
  expect(message).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  render(<Counter />);
  const count = screen.getByTestId("count");
  expect(count.textContent).toBe("0");
});

test("clicking + increments the count", () => {
  render(<Counter />);
  const count = screen.getByTestId("count");
  const button = screen.getByText("+");
  expect(count.textContent).toBe("0");
  fireEvent.click(button);
  expect(count.textContent).toBe("1");
});

test("clicking - decrements the count", () => {
  render(<Counter />);
  const count = screen.getByTestId("count");
  const button = screen.getByText("-");
  expect(count.textContent).toBe("0");
  fireEvent.click(button);
  expect(count.textContent).toBe("-1");
});
