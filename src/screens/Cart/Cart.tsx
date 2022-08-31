import React, { useState } from "react";
import AppScreenContainer from "../../components/AppScreenContainer/AppScreenContainer";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import { CART_ITEMS } from "./Cart.data";
import { CartList, PromoCodeInput } from "./Cart.styles";
import CartButton from "./components/CartButton/CartButton";
import CartItem from "./components/CartItem/CartItem";

const Cart = () => {
  const [cartItems, setcartItems] = useState(CART_ITEMS);
  return (
    <AppScreenContainer>
      <Header title="Cart" rightItem={<CartButton />} />
      <CartList
        contentContainerStyle={{ paddingTop: 30 }}
        data={cartItems}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <PromoCodeInput
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}
      />
    </AppScreenContainer>
  );
};

export default Cart;
