import { useEffect } from "react";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
import { useAuth } from "./utils/authContext";

function App() {
  const { setUser } = useAuth();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  useEffect(() => {
    // Fetch user data from the backend when the app loads
    console.log(`we are fetching on ${BACKEND_URL}/api/current-user`);
    fetch(`${BACKEND_URL}/api/current-user`, { credentials: "include" })
      .then((response) => response.json())
      .then((data) => {
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
          setUser(data.user)
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
