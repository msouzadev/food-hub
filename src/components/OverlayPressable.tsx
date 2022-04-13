import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { useAppContext } from "../context/AppContext";

const OverlayPressable = () => {
  const { drawerIsOpen, toggleDrawer } = useAppContext();
  if (!drawerIsOpen) {
    return null;
  }
  return (
    <Pressable
      onPress={toggleDrawer}
      style={[StyleSheet.absoluteFillObject, { zIndex: 6 }]}
    />
  );
};

export default OverlayPressable;
