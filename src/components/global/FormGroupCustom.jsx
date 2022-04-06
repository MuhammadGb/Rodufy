import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CheckBox from "./CheckBox";
import eyeIcon from "../../assets/icons/eye.svg";
import eyeClosed from "../../assets/icons/eyeClosed.svg";
import { FormGroupWrapper, FormGroupLabel } from "./FormGroup";

const CheckboxField = styled.div``;

const handleToggleShowPassword = (e, id) => {
  const field = document.querySelector(`#${id}`);

  if (field.type === "password") {
    field.type = "text";
  } else {
    field.type = "password";
  }
};

const handleCheckboxSelect = (e, id) => {
  e.preventDefault();

  const selectedElCheckbox = document.querySelector(`#${id}`);
  selectedElCheckbox.click();
};

const FormGroupCustom = ({
  className,
  fieldStyle,
  type = "text",
  name,
  label,
  bgCheck,
  required,
  defaultValue,
  noborder,
  color,
  error,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.querySelectorAll(`input`).forEach((input) => {
      input.addEventListener("mousewheel", function (e) {
        e.target.blur();
      });
    });
    // eslint-disable-next-line
  }, []);
  if (type === "checkbox") {
    return (
      <CheckboxField className={`flex-row align-center ${className ?? ""}`}>
        <CheckBox className="checkbox" {...props} bgCheck={bgCheck} id={name} name={name} />
        <FormGroupLabel
          className="cursorPointer"
          htmlFor={name}
          onClick={(e) => handleCheckboxSelect(e, name)}
          style={{ marginBottom: 0, marginLeft: "0.5rem" }}
        >
          {label}
        </FormGroupLabel>
      </CheckboxField>
    );
  }

  return (
    <FormGroupWrapper className={className} fieldStyle={fieldStyle}>
      {label && (
        <FormGroupLabel htmlFor={name}>
          {label}
          {required && <sup>*</sup>}
        </FormGroupLabel>
      )}
      <div
        // className={`fieldWrapper${
        //   meta.touched && meta.error ? " error" : ""
        // }`}
        className={noborder==="true" ? "noBorder" : "fieldWrapper"}
      >
        {fieldStyle === "shortText" && (
          <>
            <input
              className="textSmaller normalLight"
              id={name}
              name={name}
              type={type}
              color={color}
              noborder={noborder}
              defaultValue={defaultValue}
              {...props}
              autoComplete="off"
            />
            {type === "password" && (
              <img
                src={showPassword ? eyeClosed : eyeIcon}
                alt="eyeIcon"
                className="toggleShow cursorPointer"
                onClick={(e) => {
                  setShowPassword((prev) => !prev);
                  handleToggleShowPassword(name);
                }}
              />
            )}
          </>
        )}
        {fieldStyle === "longText" && (
          <>
            <textarea
              className="textSmaller"
              id={name}
              name={name}
              color={color}
              required={required}
              defaultValue={defaultValue}
              {...props}
              autoComplete="off"
            />
          </>
        )}
      </div>

      <span className="l3 colorDanger errorText">{error}</span>
    </FormGroupWrapper>
  );
};

FormGroupCustom.propTypes = {
  className: PropTypes.string,
  fieldStyle: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  noborder: PropTypes.string,
  color: PropTypes.string,
  bgCheck: PropTypes.string,
  error: PropTypes.string,
};

export default FormGroupCustom;
