/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import PropTypes from "prop-types";

import "./input.styles.scss";

const Input = (props) => {
  const { onChanged, placeholder, value, required, type, label, name } = props;

  return (
    <div className="ui-input__container">
      <label className="ui-input__label" htmlFor={name}>
        {label}
      </label>
      <input
        onChange={onChanged}
        value={value}
        placeholder={placeholder}
        required={required}
        type={type}
        className="ui-input__input"
        id={name}
      />
    </div>
  );
};

export default Input;

Input.defaultProps = {
  required: true,
  type: "text",
  placeholder: "",
  onChanged: () => {}
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChanged: PropTypes.func
};
