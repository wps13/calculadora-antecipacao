import React from "react";
import { render } from "@testing-library/react";

import { TextBlockUI } from "../../ui";

describe("UI - TextBlockUI", () => {
  it("should render with label correctly", () => {
    const { getByTestId } = render(
      <TextBlockUI label="Price" amount="10.99" />
    );

    expect(getByTestId("text-block__label").textContent).toBe("Price");
    expect(getByTestId("text-block__amount").textContent).toBe("R$ 10.99");
  });
});
