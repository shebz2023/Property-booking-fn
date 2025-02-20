import featuredimage from "../assets/apartment.jpg";
import PropertyCard from "./PropertyCard";
const FeaturedProperties = () => {
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
    <div className="bg-black text-white py-12 font-poppins">
      <div className="pl-20 max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <h2 className="text-3xl font-medium text-left mb-4">
            Featured Properties
          </h2>
          <button className="bg-black border text-white text-xs border-neutral-800 py-2 px-4 rounded-lg hover:bg-neutral-950 hover:text-neutral-300 transition duration-300">
            View All Properties
          </button>
        </div>
        <p className="text-left text-sm text-neutral-400 mb-8 leading-relaxed">
          Explore our handpicked selection of featured properties.
          <br /> Each listing offers a glimpse into exceptional homes and
          investments available at affordable prices for you.
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
