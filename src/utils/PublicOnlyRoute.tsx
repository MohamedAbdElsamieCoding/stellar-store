import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const PublicOnlyRoute = () => {
  const { user, loading } = useAuthStore();

  if (loading) return null;

  return user ? <Navigate to="/" replace /> : <Outlet />;
};

export default PublicOnlyRoute;
