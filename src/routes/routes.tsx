import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthRoutes from "./auth.routes";
import AppRotues from "./app.routes";
import { useAuthContext } from "../context/AuthContext";
import Onboarding from "../screens/Onboarding/Onboarding";

const AppStack = createNativeStackNavigator();
const Routes = () => {
  const { isLogged } = useAuthContext();
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Group screenOptions={{ headerShown: false }}>
          <AppStack.Screen name={"Onboarding"} component={Onboarding} />
        </AppStack.Group>
        <AppStack.Group screenOptions={{ headerShown: false }}>
          <AppStack.Screen name="Auth" component={AuthRoutes} />
        </AppStack.Group>
        <AppStack.Group
          screenOptions={{ gestureEnabled: false, headerShown: false }}
        >
          <AppStack.Screen name="App" component={AppRotues} />
        </AppStack.Group>
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
