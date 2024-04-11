"use client";

import { useAuth } from "./frontend/context/AuthProvider";
import Dashboard from "./frontend/dashboard/dashboard";
import SignIn from "./frontend/user/SignIn";

export default function Redirect() {
  const { isAuthenticated, identity } = useAuth();

  return (
    <main id="pageContent">{isAuthenticated ? <Dashboard /> : <SignIn />}</main>
  );
}
