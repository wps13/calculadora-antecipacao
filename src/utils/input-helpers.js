import {
  IS_NUMBER_PATTERN,
  MAXIMUM_MDR_PERCENTAGE,
  MINIMUM_MDR_PERCENTAGE,
  MAXIMUM_INSTALLMENTS,
  MINIMUN_INSTALLMENTS,
  CENTS_PER_REAL
} from "./constants";

export const isStringWithOnlyNumbers = (value) => IS_NUMBER_PATTERN.test(value);

export const isInstallmentBetweenBoundaries = (newInstallments) => {
  const isValid = isStringWithOnlyNumbers(newInstallments);
  const newInstallmentsInt = parseInt(newInstallments, 10);
  return (
    isValid &&
    newInstallmentsInt >= MINIMUN_INSTALLMENTS &&
    newInstallmentsInt <= MAXIMUM_INSTALLMENTS
  );
};

export const isMDRBetweenBoundaries = (percentage) => {
  const hasValidType = isStringWithOnlyNumbers(percentage);
  return (
    hasValidType &&
    percentage <= MAXIMUM_MDR_PERCENTAGE &&
    percentage >= MINIMUM_MDR_PERCENTAGE
  );
};

export const convertSaleToCents = (sale) => {
  if (/\./g.test(sale)) {
    const saleDivided = sale.split(".");
    const decimal = parseInt(saleDivided[1], 10);

    if (decimal < 10) {
      return parseInt(saleDivided[0], 10) * CENTS_PER_REAL + decimal * 10;
    }

    return parseInt(saleDivided[0], 10) * CENTS_PER_REAL + decimal;
  }
  return parseInt(sale, 10) * CENTS_PER_REAL;
};

export const convertCentToReal = ({ responseData, period }) => {
  if (Object.keys(responseData).length === 0) {
    return null;
  }
  const amount = responseData?.data[period];

  return (amount / CENTS_PER_REAL).toFixed(2).toString().replace(".", ",");
};
