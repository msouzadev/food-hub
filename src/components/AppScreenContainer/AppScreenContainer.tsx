import React from "react";
import Constants from "expo-constants";
import { AppScreenContainerProps } from "./AppScreenContainer.types";
import Animated, { useDerivedValue, withTiming } from "react-native-reanimated";
import { useAppContext } from "../../context/AppContext";
const AppScreenContainer = (props: AppScreenContainerProps) => {
  const { children, styles } = props;
  const { drawerIsOpen } = useAppContext();
  const drawerOpen = useDerivedValue(() => {
    return withTiming(drawerIsOpen ? 1 : 0);
  });

  return (
    <Animated.View
      style={[
        {
          flex: 1,
          backgroundColor: "#FFFFFF",
          paddingTop: Constants.statusBarHeight + 30,
          paddingHorizontal: 20,
        },
        styles,
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default AppScreenContainer;
