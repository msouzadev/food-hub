import React from "react";
import { BaseContainer } from "./Container.styles";

const Container = ({ children }) => {
  return <BaseContainer>{children}</BaseContainer>;
};

export default Container;
