import { Navigate, createBrowserRouter } from "react-router";

import { Tasks, Login, Profile, Notes } from "@packages/shared/screens";
import GuestRoute from "./guestRoute";
import ProtectedRoute from "./protectedRoute";

const routers = createBrowserRouter([
  {
    element: <GuestRoute />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Tasks />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/notes",
        element: <Notes />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default routers;
