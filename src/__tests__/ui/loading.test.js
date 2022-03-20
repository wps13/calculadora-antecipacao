import React from "react";
import { render } from "@testing-library/react";

import { LoadingUI } from "../../ui";

describe("UI - LoadingUI", () => {
  it("should render without message correctly", () => {
    const { getByTestId, findByTestId } = render(<LoadingUI />);

    expect(findByTestId("loading")).toBeDefined();
    expect(getByTestId("loading").children.length).toBe(1);
  });

  it("should render with message correctly", () => {
    const message = "Loading data";

    const { getByTestId, findByTestId } = render(
      <LoadingUI message={message} />
    );

    expect(findByTestId("loading")).toBeDefined();
    expect(getByTestId("loading").children.length).toBe(2);

    expect(getByTestId("loading__message").textContent).toBe(message);
  });
});
