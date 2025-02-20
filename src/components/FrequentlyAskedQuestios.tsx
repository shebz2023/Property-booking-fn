import profile from "../assets/jondoe.jpg";
import profiletwo from "../assets/secondjondoe.jpg";
const FrequentlyAskedQuestions = () => {
  const properties = [
    {
      title: "wow!!",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful neighborhood.",
      features: "kimronko",
      name: "james",
      image: profile,
    },
    {
      title: "Affordable",
      description:
        "A chic and fully-furnished 2-bedroom apartment with permanent city views.",
      features: "san-fransico",
      name: "palmer",
      image: profiletwo,
    },
    {
      title: "Here we go",
      description:
        "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community.",
      features: "kigali",
      name: "pep",
      image: profile,
    },
  ];

  return (
    <div className="bg-black text-white py-12 font-poppins">
      <div className="pl-20 max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <h2 className="text-3xl font-medium text-left mb-4">
            Frequently Asked Questions{" "}
          </h2>
          <button className="bg-black border text-white text-xs border-neutral-800 py-2 px-4 rounded-lg hover:bg-neutral-950 hover:text-neutral-300 transition duration-300">
            View All Testimonials
          </button>
        </div>
        <p className="text-left text-xs text-neutral-400 mb-8">
          Lorem ipsum dolor sit. Lorem ipsum dolor sit amet dolor sit amet
          consectetur, adipisicing elit. Aspernatur, unde.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <div
              key={index}
              className="bg-black border border-neutral-900 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-6">{property.title}</h3>
                <p className="text-neutral-400 text-sm mb-4">
                  {property.description}
                </p>
              </div>
              <button className="ml-6 mb-6 p-4 rounded-2xl border text-xs border-neutral-900 cursor-pointer hover:text-neutral-400 duration-200">ReadMore</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
