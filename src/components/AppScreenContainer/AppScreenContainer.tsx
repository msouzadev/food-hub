import React from "react";
import { View } from "react-native";
import Constants from "expo-constants";
import { AppScreenContainerProps } from "./AppScreenContainer.types";
const AppScreenContainer = (props: AppScreenContainerProps) => {
  const { children } = props;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingTop: Constants.statusBarHeight + 30,
        paddingHorizontal: 20,
      }}
    >
      {children}
    </View>
  );
};

export default AppScreenContainer;
