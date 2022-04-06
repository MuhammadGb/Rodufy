import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  height: ${(props) =>
    !props.height ? "4.8rem" : props.height ?? "fit-content"};
  width: ${(props) =>
    props.fullWidth ? "100%" : props.width ?? "fit-content"};
  padding: 0 3.6rem;
  background-color: ${(props) =>
    props.disabled ? "var(--body_text)" : props.bg ?? "var(--primary)"};
  color: #ffffff;
  font-size: 16px;
  font-style: normal;
  font-weight: ${(props) => (!props.bold ? 400 : 700)};
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  transition: background 250ms ease-in;

  .icon {
    height: 2rem;
    margin-right: 1.2rem;
  }
  .endIcon {
    height: 2rem;
    margin-left: 1.2rem;
    cursor: pointer;
  }

  &:hover {
    background-color: ${(props) =>
      props.disabled
        ? "var(--body_text)"
        : props.bghover ?? "var(--primary_light)"};
    color: #ffffff;
  }

  &.bordered {
    border: 1px solid #01a3fa;
    color: #01a3fa;
    background-color: #ffffff;
  }

  &.borderedPrimary {
    border: 1px solid var(--primary);
    color: var(--primary);
    background-color: #ffffff;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    padding: 1.2rem;
    height: 3.6rem;
  }
`;

const Button = ({
  className,
  bg,
  bghover,
  type,
  bold,
  height,
  fullWidth,
  width,
  text,
  disabled,
  color,
  icon,
  endIcon,
  as,
  href,
  onClick,
}) => {
  const styleProps = {
    className,
    bg,
    bghover,
    type,
    bold,
    height,
    fullWidth,
    width,
    text,
    disabled,
    color,
    as,
    href,
    onClick,
  };
  return (
    <Wrapper {...styleProps}>
      {icon && !disabled && <img src={icon} alt="icon" className="icon" />}
      <span>{text}</span>
      {endIcon && <img src={endIcon} alt="endIcon" className="endIcon" />}
    </Wrapper>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  bg: PropTypes.string,
  bghover: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  fullWidth: PropTypes.bool,
  icon: PropTypes.string,
  endIcon: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
