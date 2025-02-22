import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../utils/authContext";
import { useNavigate } from "react-router-dom";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const handleNavigation = () => {
    if (user) {
      if (user.role === "HOST") {
        navigate("/user/host");
      } else if (user.role === "RENTER") {
        navigate("/user");
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full font-poppins h-16 flex items-center justify-around text-white border-b-2 border-[#262626] z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="text-2xl">
        S<span className="text-purple-600">h</span>ebz
      </div>
      <div className="flex space-x-4 text-xs font-light">
        <a
          href="/"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          Home
        </a>
        <a
          href="/"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          About Us
        </a>
        <a
          href="/properties"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          Properties
        </a>
        <a
          href="/"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          Services
        </a>
        <a
          href="/"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          Connect Us
        </a>
      </div>
      {user ? (
        <div
          className="cursor-pointer flex items-center space-x-2 hover:text-neutral-400 duration-300"
          onClick={handleNavigation}
        >
          <span className="font-Urbanist text-xs">{user.name}</span>{" "}
          <FaUserCircle size={26} className="text-purple-600" />
        </div>
      ) : (
        <a href="/login" className="border-b border-purple-600 text-sm">
          Login
        </a>
      )}
    </nav>
  );
};
