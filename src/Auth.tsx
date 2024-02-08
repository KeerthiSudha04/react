// import React, { ReactNode } from 'react';
// import { createContext, useState, useContext } from 'react';

// interface User {
//   username: string;
// }

// interface AuthContextType {
//   user: User | null;
//   login: (username: string, password: string) => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// interface AuthProviderProps {
//   children: ReactNode; // Ensure children are provided
// }

// export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);

//   const login = (username: string, password: string) => {
//     // Authenticate user using authentication service
//     // Set user state if authentication is successful
//     setUser({ username });
//   };

//   const logout = () => {
//     // Clear user session
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children} {/* Provide children here */}
//     </AuthContext.Provider>
//   );
// };
// App.tsx

import React, { useState } from "react";
import AuthComponent from "./components/AuthComponent";
import { User } from "./mockBackend";

const Auth: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (user: User) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <AuthComponent onLogin={handleLogin} />
      )}
    </div>
  );
};

export default Auth;
