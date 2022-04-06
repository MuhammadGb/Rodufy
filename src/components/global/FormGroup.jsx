import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CheckBox from "./CheckBox";
import eyeIcon from "../../assets/icons/eye.svg";
import eyeClosed from "../../assets/icons/eyeClosed.svg";
import { useField } from "formik";
import { useState } from "react";

export const FormGroupWrapper = styled.div`
  .fieldWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 9px;
    height: ${(props) => (props.fieldStyle === "longText" ? "auto" : "5rem")};
    border: 1px solid #c4c4c4;
    position: relative;
    width: 30.5rem;
    background: #f1efef;

    &.error {
      border-color: var(--danger);
    }
  }
  .noBorder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 9px;
    height: ${(props) => (props.fieldStyle === "longText" ? "auto" : "5rem")};
    border: none;
    position: relative;
    width: 30.5rem;
    background: #f1efef;
  }

  @media screen and (max-width: 768px) {
    .noBorder {
      height: ${(props) => (props.fieldStyle === "longText" ? "auto" : "4rem")};
      width: 21rem;
    }
    .errorText {
      width: 18rem !important;
    }
  }
  @media screen and (max-width: 500px) {
    .noBorder {
      height: ${(props) => (props.fieldStyle === "longText" ? "auto" : "3rem")};
      width: 18rem;
    }
    .errorText {
      width: 15rem !important;
    }
  }

  input,
  textarea,
  select {
    display: block;
    color: ${(props) => props.color ?? "var(--grey_1)"};
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    background-color: transparent;
    border: none;
    font-size: 21px;
    font-style: normal;
    font-weight: 400;

    &::placeholder {
      color: var(--grey_9);
    }
  }

  select {
    cursor: pointer;
    color: #6e7191;
  }

  .toggleShow {
    display: none;
  }

  &.password {
    input,
    textarea {
      width: 85%;
    }

    .toggleShow {
      display: inline;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 1.5rem;
      height: 1.5rem;
    }
  }
  textarea {
    overflow: hidden;
    height: 4.5rem;
    padding: 1.5rem 0.6rem 1.5rem 0.8rem;
  }

  .dropdownIcon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1.5rem;
    pointer-events: none;
  }

  .errorText {
    display: block;
    width: 100%;
    text-align: left;
    margin-top: 0.6rem;
  }
`;

export const FormGroupLabel = styled.label`
  display: block;
  color: var(--body_text);
  font-weight: 400;
  margin-bottom: 0.3rem;
  text-align: left;

  sup {
    color: var(--danger);
  }
`;

const CheckboxField = styled.div``;

const handleToggleShowPassword = (id) => {
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

const FormGroup = ({
  className,
  fieldStyle,
  type = "text",
  name,
  value,
  label,
  bgCheck,
  required = true,
  defaultValue,
  color,
  noborder,
  onChange,
  rowIndex,
  ...props
}) => {
  const [field, meta] = useField({ ...props, name });
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
      <CheckboxField
        className={`flex-row align-center ${className ?? ""} bodySmall`}
      >
        <CheckBox
          className="checkbox"
          bgCheck={bgCheck}
          id={name}
          name={name}
        />
        <FormGroupLabel
          className="cursorPointer lightBold regular"
          htmlFor={name}
          onClick={(e) => handleCheckboxSelect(e, name)}
          style={{ marginBottom: 0, marginLeft: "0.5rem", color: color ?? "" }}
        >
          {label}
        </FormGroupLabel>
      </CheckboxField>
    );
  }

  return (
    <>
      <FormGroupWrapper className={className} fieldStyle={fieldStyle}>
        {label && (
          <FormGroupLabel htmlFor={name}>
            {label}
            <sup>*</sup>
          </FormGroupLabel>
        )}
        <div
          className={`${noborder === "no" ? "noBorder" : "fieldWrapper"} ${
            meta.touched && meta.error ? " error" : ""
          }`}
        >
          {fieldStyle === "shortText" && (
            <>
              <input
                {...field}
                className="textSmaller normalLight"
                id={name}
                name={name}
                noborder={noborder}
                type={type}
                defaultValue={defaultValue}
                maxLength={type === "special" ? "1" : ""}
                onKeyPress={(event) =>
                  type === "special" &&
                  !/[0-9]/.test(event.key) &&
                  event.preventDefault()
                }
                onChange={(e) => {
                  onChange && onChange(rowIndex, name, e.target.value);
                  field.onChange(e);
                }}
                value={value || field.value}
                {...props}
                autoComplete="off"
              />
              {type === "password" && (
                <img
                  src={showPassword ? eyeIcon : eyeClosed}
                  alt="eye"
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
                className="textSmaller normalLight"
                id={name}
                name={name}
                required={required}
                defaultValue={defaultValue}
                {...field}
                {...props}
                onChange={(e) => {
                  onChange && onChange(rowIndex, name, e.target.value);
                  field.onChange(e);
                }}
                value={value || field.value}
                autoComplete="off"
              />
            </>
          )}
        </div>
        {meta.touched && meta.error && (
          <span className="l3 colorDanger errorText">{meta.error}</span>
        )}
      </FormGroupWrapper>
    </>
  );
};

FormGroup.propTypes = {
  className: PropTypes.string,
  fieldStyle: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  noborder: PropTypes.string,
  color: PropTypes.string,
  bgCheck: PropTypes.string,
  rowIndex: PropTypes.number,
};

export default FormGroup;
