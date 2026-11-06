import React from "react";

const Button = ({
  text = null,
  onClick,
  leadingIcon = null,
  trailingIcon,
  additionalStyle = null,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex gap-2 cursor-pointer items-center justify-center ${additionalStyle}`}
    >
      {leadingIcon}
      {text ? <p>{text}</p> : null}
      {trailingIcon}
    </button>
  );
};

export default Button;
