import React from "react";

const PageLayout = ({ children, additionalStyle = "" }) => {
  return (
    <div
      className={`bg-gray text-black m-auto w-full h-fit grid gap-50 ${additionalStyle}`}
    >
      {children}
    </div>
  );
};

export default PageLayout;
