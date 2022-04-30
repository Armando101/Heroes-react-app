import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

export const PublicRouter = ({ children }) => {
  const {
    user: { logged },
  } = useContext(AuthContext);
  return logged ? <Navigate to={"/marvel"} /> : children;
};
