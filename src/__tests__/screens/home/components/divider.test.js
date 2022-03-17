import React from "react";
import { render } from "@testing-library/react";

import { Divider } from "../../../../screens/home/components";

describe("Home/Components - Divider", () => {
  it("should render correctly", () => {
    const { findByTestId } = render(<Divider />);

    expect(findByTestId("divider")).toBeDefined();
  });
});
