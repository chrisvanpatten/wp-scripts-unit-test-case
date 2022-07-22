import MyComponent from "./index.js";
import { render } from "@testing-library/react";
import { useSelect } from "@wordpress/data";

jest.mock("@wordpress/data", () => {
  return {
    ...jest.requireActual("@wordpress/data"),
    useSelect: jest.fn().mockReturnValue({}),
  };
});

describe("MyComponent", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("does not render timestamp field if not necessary", () => {
    useSelect.mockImplementation(() => ({
      title: "Title",
    }));

    const { queryByText } = render(<MyComponent prefix="Prefix" />);

    expect(queryByText(/Prefix Title/i)).toBeInTheDocument();
  });
});
