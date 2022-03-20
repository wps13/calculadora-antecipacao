import React from "react";
import { render } from "@testing-library/react";

import { InputSection } from "../../../../screens/home/components";

describe("Home/Components - InputSection", () => {
  it("should render correctly", () => {
    const { findByTestId, getByTestId } = render(
      <InputSection
        saleAmount="20"
        onSaleAmountChanged={jest.fn}
        onInstallmentsChanged={jest.fn}
        onMdrPercentageChanged={jest.fn}
        installments="2"
        mdrPercentage="2.9"
        onSubmitInput={jest.fn}
        invalidInstallments={false}
        invalidMDR={false}
        invalidSaleAmount={false}
      />
    );

    expect(findByTestId("input-section")).toBeDefined();
    expect(getByTestId("input-section").children.length).toBe(3);
  });
});
