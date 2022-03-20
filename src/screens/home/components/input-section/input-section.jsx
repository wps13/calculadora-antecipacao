import React from "react";
import PropTypes from "prop-types";
import IntlCurrencyInput from "react-intl-currency-input";

import { InputUI } from "../../../../ui";

import "./input-section.styles.scss";

const currencyConfig = {
  locale: "pt-BR",
  formats: {
    number: {
      BRL: {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }
    }
  }
};

const InputSection = (props) => {
  const {
    saleAmount,
    onSaleAmountChanged,
    installments,
    onInstallmentsChanged,
    mdrPercentage,
    onMdrPercentageChanged,
    onSubmitInput,
    invalidSaleAmount,
    invalidInstallments,
    invalidMDR
  } = props;
  return (
    <div className="input-section" data-testid="input-section">
      <InputUI
        label="Informe o valor da venda *"
        placeholder="R$ 1.000,00"
        classname={`input-section__input ${invalidSaleAmount ? "invalid" : ""}`}
        name="input-sale"
        helperText={invalidSaleAmount ? "Insira o valor da venda" : null}
      >
        <IntlCurrencyInput
          currency="BRL"
          config={currencyConfig}
          onChange={onSaleAmountChanged}
          value={parseFloat(saleAmount)}
          className="ui-input__input"
          id="input-sale"
          onKeyPress={onSubmitInput}
        />
      </InputUI>
      <InputUI
        label="Em quantas parcelas *"
        value={installments}
        onChanged={onInstallmentsChanged}
        placeholder="12"
        name="input-installments"
        onKeyDown={onSubmitInput}
        classname={`input-section__input ${
          invalidInstallments ? "invalid" : ""
        }`}
        helperText={
          invalidInstallments ? "Insira as parcelas" : "Máximo de 12 parcelas"
        }
      />

      <InputUI
        label="Informe o percentual de MDR *"
        value={mdrPercentage}
        onChanged={onMdrPercentageChanged}
        placeholder="20%"
        name="input-mdr"
        onKeyDown={onSubmitInput}
        classname={invalidMDR ? "invalid" : ""}
        helperText={invalidMDR ? "Insira o percentual de MDR" : null}
      />
    </div>
  );
};

export default InputSection;

InputSection.propTypes = {
  saleAmount: PropTypes.string.isRequired,
  onSaleAmountChanged: PropTypes.func.isRequired,
  installments: PropTypes.string.isRequired,
  onInstallmentsChanged: PropTypes.func.isRequired,
  mdrPercentage: PropTypes.string.isRequired,
  onMdrPercentageChanged: PropTypes.func.isRequired,
  onSubmitInput: PropTypes.func.isRequired,
  invalidSaleAmount: PropTypes.bool.isRequired,
  invalidInstallments: PropTypes.bool.isRequired,
  invalidMDR: PropTypes.bool.isRequired
};
