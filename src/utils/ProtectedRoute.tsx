import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const ProtectedRoute = () => {
  const { user, loading } = useAuthStore();

  if (loading) return <div>Loading...</div>;

  return user ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
