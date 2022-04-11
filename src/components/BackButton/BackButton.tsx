import React from "react";
import { Image, TouchableOpacityProps, View } from "react-native";
import { Container } from "./BackButton.styles";

// import { Container } from './styles';

const arrowLeft = require("../../../assets/img/arrow-left.png");
const BackButton = (props: TouchableOpacityProps) => {
  return (
    <Container {...props}>
      <Image source={arrowLeft} />
    </Container>
  );
};

export default BackButton;
