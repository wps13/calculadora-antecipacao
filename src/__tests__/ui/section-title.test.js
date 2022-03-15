import React from "react";
import { render } from "@testing-library/react";

import { SectionTitleUI } from "../../ui";

describe("UI - SectionTitleUI", () => {
  it("should render with title correctly", () => {
    const title = "Section";
    const { getByText } = render(<SectionTitleUI title={title} />);

    expect(getByText(title).textContent).toBe(title);
  });
});
