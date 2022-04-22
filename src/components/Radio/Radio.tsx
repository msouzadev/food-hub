import React from "react";
import { View } from "react-native";
import { Checked, Container } from "./Radio.styles";

const Radio = (props) => {
  const { checked } = props;
  return <Container>{checked && <Checked />}</Container>;
};

export default Radio;
