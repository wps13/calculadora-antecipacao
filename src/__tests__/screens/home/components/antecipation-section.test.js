import React from "react";
import { render } from "@testing-library/react";

import { AntecipationSection } from "../../../../screens/home/components";

describe("Home/Components - AntecipationSection", () => {
  it("should render all values correctly", () => {
    const { findByTestId, getByTestId } = render(
      <AntecipationSection
        tomorrowAmount="22"
        fifteenDaysAmount="14"
        thirtyDaysAmount="30"
        ninetyDaysAmount="100"
      />
    );

    expect(findByTestId("antecipation-section")).toBeDefined();
    expect(getByTestId("antecipation-section").children.length).toBe(4);
    expect(getByTestId("antecipation-section").children[0].textContent).toBe(
      "Amanhã:R$ 22"
    );
    expect(getByTestId("antecipation-section").children[1].textContent).toBe(
      "Em 15 dias:R$ 14"
    );
    expect(getByTestId("antecipation-section").children[2].textContent).toBe(
      "Em 30 dias:R$ 30"
    );
    expect(getByTestId("antecipation-section").children[3].textContent).toBe(
      "Em 90 dias:R$ 100"
    );
  });
});
