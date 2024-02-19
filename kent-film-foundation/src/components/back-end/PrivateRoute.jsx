import React from "react";
import { Navigate } from "react-router-dom";
export const PrivateRoute = ({ children, isLoggedIn }) => {
  return <div>{isLoggedIn ? children : <Navigate to={"/login"} />} </div>;
};
