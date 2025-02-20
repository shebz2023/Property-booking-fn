import { createBrowserRouter } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { RootLayout } from "./layouts/RootLayout";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/Auth/Login";
import RenterDashboard from "./pages/user/RenterDashboard";
import { UserLayout } from "./layouts/user.layouts";
import HostDashboard from "./pages/user/HostDashboard";
import PropertiesPage from "./pages/PropertiesPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "*", element: <NotFoundPage /> },
      { path: "/Properties", element: <PropertiesPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      { index: true, element: <RenterDashboard /> },
      { path: "host", element: <HostDashboard /> },
    ],
  },
]);
