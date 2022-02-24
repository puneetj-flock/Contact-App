
import { useAppSelector } from "../../redux/hook";
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRouteHome = () => {
  const authenticate = useAppSelector((state) => state.userAuth.authenticate);

  return authenticate === true ? <Outlet /> : <Navigate to="/login" />;
};

export { ProtectedRouteHome };

