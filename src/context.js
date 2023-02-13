import React, { createContext, useState, useEffect } from 'react';

export const Context = createContext();

const UserProvider = ({ children }) => {
  const [state, setState] = useState(
    JSON.parse(sessionStorage.getItem('user'))
  );
  console.log('UserProvider  state', state);

  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(state));
    if (state === undefined) sessionStorage.removeItem('user');
  }, [state]);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export default UserProvider;
