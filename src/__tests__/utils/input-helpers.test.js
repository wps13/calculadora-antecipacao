import {
  isStringWithOnlyNumbers,
  isInstallmentBetweenBoundaries,
  isMDRBetweenBoundaries,
  convertSaleToCents,
  convertCentToReal
} from "../../utils/input-helpers";

describe("Utils/Input Helpers - isStringWithOnlyNumbers", () => {
  it("should return true when only contains numbers", () => {
    expect(isStringWithOnlyNumbers("123")).toBeTruthy();
  });
  it("should return false when contains letters and symbols", () => {
    expect(isStringWithOnlyNumbers("123f.")).toBeFalsy();
  });
});

describe("Utils/Input Helpers - isInstallmentBetweenBoundaries", () => {
  it("should return true when passed 10", () => {
    expect(isInstallmentBetweenBoundaries("10")).toBeTruthy();
  });
  it("should return false when passed 32", () => {
    expect(isInstallmentBetweenBoundaries("32")).toBeFalsy();
  });
});

describe("Utils/Input Helpers - isMDRBetweenBoundaries", () => {
  it("should return true when passed 22", () => {
    expect(isMDRBetweenBoundaries("22")).toBeTruthy();
  });
  it("should return false when passed 200", () => {
    expect(isMDRBetweenBoundaries("200")).toBeFalsy();
  });
});

describe("Utils/Input Helpers - convertSaleToCents", () => {
  it("should return 1000 when 10 is passed", () => {
    expect(convertSaleToCents("10")).toBe(1000);
  });
  it("should return 2220 when 22.2 is passed", () => {
    expect(convertSaleToCents("22.2")).toBe(2220);
  });
  it("should return 5421 when 54.21 is passed", () => {
    expect(convertSaleToCents("54.21")).toBe(5421);
  });
  it("should return 3235421 when 32354.21 is passed", () => {
    expect(convertSaleToCents("32354.21")).toBe(3235421);
  });
});

describe("Utils/Input Helpers - convertCentToReal", () => {
  it("should return 150 when 15000 is passed", () => {
    expect(
      convertCentToReal({ responseData: { data: { 1: 15000 } }, period: "1" })
    ).toBe("150,00");
  });
  it("should return 17,97 when 1797 is passed", () => {
    expect(
      convertCentToReal({ responseData: { data: { 15: 1797 } }, period: "15" })
    ).toBe("17,97");
  });
  it("should return null when there's no response data", () => {
    expect(convertCentToReal({ responseData: {}, period: "30" })).toBe(null);
  });
});
