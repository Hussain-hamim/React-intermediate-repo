import useAuth from "./useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />; // this navigate component instead of navigate faction

  return <Outlet />;
};

export default PrivateRoutes;
