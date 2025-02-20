import { Link } from "react-router-dom";
import BottomSection from "../components/BottomSection";
import bgimage from "../assets/topography.svg";
import { CiSearch, CiCalendar } from "react-icons/ci";
import { FaChevronCircleDown } from "react-icons/fa";
import PropertyCard from "../components/PropertyCard";
import featuredimage from "../assets/apartment.jpg";

export default function PropertiesPage() {
  const properties = [
    {
      title: "Convention center",
      description:
        "This sleek, modern house features clean lines and an open-concept floor plan",
      features: ["4-Bedroom", "3-Bathroom", "Villa"],
      price: "$550,000",
      image: featuredimage,
    },
    {
      title: "Ladisona blue",
      description:
        "This charming Victorian home is a blend of intricate architecture ",
      features: ["2-Bedroom", "2-Bathroom"],
      price: "$550,000",
      image: featuredimage,
    },
    {
      title: "Rustic Retreat Cottage",
      description:
        "loremIt is a long established fact that a reader will be distracted ",
      features: ["3-Bedroom", "2.5-Bathroom"],
      price: "$550,000",
      image: featuredimage,
    },
  ];
  return (
    <div className="bg-neutral-950 h-screen">
      <section className="bg-black">
        <div
          className="ml-20 pt-20 pl-10 px-4 h-1/3 "
          style={{ backgroundImage: `url(${bgimage})` }}
        >
          <h2 className="text-3xl text-white font-medium text-left mb-4">
            Book Your Next Stay
          </h2>

          <p className="text-left text-xs text-neutral-400 mb-8 leading-relaxed">
            Find your perfect property with ease! Whether you're buying,
            selling, or renting, our platform connects you with the best
            <br /> real estate opportunities. Start your journey today and book
            your next home with just a few clicks. Your dream property is
            waiting—don’t miss out!
          </p>
        </div>
        <div className="h-16 w-full flex justify-center">
          <div className="bg-black h-full w-3/4 border border-neutral-800 rounded-lg flex items-center justify-between px-10">
            <p className="text-neutral-600 text-md font-poppins">
              Search For Properties ...
            </p>
            <button className="bg-purple-950 border text-white text-xs border-neutral-800 py-2 px-4 rounded-lg hover:bg-purple-800 hover:text-neutral-300 transition duration-300 flex items-center">
              <Link to="/properties" className="flex items-center">
                <CiSearch className="mr-2" /> Go
              </Link>
            </button>
          </div>
        </div>
        <div
          className="h-20 w-full bg-neutral-950 flex items-center justify-center gap-3"
          style={{ backgroundImage: `url(${bgimage})` }}
        >
          <div className="h-3/5 w-1/5 text-neutral-600 bg-black rounded-xl flex items-center">
            <CiCalendar size={28} className="ml-3" />
            <div className="flex justify-between w-full p-3 border-l border-neutral-800">
              <p>Upload Date</p>
              <FaChevronCircleDown className="text-neutral-300" />
            </div>
          </div>
          <div className="h-3/5 w-1/5 text-neutral-600 bg-black rounded-xl flex items-center">
            <CiCalendar size={28} className="ml-3" />
            <div className="flex justify-between w-full p-3 border-l border-neutral-800">
              <p>Number Rooms</p>
              <FaChevronCircleDown className="text-neutral-300" />
            </div>
          </div>
          <div className="h-3/5 w-1/5 text-neutral-600 bg-black rounded-xl flex items-center">
            <CiCalendar size={28} className="ml-3" />
            <div className="flex justify-between w-full p-3 border-l border-neutral-800">
              <p>Price</p>
              <FaChevronCircleDown className="text-neutral-300" />
            </div>
          </div>
        </div>
        <div className="p-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      </section>
      <BottomSection />
    </div>
  );
}
