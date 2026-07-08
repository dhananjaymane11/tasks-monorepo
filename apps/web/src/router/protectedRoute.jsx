import { Navigate, Outlet } from "react-router";

import { useAuth } from "@packages/shared/contexts/auth";

export default function ProtectedRoute() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // Render child routes if authenticated
  return <Outlet />;
}
