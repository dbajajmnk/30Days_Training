import React from "react";
import { useDashboard } from "../api/useDashboard";
import { useAuth } from "../../auth/useAuth";

export default function DashboardPage() {
  const { user } = useAuth();
  const q = useDashboard();

  if (q.isLoading) return <div>Loading dashboard…</div>;
  if (q.isError) return <div>Failed to load dashboard.</div>;

  const widgets = q.data.widgets;

  return (
    <div>
      <h2>Dashboard</h2>
      <p style={{ color: "#555" }}>Welcome, {user?.name} ({user?.role})</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 12 }}>
        <div style={{ border: "1px solid #eee", padding: 12, borderRadius: 12 }}>
          <h3>Metrics (Service A)</h3>
          <div>Active users: {widgets.metrics.activeUsers}</div>
          <div>Errors last hour: {widgets.metrics.errorsLastHour}</div>
        </div>

        <div style={{ border: "1px solid #eee", padding: 12, borderRadius: 12 }}>
          <h3>Alerts (Service B)</h3>
          <div>Total alerts: {widgets.alerts.total}</div>
          <div>High severity: {widgets.alerts.high}</div>
        </div>
      </div>

      <div style={{ marginTop: 16, fontSize: 12, color: "#777" }}>
        This page demonstrates **BFF aggregation**: frontend calls 1 endpoint that combines multiple sources.
      </div>
    </div>
  );
}
