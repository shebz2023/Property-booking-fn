import { FaSignOutAlt } from "react-icons/fa";
import { toast } from "react-toastify";

export default function LogoutButton() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const handleLogout = () => {
    fetch(`${BACKEND_URL}/api/logout`, { credentials: "include" })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          localStorage.removeItem("user");
          window.location.href = "/login";
        }
      })
      .catch((error) => {
        toast.error("Error logging out:", error);
      });
  };
  return (
    <div>
      <button
        className="cursor-pointer flex items-center gap-2 border border-dashed border-red-700 p-2 rounded-lg hover:bg-neutral-950 hover:text-neutral-400 duration-300"
        onClick={handleLogout}
      >
        Logout
        <FaSignOutAlt />
      </button>
    </div>
  );
}
