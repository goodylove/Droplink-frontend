import API from "@/controller/aixosInstance";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await API.get("/artist/current-user");
      return response.data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
  });

  return {
    data,
    isLoading,
    isError,
    error,
  };
};
