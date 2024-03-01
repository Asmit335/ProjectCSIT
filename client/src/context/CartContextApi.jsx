import React, { createContext, useState } from "react";

// Create a context
export const CartContext = createContext();

// Provider component
const CartProviderContext = ({ children }) => {
  // Define initial value for the context
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Perform login logic, set isAuthenticated to true
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Perform logout logic, set isAuthenticated to false
    setIsAuthenticated(false);
  };

  return (
    // Provide the context value to its children
    <CartContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProviderContext;
