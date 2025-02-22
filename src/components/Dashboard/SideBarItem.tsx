import { JSX } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export function SidebarItem({
  icon,
  text,
  isOpen,
  to,  
  onClick,
}: {
  icon: JSX.Element;
  text: string;
  isOpen: boolean;
  to: string;
  onClick?: () => void;
}) {
  return (
    <Link to={to}> {/* Wrap the item in a Link component */}
      <div
        className="flex items-center space-x-3 hover:border-r border-neutral-600 p-2 hover:text-neutral-400 cursor-pointer mb-4"
        onClick={onClick}
      >
        {icon}
        {isOpen && <span className="text-sm">{text}</span>}
      </div>
    </Link>
  );
}
