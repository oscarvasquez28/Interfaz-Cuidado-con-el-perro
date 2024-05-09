import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({ id: null, username: '' });

  const setUser = (id, username) => {
    setUserData({ id, username });
  };

  return (
    <UserContext.Provider value={{ userData, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
