import React from "react";
import PropTypes from "prop-types";

import "./text-block.styles.scss";

const TextBlock = (props) => {
  const { label, amount, testID } = props;

  return (
    <p className="text-block__container" data-testid={testID}>
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
  amount: "",
  testID: ""
};

TextBlock.propTypes = {
  label: PropTypes.string,
  amount: PropTypes.string,
  testID: PropTypes.string
};
