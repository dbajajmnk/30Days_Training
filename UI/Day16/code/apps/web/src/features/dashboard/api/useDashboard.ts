import { useQuery } from "@tanstack/react-query";
import { http } from "../../../shared/api/http";

export function useDashboard() {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: async () => (await http.get("/dashboard")).data,
    staleTime: 30_000,
  });
}
