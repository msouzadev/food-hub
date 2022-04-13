import React from "react";
import { Image, View } from "react-native";
import { useAppContext } from "../../../../context/AppContext";
import {
  Address,
  AddressContainer,
  Container,
  DeliverTo,
  DrawerButton,
  Avatar,
} from "./Header.styles";

const horizontalLines = require("../../../../../assets/img/horizontal-lines.png");
const avatar = require("../../../../../assets/img/avatar.png");

const Header = () => {
  const { toggleDrawer } = useAppContext();

  return (
    <Container>
      <DrawerButton
        onPress={toggleDrawer}
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.0,

          elevation: 1,
        }}
      >
        <Image source={horizontalLines} />
      </DrawerButton>
      <AddressContainer>
        <DeliverTo>Deliver to</DeliverTo>
        <Address>4102 Pretty View Lane</Address>
      </AddressContainer>
      <Avatar source={avatar} />
    </Container>
  );
};

export default Header;
