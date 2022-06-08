import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import TabBar from "../components/TabBar/TabBar";
import Restaurant from "../screens/Restaurant/Restaurant";
import Food from "../screens/Food/Food";
import SearchFood from "../screens/SearchFood/SearchFood";
import Cart from "../screens/Cart/Cart";

const HomeTab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const HomeTabs = () => (
  <HomeTab.Navigator tabBar={TabBar} screenOptions={{ headerShown: false }}>
    <HomeTab.Screen name="Home" component={Home} />
  </HomeTab.Navigator>
);
const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="Cart"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="HomeTab" component={HomeTabs} />
    <Stack.Screen name="Restaurant" component={Restaurant} />
    <Stack.Screen name="Food" component={Food} />
    <Stack.Screen name="SearchFood" component={SearchFood} />
    <Stack.Screen name="Cart" component={Cart} />
  </Stack.Navigator>
);

const HomeRoutes = () => {
  return <HomeStack />;
};

export default HomeRoutes;
