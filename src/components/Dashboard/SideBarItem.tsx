import { JSX } from "react";

export function SidebarItem({
  icon,
  text,
  isOpen,
}: {
  icon: JSX.Element;
  text: string;
  isOpen: boolean;
}) {
  return (
    <div className="flex items-center space-x-3 hover:border-r border-neutral-600 p-2  hover:text-neutral-400 cursor-pointer">
      {icon}
      {isOpen && <span className="text-sm">{text}</span>}
    </div>
  );
}
