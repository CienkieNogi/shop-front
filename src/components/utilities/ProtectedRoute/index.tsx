import React from "react";
import {  Navigate, Outlet } from "react-router-dom";

type Props = {
  isAllowed: boolean;
  redirectPath: string;
  children?: JSX.Element;
};
const ProtectedRoute: React.FC<Props> = ({
  isAllowed,
  redirectPath,
  children,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
