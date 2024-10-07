import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]); // Storing users who have signed up

  // Signup function: Adds the user to the 'users' array
  const signup = ({ name, email, password }) => {
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      throw new Error("User already exists!");
    }
    const newUser = { name, email, password };
    setUsers([...users, newUser]);
    setUser(newUser);
  };

  // Login function: Verifies if user exists
  const login = ({ email, password }) => {
    const existingUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (!existingUser) {
      throw new Error("Invalid login. Please sign up first.");
    }
    setUser(existingUser);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
