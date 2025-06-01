import { useCurrentUser } from "@/hooks/useCurrentUser";
import { UserContextType } from "@/types/interface";
import React, { createContext } from "react";

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data: user, isLoading, isError } = useCurrentUser();
  return (
    <UserContext.Provider value={{ user, isLoading, isError }}>
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
