import React from "react";
import { render } from "@testing-library/react";

import { RequestErrorUI } from "../../ui";

describe("UI - Request Error", () => {
  it("should render without retry button correctly", () => {
    const message = "Took too long, nothing request";
    const { getByTestId, findByTestId } = render(
      <RequestErrorUI message={message} />
    );

    expect(findByTestId("request-error")).toBeDefined();
    expect(getByTestId("request-error").children.length).toBe(1);

    expect(getByTestId("request-error__message").textContent).toBe(message);
  });

  it("should render with message correctly", () => {
    const message = "Ops, bad request";

    const { getByTestId, findByTestId } = render(
      <RequestErrorUI message={message} onRetry={jest.fn} />
    );

    expect(findByTestId("request-error")).toBeDefined();
    expect(getByTestId("request-error").children.length).toBe(2);

    expect(getByTestId("request-error__message").textContent).toBe(message);
  });
});
