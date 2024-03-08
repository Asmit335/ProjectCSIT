import React, { createContext, useState } from "react";

// Create a context
export const CartContext = createContext();

// Provider component
const CartProviderContext = ({ children }) => {
  // Define initial values for the context
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");

  const login = (userEmail) => {
    // Perform login logic, set isAuthenticated to true
    setIsAuthenticated(true);
    // Set the user's email
    setEmail(userEmail);
  };

  const logout = () => {
    // Perform logout logic, set isAuthenticated to false
    setIsAuthenticated(false);
    // Reset the user's email
    setEmail("");
  };

  return (
    // Provide the context value to its children
    <CartContext.Provider value={{ isAuthenticated, email, login, logout }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProviderContext;
