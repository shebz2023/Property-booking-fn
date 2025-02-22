import { createBrowserRouter } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { RootLayout } from "./layouts/RootLayout";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/Auth/Login";
import RenterDashboard from "./pages/user/MyBookings";
import { UserLayout } from "./layouts/User.layouts";
import PropertiesPage from "./pages/PropertiesPage";
import Profile from "./pages/user/Profile";
import MyProperties from "./pages/user/MyProperties";
import MyBookings from "./pages/user/MyBookings";
import Dashboard from "./pages/user/Dashboard";
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
      { index: true, element: <Dashboard /> },
      { path: "Properties", element: <MyProperties /> },
      { path: "Bookings", element: <MyBookings /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);
