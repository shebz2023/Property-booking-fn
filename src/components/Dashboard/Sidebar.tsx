import {  useState } from "react";
import {
  FaHome,
  FaCalendarAlt,
  FaUser,
  FaCog,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import LogoutButton from "./Logout";
import { SidebarItem } from "./SideBarItem";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="relative font-Urbanist">
      {/* Toggle Button (Mobile) */}
      <button
        className="absolute top-4 left-4 md:hidden p-2 rounded-md bg-black text-white"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`bg-black text-white h-screen p-5 space-y-6 transform transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <FaHome size={30} />
          {isOpen && (
            <span className="text-lg font-bold">
              S<span className="text-purple-600">h</span>ebz
            </span>
          )}
        </a>

        {/* Nav Links */}
        <nav className="space-y-6">
          <SidebarItem icon={<FaHome />} text="Home" isOpen={isOpen} to="/" />
          <SidebarItem
            icon={<FaCalendarAlt />}
            text="Bookings"
            isOpen={isOpen}
            to="bookings" 
          />
          <SidebarItem
            icon={<FaCalendarAlt />}
            text="Properties"
            isOpen={isOpen}
            to="properties" 
          />
          <SidebarItem icon={<FaUser />} text="Profile" isOpen={isOpen} to="profile" />
          <SidebarItem icon={<FaCog />} text="Settings" isOpen={isOpen} to="profile" />
          <LogoutButton />
        </nav>
      </div>
    </div>
  );
}
