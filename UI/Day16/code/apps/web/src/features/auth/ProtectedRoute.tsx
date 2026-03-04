import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import type { Role } from "./types";

export function ProtectedRoute({ children, roles }: { children: React.ReactNode; roles?: Role[] }) {
  const { user, isBootstrapping } = useAuth();

  if (isBootstrapping) return <div style={{ padding: 16 }}>Bootstrapping…</div>;
  if (!user) return <Navigate to="/login" replace />;

  if (roles && !roles.includes(user.role)) {
    return <div style={{ padding: 16 }}>403 – Forbidden (Role required: {roles.join(", ")})</div>;
  }

  return <>{children}</>;
}
