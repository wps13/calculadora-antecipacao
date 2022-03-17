import React from "react";
import { render } from "@testing-library/react";

import { Card } from "../../../../screens/home/components";

describe("Home/Components - Card", () => {
  it("should render correctly", () => {
    const { findByTestId, getByText } = render(
      <Card>
        <p>Hello</p>
      </Card>
    );

    expect(findByTestId("card")).toBeDefined();
    expect(getByText("Hello").textContent).toBe("Hello");
  });
});
