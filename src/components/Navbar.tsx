export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-lg font-semibold">Properties</div>
          <div className="flex space-x-4">
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
        </div>
      </div>
    </nav>
  );
};
