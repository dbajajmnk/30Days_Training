import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "../features/auth/ProtectedRoute";
import { AppShell } from "./AppShell";

const LoginPage = lazy(() => import("../features/auth/pages/LoginPage"));
const DashboardPage = lazy(() => import("../features/dashboard/pages/DashboardPage"));
const UsersPage = lazy(() => import("../features/users/pages/UsersPage"));
const NotFound = () => <div style={{ padding: 16 }}>404</div>;

export function AppRouter() {
  return (
    <AppShell>
      <Suspense fallback={<div style={{ padding: 16 }}>Loading…</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/users"
            element={
              <ProtectedRoute roles={["ADMIN"]}>
                <UsersPage />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AppShell>
  );
}
