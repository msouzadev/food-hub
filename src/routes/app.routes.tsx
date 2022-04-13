import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import Home from "../screens/Home/Home";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useAppContext } from "../context/AppContext";
import CustomDrawerMenu from "../navigation/CustomDrawerMenu/CustomDrawerMenu";
import OverlayPressable from "../components/OverlayPressable";
import HomeRoutes from "./home.routes";

const { width } = Dimensions.get("window");
const menuWidth = width * 0.5;

const AppRotues = () => {
  const anim = useSharedValue(0);
  const { drawerIsOpen } = useAppContext();
  useEffect(() => {
    anim.value = withTiming(drawerIsOpen ? 1 : 0);
  }, [drawerIsOpen]);

  const menuStyle = useAnimatedStyle(
    () => ({
      transform: [
        { translateX: (1 - anim.value) * menuWidth },
        {
          scale: interpolate(anim.value, [0, 1], [0.8, 1]),
        },
      ],
    }),
    []
  );
  const appStyle = useAnimatedStyle(
    () => ({
      transform: [
        { translateX: anim.value * menuWidth },
        {
          scale: interpolate(anim.value, [0, 1], [1, 0.8]),
        },
      ],
      borderRadius: anim.value * 20,
    }),
    []
  );
  return (
    <View
      style={{
        backgroundColor: "#EEEEEE",
        flex: 1,
        flexDirection: "row",
      }}
    >
      <CustomDrawerMenu menuStyles={[styles.menuContainer, menuStyle]} />
      <Animated.View style={[styles.appContainer, appStyle]}>
        <OverlayPressable />

        <HomeRoutes />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    width: menuWidth,
    paddingLeft: 20,
    paddingVertical: 20,
    position: "absolute",
    height: "100%",
    left: 0,
  },
  appContainer: {
    flex: 1,
    overflow: "hidden",
  },
});
export default AppRotues;
