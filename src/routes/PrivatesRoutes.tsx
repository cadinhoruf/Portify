import { useContext } from "react";
import { UserContext } from "../providers/UserContext/UserContext";
import { Outlet, Navigate } from "react-router-dom";

export const PrivatesRoutes = () => {
  const { user } = useContext(UserContext);

  return user ? <Outlet /> : <Navigate to="/" />;
};
