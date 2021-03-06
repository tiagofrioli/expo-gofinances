import { createContext, useContext, useState } from "react";
import React from "react";
import {
  AuthProviderProps,
  AuthResponse,
  IAuthContextData,
  UserProps,
} from "./types";
import * as AuthSession from "expo-auth-session";
import * as AppleAuth from "expo-apple-authentication";

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>({} as UserProps);

  const { CLIENT_ID } = process.env;
  const { REDIRECT_URI } = process.env;

  async function signInGoogle() {
    try {
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

  async function signInApple() {
    try {
      const credential = await AppleAuth.signInAsync({
        requestedScopes: [
          AppleAuth.AppleAuthenticationScope.FULL_NAME,
          AppleAuth.AppleAuthenticationScope.EMAIL,
        ],
      });

      if (credential) {
        const userLogged = {
          id: String(credential.user),
          email: credential.email!,
          name: credential.fullName!.givenName!,
          photo: undefined,
        };

        setUser(userLogged);
      }

      console.log(user);
    } catch (error) {
      throw new Error("error");
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInGoogle, signInApple }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
