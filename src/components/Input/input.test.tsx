import { Input } from ".";
import { render, screen } from "@testing-library/react-native";

describe("component: input", () => {
  it("should be render input", () => {
    render(<Input placeholder="test" />);

    const input = screen.getByPlaceholderText("test");

    expect(input).toBeTruthy();
  });

  it("should be render input without loading indicator", () => {
    render(<Input placeholder="test" />);

    const loadingIndicator = screen.queryByTestId("loading-indicator");

    expect(loadingIndicator).toBeNull();
  });

  it("should be render input with loading indicator", () => {
    render(<Input placeholder="test" isLoading />);

    const loadingIndicator = screen.getByTestId("loading-indicator");

    expect(loadingIndicator).toBeTruthy();
  });
});
