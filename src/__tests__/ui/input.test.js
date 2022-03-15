import React from "react";
import { render } from "@testing-library/react";

import { InputUI } from "../../ui";

describe("UI - InputUI", () => {
  it("should render with label correctly", () => {
    const { getByPlaceholderText } = render(
      <InputUI
        onChanged={(value) => value}
        placeholder="Test input"
        label="Test"
        name="test-input"
        value="hello, world"
      />
    );

    const input = getByPlaceholderText("Test input");

    expect(input.value).toBe("hello, world");
  });
});
