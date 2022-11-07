import React, { createContext } from 'react';

export const authContext = createContext();
const AuthProvider = ({ children }) => {
    
    const info={}
    return (
        <authContext.Provider value={info}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;