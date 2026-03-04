import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { http } from "../../../shared/api/http";

export type UserItem = { id: string; email: string; role: string; name: string };

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await http.get("/users");
      return res.data.items as UserItem[];
    },
    staleTime: 20_000,
  });
}

export function useCreateUser() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (payload: { email: string; role: string; name: string }) => (await http.post("/users", payload)).data,
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ["users"] });
    },
  });
}
