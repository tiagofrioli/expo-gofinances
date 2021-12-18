import React from "react";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/global/styles/theme";
import AppLoading from "expo-app-loading";
("@expo-app-loading");
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import Dashboard from "./src/pages/Dashboard";
import Register from "./src/pages/Register";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={theme}>
      <Register />
    </ThemeProvider>
  );
}
