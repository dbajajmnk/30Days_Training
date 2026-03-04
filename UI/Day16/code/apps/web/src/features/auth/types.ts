export type Role = "ADMIN" | "CLIENT" | "STAFF";

export type User = {
  id: string;
  email: string;
  role: Role;
  name: string;
};

export type LoginResponse = {
  accessToken: string;
  user: User;
  requestId?: string;
};
