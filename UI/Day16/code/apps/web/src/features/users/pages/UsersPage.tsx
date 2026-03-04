import React, { useState } from "react";
import { useCreateUser, useUsers } from "../api/useUsers";

export default function UsersPage() {
  const q = useUsers();
  const create = useCreateUser();

  const [email, setEmail] = useState("new.user@company.com");
  const [name, setName] = useState("New User");
  const [role, setRole] = useState("STAFF");

  return (
    <div>
      <h2>Users (Admin Only)</h2>

      <div style={{ border: "1px solid #eee", padding: 12, borderRadius: 12, marginBottom: 16 }}>
        <h3>Create User</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="name" />
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="STAFF">STAFF</option>
            <option value="CLIENT">CLIENT</option>
            <option value="ADMIN">ADMIN</option>
          </select>
        </div>
        <button
          style={{ marginTop: 8 }}
          onClick={() => create.mutate({ email, name, role })}
          disabled={create.isPending}
        >
          {create.isPending ? "Creating…" : "Create"}
        </button>
        <div style={{ marginTop: 8, fontSize: 12, color: "#777" }}>
          If you are not ADMIN, the endpoint returns 403 (BFF enforces authorization).
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <h3 style={{ margin: 0 }}>User List</h3>
        <button onClick={() => q.refetch()} disabled={q.isFetching}>
          {q.isFetching ? "Refreshing…" : "Refresh"}
        </button>
      </div>

      {q.isLoading ? (
        <div>Loading…</div>
      ) : q.isError ? (
        <div>Failed to load users.</div>
      ) : (
        <table style={{ width: "100%", marginTop: 8, borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", borderBottom: "1px solid #eee" }}>Email</th>
              <th style={{ textAlign: "left", borderBottom: "1px solid #eee" }}>Name</th>
              <th style={{ textAlign: "left", borderBottom: "1px solid #eee" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            {q.data?.map((u) => (
              <tr key={u.id}>
                <td style={{ padding: "6px 0", borderBottom: "1px solid #f3f3f3" }}>{u.email}</td>
                <td style={{ padding: "6px 0", borderBottom: "1px solid #f3f3f3" }}>{u.name}</td>
                <td style={{ padding: "6px 0", borderBottom: "1px solid #f3f3f3" }}>{u.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
