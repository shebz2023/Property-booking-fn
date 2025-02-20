import featuredimage from "../assets/apartment.jpg";
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
            <div
              key={index}
              className="h-full border border-neutral-900 rounded-lg shadow-lg "
            >
              <img
                src={property.image}
                alt={property.title}
                className="p-5 w-full h-1/2 object-cover rounded-3xl"
              />
              <div className="px-6">
                <h3 className="text-md font-Urbanist mb-2">{property.title}</h3>
                <p className="text-neutral-400 text-sm mb-4">
                  {property.description}
                </p>
                <div className="flex flex-wrap gap-2 my-6">
                  {property.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-black border border-neutral-700 text-white text-xs px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <div className="flex  flex-col">
                    <h2 className="text-neutral-400 text-xs">price</h2>
                    <p className="text-md text-white mb-4">{property.price}</p>
                  </div>
                  <button className="h-10 cursor-pointer w-fit text-xs bg-purple-950 text-white px-4 rounded-lg hover:bg-purple-800 transition duration-300">
                    View Property Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
