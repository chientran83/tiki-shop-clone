import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

type Protected = {
  conditions: boolean;
  redirect: string;
};

const ProtectedRoutes: FC<Protected> = ({ conditions, redirect }) => {
  return conditions ? <Outlet /> : <Navigate to={redirect} />;
};
export default ProtectedRoutes;
