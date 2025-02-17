const Hero = () => {
  return (
    <div className="bg-blue-50 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Book Your Dream Property ,Rent it now
        </h1>
        <p className="text-lg mb-8">
          Your journey to finding the perfect property begins here. Explore our
          listings to find the home that matches your dreams.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Learn More
          </button>
          <button className="bg-transparent border border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-500 hover:text-white">
            Browse Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
