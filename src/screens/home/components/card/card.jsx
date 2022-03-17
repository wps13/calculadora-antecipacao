import React from "react";
import PropTypes from "prop-types";

import "./card.styles.scss";

const Card = (props) => {
  const { children } = props;

  return <div className="card">{children}</div>;
};

export default Card;

Card.propTypes = {
  children: PropTypes.element.isRequired
};
