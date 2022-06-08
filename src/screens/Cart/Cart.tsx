import React, { useState } from "react";
import AppScreenContainer from "../../components/AppScreenContainer/AppScreenContainer";
import Header from "../../components/Header/Header";
import { CART_ITEMS } from "./Cart.data";
import { CartList } from "./Cart.styles";
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
    </AppScreenContainer>
  );
};

export default Cart;
