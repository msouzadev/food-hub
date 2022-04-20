import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthRoutes from "./auth.routes";
import AppRotues from "./app.routes";
import { useAuthContext } from "../context/AuthContext";

const Routes = () => {
  const { isLogged } = useAuthContext();
  return (
    <NavigationContainer>
      {isLogged ? <AppRotues /> : <AuthRoutes />}
    </NavigationContainer>
  );
};
export default Routes;
