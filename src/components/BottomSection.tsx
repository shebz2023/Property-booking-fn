import bgimage from "../assets/topography.svg";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPaperPlane,
} from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const BottomSection = () => {
  const items = ["House", "appartments", "Homes", "Rooms", "Settlements"];
  return (
    <div className="bg-neutral-950 pt-12 h-screen text-white font-poppins flex flex-col">
      <div
        className="ml-20 pl-10 px-4 h-1/3 "
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div className="flex justify-between">
          <h2 className="text-3xl font-medium text-left mb-4">
            Your Perfect Home is Just a click Away
          </h2>
          <button className="bg-purple-950 border text-white text-xs border-neutral-800 py-2 px-4 rounded-lg hover:bg-purple-800 hover:text-neutral-300 transition duration-300">
            View Properties
          </button>
        </div>
        <p className="text-left text-xs text-neutral-400 mb-8 leading-relaxed">
          Find your perfect property with ease! Whether you're buying, selling,
          or renting, our platform connects you with the best
          <br /> real estate opportunities. Start your journey today and book
          your next home with just a few clicks. Your dream property is
          waiting—don’t miss out!
        </p>
      </div>
      <div className="w-full bg-black border  border-neutral-800 h-2/3 flex">
        <div className="w-1/3 h-full flex justify-center items-center gap-2">
          <p className="text-lg">
            S<span className="text-purple-600">h</span>ebz
          </p>
          <div className="relative">
            {/* Icon inside the input */}
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
              <CiMail />
            </span>

            {/* Input Field */}
            <input
              type="email"
              placeholder="Email us"
              className="flex bg-transparent border p-2 rounded-lg text-sm border-neutral-800 text-neutral-400 focus:outline-none pl-8"
            ></input>

            {/* Right Button */}
            <button className="text-gray-300 hover:text-white absolute right-2 top-1/2 transform -translate-y-1/2">
              <FaPaperPlane size={22} />
            </button>
          </div>
        </div>
        <div className="w-2/3 h-full flex items-center gap-20">
          <ul className="">
            <p className="text-neutral-400 mb-4">Lorem</p>
            {items.map((item, index) => (
              <li key={index} className="mb-2 text-xs font-Urbanist">
                {item}
              </li>
            ))}
          </ul>
          <ul className="">
            <p className="text-neutral-400 mb-4">Lorem</p>
            {items.map((item, index) => (
              <li key={index} className="mb-2 text-xs font-Urbanist">
                {item}
              </li>
            ))}
          </ul>
          <ul className="">
            <p className="text-neutral-400 mb-4">Lorem</p>
            {items.map((item, index) => (
              <li key={index} className="mb-2 text-xs font-Urbanist">
                {item}
              </li>
            ))}
          </ul>
          <ul className="">
            <p className="text-neutral-400 mb-4">Lorem</p>
            {items.map((item, index) => (
              <li key={index} className="mb-2 text-xs font-Urbanist">
                {item}
              </li>
            ))}
          </ul>
          <ul className="">
            <p className="text-neutral-400 mb-4">Lorem</p>
            {items.map((item, index) => (
              <li key={index} className="mb-2 text-xs font-Urbanist">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex p-6 justify-between text-xs">
        <div className="ml-20 text-neutral-400">@2025 All rights reserved</div>
        <div className="flex gap-8 mr-20">
          <FaFacebook size={22} color="gray" />
          <FaInstagram size={22} color="gray" />
          <FaTwitter size={22} color="gray" />
          <FaYoutube size={22} color="gray" />
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
