import React from "react";
import { Image, ImageBackground, View } from "react-native";
import Tag from "../Tag/Tag";
import {
  Container,
  Title,
  DescitionContainer,
  DeliveryDescription,
} from "./Card.styles";

const mcDonald = require("../../../assets/img/mcdonalds.png");
const motoboyIcon = require("../../../assets/img/motoboy.png");

const Card = (props) => {
  const { name } = props;
  console.log(props);
  return (
    <Container>
      <ImageBackground
        style={{
          borderRadius: 15,
          width: "100%",
          height: 140,
        }}
        source={mcDonald}
      ></ImageBackground>
      <DescitionContainer>
        <Title>{name}</Title>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={motoboyIcon} />
            <DeliveryDescription>free delivery</DeliveryDescription>
          </View>
          <View
            style={{
              marginLeft: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={motoboyIcon} />
            <DeliveryDescription>free delivery</DeliveryDescription>
          </View>
        </View>
        <View style={{ flexDirection: "row", flex: 1, marginTop: 10 }}>
          <Tag title="BURGUER" />
          <Tag title="CHICKEN" />
          <Tag title="FAST FOOD" />
        </View>
      </DescitionContainer>
    </Container>
  );
};

export default Card;
