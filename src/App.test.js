import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders main app component", () => {
  const { container } = render(<App />);

  expect(container.firstChild).toMatchSnapshot();
});
