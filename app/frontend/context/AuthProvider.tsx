"use client";
import { createContext, useContext } from "react";
import { useAuthClient } from "../hooks/useAuthClient";
const AuthContext = createContext({
  isAuthenticated: false,
  identity: undefined,
  principal: undefined,
  whoamiActor: undefined,
  login: () => {},
  logout: () => {},
});
export const AuthProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const auth = useAuthClient();

  return (
    <AuthContext.Provider value={auth as any}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
