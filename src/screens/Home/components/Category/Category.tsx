import React, { useEffect } from "react";
import { Image, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { width } from "../../../../utils/dimensions";
import { Container, IconContainer, Name } from "./Category.styles";
import { CategoryProps } from "./Category.types";

const Category = (props: CategoryProps) => {
  const { isSelected, name, icon, index } = props;
  const iconPosition = useSharedValue(100);
  const isMounted = useSharedValue(0);
  useEffect(() => {
    iconPosition.value = 0;
    isMounted.value = 1;
  }, []);
  const iconStyles = useAnimatedStyle(() => ({
    top: withTiming(iconPosition.value, { duration: 500 }),
  }));
  const cardStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(
          interpolate(isMounted.value, [0, 1], [width * index, 0]),
          { duration: 300 * index + 1 }
        ),
      },
    ],
  }));
  const nameStyles = useAnimatedStyle(() => ({
    opacity: withTiming(interpolate(iconPosition.value, [100, 0], [0, 1]), {
      duration: 1000,
    }),
  }));
  return (
    <Animated.View style={cardStyles}>
      <Container
        isSelected={isSelected}
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
        }}
      >
        <IconContainer style={iconStyles}>
          <Image source={icon} />
        </IconContainer>
        <Animated.View style={nameStyles}>
          <Name isSelected={isSelected}>{name}</Name>
        </Animated.View>
      </Container>
    </Animated.View>
  );
};

export default Category;
