import React from "react";
import { TouchableOpacity, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import CartSvg from "../../../assets/icons/CartSvg";
import { IconContainer, ButtonTitle } from "./AddToCartButton.styles";

const AddToCartButton = () => {
  const pressed = useSharedValue(0);
  const handlePress = () => {
    pressed.value = 1;
  };
  const handlePressOut = () => {
    pressed.value = 0;
  };
  const buttonStyles = useAnimatedStyle(() => ({
    height: 53,
    width: withSequence(
      withTiming(interpolate(pressed.value, [0, 1], [50, 200])),
      withDelay(1000, withTiming(50))
    ),
  }));
  const buttonTextStyles = useAnimatedStyle(() => ({
    opacity: withTiming(interpolate(pressed.value, [0, 1], [0, 1])),
  }));
  return (
    <Animated.View
      style={[
        { backgroundColor: "#FE724C", borderRadius: 28, padding: 6 },
        buttonStyles,
      ]}
    >
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={handlePress}
        onPressOut={handlePressOut}
      >
        <IconContainer>
          <CartSvg color="#FE724C" />
        </IconContainer>
        <Animated.View style={buttonTextStyles}>
          <ButtonTitle>ADDED TO CART</ButtonTitle>
        </Animated.View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default AddToCartButton;
