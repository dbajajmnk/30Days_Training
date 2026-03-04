import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../features/auth/useAuth";
import { ErrorBoundary } from "../shared/ui/ErrorBoundary";

export function AppShell({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      <header style={{ display: "flex", gap: 12, padding: 12, borderBottom: "1px solid #eee" }}>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">Users (Admin)</Link>
        <div style={{ marginLeft: "auto", display: "flex", gap: 12, alignItems: "center" }}>
          {user ? (
            <>
              <span style={{ fontSize: 12, color: "#555" }}>
                {user.email} • {user.role}
              </span>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </header>

      <main style={{ padding: 16 }}>
        <ErrorBoundary>{children}</ErrorBoundary>
      </main>
    </div>
  );
}
