import React from "react";
import { Image, View } from "react-native";
import { ButtonText, CircleButton, Quantity } from "../../../Food/Food.styles";
import {
  Container,
  Description,
  Name,
  Price,
  RemoveButton,
} from "./CartItem.styles";

const removeCartItemImg = require("../../../../../assets/img/remove-cart-item.png");
interface CartItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: any;
    quantity: number;
  };
}
const CartItem = (props: CartItemProps) => {
  const { item } = props;
  return (
    <Container>
      {/* <Image source={item.image} /> */}
      <View
        style={{
          width: 82,
          height: 82,
          borderRadius: 10,
          backgroundColor: "red",
        }}
      />
      <View style={{ marginLeft: 10, flex: 1 }}>
        <Name>{item.name}</Name>
        <Description>{item.description}</Description>
        <Price>{item.price}</Price>
      </View>
      <View style={{}}>
        <RemoveButton>
          <Image source={removeCartItemImg} />
        </RemoveButton>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CircleButton>
            <ButtonText>-</ButtonText>
          </CircleButton>
          <Quantity>02</Quantity>
          <CircleButton isIncrement>
            <ButtonText isIncrement>+</ButtonText>
          </CircleButton>
        </View>
      </View>
    </Container>
  );
};

export default CartItem;
