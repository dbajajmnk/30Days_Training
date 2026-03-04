import React, { useState } from "react";
import { login } from "../api/authApi";
import { useAuth } from "../useAuth";

export default function LoginPage() {
  const { loginDone } = useAuth();
  const [email, setEmail] = useState("admin@company.com");
  const [password, setPassword] = useState("Admin@1234");
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ maxWidth: 420, margin: "24px auto", border: "1px solid #eee", padding: 16, borderRadius: 12 }}>
      <h2>Login</h2>
      <p style={{ color: "#555" }}>Use demo accounts from the README.</p>

      <label>Email</label>
      <input style={{ width: "100%", padding: 8, margin: "6px 0 12px" }} value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Password</label>
      <input
        style={{ width: "100%", padding: 8, margin: "6px 0 12px" }}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={async () => {
          setLoading(true);
          try {
            const res = await login(email, password);
            loginDone(res.accessToken, res.user);
            window.location.href = "/dashboard";
          } finally {
            setLoading(false);
          }
        }}
        disabled={loading}
      >
        {loading ? "Logging in…" : "Login"}
      </button>

      <div style={{ marginTop: 12, fontSize: 12, color: "#777" }}>
        Tip: Try STAFF/CLIENT accounts too and observe role-based access.
      </div>
    </div>
  );
}
