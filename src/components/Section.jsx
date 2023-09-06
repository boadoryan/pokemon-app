import React from "react";

const Section = ({ width, children }) => {
  return <div className={`w-full my-4 ${width ? width : ""}`}>{children}</div>;
};

export default Section;
