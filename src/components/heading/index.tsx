import React from "react";

export const Heading: React.FC<{ children: React.ReactNode }> = ({ children }) => 
  <h1 className="heading">{children}</h1>;
