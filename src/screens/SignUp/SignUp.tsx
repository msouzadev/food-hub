import React from "react";
import { View } from "react-native";
import Container from "../../components/Container/Container";
import Field from "../../components/Field/Field";
import Input from "../../components/Input/Input";
import { OrangeBall, PinkBall, SecondOrangeBall, Title } from "./Signup.styles";

const SignUp = () => {
  return (
    <Container backgroundColor="#FFFFFF">
      <OrangeBall />
      <PinkBall />
      <SecondOrangeBall />
      <View style={{ marginTop: 76, flex: 1 }}>
        <Title>Sign Up</Title>
        <Field>
          <Input label="Full name" />
        </Field>
        <Field>
          <Input label="Email" />
        </Field>
        <Field>
          <Input isPassword label="Password" />
        </Field>
      </View>
    </Container>
  );
};

export default SignUp;
