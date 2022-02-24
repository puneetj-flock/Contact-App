import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";

const ProtectedRouteAuth = () => {
  const authenticate = useAppSelector((state) => state.userAuth.authenticate);
  return !authenticate ? <Outlet /> : <Navigate to="/" replace={true} />;
};

export { ProtectedRouteAuth };
