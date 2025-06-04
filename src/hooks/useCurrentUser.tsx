import { useUserContext } from "@/context/userContext";
import { getCurrentUser } from "@/controller/auth";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
  // const { isAuthenticated } = useUserContext();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await getCurrentUser();
      return response.data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
    // enabled: !!isAuthenticated
  });

  return {
    data,
    isLoading,
    isError,
    error,
  };
};
