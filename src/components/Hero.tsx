import houseImage from "../assets/house.png";
import Stats from "./Stats";

const Hero = () => {
  return (
    <div
      className="w-screen flex pt-20 text-white font-Urbanist"
    >
      <div className="w-2/3  ml-8   flex flex-col justify-center pl-20 ">
        <h1 className="text-3xl font-bold mb-4 text-left">
          Book Your Dream Property <br />
          Rent it now wherever you are
        </h1>
        <p className="text-sm mb-8 text-neutral-400 text-left">
          Your journey to finding the perfect property begins here. Explore our
          listings to find the home that matches your dreams.
        </p>
        <div className="space-x-4 text-left text-sm">
          <button className="cursor-pointer  bg-purple-950 text-white px-6 py-2 rounded-lg hover:bg-purple-800  duration-300 hover:text-neutral-400">
            Learn More
          </button>
          <button className="cursor-pointer bg-transparent border border-[#1A1A1A] px-6 py-2 rounded-lg hover:bg-neutral-950 hover:text-white">
            Browse Properties
          </button>
        </div>
        <Stats />
      </div>
      <div className="h-full w-1/2">
        <img
          src={houseImage}
          alt="Descriptive Alt Text"
          className="w-full h-full rounded-lg object-cover"
        />
      </div>{" "}
    </div>
  );
};

export default Hero;
