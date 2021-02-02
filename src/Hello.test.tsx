import { render, screen } from "@testing-library/react";
import Hello from "./Hello";
import { useData } from "./helperFunction";

jest.mock("./helperFunction", () => ({
  useData: jest.fn(),
}));

describe("Hello component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders learn react link", () => {
    render(<Hello {...defaultProps} />);
    const linkElement = screen.getByText(/hello default 0/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("mock return value", () => {
    const mockName: string = "mockValue";
    (useData as jest.Mock).mockReturnValue({ name: mockName, num: 1337 });
    const grabData = useData();
    render(<Hello {...grabData} />);
    expect(screen.getByText(`Hello ${mockName} 1337`)).toBeInTheDocument();
  });
});
const defaultProps = {
  name: "default",
  num: 0,
};
