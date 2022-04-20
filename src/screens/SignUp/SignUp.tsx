import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Button from "../../components/Button/Buttons";
import Container from "../../components/Container/Container";
import Field from "../../components/Field/Field";
import Input from "../../components/Input/Input";
import { useAuthContext } from "../../context/AuthContext";
import {
  HasAccountText,
  Line,
  OrangeBall,
  PinkBall,
  SecondOrangeBall,
  SignUpContainer,
  LoginText,
  SignUpWith,
  SocialButtons,
  Title,
} from "./Signup.styles";

const facebookLogo = require("../../../assets/img/facebook-logo.png");

const SignUp = () => {
  const navigation = useNavigation();
  const { login } = useAuthContext();
  const handleLogin = () => navigation.navigate("Login");
  return (
    <Container backgroundColor="#FFFFFF">
      <OrangeBall />
      <PinkBall />
      <SecondOrangeBall />
      <KeyboardAvoidingView
        behavior="padding"
        style={{ marginTop: 76, flex: 1 }}
      >
        <ScrollView>
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
          <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
            <Button onPress={login} fullwidth color="primary" title="SIGN UP" />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <HasAccountText>Already have an account? </HasAccountText>
        <TouchableOpacity onPress={handleLogin}>
          <LoginText>Login</LoginText>
        </TouchableOpacity>
      </View>
      <SignUpContainer>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Line />
          <SignUpWith>Sign up with</SignUpWith>
          <Line />
        </View>

        <SocialButtons>
          <Button
            withShadow
            icon={<Image source={facebookLogo} />}
            title="FACEBOOK"
          />
          <Button
            withShadow
            icon={<Image source={facebookLogo} />}
            title="FACEBOOK"
          />
        </SocialButtons>
      </SignUpContainer>
    </Container>
  );
};

export default SignUp;
