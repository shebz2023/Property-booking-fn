import { useEffect } from "react";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
import { useAuth } from "./utils/authContext";
import { SignJWT } from "jose";

function App() {
  const { setUser } = useAuth();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const SECRET_KEY = import.meta.env.VITE_SECRET || 'secret';

  useEffect(() => {
    // Fetch user data from the backend when the app loads
    fetch(`${BACKEND_URL}/api/current-user`, { credentials: "include" })
      .then((response) => response.json())
      .then(async(data) => {
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
          setUser(data.user);
          const token =  new SignJWT({ id: data.user.id })
          .setProtectedHeader({ alg: "HS256" })
          .setIssuedAt()
          .setExpirationTime("1d")
          .sign(new TextEncoder().encode(SECRET_KEY));
        
        localStorage.setItem("token", await token);
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
