import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import Button from "../../components/Button/Buttons";
import Container from "../../components/Container/Container";
import {
  SkipButon,
  SkipButtonText,
  Header,
  Title,
  Description,
  Line,
  SigninWith,
  SigninContainer,
  SocialButtons,
  HasAccountText,
  SigninText,
} from "./Welcome.styles";

const welcomeBg = require("../../../assets/img/welcome-background.png");
const facebookLogo = require("../../../assets/img/facebook-logo.png");

const Welcome = () => {
  const navigation = useNavigation();
  const handleSignup = () => navigation.navigate("SignUp");
  return (
    <>
      <ImageBackground
        source={welcomeBg}
        style={StyleSheet.absoluteFillObject}
      />
      <Container>
        <Header>
          <SkipButon>
            <SkipButtonText>Skip</SkipButtonText>
          </SkipButon>
        </Header>
        <View style={{ marginTop: 60, flex: 1 }}>
          <Title>Welcome to</Title>
          <Title isOrange>FoodHub</Title>
          <Description>
            Your favourite foods delivered{"\n"} fast at your door.
          </Description>
        </View>
        <SigninContainer>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Line />
            <SigninWith> sign in with</SigninWith>
            <Line />
          </View>
          <SocialButtons>
            <Button icon={<Image source={facebookLogo} />} title="FACEBOOK" />
            <Button icon={<Image source={facebookLogo} />} title="FACEBOOK" />
          </SocialButtons>
          <Button
            onPress={handleSignup}
            variant="outlined"
            title="Start with email or phone"
            fullwidth
          />
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <HasAccountText>Already have an account? </HasAccountText>
            <TouchableOpacity>
              <SigninText>Sign In</SigninText>
            </TouchableOpacity>
          </View>
        </SigninContainer>
      </Container>
    </>
  );
};

export default Welcome;
