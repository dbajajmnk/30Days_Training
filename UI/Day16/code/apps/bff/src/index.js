import express from "express";
import cors from "cors";
import morgan from "morgan";
import { v4 as uuid } from "uuid";
import jwt from "jsonwebtoken";

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(morgan("dev"));

// Request ID middleware (enterprise pattern)
app.use((req, res, next) => {
  const requestId = req.header("x-request-id") || uuid();
  res.setHeader("x-request-id", requestId);
  req.requestId = requestId;
  next();
});

const JWT_SECRET = "DEV_ONLY_SECRET_CHANGE_ME";

// In-memory users (training)
const users = [
  { id: "u1", email: "admin@company.com", password: "Admin@1234", role: "ADMIN", name: "Admin One" },
  { id: "u2", email: "staff@company.com", password: "Staff@1234", role: "STAFF", name: "Staff One" },
  { id: "u3", email: "client@gmail.com", password: "Client@1234", role: "CLIENT", name: "Client One" },
];

// In-memory domain data (simulate microservices)
const serviceA_metrics = { activeUsers: 128, errorsLastHour: 2 };
const serviceB_alerts = [{ id: "a1", severity: "low" }, { id: "a2", severity: "high" }];

function signToken(user) {
  // Simplified: embed role. Real systems: scopes, issuer, refresh tokens, etc.
  return jwt.sign(
    { sub: user.id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: "30m" }
  );
}

function authRequired(req, res, next) {
  const header = req.header("authorization") || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return res.status(401).json({ detail: "Missing bearer token", requestId: req.requestId });

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    return next();
  } catch (e) {
    return res.status(401).json({ detail: "Invalid/expired token", requestId: req.requestId });
  }
}

function requireRole(role) {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ detail: "Unauthorized", requestId: req.requestId });
    if (req.user.role !== role) return res.status(403).json({ detail: "Forbidden", requestId: req.requestId });
    next();
  };
}

app.get("/health", (req, res) => res.json({ ok: true, requestId: req.requestId }));

app.post("/auth/login", (req, res) => {
  const { email, password } = req.body || {};
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ detail: "Invalid credentials", requestId: req.requestId });

  const accessToken = signToken(user);
  const safeUser = { id: user.id, email: user.email, role: user.role, name: user.name };
  return res.json({ accessToken, user: safeUser, requestId: req.requestId });
});

app.get("/auth/me", authRequired, (req, res) => {
  const u = users.find(x => x.id === req.user.sub);
  if (!u) return res.status(404).json({ detail: "User not found", requestId: req.requestId });
  return res.json({ id: u.id, email: u.email, role: u.role, name: u.name, requestId: req.requestId });
});

app.get("/users", authRequired, (req, res) => {
  const safe = users.map(u => ({ id: u.id, email: u.email, role: u.role, name: u.name }));
  res.json({ items: safe, requestId: req.requestId });
});

app.post("/users", authRequired, requireRole("ADMIN"), (req, res) => {
  const { email, role, name } = req.body || {};
  if (!email || !role || !name) return res.status(400).json({ detail: "email, role, name required", requestId: req.requestId });
  if (users.some(u => u.email === email)) return res.status(409).json({ detail: "Email already exists", requestId: req.requestId });
  const newUser = { id: uuid(), email, role, name, password: "TEMP_PASSWORD" };
  users.push(newUser);
  res.status(201).json({ id: newUser.id, email, role, name, requestId: req.requestId });
});

// BFF aggregation endpoint (UI gets exactly what it needs)
app.get("/dashboard", authRequired, (req, res) => {
  const response = {
    widgets: {
      metrics: serviceA_metrics,
      alerts: {
        total: serviceB_alerts.length,
        high: serviceB_alerts.filter(a => a.severity === "high").length
      }
    },
    requestId: req.requestId
  };
  res.json(response);
});

const port = 8080;
app.listen(port, () => {
  console.log(`BFF running on http://localhost:${port}`);
});
