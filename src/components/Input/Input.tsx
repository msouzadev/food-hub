import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Container, Label, InputContainer, TextInput } from "./Input.styles";
import { InputProps } from "./Input.types";

const eyeIcon = require("../../../assets/img/eye.png");

const Input = (props: InputProps) => {
  const { label, isPassword, icon, style, backgroundColor, ...rest } = props;
  const [togglePassword, setTogglePassword] = useState(!!isPassword);
  const handleTogglePassword = () => setTogglePassword(!togglePassword);
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputContainer backgroundColor={backgroundColor}>
        {icon && <View style={{ paddingLeft: 20 }}>{icon}</View>}
        <TextInput
          {...rest}
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={togglePassword}
        />
        {isPassword && (
          <TouchableOpacity
            hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
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
