import React from "react";
import { BaseContainer } from "./Container.styles";

const Container = (props) => {
  const { children, backgroundColor } = props;
  return (
    <BaseContainer backgroundColor={backgroundColor}>{children}</BaseContainer>
  );
};

export default Container;
