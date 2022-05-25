import React from "react";
import { Dimensions } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

interface DoProps {
  index: number;
  scrollX: SharedValue<number>;
}
const { width } = Dimensions.get("window");
const Dot = ({ index, scrollX }: DoProps) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  const dotStyles = useAnimatedStyle(() => ({
    marginHorizontal: 8,
    backgroundColor: "#ffc529",
    width: interpolate(
      scrollX.value,
      inputRange,
      [5, 30, 5],
      Extrapolate.CLAMP
    ),
    height: 5,
    borderRadius: 5,
  }));
  return <Animated.View key={`dots-${index}`} style={dotStyles} />;
};

export default Dot;
