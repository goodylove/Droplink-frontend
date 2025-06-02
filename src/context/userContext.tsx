import { LoginOut } from "@/controller/auth";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { UserContextType } from "@/types/interface";
import { useRouter } from "next/navigation";
import React, { createContext } from "react";
import { toast } from "react-toastify";

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data: user, isLoading, isError } = useCurrentUser();
  const route = useRouter();

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
