import { JSX } from "react";

export function SidebarItem({
  icon,
  text,
  isOpen,
  onClick,
}: {
  icon: JSX.Element;
  text: string;
  isOpen: boolean;
  onClick?: () => void; 
}) {
  return (
    <div
      className="flex items-center space-x-3 hover:border-r border-neutral-600 p-2 hover:text-neutral-400 cursor-pointer"
      onClick={onClick} 
    >
      {icon}
      {isOpen && <span className="text-sm">{text}</span>}
    </div>
  );
}
