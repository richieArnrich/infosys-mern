import React, { useContext } from "react";

//create a context
// tell the component that there is some data to be passed
export const UserContext = React.createContext();

// Provide the context : provide the data
// this is the top level component that will provide the data
// to all the components below it
export const UserProvider = ({ children }) => {
  const user = {
    username: "John",
    age: 30,
  };
  //   user object must be provided to all the underlying components
  return (
    // Wrap the Provider around the context()
    <UserContext.Provider value={user}>{children}</UserContext.Provider>
  );
};

// export the context
export const useUser = () => {
  return useContext(UserContext);
};
