import { createBrowserRouter } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { UserLayout } from "./layouts/user.layouts";
import { RootLayout } from "./layouts/RootLayout";
import { LandingPage } from "./pages/LandingPage";
import UserDashboard from "./pages/user/UserDashboard";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  {
    path: "/user",
    element: <UserLayout />,
    children: [{ index: true, element: <UserDashboard /> }],
  },
]);
