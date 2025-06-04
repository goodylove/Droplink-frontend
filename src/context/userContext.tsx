import { getCurrentUser, LoginOut } from "@/controller/auth";
import { UserContextType } from "@/types/interface";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { createContext } from "react";
import { toast } from "react-toastify";

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // const { data: user, isLoading, isError } = useCurrentUser();
  const route = useRouter();

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await getCurrentUser();
      return response.data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
  });

  async function handleLogout() {
    try {
      const data = await LoginOut();
      if (data) {
        toast.success("You have successfully logout");
        route.push("/");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  }

  return (
    <UserContext.Provider value={{ user, isLoading, isError, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};
