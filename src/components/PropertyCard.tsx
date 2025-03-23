import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

interface Property {
  title: string;
  description: string;
  price: string;
  location: string;
  id: string;
  image: string;
}

const PropertyCard = ({ property }: { property: Property }) => {
  return (
    <div className="relative cursor-pointer group h-full border border-neutral-900 rounded-lg shadow-lg overflow-hidden">
      <img
        src={property.image}
        alt={property.title}
        className="p-5 w-full h-1/2 object-cover rounded-3xl"
      />
      <div className="px-6 pb-6">
        <h3 className="text-md text-white font-Urbanist mb-2">{property.title}</h3>
        <p className="text-neutral-400 text-sm mb-4 max-h-6 min-h-6 overflow-hidden">{property.description}</p>

        <div className="flex flex-wrap gap-2 my-6">{property.location}</div>

        <div className="flex justify-between">
          <div className="flex flex-col">
            <h2 className="text-neutral-400 text-xs">Price</h2>
            <p className="text-md text-white">${property.price}</p>
          </div>
          <button className="h-10 cursor-pointer w-fit text-xs bg-purple-950 text-white px-4 rounded-lg hover:bg-purple-800 transition duration-300">
            View Property Details
          </button>
        </div>
      </div>

      {/* Hover Button */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
        <Link
          to="/book"
          className="bg-purple-950 text-white px-6 py-2 rounded-lg flex items-center hover:bg-purple-800 transition duration-300"
        >
          <FaShoppingCart className="mr-2" />
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
