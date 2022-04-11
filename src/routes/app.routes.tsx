import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CustomDrawer from "../components/CustomDrawer/CustomDrawer";
import { createDrawerNavigator } from "@react-navigation/drawer";

// import { Container } from './styles';
const App = createNativeStackNavigator();

const AppRotues = () => {
  return (
    <App.Navigator screenOptions={{ headerShown: false }}>
      <App.Screen name="Home" component={CustomDrawer} />
    </App.Navigator>
  );
};

export default AppRotues;
