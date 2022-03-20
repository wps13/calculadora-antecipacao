import React from "react";
import PropTypes from "prop-types";

import "./request-error.styles.scss";

const RequestError = (props) => {
  const { message, onRetry } = props;

  return (
    <div className="request-error__container" data-testid="request-error">
      <p
        className="request-error__message"
        data-testid="request-error__message"
      >
        {message}
      </p>
      {onRetry && (
        <button onClick={onRetry} type="button">
          Tentar novamente
        </button>
      )}
    </div>
  );
};

RequestError.defaultProps = {
  onRetry: null
};

export default RequestError;

RequestError.propTypes = {
  message: PropTypes.string.isRequired,
  onRetry: PropTypes.func
};
