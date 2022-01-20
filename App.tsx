import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import Navigation from "./src/navigation";
import AppLoading from "expo-app-loading";
import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { AuthProvider } from "./src/context/auth";
import theme from "./src/global/styles/theme";
import SignIn from "./src/pages/SignIn";
("@expo-app-loading");

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={"light-content"} />
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </ThemeProvider>
  );
}
