import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import BackButton from "../BackButton/BackButton";
import { Container, Title } from "./Header.styles";
import { HeaderProps } from "./Header.types";

const Header = (props: HeaderProps) => {
  const { title, rightItem } = props;
  const navigation = useNavigation();
  return (
    <Container>
      <BackButton onPress={navigation.goBack} />
      {title && (
        <>{typeof title === "string" ? <Title>{title}</Title> : title}</>
      )}
      {rightItem || <View />}
    </Container>
  );
};

export default Header;
