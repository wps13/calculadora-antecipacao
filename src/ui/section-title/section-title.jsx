import React from "react";
import PropTypes from "prop-types";

import "./section-title.styles.scss";

const SectionTitle = (props) => {
  const { title } = props;

  return <h2 className="section-title">{title}</h2>;
};

export default SectionTitle;

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired
};
