import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

export const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  saveLastPath(location);
  return user.logged ? children : <Navigate to="/login" />;
};

const saveLastPath = (location) => {
  const { pathname, search } = location;
  const lastPath = `${pathname}${search}`;
  localStorage.setItem("lastPath", lastPath);
};
