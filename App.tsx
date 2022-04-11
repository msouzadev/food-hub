import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import React, { useEffect, useState } from "react";
import { theme } from "./src/styles/theme/theme";
import { ThemeProvider } from "styled-components/native";
import Routes from "./src/routes/routes";

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
      <Routes />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "SFPro-Semi",
  },
});
