const Stats = () => {
  return (
    <div className="py-12 font-poppins">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-neutral-950 border border-[#1A1A1A] p-5 rounded-lg">
            <h2 className="text-3xl font-bold">100+</h2>
            <p className="text-neutral-400 text-xs">Happy Customers</p>
          </div>
          <div className="bg-neutral-950 border border-[#1A1A1A] p-5 rounded-lg">
            <h2 className="text-3xl font-bold">200+</h2>
            <p className="text-neutral-400 text-xs">Properties For Clients</p>
          </div>
          <div className="bg-neutral-950 border border-[#1A1A1A] p-5 rounded-lg">
            <h2 className="text-3xl font-bold">2+</h2>
            <p className="text-neutral-400 text-xs">Years of Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
