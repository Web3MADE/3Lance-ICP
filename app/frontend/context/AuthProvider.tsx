"use client";
import { createContext, useContext } from "react";
import { useAuthClient } from "../hooks/useAuthClient";
const AuthContext = createContext({});
export const AuthProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const auth = useAuthClient();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
