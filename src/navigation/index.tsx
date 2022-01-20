import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./auth.navigation";
import { useAuth } from "../context/auth";
import AppNavigation from "./app.navigation";

const Navigation: React.FC = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default Navigation;
