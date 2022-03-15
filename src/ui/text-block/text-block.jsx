import React from "react";
import PropTypes from "prop-types";

import "./text-block.styles.scss";

const TextBlock = (props) => {
  const { label, amount } = props;

  return (
    <div className="text-block__container">
      <p className="text-block__label" data-testid="text-block__label">
        {label}
      </p>
      <p
        className="text-block__amount"
        data-testid="text-block__amount"
      >{`R$ ${amount}`}</p>
    </div>
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
