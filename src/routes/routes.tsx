import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome/Welcome";
import SignUp from "../screens/SignUp/SignUp";
import AuthRoutes from "./auth.routes";

const Stack = createNativeStackNavigator();
const isLogged = false;
const Routes = () => (
  <NavigationContainer>{isLogged ? <></> : <AuthRoutes />}</NavigationContainer>
);
export default Routes;
