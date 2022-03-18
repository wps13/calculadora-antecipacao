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
    onMdrPercentageChanged
  } = props;
  return (
    <div className="input-section" data-testid="input-section">
      <InputUI
        label="Informe o valor da venda *"
        placeholder="R$ 1.000,00"
        classname="input-section__input"
        name="input-sale"
      >
        <IntlCurrencyInput
          currency="BRL"
          config={currencyConfig}
          onChange={onSaleAmountChanged}
          value={parseFloat(saleAmount)}
          className="ui-input__input"
          id="input-sale"
        />
      </InputUI>
      <InputUI
        label="Em quantas parcelas *"
        value={installments}
        onChanged={onInstallmentsChanged}
        placeholder="12"
        classname="input-section__input"
        helperText="Máximo de 12 parcelas"
        name="input-installments"
      />

      <InputUI
        label="Informe o percentual de MDR *"
        value={mdrPercentage}
        onChanged={onMdrPercentageChanged}
        placeholder="20%"
        name="input-mdr"
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
  onMdrPercentageChanged: PropTypes.func.isRequired
};
