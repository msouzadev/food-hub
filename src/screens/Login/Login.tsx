import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import BackButton from "../../components/BackButton/BackButton";
import Button from "../../components/Button/Buttons";
import Container from "../../components/Container/Container";
import Field from "../../components/Field/Field";
import Input from "../../components/Input/Input";
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
} from "./Login.styles";

const facebookLogo = require("../../../assets/img/facebook-logo.png");
const { width } = Dimensions.get("screen");
const Login = () => {
  const navigation = useNavigation();
  const handleBack = () => navigation.goBack();
  const handleSignup = () => navigation.navigate("SignUp");
  const handleLogin = () => navigation.navigate("App");
  return (
    <Container backgroundColor="#FFFFFF">
      <OrangeBall />
      <PinkBall />
      <SecondOrangeBall />
      <BackButton onPress={handleBack} />
      <KeyboardAvoidingView
        behavior="padding"
        style={{ marginTop: width * 0.4, flex: 1 }}
      >
        <ScrollView>
          <Title>Login</Title>

          <Field>
            <Input label="Email" />
          </Field>
          <Field>
            <Input isPassword label="Password" />
          </Field>
          <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
            <Button
              withShadow
              fullwidth
              color="primary"
              onPress={handleLogin}
              title="LOGIN"
            />
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
        <HasAccountText>Don’t have an account? </HasAccountText>
        <TouchableOpacity onPress={handleSignup}>
          <LoginText>Sign Up</LoginText>
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

export default Login;
