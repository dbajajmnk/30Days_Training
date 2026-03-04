import { http } from "../../../shared/api/http";
import type { LoginResponse } from "../types";

export async function login(email: string, password: string): Promise<LoginResponse> {
  const res = await http.post("/auth/login", { email, password });
  return res.data as LoginResponse;
}

export async function me() {
  const res = await http.get("/auth/me");
  return res.data;
}
