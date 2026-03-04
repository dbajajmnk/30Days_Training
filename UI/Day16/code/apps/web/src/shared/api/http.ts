import axios, { AxiosError } from "axios";
import { v4 as uuid } from "./uuid";
import { toast } from "../ui/Toast";

const BFF_BASE = "http://localhost:8080";

export type ApiError = {
  status: number;
  detail: string;
  requestId?: string;
};

export const http = axios.create({
  baseURL: BFF_BASE,
  timeout: 10_000,
});

http.interceptors.request.use((config) => {
  config.headers = config.headers ?? {};
  config.headers["x-request-id"] = uuid();
  const token = localStorage.getItem("accessToken");
  if (token) config.headers["authorization"] = `Bearer ${token}`;
  return config;
});

http.interceptors.response.use(
  (res) => res,
  (err: AxiosError<any>) => {
    const status = err.response?.status ?? 0;
    const data = err.response?.data ?? {};
    const apiErr: ApiError = {
      status,
      detail: data.detail || err.message || "Unknown error",
      requestId: data.requestId,
    };

    // Normalize errors (enterprise pattern)
    if (status === 401) {
      localStorage.removeItem("accessToken");
      toast(`Unauthorized. Please login again. (req: ${apiErr.requestId || "-"})`);
      window.location.href = "/login";
      return Promise.reject(apiErr);
    }

    toast(`Error ${status}: ${apiErr.detail} (req: ${apiErr.requestId || "-"})`);
    return Promise.reject(apiErr);
  }
);
