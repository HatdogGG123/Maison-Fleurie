import React from "react";

const ClipWidthLayout = ({
  children,
  additionalStyle = "",
  inlineStyle = {},
}) => {
  return (
    <section
      className={` max-w-[1920px] h-dvh w-full m-auto ${additionalStyle}`}
      style={inlineStyle}
    >
      {children}
    </section>
  );
};

export default ClipWidthLayout;
