import { render } from "@testing-library/react";
import App from "./App";

test("renders hello world text", () => {
  const { getByText } = render(<App />);
  expect(getByText("Hello world")).toBeInTheDocument();
});
