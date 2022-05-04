import { render, screen } from "@testing-library/react";
import Calculator from "./Calculator";
import Navbar from "./Navbar";

test("Renders the Page", () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/Calculator/);
  expect(linkElement).toBeInTheDocument();
});

test("Renders the Calculator", () => {
  const { container } = render(<Calculator />);
  // eslint-disable-next-line testing-library/no-node-access
  expect(container.firstChild).toHaveClass("calculator-screen");
});

test("Addition", () => {
    render(<Navbar />);
  // eslint-disable-next-line testing-library/no-node-access
  
});
