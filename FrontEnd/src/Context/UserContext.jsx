import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({ id: 1, username: 'uno' });
{/*Se aplica valor 1 para poder añadir al carrito de manera temporal*/}
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
