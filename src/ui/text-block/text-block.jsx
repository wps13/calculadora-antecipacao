import React from "react";
import PropTypes from "prop-types";

import "./text-block.styles.scss";

const TextBlock = (props) => {
  const { label, amount } = props;

  return (
    <p className="text-block__container">
      <span className="text-block__label" data-testid="text-block__label">
        {label}
      </span>
      <span
        className="text-block__amount"
        data-testid="text-block__amount"
      >{`R$ ${amount}`}</span>
    </p>
  );
};

export default TextBlock;

TextBlock.defaultProps = {
  label: "",
  amount: ""
};

TextBlock.propTypes = {
  label: PropTypes.string,
  amount: PropTypes.string
};
