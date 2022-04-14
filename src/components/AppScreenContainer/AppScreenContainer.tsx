import React from "react";
import Constants from "expo-constants";
import { AppScreenContainerProps } from "./AppScreenContainer.types";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { useAppContext } from "../../context/AppContext";
const AppScreenContainer = (props: AppScreenContainerProps) => {
  const { children } = props;
  const { drawerIsOpen } = useAppContext();
  const drawerOpen = useDerivedValue(() => {
    return withTiming(drawerIsOpen ? 1 : 0);
  });

  const appStyles = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      drawerOpen.value,
      [0, 1],
      ["#EEEEEE", "#FFFFFF"]
    ),
  }));
  return (
    <Animated.View
      style={[
        {
          flex: 1,

          paddingTop: Constants.statusBarHeight + 30,
          paddingHorizontal: 20,
        },
        appStyles,
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default AppScreenContainer;
