import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const StatsHero = () => {
  return (
    <div className="bg-black border border-neutral-900 py-2 font-poppins">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
          {[
            { value: "10k", label: "Easy booking" },
            { value: "20+", label: "Rent made easy" },
            { value: "10+", label: "Quality apartments" },
            { value: "50+", label: "Warranty" },
            { value: "10+", label: "Clean" },
          ].map((stat, index) => (
            <div
              key={index}
              className="w-full bg-neutral-950 border border-neutral-900 p-6 rounded-lg relative"
            >
              <div className="absolute top-3 right-3 text-neutral-400">
                <FaArrowUpRightFromSquare className="text-sm" />
              </div>
              <h2 className="text-2xl font-bold text-white">{stat.value}</h2>
              <p className="text-neutral-300 text-xs mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsHero;
