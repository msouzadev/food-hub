import React from "react";
import { View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../../screens/Home/Home";
const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  return (
    <View {...{ flex: 1 }}>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          drawerType: "slide",
          overlayColor: "transparent",
          sceneContainerStyle: {
            backgroundColor: "transparent",
          },
          drawerStyle: {
            flex: 1,
            width: "65%",
            paddingRight: 20,
            backgroundColor: "#EEEEEE",
          },
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;
