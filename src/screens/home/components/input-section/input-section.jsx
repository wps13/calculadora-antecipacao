import React from "react";
import PropTypes from "prop-types";

import { InputUI } from "../../../../ui";

import "./input-section.styles.scss";

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
    <div className="input-section">
      <InputUI
        label="Informe o valor da venda *"
        value={saleAmount}
        onChanged={onSaleAmountChanged}
        placeholder="R$ 1.000,00"
        classname="input-section__input"
      />
      <InputUI
        label="Em quantas parcelas *"
        value={installments}
        onChanged={onInstallmentsChanged}
        placeholder="12"
        classname="input-section__input"
        helperText="Máximo de 12 parcelas"
      />

      <InputUI
        label="Informe o percentual de MDR *"
        value={mdrPercentage}
        onChanged={onMdrPercentageChanged}
        placeholder="20%"
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
