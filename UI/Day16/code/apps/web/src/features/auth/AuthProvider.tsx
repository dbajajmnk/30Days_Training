import React, { createContext, useEffect, useMemo, useState } from "react";
import type { User } from "./types";
import { me } from "./api/authApi";

type AuthState = {
  user: User | null;
  isBootstrapping: boolean;
  loginDone: (token: string, user: User) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isBootstrapping, setBootstrapping] = useState(true);

  useEffect(() => {
    // Bootstrap session
    (async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setBootstrapping(false);
        return;
      }
      try {
        const data = await me();
        setUser({ id: data.id, email: data.email, role: data.role, name: data.name });
      } catch {
        // http interceptor handles redirect
      } finally {
        setBootstrapping(false);
      }
    })();
  }, []);

  const value = useMemo<AuthState>(
    () => ({
      user,
      isBootstrapping,
      loginDone: (token, u) => {
        localStorage.setItem("accessToken", token);
        setUser(u);
      },
      logout: () => {
        localStorage.removeItem("accessToken");
        setUser(null);
        window.location.href = "/login";
      },
    }),
    [user, isBootstrapping]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
