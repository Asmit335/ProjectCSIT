import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { CartContext } from "../context/CartContextApi";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(CartContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : Fallback ? (
          <Fallback />
        ) : null
      }
    />
  );
};

export default ProtectedRoute;
