import React from "react";
import { render } from "@testing-library/react";

import { MainTitleUI } from "../../ui";

describe("UI - MainTitleUI", () => {
  it("should render with title correctly", () => {
    const title = "Main Page";
    const { getByText } = render(<MainTitleUI title={title} />);

    expect(getByText(title).textContent).toBe(title);
  });
});
