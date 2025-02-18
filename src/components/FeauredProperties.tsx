import featuredimage from "../assets/apartment.jpg";
import stars from "../assets/stars design.png";
const FeaturedProperties = () => {
  const properties = [
    {
      title: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful neighborhood.",
      features: ["4-Bedroom", "3-Bathroom", "Villa"],
      price: "$550,000",
      image: featuredimage,
    },
    {
      title: "Metropolitan Haven",
      description:
        "A chic and fully-furnished 2-bedroom apartment with permanent city views.",
      features: ["2-Bedroom", "2-Bathroom"],
      price: "$550,000",
      image: featuredimage,
    },
    {
      title: "Rustic Retreat Cottage",
      description:
        "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community.",
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
        <p className="text-left text-sm text-neutral-400 mb-8">
          Explore our handpicked selection of featured properties.
          <br /> Each listing offers a glimpse into exceptional homes and
          investments available at affordable prices for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <div
              key={index}
              className="bg-black border border-neutral-900 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={property.image}
                alt={property.title}
                className="p-5 w-full h-48 object-cover rounded-3xl"
              />
              <div className="p-6">
                <h3 className="text-xl  mb-2">{property.title}</h3>
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
                    <p className="text-xl text-white mb-4">{property.price}</p>
                  </div>
                  <button className="cursor-pointer w-fit text-xs bg-purple-950 text-white px-4 rounded-lg hover:bg-purple-800 transition duration-300">
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
