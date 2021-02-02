import { render, screen } from "@testing-library/react";
import Hello from "./Hello";
// import useData from "./helperFunction";
const helperFunc = require("./helperFunction");
describe("Hello component", () => {
  test("renders learn react link", () => {
    render(<Hello {...defaultProps} />);
    const linkElement = screen.getByText(/hello default/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("use different props", () => {
    const spy = jest.spyOn(helperFunc, "useData");
    const grabData = helperFunc.useData();

    render(<Hello {...grabData} />);
    const linkElement = screen.getByText(/hello test/i);
    expect(spy).toBeCalledTimes(1);
  });
});
const defaultProps = {
  name: "default",
};
