import React from "react";
import PropTypes from "prop-types";

import "./main-title.styles.scss";

const MainTitle = (props) => {
  const { title } = props;

  return <h1 className="main-title">{title}</h1>;
};

export default MainTitle;

MainTitle.propTypes = {
  title: PropTypes.string.isRequired
};
