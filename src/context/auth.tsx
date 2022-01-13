import { createContext, useContext, useState } from "react";
import React from "react";
import {
  AuthProviderProps,
  AuthResponse,
  IAuthContextData,
  UserProps,
} from "./types";
import * as AuthSession from "expo-auth-session";
const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>({} as UserProps);

  async function signInGoogle() {
    try {
      const CLIENT_ID =
        "817229847498-nagdte3oml6i7d3er7pev49fjafe1lom.apps.googleusercontent.com";
      const REDIRECT_URI = "https://auth.expo.io/@tiago.frioli/gofinances";
      const RESPONSE_TYPE = "token";
      const SCOPE = encodeURI("profile email");

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { params, type } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthResponse;

      if (type === "success") {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
        );

        const userInfo = await response.json();
        setUser({
          id: userInfo.id,
          email: userInfo.email,
          name: userInfo.given_name,
          photo: userInfo.picture,
        });
        console.log(userInfo);
      }
    } catch (error) {
      throw new Error();
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInGoogle }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
