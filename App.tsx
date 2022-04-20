import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import React, { useEffect, useState } from "react";
import { theme } from "./src/styles/theme/theme";
import { ThemeProvider } from "styled-components/native";
import Routes from "./src/routes/routes";
import AppProvider from "./src/AppProvider";
import { AuthProvider } from "./src/context/AuthContext";

const fetchFonts = () => {
  return Font.loadAsync({
    "SFPro-Light": require("./assets/fonts/Sofia-Pro-Light.otf"),
    "SFPro-Regular": require("./assets/fonts/Sofia-Pro-Regular.otf"),
    "SFPro-Medium": require("./assets/fonts/Sofia-Pro-Medium.otf"),
    "SFPro-Semi": require("./assets/fonts/Sofia-Pro-Semi.otf"),
    "SFPro-Bold": require("./assets/fonts/Sofia-Pro-Bold.otf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    fetchFonts().finally(() => setFontLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <AppProvider>
          <Routes />
        </AppProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
