import { Navigate, Outlet } from "react-router";

import { useAuth } from "@packages/shared/contexts/auth";

export default function GuestRoute() {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
