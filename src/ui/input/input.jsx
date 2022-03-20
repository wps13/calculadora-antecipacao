/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import PropTypes from "prop-types";

import "./input.styles.scss";

const Input = (props) => {
  const {
    onChanged,
    placeholder,
    value,
    required,
    type,
    label,
    name,
    classname,
    helperText,
    children,
    onKeyDown
  } = props;

  return (
    <div className={`ui-input__container ${classname}`}>
      <label className="ui-input__label" htmlFor={name}>
        {label}
      </label>
      {children}
      {!children && (
        <input
          onChange={onChanged}
          value={value}
          placeholder={placeholder}
          required={required}
          type={type}
          className="ui-input__input"
          id={name}
          onKeyDown={onKeyDown}
        />
      )}
      {helperText && <span className="ui-input__helper">{helperText}</span>}
    </div>
  );
};

export default Input;

Input.defaultProps = {
  required: true,
  type: "text",
  placeholder: "",
  onChanged: () => {},
  classname: "",
  helperText: "",
  children: null,
  value: null,
  onKeyDown: null
};

Input.propTypes = {
  value: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChanged: PropTypes.func,
  classname: PropTypes.string,
  helperText: PropTypes.string,
  children: PropTypes.element,
  onKeyDown: PropTypes.func
};
