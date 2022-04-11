import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Container, Label, InputContainer, TextInput } from "./Input.styles";
import { InputProps } from "./Input.types";

const eyeIcon = require("../../../assets/img/eye.png");

const Input = (props: InputProps) => {
  const { label, isPassword, ...rest } = props;
  const [togglePassword, setTogglePassword] = useState(!!isPassword);
  const handleTogglePassword = () => setTogglePassword(!togglePassword);
  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer>
        <TextInput {...rest} secureTextEntry={togglePassword} />
        {isPassword && (
          <TouchableOpacity
            onPress={handleTogglePassword}
            style={{
              position: "absolute",
              width: 17,
              height: 12,
              marginRight: 20,
              right: 0,
            }}
          >
            <Image style={{ width: 17, height: 12 }} source={eyeIcon} />
          </TouchableOpacity>
        )}
      </InputContainer>
    </Container>
  );
};

export default Input;
