export const Navbar: React.FC = () => {
  return (
    <nav className="h-16 flex items-center justify-around bg-[#1A1A1A] text-white border-b-2 border-[#262626]">
      <div className=" font-semibold text-2xl">Properties</div>
      <div className="flex space-x-4 text-sm font-light">
        <a href="#" className="hover:text-gray-600">
          Home
        </a>
        <a href="#" className="hover:text-gray-600">
          About Us
        </a>
        <a href="#" className="hover:text-gray-600">
          Properties
        </a>
        <a href="#" className="hover:text-gray-600">
          Services
        </a>
        <a href="#" className="hover:text-gray-600">
          Connect Us
        </a>
      </div>
      <div>contact us</div>
    </nav>
  );
};
