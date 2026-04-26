import React from "react";

const MyContainer = ({ children, className = "" }) => {
  return (
    <div className={`max-w-7xl mx-auto px-5 w-full ${className}`}>
      {children}
    </div>
  );
};

export default MyContainer;
