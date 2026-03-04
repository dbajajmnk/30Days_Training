# Enterprise Frontend Architecture – Single Project (Hands-on Module)

This repo is a **single end-to-end project** for the module:

- Enterprise frontend architecture overview
- Frontend role in large-scale systems
- UI ↔ API interaction patterns (REST, BFF, GraphQL overview, realtime overview)
- Frontend responsibilities (auth, state, error handling, performance)

It includes:
- **apps/web**: React + TypeScript frontend (feature-based architecture)
- **apps/bff**: Node.js Express "BFF" server (JWT-like auth + REST endpoints)

> This is a training project: security/token logic is simplified for learning.

---

## What / Why / When / How (Quick)

### What
A realistic **SaaS dashboard** with roles (**ADMIN, CLIENT, STAFF**), protected routes, API client layer,
server-state caching, error boundaries, request IDs, and a BFF layer.

### Why
Enterprise frontends fail when they have:
- UI + business rules mixed everywhere
- random API calls with no standard error handling
- inconsistent auth handling
- no clear ownership (folders by files, not by features)

This project demonstrates a **repeatable architecture**.

### When
Use this structure when you have:
- multiple teams/features
- multiple backend services
- auth + role-based UI
- heavy API usage (lists, dashboards)

### How (Mental Model)
```
User → Router → Feature Module → (UI + State) → API Client → BFF → Services/DB
```

---

## Prerequisites
- Node.js 18+ (recommended)
- npm 9+ (or use pnpm/yarn if you prefer)

---

## Setup & Run (Local)

### 1) Install dependencies
From repo root:
```bash
npm install
```

### 2) Run BFF + Web
```bash
npm run dev
```

- Web: http://localhost:5173
- BFF: http://localhost:8080
- API docs: open Swagger-like notes in `apps/bff/README.md`

---

## Demo Accounts
Use these credentials on Login screen:

- ADMIN: `admin@company.com` / `Admin@1234`
- STAFF: `staff@company.com` / `Staff@1234`
- CLIENT: `client@gmail.com` / `Client@1234`

---

## Hands-on Labs (Step-by-step)

### Lab 1 — Architecture Mapping
1. Open `apps/web/src/app/AppRouter.tsx`
2. Trace: Router → ProtectedRoute → Feature pages
3. Write the flow on paper as boxes + arrows.

✅ Expected: You can explain which layer owns what.

### Lab 2 — API Client + Error Standard
1. Open `apps/web/src/shared/api/http.ts`
2. See requestId header + error normalization
3. Trigger a 401 (logout then refresh protected route)

✅ Expected: Error toast shows a consistent message, and user is redirected.

### Lab 3 — Server State (React Query)
1. Open `apps/web/src/features/users/api/useUsers.ts`
2. See caching + refetch behavior
3. Add a "Refresh" button calling `refetch()`

✅ Expected: You can explain server-state vs global-state.

### Lab 4 — Role-Based UI
1. Open `apps/web/src/features/dashboard/pages/DashboardPage.tsx`
2. Add a new ADMIN-only widget
3. Verify it disappears for STAFF/CLIENT.

✅ Expected: You can implement role checks consistently.

### Lab 5 — BFF Aggregation
1. Open `apps/bff/src/routes/dashboard.ts`
2. It aggregates 2 internal sources into 1 response
3. Add another derived field (e.g., `alertsCount`)

✅ Expected: You understand why BFF reduces frontend complexity.

### Lab 6 — Performance: Lazy Loading
1. Open `apps/web/src/app/AppRouter.tsx`
2. Notice lazy imports for routes
3. Add another lazy-loaded route

✅ Expected: You can explain code-splitting and why it matters.

---

## Production Notes (What to do in real systems)
- Use real JWT + refresh tokens and httpOnly cookies
- Add CSRF protection when using cookies
- Add centralized logging (Sentry) and metrics
- Use a typed API contract (OpenAPI / GraphQL schema)
- Replace in-memory BFF store with DB

---

## Folder Structure (Why it looks like this)
- `features/*`: domain/feature ownership (Users, Auth, Dashboard)
- `shared/*`: reusable components, api client, utilities
- `app/*`: app shell (router, providers)
