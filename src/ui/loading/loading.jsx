import React from "react";
import PropTypes from "prop-types";

import "./loading.styles.scss";

const Loading = (props) => {
  const { message } = props;
  return (
    <div className="loading" data-testid="loading">
      <div className="loading__ring">
        <div />
        <div />
        <div />
        <div />
      </div>
      {message && (
        <p className="loading__message" data-testid="loading__message">
          {message}
        </p>
      )}
    </div>
  );
};

export default Loading;

Loading.defaultProps = {
  message: null
};

Loading.propTypes = {
  message: PropTypes.string
};
