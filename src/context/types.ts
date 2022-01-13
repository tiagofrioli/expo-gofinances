import { ReactNode } from "react";

export interface AuthProviderProps {
  children: ReactNode;
}

export interface IAuthContextData {
  user: UserProps;
  signInGoogle(): Promise<void>;
}

export interface UserProps {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

export interface AuthResponse {
  params: {
    access_token: string;
  };
  type: string;
}
