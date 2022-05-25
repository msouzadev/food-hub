import React from "react";
import {
  View,
  Image,
  Dimensions,
  ImageSourcePropType,
  ViewProps,
} from "react-native";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { CircleContainer } from "./Onboarding.styles";

// import { Container } from './styles';
const { width } = Dimensions.get("window");
interface OnboardingItemProps extends ViewProps {
  item: {
    mainImage: ImageSourcePropType;
    subs: ImageSourcePropType[];
  };
  index: number;
  scrollX: SharedValue<number>;
}
const OnboardingItem = ({
  item,
  index,
  scrollX,
  ...restProps
}: OnboardingItemProps) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  const subImage1Style = useAnimatedStyle(() => ({
    position: "absolute",
    transform: [
      {
        translateX: withTiming(
          interpolate(scrollX.value, inputRange, [0, -70, 0])
        ),
      },
    ],
    top: 35,
    zIndex: withTiming(interpolate(scrollX.value, inputRange, [0, 2, 0])),
  }));

  const subImage2Style = useAnimatedStyle(() => ({
    position: "absolute",
    transform: [
      {
        translateX: withTiming(
          interpolate(scrollX.value, inputRange, [0, -120, 0])
        ),
      },
    ],
    top: withTiming(interpolate(scrollX.value, inputRange, [10, 200, 10])),
    zIndex: withTiming(interpolate(scrollX.value, inputRange, [0, 2, 0])),
  }));

  const subImage3Style = useAnimatedStyle(() => ({
    position: "absolute",
    transform: [
      {
        translateY: withTiming(
          interpolate(scrollX.value, inputRange, [0, 240, 0])
        ),
      },
    ],
    zIndex: withTiming(interpolate(scrollX.value, inputRange, [0, 2, 0])),
  }));

  const subImage4Style = useAnimatedStyle(() => ({
    position: "absolute",
    transform: [
      {
        translateY: withTiming(
          interpolate(scrollX.value, inputRange, [0, 200, 0])
        ),
      },
      {
        translateX: withTiming(
          interpolate(scrollX.value, inputRange, [0, 90, 0])
        ),
      },
    ],
    zIndex: withTiming(interpolate(scrollX.value, inputRange, [0, 2, 0])),
  }));

  const subImage5Style = useAnimatedStyle(() => ({
    position: "absolute",
    transform: [
      {
        translateY: withTiming(
          interpolate(scrollX.value, inputRange, [0, -15, 0])
        ),
      },
      {
        translateX: withTiming(
          interpolate(scrollX.value, inputRange, [0, 100, 0])
        ),
      },
    ],
    zIndex: withTiming(interpolate(scrollX.value, inputRange, [0, 2, 0])),
  }));
  return (
    <View
      {...restProps}
      style={{
        width: width,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircleContainer
        style={
          {
            // marginHorizontal: index > 0 ? 50 : 30,
          }
        }
      >
        <Animated.View
          style={[
            {
              position: "absolute",
              top: 120,
            },
            subImage1Style,
          ]}
        >
          <Image source={item.subs[0]} />
        </Animated.View>
        <Animated.View style={subImage2Style}>
          <Image source={item.subs[1]} />
        </Animated.View>
        <Animated.View
          style={[
            {
              position: "absolute",
            },
            subImage3Style,
          ]}
        >
          <Image source={item.subs[2]} />
        </Animated.View>
        <Animated.View
          style={[
            {
              position: "absolute",
            },
            subImage4Style,
          ]}
        >
          <Image source={item.subs[3]} />
        </Animated.View>
        <Animated.View
          style={[
            {
              position: "absolute",
            },
            subImage5Style,
          ]}
        >
          <Image source={item.subs[4]} />
        </Animated.View>
        <Image
          source={item.mainImage}
          style={{
            position: "absolute",
            marginTop: -40,
          }}
        />
      </CircleContainer>
    </View>
  );
};

export default OnboardingItem;
