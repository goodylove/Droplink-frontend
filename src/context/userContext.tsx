import React, { createContext } from "react";

const UserContext = createContext(null);

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {}, []);

  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
