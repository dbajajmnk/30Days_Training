# BFF (Backend For Frontend) – Training Server

Runs on: http://localhost:8080

## Endpoints

### POST /auth/login
Body:
```json
{ "email": "admin@company.com", "password": "Admin@1234" }
```
Returns:
```json
{ "accessToken": "…", "user": { "id": "u1", "email": "...", "role": "ADMIN", "name": "..." } }
```

### GET /auth/me
Requires: Authorization: Bearer <token>

### GET /users
Requires: Authorization: Bearer <token>

### POST /users (ADMIN only)
Requires: Authorization: Bearer <token>

### GET /dashboard
Aggregated response for dashboard widgets (BFF pattern).

## Notes
- This is intentionally simplified for training (in-memory data).
- Do NOT use this auth approach as-is in production.
