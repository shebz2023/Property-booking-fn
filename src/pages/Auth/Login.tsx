import bgImage from "../../assets/bg-grid-lighter.svg";
import leftimage from "../../assets/whitepeople.png";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div
      className=" justify-center items-center min-h-screen bg-black"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full h-screen flex">
        <div className="w-1/2  flex justify-center items-center">
          <div className="h-2/3  rounded-full">
            <img
              src={leftimage}
              alt=""
              className="size-full ml-28 object-cover rounded-full"
            />
          </div>
        </div>
        <div className="w-1/2 flex ml-20 items-center h-screen bg-gradient-to-l from-black to-transparent">
          <div className="w-full bg-black border border-neutral-900 max-w-md p-8 rounded-lg shadow-lg">
            <h3 className="text-lg font-Urbanist text-center text-white ">
              LOGIN TO CONTINUE
            </h3>
            <form >
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 mt-2 border border-neutral-900 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  placeholder="Enter your email"
                />
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-400"
                >
                  Password
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 mt-2 border border-neutral-900 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  placeholder="Enter your email"
                />
              </div>
              <p className="mb-4 text-xs">
                <Link to="" className=" text-neutral-400 hover:text-white">
                  Forgot password?
                </Link>
              </p>
              <button
                type="submit"
                className="w-full py-2 bg-black border border-neutral-600 text-white font-Urbanist rounded-md hover:bg-neutral-900 duration-300 cursor-pointer"
              >
                Login
              </button>
            </form>
            <p className="text-xs mt-4">
              <span className="text-white">Don't Have an account?</span>
              <Link to="" className="pl-3 text-blue-400 hover:text-blue-200 duration-300">
                Create One
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
