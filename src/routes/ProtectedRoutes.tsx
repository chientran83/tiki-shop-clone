import { FC, ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

type Protected = {
  conditions: boolean;
  redirect: string;
  children: ReactNode;
};

const ProtectedRoutes: FC<Protected> = ({ conditions, redirect, children }) => {
  return conditions ? <Outlet/> : <Navigate to={redirect} />;
};
export default ProtectedRoutes;
