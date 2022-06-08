import React from "react";
import { View } from "react-native";
import CartSvg from "../../../../../assets/icons/CartSvg";
import { Colors } from "../../../../styles/theme/colors";
import { Container } from "./CartButton.styles";

// import { Container } from './styles';

const CartButton = () => {
  return (
    <Container>
      <CartSvg color={Colors.orange} />
    </Container>
  );
};

export default CartButton;
