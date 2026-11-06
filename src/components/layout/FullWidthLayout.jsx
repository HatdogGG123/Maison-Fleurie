import React from "react";

const FullWidthLayout = ({
  children,
  additionalStyle = "",
  inlineStyle = {},
}) => {
  return (
    <section className={`h-dvh w-full ${additionalStyle}`} style={inlineStyle}>
      {children}
    </section>
  );
};

export default FullWidthLayout;
